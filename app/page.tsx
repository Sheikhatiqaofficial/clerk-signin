import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import ProfilePage from './profile/page';  


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <SignedOut>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App!</h1>
        <p className="mb-4 text-lg">Please sign in to access your profile and features.</p>

        
        <div className="flex justify-center">
          <SignInButton>
            <div className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
            Sign In
            </div>
            
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="mb-4 text-lg">You are signed in. Here is your profile:</p>
        
        {/* Render ProfilePage when user is signed in */}
        <ProfilePage />
        
      
        <UserButton />
      </SignedIn>
    </div>
  );
}
