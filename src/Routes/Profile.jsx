import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({
        displayName: user?.displayName || '',
        email: user?.email || '',
        password: ''
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({
            ...editedUser,
            [name]: value
        });
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const response = await fetch('http://localhost:5000/api/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(editedUser)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            setUser(data);
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };
    
    return (
        <div className="max-w-md mx-auto my-20 bg-blue-100 shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex justify-center mb-6">
                    <img 
                        className="w-32 h-32 rounded-full object-cover" 
                        src={user?.photoURL || 'https://via.placeholder.com/150'} 
                        alt="User Profile"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="displayName"
                            value={editedUser.displayName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    ) : (
                        <p className="text-gray-900">{user?.displayName || 'Anonymous User'}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">User Email</label>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={editedUser.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    ) : (
                        <p className="text-gray-900">{user?.email || 'No email provided'}</p>
                    )}
                </div>
                {isEditing && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                        <input
                            type="password"
                            name="password"
                            value={editedUser.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                )}
                <div className="flex justify-center mt-4">
                    {isEditing ? (
                        <>
                            <button 
                                onClick={handleSave}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                            >
                                Save
                            </button>
                            <button 
                                onClick={handleEditToggle}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button 
                            onClick={handleEditToggle}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
