import { useState, useEffect } from "react";
import Swal from "sweetalert2";


import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const ProfileofAdmin = () => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [hasExistingData, setHasExistingData] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user?.email) return;

        const res = await axiosSecure.get(`/allusersdata/${user.email}`);
        console.log("data is here", res.data)
        if (res.data) {
          setPhone(res.data.phone || "");
          setAddress(res.data.address || "");
          setHasExistingData(!!(res.data.phone || res.data.address));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user?.email, axiosSecure]);

  const handleUpdate = async () => {
    if (!phone.trim() || !address.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Information",
        text: "Please fill out all fields before saving.",
      });
      return;
    }

    try {
      const updatedData = { phone, address };
      const res = await axiosSecure.patch(`/usersupdate/${user.email}`, updatedData);

      if (res.data?.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated!",
          text: "Your profile has been updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
        setIsEditing(false);
        setHasExistingData(true);
      } else {
        Swal.fire({
          icon: "info",
          title: "No Changes",
          text: "You didn't make any changes to update.",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  if (!user) return <p>Loading...</p>;



  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">User Profile</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <img 
            src={user.photoURL || 'default-profile.png'} 
            alt="User Profile" 
            className="w-16 h-16 rounded-full object-cover mr-4" 
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.displayName}</h2>
            <p className="text-gray-600"> Role: Agent</p>
          </div>
        </div>

        
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Additional Information</h3>
          <p className="text-gray-700">Email: {user.email}</p>

          <div className="mb-2">
            <label className="text-gray-700">Phone:</label>
            {isEditing ? (
              <input
                type="text"
                className="border p-1 w-full rounded"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <p className="text-gray-700">{phone || "Not Provided"}</p>
            )}
          </div>

          <div className="mb-2">
            <label className="text-gray-700">Address:</label>
            {isEditing ? (
              <input
                type="text"
                className="border p-1 w-full rounded"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            ) : (
              <p className="text-gray-700">{address || "Not Provided"}</p>
            )}
          </div>

          <button
            onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))}
            className={`mt-2 px-4 py-1 text-white rounded ${isEditing ? "bg-green-500" : "bg-blue-500"}`}
          >
            {isEditing ? "Save" : hasExistingData ? "Edit" : "Add Info"}
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default ProfileofAdmin;
