import Image from 'next/image';

export default async function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Eco Steps: Put your best foot forward
          </h1>
          <a
            href="#"
            className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Login
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-blue-500 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Join us today!
          </a>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <Image width={860} height={960} src="/hero.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
}
