// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { isLoggedInClient } from "@/src/lib/auth";

// export default function Navbar() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     setLoggedIn(isLoggedInClient());
//     setReady(true);
//   }, []);

//   return (
//     <nav className="w-full bg-gray-900 text-white px-6 py-4">
//       <div className="flex justify-between items-center w-full">
//         <h1 className="text-xl font-semibold">
//           <Link href="/">Automation System</Link>
//         </h1>
//       </div>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isLoggedInClient } from "@/src/lib/auth";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedInClient());
    setReady(true);
  }, []);

  return (
    <nav className="w-full bg-gray-900 text-gray-100 border-b border-gray-800 px-6 py-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-semibold">
          <Link href="/" className="hover:text-blue-400 transition">
            Automation System
          </Link>
        </h1>

        {ready && (
          <div className="flex items-center gap-6">
            {loggedIn ? (
              <Link
                href="/playground"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
