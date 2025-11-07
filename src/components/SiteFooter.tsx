import Link from "next/link";
import { useTranslation } from "react-i18next";

const SiteFooter = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { key: "home1", href: "/home1" },
    { key: "home2", href: "/home2" },
    { key: "about", href: "/about-us" },
    { key: "services", href: "/services" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact-us" },
  ];

  const services = [
    {
      key: "fundraising",
      labelKey: "services.fundraising",
      href: "/fundraising-campaigns",
    },
    {
      key: "onlineDonations",
      labelKey: "services.onlineDonations",
      href: "/online-donations",
    },
    {
      key: "volunteer",
      labelKey: "services.volunteer",
      href: "/volunteer-management",
    },
    { key: "events", labelKey: "services.events", href: "/event-management" },
    { key: "grants", labelKey: "services.grants", href: "/grant-applications" },
    {
      key: "advocacy",
      labelKey: "services.advocacy",
      href: "/advocacy-outreach",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 caret-transparent">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + about */}
          <div className="flex justify-center ">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <img
                  src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("footer.aboutText")}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Link
                  className="text-gray-500 hover:text-emerald-500"
                  href="#"
                  aria-label="facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#1877f2"
                      d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                    ></path>
                    <path
                      fill="#fff"
                      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                    ></path>
                  </svg>
                </Link>
                <Link
                  className="text-gray-500 hover:text-emerald-500"
                  href="#"
                  aria-label="twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width={256} height={256} fill="#fff" rx={60}></rect>
                      <rect
                        width={256}
                        height={256}
                        fill="#1d9bf0"
                        rx={60}
                      ></rect>
                      <path
                        fill="#fff"
                        d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                      ></path>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className=" flex sm:justify-center">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                {t("footer.quickLinksTitle")}
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-500"
                    >
                      {t(`footer.quickLinks.${l.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services (from header) */}
          <div className=" flex sm:justify-center">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                {t("footer.servicesTitle")}
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600 dark:text-gray-300">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-emerald-500">
                      {t(`header.nav.${s.labelKey}`) ||
                        t(`footer.services.${s.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className=" flex sm:justify-center">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                {t("footer.contactTitle")}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {t("footer.address")}
              </p>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  {t("footer.phoneLabel")}:{" "}
                  <Link href="tel:+1234567890" className="text-emerald-600">
                    +1 (234) 567-890
                  </Link>
                </div>
                <div>
                  {t("footer.emailLabel")}:{" "}
                  <Link
                    href="mailto:hello@example.org"
                    className="text-emerald-600"
                  >
                    hello@example.org
                  </Link>
                </div>
              </div>
              <form className="mt-4">
                <label htmlFor="subscribe" className="sr-only">
                  {t("footer.subscribePlaceholder")}
                </label>
                <div className="flex gap-2">
                  <input
                    id="subscribe"
                    type="email"
                    placeholder={t("footer.subscribePlaceholder")}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200"
                  />
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-md text-sm">
                    {t("footer.subscribeButton")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 dark:border-gray-800 pt-6 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>{t("footer.copyright", { year: new Date().getFullYear() })}</div>
          <div className="flex items-center gap-4">
            <div className="text-sm">{t("footer.madeWith")}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
