import LogoSquare from 'components/logo-square';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  // const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  // const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    // <footer className="text-sm text-neutral-500 dark:text-neutral-400">
    //   <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
    //     <div>
    //       <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
    //         <LogoSquare size="sm" />
    //         <span className="uppercase">{SITE_NAME}</span>
    //       </Link>
    //     </div>
    //     <Suspense
    //       fallback={
    //         <div className="flex h-[188px] w-[200px] flex-col gap-2">
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //         </div>
    //       }
    //     >
    //       <FooterMenu menu={menu} />
    //     </Suspense>
    //     <div className="md:ml-auto">
    //       <a
    //         className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
    //         aria-label="Deploy on Vercel"
    //         href="https://vercel.com/templates/next.js/nextjs-commerce"
    //       >
    //         <span className="px-3">▲</span>
    //         <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
    //         <span className="px-3">Deploy</span>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
    //     <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
    //       <p>
    //         &copy; {copyrightDate} {copyrightName}
    //         {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
    //       </p>
    //       <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
    //       <p>Designed in California</p>
    //       <p className="md:ml-auto">
    //         <a href="https://vercel.com" className="text-black dark:text-white">
    //           Crafted by ▲ Vercel
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="divide-y px-4 dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex h-12 w-12 items-center justify-center ">
              <LogoSquare size="sm" />
            </div>
            <span className="self-center text-2xl font-semibold">Eco Steps</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:dark:text-gray-50">Mobile App</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Features
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Today's Deals
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:dark:text-gray-50">Others</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:dark:text-gray-50">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="mb-4 inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-blue-500 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid justify-center py-6 lg:justify-between">
        <div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
          <span>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </span>
        </div>
        <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
          <a
            rel="noopener noreferrer"
            href="#"
            title="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-violet-400 dark:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            title="Twitter"
            className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-violet-400 dark:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
