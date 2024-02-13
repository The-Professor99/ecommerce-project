import Image from 'next/image';

export default async function FeatureA() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          width={860}
          height={960}
          className="hidden w-full dark:block"
          src="/hero.png"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            We are the ultimate destination for eco-friendly footwear that is as stylish as it is
            sustainable.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Our collection of shoes, inspired by the likes of Birkenstock, is crafted using recycled
            materials and eco-conscious manufacturing processes. With Eco Steps, you can step
            confidently knowing that you're making a positive impact on the planet without
            compromising on style.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
