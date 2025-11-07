"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ModeToggle } from "./theme/ModeToggle";
import { getCurrentUser, handleLogout, User } from "@/lib/localAuth";
import { applyLanguage } from "@/i18n";
import { useTranslation } from "react-i18next";

const SiteHeadder: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<string>("en");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const toggleDropdown = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    // read current user from localStorage on the client only
    const u = getCurrentUser();
    setUser(u);
  }, []);

  // close open menus when clicking/tapping outside the header area
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const el = headerRef.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (!target) return;
      if (!el.contains(target)) {
        // clicked outside header -> close any open dropdowns and mobile menu
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  // centralized nav definition (labels come from translations so header updates when language changes)
  const navItems = [
    {
      key: "home",
      label: t("header.nav.home", "Home"),
      items: [
        { label: t("header.nav.home1", "Home 1"), href: "/home1" },
        { label: t("header.nav.home2", "Home 2"), href: "/home2" },
      ],
    },
    {
      key: "about",
      label: t("header.nav.about", "About Us"),
      href: "/about-us",
    },
    {
      key: "services",
      label: t("header.nav.services", "Services"),
      items: [
        {
          label: t("header.nav.services.all", "All Services"),
          href: "/services",
        },
        {
          label: t("header.nav.services.fundraising", "Fundraising Campaigns"),
          href: "fundraising-campaigns",
        },
        {
          label: t("header.nav.services.onlineDonations", "Online Donations"),
          href: "/online-donations",
        },
        {
          label: t("header.nav.services.volunteer", "Volunteer Management"),
          href: "/volunteer-management",
        },
        {
          label: t("header.nav.services.events", "Event Management"),
          href: "/event-management",
        },
        {
          label: t("header.nav.services.grants", "Grant Applications"),
          href: "/grant-applications",
        },
        {
          label: t("header.nav.services.advocacy", "Advocacy & Outreach"),
          href: "/advocacy-outreach",
        },
      ],
    },
    { key: "blog", label: t("header.nav.blog", "Blog"), href: "/blog" },
    {
      key: "contact",
      label: t("header.nav.contact", "Contact Us"),
      href: "/contact-us",
    },
  ];

  // profile actions
  const profileActions = [
    {
      key: "admin",
      label: t("header.profile.admin", "Admin Dashboard"),
      href: "/admin-dashbord",
    },
    {
      key: "logout",
      label: t("header.profile.logout", "Logout"),
      action: "logout",
    },
  ];

  const languages = [
    { code: "en", label: t("header.lang.en", "English (EN)"), flag: "🇺🇸" },
    { code: "ar", label: t("header.lang.ar", "العربية (AR)"), flag: "🇸🇦" },
    { code: "he", label: t("header.lang.he", "עברית (HE)"), flag: "🇮🇱" },
  ];

  // Sync local lang state with i18n and update when language changes externally
  useEffect(() => {
    const initial =
      (typeof window !== "undefined" &&
        localStorage.getItem("selectedLanguage")) ||
      i18n.language ||
      "en";

    // If the user has previously selected a language, apply it on the client
    // after hydration. We intentionally do not read localStorage during
    // module initialization (see src/i18n.ts) to avoid SSR/CSR hydration
    // mismatches. Applying language here runs only on the client.
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("selectedLanguage");
      if (stored && i18n.language !== stored) {
        applyLanguage(stored);
      }
    }

    setLang(initial);

    const handler = (lng: string) => setLang(lng);
    i18n.on("languageChanged", handler);
    return () => {
      try {
        i18n.off("languageChanged", handler);
      } catch (e) {
        // ignore if off isn't available
      }
    };
  }, [i18n]);

  return (
    <header
      ref={headerRef}
      className="bg-white text-nowrap dark:bg-gray-900 shadow sticky top-0 z-100 caret-transparent "
    >
      <div className="  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/home1" className="flex items-center gap-3">
              <img
                src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
                alt=""
                width={100}
                height={100}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.key} className="relative">
                {item.items ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2"
                      aria-expanded={openDropdown === item.key}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {openDropdown === item.key && (
                      <div
                        className={`absolute left-0 mt-2   bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1`}
                      >
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700  `}
                          >
                            <div className={`text-sm font-medium`}>
                              {sub.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <ModeToggle />

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("lang")}
                  aria-expanded={openDropdown === "lang"}
                  aria-haspopup="menu"
                  className="flex items-center gap-2 text-sm px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                >
                  <span className="text-sm">
                    {lang === "en"
                      ? "🇺🇸 EN"
                      : lang === "ar"
                        ? "🇸🇦 AR"
                        : "🇮🇱 HE"}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openDropdown === "lang" && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 transform origin-top-right  "
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        role="menuitem"
                        onClick={() => {
                          setLang(l.code);
                          applyLanguage(l.code);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  aria-expanded={openDropdown === "profile"}
                  aria-haspopup="menu"
                  className="flex items-center gap-2 text-sm px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="size-8 bg-gray-100 rounded-full flex justify-center items-center font-semibold">
                    {user
                      ? `${(user.firstname || "").charAt(0).toUpperCase()}${(
                          user.lastname || ""
                        )
                          .charAt(0)
                          .toUpperCase()}`
                      : "AD"}
                  </div>
                </button>
                {openDropdown === "profile" && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1"
                  >
                    {profileActions.map((act, i) =>
                      act.href ? (
                        <>
                          {user && user.role == "admin" && (
                            <>
                              <Link
                                key={i}
                                href={act.href}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                {act.label}
                              </Link>
                            </>
                          )}
                        </>
                      ) : (
                        <button
                          key={i}
                          onClick={() => {
                            // update local storage record and clear current user
                            handleLogout();
                            setUser(null);
                            // redirect to auth page
                            router.push("/auth");
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          {act.label}
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="Toggle menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      mobileOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute w-screen bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  shadow-md ">
            {navItems.map((item) =>
              item.items ? (
                <details key={item.key} className="group">
                  <summary className="flex justify-between items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                    {item.label}
                  </summary>
                  <div className="pl-4">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.key}
                  href={item.href!}
                  className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200"
                >
                  {item.label}
                </Link>
              ),
            )}

            <div className="flex w-full justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-4">
              <div className="mt-2 px-3">
                <ModeToggle />
              </div>

              <div className="mt-2 px-3  ">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("lang")}
                    className="  flex items-center justify-between px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  >
                    <span className="text-sm">
                      {lang === "en"
                        ? "English"
                        : lang === "ar"
                          ? "العربية"
                          : "עברית"}
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {openDropdown === "lang" && (
                    <div
                      role="menu"
                      className="mt-2 absolute   bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 transform origin-top-right "
                    >
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          role="menuitem"
                          onClick={() => {
                            setLang(l.code);
                            applyLanguage(l.code);
                            setOpenDropdown(null);
                          }}
                          className="  text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                        >
                          {" "}
                          <span>{l.flag}</span> <span>{l.label}</span>{" "}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 px-3 border-t border-gray-100 dark:border-gray-800 pt-3">
                <button
                  onClick={() => toggleDropdown("profile")}
                  aria-expanded={openDropdown === "profile"}
                  aria-haspopup="menu"
                  className="flex items-center gap-2 text-sm px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="size-8 bg-gray-100 rounded-full flex justify-center items-center font-semibold">
                    {user
                      ? `${(user.firstname || "").charAt(0).toUpperCase()}${(
                          user.lastname || ""
                        )
                          .charAt(0)
                          .toUpperCase()}`
                      : "AD"}
                  </div>
                </button>

                {openDropdown === "profile" && (
                  <div className="mt-3 absolute right-0  space-y-2">
                    {profileActions.map((act) =>
                      act.href ? (
                        <Link
                          key={act.key}
                          href={act.href}
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
                        >
                          {act.label}
                        </Link>
                      ) : (
                        <button
                          key={act.key}
                          onClick={() => {
                            // update local storage record and clear current user
                            handleLogout();
                            setUser(null);
                            // redirect to auth page
                            router.push("/auth");
                          }}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
                        >
                          {act.label}
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeadder;
