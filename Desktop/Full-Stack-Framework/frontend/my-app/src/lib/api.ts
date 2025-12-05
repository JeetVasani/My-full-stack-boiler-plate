// // all api calls can be imported from this file

// import {
//   readRootGet,
//   createUserAuthPost,
//   loginForAccessTokenAuthTokenPost,
//   getUserProfileUserProfileGet,
//   createUserProfileUserProfilePost,
//   deleteUserProfileUserProfileDelete
// } from "@/src/sdk";
// import { client } from "@/src/sdk/client.gen";

// /* -------------------------
//    ROOT
// --------------------------*/  
// export async function pingBackend() {
//   const res = await readRootGet({ client });
//   return res.data;
// }

// /* -------------------------
//    AUTH
// --------------------------*/

// export async function registerUser(body: {
//   username: string;
//   email: string;
//   password: string;
// }) {
//   const res = await createUserAuthPost({
//     client,
//     body,
//   });

//   return res.data;
// }

// export async function loginUser(body: {
//   username: string;
//   password: string;
// }) {
//   const res = await loginForAccessTokenAuthTokenPost({
//     client,
//     body,
//   });

//   return res.data; // contains { access_token, token_type }
// }

// /* -------------------------
//    USER PROFILE
// --------------------------*/
// export async function getProfile(token: string) {
//   const res = await getUserProfileUserProfileGet({
//     client,
//     query: {},  // <-- required
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   return res.data;
// }

// export async function createProfile(token: string, body: any) {
//   const res = await createUserProfileUserProfilePost({
//     client,
//     headers: { Authorization: `Bearer ${token}` },
//     body,
//   });

//   return res.data;
// }

// export async function deleteProfile(token: string) {
//   const res = await deleteUserProfileUserProfileDelete({
//     client,
//     query: {}, // sometimes required depending on generation
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   return res.data;
// }
// api.ts
import {
  readRootGet,
  createUserAuthPost,
  loginForAccessTokenAuthTokenPost,
  getUserProfileUserProfileGet,
  createUserProfileUserProfilePost,
  deleteUserProfileUserProfileDelete
} from "@/src/sdk";
import { client } from "@/src/sdk/client.gen";

/* -------------------------
   ROOT
--------------------------*/  
export async function pingBackend() {
  const res = await readRootGet({ client });
  return res.data;
}

/* -------------------------
   AUTH
--------------------------*/

export async function registerUser(body: {
  username: string;
  email: string;
  password: string;
}) {
  const res = await createUserAuthPost({
    client,
    body,
  });
  return res.data;
}

export async function loginUser(body: {
  username: string;
  password: string;
}) {
  const res = await loginForAccessTokenAuthTokenPost({
    client,
    body,
  });
  return res.data; // { access_token, token_type }
}

/* -------------------------
   USER PROFILE
--------------------------*/

export async function getProfile(token: string) {
  const res = await getUserProfileUserProfileGet({
    client,
    query: {}, // required by your generated types
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}

export async function createProfile(
  token: string,
  body: {
    full_name: string;
    email: string;
    user_id: number;
  }
) {
  const res = await createUserProfileUserProfilePost({
    client,
    query: {}, // add for consistency; some generators require it
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body,
  });

  return res.data;
}

export async function deleteProfile(token: string) {
  const res = await deleteUserProfileUserProfileDelete({
    client,
    query: {}, // required depending on the generated type
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}
