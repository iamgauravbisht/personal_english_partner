import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex border-2 border-white lg:flex-col gap-12 p-24">
        <section className="max-w-3xl mx-auto text-center flex flex-col ">
          <h1 className="text-3xl text-customsecondary font-semibold underline decoration-wavy text-left	mb-6">
            Steps to Get Started:-
          </h1>
          <h4 className="text-lg font-semibold underline decoration-solid	mb-6 ">
            Empower Your Journey to English Fluency with Our AI-Powered Spoken
            English Partner
          </h4>

          <h2 className="text-2xl font-semibold underline decoration-wavy	mb-6">
            Start Your English Fluency Journey Today
          </h2>
          <div className="flex gap-10 justify-center">
            <Link
              href="/account/login"
              className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customsecondary hover:text-customprimary"
            >
              Login
            </Link>
            <Link
              href="/account/register"
              className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customsecondary hover:text-customprimary"
            >
              Register
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
