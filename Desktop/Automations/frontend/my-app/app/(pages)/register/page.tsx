"use client";
import { useState } from "react";
import { registerUser } from "@/src/lib/api";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await registerUser(form);
    console.log("Registered:", res);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-semibold text-gray-100 mb-6 text-center">
          Register
        </h2>

        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-3 py-2 mb-6 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-medium"
        >
          Register
        </button>

        {/* Login link */}
        <div className="mt-4 text-center">
          <Link
            href="/login"
            className="text-blue-400 hover:text-blue-500 underline text-sm"
          >
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
}
