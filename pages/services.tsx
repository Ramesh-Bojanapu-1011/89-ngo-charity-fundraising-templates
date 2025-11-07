import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("servicesPage.items.0.title"),
      desc: t("servicesPage.items.0.desc"),
      href: "/fundraising-campaigns",
    },
    {
      title: t("servicesPage.items.1.title"),
      desc: t("servicesPage.items.1.desc"),
      href: "/volunteer-management",
    },
    {
      title: t("servicesPage.items.2.title"),
      desc: t("servicesPage.items.2.desc"),
      href: "/donation-processing",
    },
    {
      title: t("servicesPage.items.3.title"),
      desc: t("servicesPage.items.3.desc"),
      href: "/event-management",
    },
    {
      title: t("servicesPage.items.4.title"),
      desc: t("servicesPage.items.4.desc"),
      href: "/membership-management",
    },
    {
      title: t("servicesPage.items.5.title"),
      desc: t("servicesPage.items.5.desc"),
      href: "/reporting-analytics",
    },
  ];

  const metrics = [
    { label: t("servicesPage.metrics.0.label"), value: 245 },
    { label: t("servicesPage.metrics.1.label"), value: 842 },
    { label: t("servicesPage.metrics.2.label"), value: 124 },
  ];

  const testimonials = [
    {
      name: t("servicesPage.testimonials.0.name"),
      role: t("servicesPage.testimonials.0.role"),
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60&auto=format&fit=crop",
      quote: t("servicesPage.testimonials.0.quote"),
      org: t("servicesPage.testimonials.0.org"),
    },
    {
      name: t("servicesPage.testimonials.1.name"),
      role: t("servicesPage.testimonials.1.role"),
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=60&auto=format&fit=crop",
      quote: t("servicesPage.testimonials.1.quote"),
      org: t("servicesPage.testimonials.1.org"),
    },
    {
      name: t("servicesPage.testimonials.2.name"),
      role: t("servicesPage.testimonials.2.role"),
      quote: t("servicesPage.testimonials.2.quote"),
      org: t("servicesPage.testimonials.2.org"),
      avatar: "https://randomuser.me/api/portraits/women/16.jpg ",
    },
  ];

  const campaigns = [
    {
      title: t("servicesPage.campaigns.0.title"),
      desc: t("servicesPage.campaigns.0.desc"),
      image:
        "https://i.pinimg.com/1200x/9a/30/0a/9a300a277f6aa6f106165eb160d8641d.jpg",
      raised: 42000,
      goal: 60000,
    },
    {
      title: t("servicesPage.campaigns.1.title"),
      desc: t("servicesPage.campaigns.1.desc"),
      image:
        "https://i.pinimg.com/736x/e1/ec/11/e1ec1112691ac3cea604e2d0a52cfe19.jpg",
      raised: 27500,
      goal: 50000,
    },
    {
      title: t("servicesPage.campaigns.2.title"),
      desc: t("servicesPage.campaigns.2.desc"),
      image:
        "https://i.pinimg.com/1200x/66/b2/e8/66b2e8a5c821136cc315b64dfda81443.jpg",
      raised: 18000,
      goal: 20000,
    },
  ];

  const howSteps = [
    {
      title: t("servicesPage.howSteps.0.title"),
      body: t("servicesPage.howSteps.0.body"),
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z"
            />
          </svg>
        </>
      ),
    },
    {
      title: t("servicesPage.howSteps.1.title"),
      body: t("servicesPage.howSteps.1.body"),
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"
            />
          </svg>
        </>
      ),
    },
    {
      title: t("servicesPage.howSteps.2.title"),
      body: t("servicesPage.howSteps.2.body"),
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 32 32"
          >
            <path fill="#009966" d="M8 14h11v2H8Zm0 5h13v2H8Z"></path>
            <path
              fill="#009966"
              d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v2H4V6ZM4 26V10h24v16Z"
            ></path>
          </svg>
        </>
      ),
    },
  ];

  function Counter({
    end,
    duration = 1400,
  }: {
    end: number;
    duration?: number;
  }) {
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
      <div ref={ref} className="text-2xl font-bold text-emerald-600">
        {value}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 caret-transparent">
      <SiteHeadder />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex justify-center items-center bg-linear-to-r from-emerald-600 to-emerald-400 text-white">
          <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                {t("servicesPage.hero.title")}
              </h1>
              <p className="mt-4 text-lg">{t("servicesPage.hero.lead")}</p>
              <div className="mt-8 flex justify-center gap-3">
                <Link
                  href="/contact-us"
                  className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold"
                >
                  {t("servicesPage.hero.ctaDonate")}
                </Link>
                <Link
                  href="/services"
                  className="border border-white/30 text-white px-5 py-3 rounded-full"
                >
                  {t("servicesPage.hero.ctaVolunteer")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services: themed cards with icons and short bullets */}
        <section id="services" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">
                {t("servicesPage.what.title")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("servicesPage.what.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md transition-transform transform group-hover:-translate-y-3 group-hover:shadow-2xl focus-within:ring-2 focus-within:ring-emerald-300">
                    {/* left vertical accent for large screens */}
                    <div className="hidden md:block absolute left-0 top-0 h-full w-1 bg-emerald-600" />

                    <div className="p-6 md:pl-10 pt-8 md:pt-6 flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                              {s.title}
                            </h4>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                              {s.desc}
                            </p>

                            <ul className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                              {(
                                (t("servicesPage.cardBullets", {
                                  returnObjects: true,
                                }) as string[] | undefined) || []
                              ).map((b, bi) => (
                                <li key={bi}>• {b}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6 flex items-center justify-between">
                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-full font-medium hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {t("servicesPage.learnMore")}
                      </Link>

                      <a
                        href="/contact"
                        className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        {t("servicesPage.getHelp")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works - timeline style */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-extrabold">
                  {t("servicesPage.how.title")}
                </h2>
                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
                  {t("servicesPage.how.lead")}
                </p>

                <div className="mt-10 relative">
                  {/* vertical decorative line for lg+ */}
                  <div className="hidden lg:block absolute left-10 top-6 bottom-6 w-px bg-emerald-100 dark:bg-emerald-700" />

                  <ol className="space-y-10">
                    {howSteps.map((s, idx) => (
                      <li key={idx} className="relative flex items-start gap-6">
                        <div className="shrink-0">
                          <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center ring-1 ring-emerald-100 dark:ring-emerald-700">
                            {/* Decorative icon placeholder - keep existing visuals */}
                            {s.icon}
                          </div>
                        </div>

                        <div className="pl-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {s.title}
                          </h4>
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-xl">
                            {s.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <aside className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md lg:sticky lg:top-28">
                <h4 className="font-semibold">
                  {t("servicesPage.metricsTitle")}
                </h4>
                <div className="mt-4 space-y-4">
                  {metrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {m.label}
                      </div>
                      <Counter end={m.value} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-xs text-gray-500">
                  {t("servicesPage.metricsInfo.note")}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Partners / Testimonials - v2 */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-extrabold">
                {t("servicesPage.partners.title")}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("servicesPage.partners.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, i) => (
                <article
                  key={i}
                  className="relative group   rounded-3xl bg-linear-to-b from-emerald-50 to-white dark:from-emerald-900 dark:to-gray-800 p-6 shadow-lg"
                >
                  {/* decorative quote mark */}
                  <svg
                    className="absolute right-4 top-4 w-10 h-10 text-emerald-100 opacity-70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 7h4v6H7zM13 7h4v6h-4z"
                      fill="currentColor"
                      opacity="0.08"
                    />
                  </svg>

                  <div className="flex items-start gap-4">
                    <div className="-mt-10">
                      <img
                        src={item.avatar}
                        alt={`${item.name} avatar`}
                        className="w-20 h-20 rounded-xl object-cover ring-4 ring-white dark:ring-gray-900 shadow-md"
                      />
                    </div>

                    <div className="flex-1">
                      <blockquote className="text-gray-800 dark:text-gray-100 italic text-lg leading-relaxed">
                        “{item.quote}”
                      </blockquote>

                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {item.role} •{" "}
                            <span className="text-xs text-gray-400">
                              {item.org}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured campaigns */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">
                {t("servicesPage.featured.title")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("servicesPage.featured.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {campaigns.map((c, i) => {
                const pct = Math.min(
                  100,
                  Math.round((c.raised / c.goal) * 100),
                );
                return (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow group"
                  >
                    <div className="h-40 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {c.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {c.desc}
                      </p>

                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div>
                            {c.raised.toLocaleString()}{" "}
                            {t("servicesPage.raised")}
                          </div>
                          <div>
                            {c.goal.toLocaleString()} {t("servicesPage.goal")}
                          </div>
                        </div>

                        <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-emerald-600 h-2 rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <a
                          href="/contact-us"
                          className="bg-emerald-600 text-white px-3 py-2 rounded-full text-sm"
                        >
                          {t("servicesPage.campaignCTA")}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact snapshot - new alternate style */}
        <section className="py-20 bg-linear-to-r from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="row-span-2">
                    <img
                      src="https://i.pinimg.com/1200x/44/eb/db/44ebdb135530a7f8b09bca742826609d.jpg"
                      alt="impact"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="https://i.pinimg.com/736x/75/08/e3/7508e3990857d8ab2c6b83d89bf7eda1.jpg"
                      alt="impact"
                      className="w-full h-50 object-cover object-center  rounded-xl shadow"
                    />
                  </div>
                  <div>
                    <img
                      src="https://i.pinimg.com/736x/ba/14/87/ba1487206f7235c409b48d32b8fe809f.jpg"
                      alt="impact"
                      className="w-full h-50 object-cover object-center rounded-xl shadow"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-6 left-6 hidden md:block">
                  <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg w-64">
                    <div className="text-sm text-gray-500">
                      {t("servicesPage.impact.milestoneLabel")}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {t("servicesPage.impact.milestoneCount")}
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      {t("servicesPage.impact.milestoneNote")}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                  {t("servicesPage.impact.title")}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">
                  {t("servicesPage.impact.lead")}
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow flex flex-col items-start">
                    <div className="text-sm text-gray-500">
                      {t("servicesPage.impact.tile1.title")}
                    </div>
                    <div className="mt-2 text-2xl font-bold text-emerald-600">
                      <Counter end={24500} />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {t("servicesPage.impact.tile1.note")}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow flex flex-col items-start">
                    <div className="text-sm text-gray-500">
                      {t("servicesPage.impact.tile2.title")}
                    </div>
                    <div className="mt-2 text-2xl font-bold text-emerald-600">
                      <Counter end={124} />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {t("servicesPage.impact.tile2.note")}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow flex flex-col items-start">
                    <div className="text-sm text-gray-500">
                      {t("servicesPage.impact.tile3.title")}
                    </div>
                    <div className="mt-2 text-2xl font-bold text-emerald-600">
                      <Counter end={842} />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {t("servicesPage.impact.tile3.note")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ServicesPage;
