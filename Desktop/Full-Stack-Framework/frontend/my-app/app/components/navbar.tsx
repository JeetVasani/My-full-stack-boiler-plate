import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-semibold">
            <Link href="/">Automation System</Link>
        </h1>
        <ul className="flex gap-6">
            <li><Link href="/playground">PlayGround</Link></li>
            <li><Link href="/user_profile">Your Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}
