"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-4">
      <h1 className="text-3xl font-semibold">Welcome to the Automation System</h1>

      <button
        onClick={() => router.push("/login")}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-medium"
      >
        Login
      </button>
    </div>
  );
}
