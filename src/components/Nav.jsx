"use client";

import Image from "next/image";
import Link from "next/link";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="flex gap-4 items-center">
          <Image
            src={"/assets/images/logo.svg"}
            height={32}
            width={32}
            alt="logo"
          />
          <h2 className="hidden sm:inline-block text-2xl font-semibold">
            Promptopia
          </h2>
        </Link>
      </div>
      <div className="flex-none gap-4 items-center">
        {session?.user ? (
          <>
            {/* desktop navigation */}
            <div className="hidden sm:flex sm:items-center sm:gap-4">
              <div>
                <button
                  href="/create-prompt"
                  className="btn btn-neutral btn-sm rounded-full font-normal"
                >
                  Create Post
                </button>
              </div>
              <div>
                <button
                  onClick={signOut}
                  className="btn btn-neutral btn-outline btn-sm rounded-full font-normal"
                >
                  Sign Out
                </button>
              </div>
              <Link
                href={"/profile"}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 rounded-full">
                  <Image
                    src={session?.user.image}
                    height={32}
                    width={32}
                    alt="Stock Image"
                  />
                </div>
              </Link>
            </div>

            {/* mobile navigation */}
            <div className="sm:hidden dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 rounded-full">
                  <Image
                    src={session?.user.image}
                    height={32}
                    width={32}
                    alt="Stock Image"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/profile"}>Profile</Link>
                </li>
                <li>
                  <Link href={"/create-prompt"}>Create Post</Link>
                </li>
                <li>
                  <button type="button" onClick={signOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="btn btn-accent btn-sm rounded-full text-white font-normal"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
