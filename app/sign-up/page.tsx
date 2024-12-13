import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create an Account</h1>
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
};

export default SignUpPage;
