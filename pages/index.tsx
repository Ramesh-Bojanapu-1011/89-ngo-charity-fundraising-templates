import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NGO / Charity / Fundraising Templates</title>
        <meta
          name="description"
          content="Templates for NGO, Charity, and Fundraising websites built with Next.js and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-6">
        <div className="max-w-3xl w-full">
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-10 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c.667 0 2-1 2-2s-1.333-2-2-2-2 1-2 2 1.333 2 2 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 13c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z"
                  />
                </svg>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
                Enkonix IT Services
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Secure, scalable, and modern IT solutions for your business.
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-emerald-600 mb-6">
                <span className="px-2">Cybersecurity</span>
                <span className="px-2">|</span>
                <span className="px-2">Cloud Services</span>
                <span className="px-2">|</span>
                <span className="px-2">IT Consulting</span>
              </div>

              <Link
                href="/auth"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-emerald-500"
              >
                Go to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
