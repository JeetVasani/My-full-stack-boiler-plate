
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const registerUser = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       console.log("Response status:", res.status);

//       if (!res.ok) {
//         const errorData = await res.text();
//         console.error("Server error:", errorData);
//         return;
//       }

//       router.push("/pages/login");
//     } catch (err) {
//       console.error("FETCH ERROR:", err);
//     }
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl mb-4">Register</h1>

//       <input
//         className="border p-2 block mb-3"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         className="border p-2 block mb-3"
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={registerUser} className="bg-green-600 text-white px-4 py-2 rounded">
//         Register
//       </button>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    // Endpoint removed — no backend call here
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">Register</h1>

      <input
        className="border p-2 block mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 block mb-3"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={registerUser}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </div>
  );
}
