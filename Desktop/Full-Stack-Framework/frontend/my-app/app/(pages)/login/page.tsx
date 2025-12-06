"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "@/src/lib/api";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser(form);

      if (!res?.access_token) {
        setError("Invalid response from server.");
        return;
      }

      localStorage.setItem("token", res.access_token);
      router.push("/playground");
    } catch (err: any) {
      setError(
        err.response?.data?.detail ||
          "Login failed. Please check your credentials."
      );
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-semibold text-gray-100 mb-6 text-center">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-3 py-2 mb-6 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-medium"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <Link
            href="/register"
            className="text-blue-400 hover:text-blue-500 underline text-sm"
          >
            Don&apos;t have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
}
