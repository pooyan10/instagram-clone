import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { modalState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto ">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid h-19 w-24 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative mt-3 lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            objectFit="contain"
            layout="fill"
          />
        </div>
        {/* middle */}
        <div className="max-w-2xl">
          <div className="relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-200 font-light w-full pl-10 sm:text-sm
              border-none focus:ring-black focus:border-black rounded-lg"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right  */}
        <div className="flex items-center space-x-4 justify-end">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-8 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45 h-6" />
                <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                className="h-10 rounded-full cursor-pointer hover:scale-105"
                alt={session.user.name}
                src={session?.user?.image}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
