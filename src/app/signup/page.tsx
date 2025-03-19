import {SignUp} from "@/components/SignUp";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
        <SignUp />
      </div>
    </div>
  );
}
