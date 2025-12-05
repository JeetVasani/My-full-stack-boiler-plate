
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const loginUser = async () => {
//     const res = await fetch("http://localhost:8000/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (data.access_token) {
//       document.cookie = `access_token=${data.access_token}; path=/;`;
//       router.push("/pages/user_profile");
//     }
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl mb-4">Login</h1>

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

//       <button onClick={loginUser} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Login
//       </button>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    // Endpoint removed — add your own logic or leave this empty
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">Login</h1>

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
        onClick={loginUser}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
