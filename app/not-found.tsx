"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import lostSvg from "../public/assets/lost.svg";
const NotFoundPage = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-gray-600">
      <h1 className="text-4xl font-bold">Oops! Lost your way?</h1>
      <p className="mt-4 text-2xl">
        The page you&apos;re looking for {path} doesn&apos;t exist.
      </p>
      <div className="mt-8 flex flex-wrap justify-center">
        <button
          onClick={() => window.location.assign("/")}
          className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
        >
          Go back Home
        </button>
        {/* Add other helpful buttons based on your site structure */}
        {/* <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
          Search the site
        </button> */}
      </div>
      <Image
        src={lostSvg}
        alt="Confused person looking for directions"
        className="mt-8 h-auto rounded-lg shadow-md"
        width={100}
        height={100}
      />
    </div>
  );
};

export default NotFoundPage;
