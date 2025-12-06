// // export function getToken() {
// //   if (typeof window === "undefined") return null;
// //   return localStorage.getItem("token");
// // }

// // export function isLoggedIn() {
// //   return !!getToken();
// // }
// // src/lib/auth.ts
// export function getToken() {
//   if (typeof window === "undefined") return null;
//   return localStorage.getItem("token");
// }

// export function isLoggedIn() {
//   return !!getToken();
// }
// Runs safely in both client and server environments
export function isLoggedInClient(): boolean {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("token");
}

export function isLoggedInServer(cookies: any): boolean {
  const token = cookies.get("token")?.value;
  return !!token;
}
