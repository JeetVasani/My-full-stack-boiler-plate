// "use client";
// import { useEffect, useState } from "react";

// export default function UserProfile() {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const token = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("access_token="))
//       ?.split("=")[1];

//     if (!token) return;

//     fetch(`http://localhost:8000/me?token=${token}`)
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);

//   if (!user) return <p className="p-10">Loading user details...</p>;

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl mb-4">User Profile</h1>

//       <p>Email: {user.email}</p>
//       <p>User ID: {user.id}</p>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Removed: token parsing + fetch call
    // Add your own logic here if needed
  }, []);

  if (!user) return <p className="p-10">Loading user details...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">User Profile</h1>

      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
    </div>
  );
}
