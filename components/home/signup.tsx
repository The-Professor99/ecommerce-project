export default async function Signup() {
  return (
    <section className="p-4">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 p-4 md:p-10 lg:flex-row lg:justify-between lg:space-y-0 dark:bg-gray-800 dark:text-gray-50">
        <h1 className="leadi text-center text-3xl font-semibold lg:text-left">
          Ready to put your best foot forward?
        </h1>

        <div className="mt-6 flex flex-shrink-0 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:ml-4 lg:mt-0 lg:justify-end">
          <button className="inline-flex items-center rounded-lg px-6 py-3 dark:dark:bg-violet-400 dark:dark:text-gray-900 dark:hover:bg-gray-700">
            Shop Now
          </button>
          <button className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-3 dark:dark:bg-blue-500 dark:dark:text-gray-900 dark:hover:bg-gray-700">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
