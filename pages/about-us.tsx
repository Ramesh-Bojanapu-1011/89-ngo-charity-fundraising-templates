import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";
import { useTranslation } from "react-i18next";

// icons are defined in-code; titles/descriptions come from translations

const AboutUs = () => {
  const { t } = useTranslation();
  const programsLeft = [
    {
      title: t("about.programs.programsLeft.0.title"),
      desc: t("about.programs.programsLeft.0.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: t("about.programs.programsLeft.1.title"),
      desc: t("about.programs.programsLeft.1.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z"
          />
        </svg>
      ),
    },
    {
      title: t("about.programs.programsLeft.2.title"),
      desc: t("about.programs.programsLeft.2.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v8m4-4H8"
          />
        </svg>
      ),
    },
  ];

  const programsRight = [
    {
      title: t("about.programs.programsRight.0.title"),
      desc: t("about.programs.programsRight.0.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l9-9 9 9"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 21V9h6v12"
          />
        </svg>
      ),
    },
    {
      title: t("about.programs.programsRight.1.title"),
      desc: t("about.programs.programsRight.1.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h4l3 8 4-16 3 8h4"
          />
        </svg>
      ),
    },
    {
      title: t("about.programs.programsRight.2.title"),
      desc: t("about.programs.programsRight.2.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 21V7a2 2 0 00-2-2h-4l-2-3-2 3H6a2 2 0 00-2 2v14"
          />
        </svg>
      ),
    },
  ];

  const board = [
    {
      name: t("about.board.items.0.name"),
      bio: t("about.board.items.0.bio"),
      role: t("about.board.items.0.role"),
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=60",
    },
    {
      name: t("about.board.items.1.name"),
      bio: t("about.board.items.1.bio"),
      role: t("about.board.items.1.role"),
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60",
    },
    {
      name: t("about.board.items.2.name"),
      bio: t("about.board.items.2.bio"),
      role: t("about.board.items.2.role"),
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60",
    },
    {
      name: t("about.board.items.3.name"),
      bio: t("about.board.items.3.bio"),
      role: t("about.board.items.3.role"),
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=60",
    },
  ];
  const metricsRaw = t("about.metrics", { returnObjects: true });
  const metrics = Array.isArray(metricsRaw)
    ? (metricsRaw as Array<{ label: string; value: number; suffix?: string }>)
    : [];

  const impactStories = [
    {
      title: t("about.impactStories.0.title"),
      img: "https://i.pinimg.com/736x/f0/89/64/f08964887edd0cffc796cb8bdc2faa33.jpg",
      excerpt: t("about.impactStories.0.excerpt"),
    },
    {
      title: t("about.impactStories.1.title"),
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=60",
      excerpt: t("about.impactStories.1.excerpt"),
    },
  ];

  const budgetBreakdownRaw = t("about.budgetBreakdown", {
    returnObjects: true,
  });
  const budgetBreakdown = Array.isArray(budgetBreakdownRaw)
    ? (budgetBreakdownRaw as Array<{
        label: string;
        pct: number;
        desc: string;
      }>)
    : [];

  function Counter({ end, duration = 1200, suffix = "" }: any) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState(0);
    const started = useRef(false);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !started.current) {
              started.current = true;
              const startTime = performance.now();
              const from = 0;
              const to = end;

              const step = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(progress * (to - from) + from);
                setValue(current);
                if (progress < 1) requestAnimationFrame(step);
              };

              requestAnimationFrame(step);
              obs.disconnect();
            }
          });
        },
        { threshold: 0.4 },
      );

      obs.observe(el);
      return () => obs.disconnect();
    }, [end, duration]);

    return (
      <div ref={ref} className="text-3xl sm:text-4xl font-extrabold">
        {value.toLocaleString()}
        {suffix}
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 caret-transparent">
      <SiteHeadder />

      <main>
        {/* Hero - section 1 */}
        <section className="relative overflow-hidden min-h-screen flex justify-center items-center bg-linear-to-r from-emerald-600 to-emerald-400 text-white">
          <div className="max-w-7xl mx-auto  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                  {t("about.hero.badge")}
                </div>

                <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight">
                  {t("about.hero.title")}
                </h1>
                <p className="mt-4 text-lg text-white/95 max-w-lg">
                  {t("about.hero.lead")}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold shadow"
                  >
                    {t("about.cta.donate")}
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-full"
                  >
                    {t("about.cta.volunteer")}
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 p-4">
                  <img
                    src="https://i.pinimg.com/1200x/71/5f/55/715f552f81f7cf49731578585595f443.jpg"
                    alt="about hero"
                    className="w-full h-90 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Our mission (visual variant) */}
        <section
          id="mission"
          className="py-16 bg-linear-to-b from-white/0 via-white/5 to-white/0 dark:from-transparent"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* left - image collage */}
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-md lg:max-w-none">
                  <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src="https://i.pinimg.com/736x/ed/96/78/ed96783d0be16f8301a5f0f02c69b6c5.jpg"
                        alt="community children"
                        className="w-full h-72 object-cover rounded-2xl"
                      />
                    </div>

                    <div className="absolute -bottom-8 left-6 w-40 sm:w-52 md:w-56 lg:w-60 overflow-hidden rounded-xl border-4 border-white shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=60"
                        alt="child smiling"
                        className="w-full h-32 object-cover rounded-xl"
                      />
                    </div>

                    <div className="absolute -top-6 right-6 hidden md:block">
                      <div className="w-28 h-28 rounded-lg bg-emerald-50 flex items-center justify-center shadow-lg">
                        <img
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60"
                          alt="volunteer"
                          className="w-24 h-24 object-cover rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* right - content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
                  {t("about.mission.title")}
                </h2>

                <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl">
                  {t("about.mission.lead")}
                </p>

                <ul className="mt-6 space-y-3 max-w-md">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {t("about.mission.benefit1")}
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {t("about.mission.benefit2")}
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {t("about.mission.benefit3")}
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {t("about.mission.benefit4")}
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold shadow"
                  >
                    {t("about.cta.learnMore")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Programs (timeline-inspired) */}
        <section id="programs" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">
                {t("about.programs.title")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("about.programs.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* left timeline */}
              <div className="flex flex-col mg:items-end pr-6">
                <div className="w-full max-w-md">
                  {programsLeft.map((p, i) => (
                    <div key={i} className="flex items-start gap-4 mb-8">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center ring-1 ring-emerald-100 text-emerald-600 shadow">
                          {p.icon}
                        </div>
                        {i < programsLeft.length - 1 && (
                          <div className="w-0.5 flex-1 bg-gray-200 dark:bg-gray-700 mt-2" />
                        )}
                      </div>

                      <div className="text-left">
                        <div className="font-semibold text-gray-900 dark:text-gray-100">
                          {p.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {p.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* center images */}
              <div className="flex flex-col md:items-center">
                <div className="overflow-hidden rounded-2xl shadow-lg w-full max-w-sm">
                  <img
                    src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=60"
                    alt="program"
                    className="w-full h-80    object-cover"
                  />
                </div>
              </div>

              {/* right timeline */}
              <div className="flex flex-col items-start pl-6">
                <div className="w-full max-w-md">
                  {programsRight.map((p, i) => (
                    <div key={i} className="flex items-start gap-4 mb-8">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center ring-1 ring-emerald-100 text-emerald-600 shadow">
                          {p.icon}
                        </div>
                        {i < programsRight.length - 1 && (
                          <div className="w-0.5 flex-1 bg-gray-200 dark:bg-gray-700 mt-2" />
                        )}
                      </div>

                      <div className="text-left">
                        <div className="font-semibold text-gray-900 dark:text-gray-100">
                          {p.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {p.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Team / Board */}
        <section
          id="team"
          className="py-16 bg-linear-to-b from-white/0 via-white/5 to-white/0 dark:from-transparent"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">
                {t("about.board.title")}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("about.board.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-end">
              {board.map((b, i) => (
                <article
                  key={i}
                  className="relative overflow-hidden rounded-2xl group"
                >
                  <div className="relative h-96 w-full bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
                    <img
                      src={b.img}
                      alt={b.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    {/* emerald overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-emerald-700 via-emerald-600 to-transparent opacity-95 rounded-b-2xl" />

                    {/* name/role moved slightly up so social icons can sit in the corner */}
                    <div className="absolute left-4 bottom-12 text-white">
                      <div className="text-lg font-semibold">{b.name}</div>
                      <div className="text-sm opacity-90">{b.role}</div>
                    </div>

                    {/* social icons - reveal on hover */}
                    <div className="absolute right-4 bottom-4 flex items-center gap-2">
                      <a
                        href="#"
                        aria-label={`LinkedIn ${b.name}`}
                        className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h4.96V24H0V8.98zM8.06 8.98h4.76v2.05h.07c.66-1.25 2.28-2.56 4.69-2.56C23.82 8.47 24 11.03 24 15.09V24h-4.96v-7.03c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24H8.06V8.98z" />
                        </svg>
                      </a>

                      <a
                        href="#"
                        aria-label={`Twitter ${b.name}`}
                        className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M24 4.56c-.88.39-1.83.65-2.83.77a4.93 4.93 0 002.16-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.39 4.48A13.96 13.96 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.82 4.93 4.93 0 01-2.21.08 4.92 4.92 0 004.6 3.42A9.86 9.86 0 010 19.54a13.93 13.93 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64A9.9 9.9 0 0024 4.56z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300 px-2">
                    {b.bio}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Impact (redesigned) */}
        <section id="impact" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">
                {t("about.impact.title")}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("about.impact.lead")}
              </p>
            </div>

            {/* metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 text-center shadow-sm"
                >
                  <Counter end={m.value} suffix={m.suffix} />
                  <div className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* stories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {impactStories.map((s, i) => (
                <article
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-lg group"
                >
                  <div className="relative h-56 md:h-44 lg:h-56">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <div className="absolute left-6 bottom-6 text-white">
                      <h4 className="text-lg font-bold">{s.title}</h4>
                      <p className="mt-1 text-sm max-w-xs">{s.excerpt}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 - How donations are used (new) */}
        <section
          id="donations"
          className="py-16 bg-linear-to-b from-white/0 via-white/5 to-white/0 dark:from-transparent"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">
                {t("about.donations.title")}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("about.donations.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
              {budgetBreakdown.map((b, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {b.label}
                    </div>
                    <div className="text-emerald-600 font-extrabold">
                      {b.pct}%
                    </div>
                  </div>

                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-3 bg-emerald-600 dark:bg-emerald-500"
                      style={{
                        width: `${b.pct}%`,
                        transition: "width 1s ease",
                      }}
                    />
                  </div>

                  <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    {b.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("about.donations.note")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default AboutUs;
