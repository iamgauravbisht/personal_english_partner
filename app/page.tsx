import Image from "next/image";
import Link from "next/link";
import spoken from "../public/assets/spoken.svg";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-20 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex border-2 border-white lg:flex-col gap-12 p-24">
        <section className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl text-customsecondary font-semibold underline decoration-dashed	mb-5">
            Unlock Fluent English with Your AI Language Companion
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
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl text-left font-semibold underline decoration-dashed	mb-6">
            Introduction to the Spoken English Partner
          </h2>
          <p className="">
            Welcome to a new era of language learning! Our AI-driven Spoken
            English Partner is designed to be your personal language coach,
            helping you achieve fluency in English effortlessly. Whether
            you&apos;re a beginner or looking to enhance your existing skills,
            our intelligent companion adapts to your learning style, providing a
            dynamic and interactive experience
          </p>
        </section>
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl text-left font-semibold underline decoration-dashed mb-6">
            Key Features
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Conversational AI</h3>
            <p className="">
              Engage in natural, real-life conversations with our advanced AI
              companion. Practice speaking, listening, and understanding English
              in a comfortable and supportive environment.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Personalized Learning Plans
            </h3>
            <p className="">
              Tailored to your unique needs, our system creates personalized
              learning plans. Progress at your own pace, focusing on the areas
              that matter most to you—whether it&apos;s pronunciation,
              vocabulary, or everyday expressions.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Real-time Feedback</h3>
            <p className="">
              Receive instant feedback on your spoken English. Our AI analyzes
              your pronunciation, intonation, and grammar, providing
              constructive feedback to help you refine your skills.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Interactive Lessons</h3>
            <p className="">
              Immerse yourself in interactive lessons that simulate real-world
              scenarios. From casual conversations to business discussions, our
              lessons cover a wide range of topics to build your confidence in
              diverse situations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Daily Challenges and Practice
            </h3>
            <p className="">
              Stay motivated with daily challenges and practice sessions.
              Develop a consistent language learning habit with our gamified
              approach, earning rewards as you progress.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
