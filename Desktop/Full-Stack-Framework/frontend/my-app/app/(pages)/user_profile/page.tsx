"use client";
import { useEffect, useState } from "react";
import { getProfile } from "@/src/lib/api";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getProfile(token).then((res) => {
      setProfile(res);
    });
  }, []);

  if (!profile) return <div>Loading...</div>;

  return <pre>{JSON.stringify(profile, null, 2)}</pre>;
}
