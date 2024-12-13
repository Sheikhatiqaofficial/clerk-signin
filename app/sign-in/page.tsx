import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
};

export default SignInPage;
