import Image from "next/image";
import spoken from "../../public/assets/spoken.svg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex border-2 border-white lg:flex-col gap-12 p-24">
        <section className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-3xl  font-semibold underline decoration-dashed	mb-6">
            How to join to get your Partner
          </h1>
          <h4 className="text-lg font-semibold underline decoration-solid	mb-6">
            Empower Your Journey to English Fluency with Our AI-Powered Spoken
            English Partner
          </h4>
          <Image
            src={spoken}
            width={250}
            height={250}
            alt="Picture of the author"
          />

          <h2 className="text-2xl font-semibold underline decoration-wavy	mb-6">
            Start Your English Fluency Journey Today
          </h2>
          <div className="flex gap-10 justify-center">
            <a
              href="/login"
              className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customsecondary hover:text-customprimary"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-md font-bold border-2 px-4 py-2 rounded-lg  hover:bg-customsecondary hover:text-customprimary"
            >
              Register
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
