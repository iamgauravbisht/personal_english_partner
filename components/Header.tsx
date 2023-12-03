import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full h-14 bg-customsecondary border-b-2 border-black sticky top-0">
      <div className="flex justify-between items-center h-full max-w-5xl mx-auto px-4">
        <div className="flex items-center ">
          <Link href="/" className="text-xl font-bold">
            Spoken English Partner
          </Link>
        </div>
        <div className="flex items-center justify-between gap-5 ">
          <Link
            href="/getstarted"
            className="text-md font-bold border-2 px-4 py-2 rounded-lg hover:bg-customprimary hover:text-white"
          >
            Get Started
          </Link>
          <Link
            href="/pricing"
            className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customprimary hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/account/login"
            className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customprimary hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/account/register"
            className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customprimary hover:text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
