'use client';
import { useUser } from '@clerk/nextjs';

const ProfilePage = () => {
  const { user, isLoaded } = useUser();

  
  if (!isLoaded) return <p>Loading...</p>;


  if (!user) {
    return <p>User not found. Please sign in again.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 ml-[50px]">Your Profile</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default ProfilePage;
