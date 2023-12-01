const Header = () => {
  return (
    <header className="w-full h-14 bg-customsecondary border-b-2 border-black sticky top-0">
      <div className="flex justify-between items-center h-full max-w-5xl mx-auto px-4">
        <div className="flex items-center ">
          <a href="/" className="text-xl font-bold">
            Spoken English Partner
          </a>
        </div>
        <div className="flex items-center justify-between gap-5 ">
          <a
            href="/getstarted"
            className="text-md font-bold border-2 px-4 py-2 rounded-lg hover:bg-customprimary hover:text-white"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customprimary hover:text-white"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customprimary hover:text-white"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
