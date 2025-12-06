// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   const url = new URL(req.url);
//   const code = url.searchParams.get("code");

//   const res = await fetch("http://localhost:8000/auth/github/callback", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ code }),
//   });
//   console.log("clientId =", process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID);
// console.log("redirectUri =", process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI);

//   const data = await res.json();

//   return NextResponse.redirect("http://localhost:3000/playground", {
//     headers: {
//       "Set-Cookie": `token=${data.access_token}; Path=/; HttpOnly;`,
//     },
//   });
  
// }
// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   const url = new URL(req.url);
//   const code = url.searchParams.get("code");

//   if (!code) {
//     return NextResponse.json(
//       { error: "Missing ?code from GitHub OAuth redirect" },
//       { status: 400 }
//     );
//   }

//   // Send code to FastAPI backend
//   const backendRes = await fetch("http://localhost:8000/auth/github/callback", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ code }),
//     cache: "no-store",
//   });

//   if (!backendRes.ok) {
//     const err = await backendRes.text();
//     console.error("FastAPI error:", err);
//     return NextResponse.json({ error: "OAuth login failed", detail: err }, { status: 500 });
//   }

//   const data = await backendRes.json();

//   if (!data.access_token) {
//     return NextResponse.json(
//       { error: "FastAPI did not return a JWT", detail: data },
//       { status: 500 }
//     );
//   }

//   // ---------- Create response + set cookie ----------
//   const response = NextResponse.redirect("http://localhost:3000/playground");

//   response.cookies.set({
//     name: "token",
//     value: data.access_token,
//     httpOnly: true,
//     path: "/",
//   });

//   return response;
// }
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Missing ?code from GitHub OAuth redirect" },
      { status: 400 }
    );
  }

  // ---- Send code to FastAPI backend ----
  const backendRes = await fetch("http://localhost:8000/auth/github/callback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });

  const text = await backendRes.text();
  let data: any = {};

  try {
    data = JSON.parse(text);
  } catch (_) {
    console.error("FastAPI returned non-JSON:", text);
    return NextResponse.json(
      { error: "FastAPI returned invalid response", detail: text },
      { status: 500 }
    );
  }

  if (!backendRes.ok) {
    console.error("FastAPI error:", data);
    return NextResponse.json(
      { error: "OAuth login failed", detail: data },
      { status: 500 }
    );
  }

  if (!data.access_token) {
    return NextResponse.json(
      { error: "FastAPI did not return access_token", detail: data },
      { status: 500 }
    );
  }

  // ---- Set JWT token in cookie ----
  const response = NextResponse.redirect("http://localhost:3000/playground");

  response.cookies.set({
    name: "token",
    value: data.access_token,
    httpOnly: true,
    path: "/",
  });

  return response;
}
