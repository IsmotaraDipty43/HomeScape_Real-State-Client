import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const State = () => {
    const [data, setData] = useState(null);
    const axiossecure = useAxiosSecure();

    // Fetch data from the backend API using axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiossecure.get('/totalcount');
                setData(response.data);  // Store the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Return a loading indicator if data is not loaded yet
    if (!data) {
        return <div>Loading...</div>;
    }

    // Prepare the data for Recharts
    const chartData = [
        { name: 'User Count', value: data.userCount },
        { name: 'Bought Count', value: data.boughtCount },
        { name: 'Total Income', value: data.totalIncome },
    ];

    return (
        <div>
            <h2 className="text-center text-2xl font-semibold mb-4">Showcase Overall Statistics</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    {/* Adding CartesianGrid with customized styling */}
                    <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />
                    
                    {/* X and Y Axes with customized styles */}
                    <XAxis dataKey="name" stroke="#8884d8" fontSize={14} />
                    <YAxis stroke="#8884d8" fontSize={14} />
                    
                    {/* Tooltip with styling */}
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                        }}
                        itemStyle={{
                            color: '#333',
                        }}
                    />
                    
                    {/* Adding a legend with customized style */}
                    <Legend
                        wrapperStyle={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                        }}
                    />
                    
                    {/* Bars with different colors */}
                    <Bar dataKey="value" fill="#82ca9d" barSize={40} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default State;
