import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";

export default function Home2() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("home2.services.0.title"),
      desc: t("home2.services.0.desc"),
    },
    {
      title: t("home2.services.1.title"),
      desc: t("home2.services.1.desc"),
    },
    {
      title: t("home2.services.2.title"),
      desc: t("home2.services.2.desc"),
    },
    {
      title: t("home2.services.3.title"),
      desc: t("home2.services.3.desc"),
    },
  ];

  const how = [
    {
      step: t("home2.how.0.step"),
      title: t("home2.how.0.title"),
      desc: t("home2.how.0.desc"),
    },
    {
      step: t("home2.how.1.step"),
      title: t("home2.how.1.title"),
      desc: t("home2.how.1.desc"),
    },
    {
      step: t("home2.how.2.step"),
      title: t("home2.how.2.title"),
      desc: t("home2.how.2.desc"),
    },
  ];

  const campaigns = [
    {
      title: t("home2.campaigns.0.title"),
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      raised: 8500,
      goal: 10000,
    },
    {
      title: t("home2.campaigns.1.title"),
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60",
      raised: 4200,
      goal: 5000,
    },
    {
      title: t("home2.campaigns.2.title"),
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
      raised: 7600,
      goal: 8000,
    },
  ];

  const volunteers = [
    {
      name: t("home2.volunteers.0.name"),
      role: t("home2.volunteers.0.role"),
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: t("home2.volunteers.0.quote"),
    },
    {
      name: t("home2.volunteers.1.name"),
      role: t("home2.volunteers.1.role"),
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: t("home2.volunteers.1.quote"),
    },
    {
      name: t("home2.volunteers.2.name"),
      role: t("home2.volunteers.2.role"),
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      quote: t("home2.volunteers.2.quote"),
    },
  ];

  const metrics = [
    {
      label: t("home2.metrics.items.0.label"),
      end: 12500,
      format: t("home2.metrics.items.0.format"),
    },
    {
      label: t("home2.metrics.items.0.label"),
      end: 2500000,
      format: t("home2.metrics.items.0.format"),
      suffix: "+",
    },
    {
      label: t("home2.metrics.items.0.label"),
      end: 320,
      format: t("home2.metrics.items.0.format"),
    },
    {
      label: t("home2.metrics.items.0.label"),
      end: 8400,
      format: t("home2.metrics.items.0.format"),
    },
  ];

  const Counter = ({
    end,
    duration = 1400,
    suffix,
    format = "standard",
  }: {
    end: number;
    duration?: number;
    suffix?: string;
    format?: string;
  }) => {
    const [value, setValue] = useState(0);
    const nodeRef = useRef<HTMLSpanElement | null>(null);
    const started = useRef(false);

    useEffect(() => {
      const el = nodeRef.current;
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !started.current) {
              started.current = true;
              const t0 = performance.now();
              const animate = (t: number) => {
                const p = Math.min((t - t0) / duration, 1);
                const cur = Math.floor(p * end);
                setValue(cur);
                if (p < 1) requestAnimationFrame(animate);
              };
              requestAnimationFrame(animate);
            }
          });
        },
        { threshold: 0.3 },
      );

      obs.observe(el);
      return () => obs.disconnect();
    }, [end, duration]);

    const formatted =
      format === "compact"
        ? new Intl.NumberFormat("en", {
            notation: "compact",
            maximumFractionDigits: 0,
          }).format(value)
        : value.toLocaleString();

    return (
      <span ref={nodeRef}>
        {formatted}
        {suffix ?? ""}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 caret-transparent">
      <SiteHeadder />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-r from-emerald-600 to-emerald-400 text-white min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                  {t("home2.hero.badge", "NGO · Charity · Fundraising")}
                </div>
                <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight">
                  {t("home2.hero.title", "Bring hope to communities—fast.")}
                </h1>
                <p className="mt-4 text-lg text-white/95 max-w-lg">
                  {t(
                    "home2.hero.lead",
                    "Launch fundraising campaigns, recruit volunteers, and show donors the impact of their gifts with beautiful templates and simple tools.",
                  )}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold shadow"
                  >
                    {t("home2.hero.cta.donate", "Donate")}
                  </Link>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-full"
                  >
                    {t("home2.hero.cta.explore", "Explore services")}
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=60"
                    alt="community"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-16 bg-linear-to-b from-white/0 via-white/5 to-white/0 dark:from-transparent"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  {t(
                    "home2.about.title",
                    "Built for non-profits and grassroots teams",
                  )}
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
                  {t(
                    "home2.about.lead",
                    "Templates and workflows designed to reduce friction: from donor checkout to volunteer coordination and reporting.",
                  )}
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-emerald-50 text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
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
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Fast setup</div>
                      <div className="text-sm text-gray-600">
                        Launch a campaign in minutes.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-emerald-50 text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h2l1 9h12l1-9h2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Donor-friendly</div>
                      <div className="text-sm text-gray-600">
                        Clean checkout and donor receipts.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
                <h4 className="font-semibold"> {t("home2.metrics.title")}</h4>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {t("home2.metrics.lead")}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  {metrics.map((m, i) => (
                    <div key={i} className=" ">
                      <div className="text-2xl font-bold">
                        <Counter
                          end={m.end}
                          format={m.format}
                          suffix={m.suffix}
                        />
                      </div>
                      <div className="text-xs text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16  bg-white dark:bg-gray-800  ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">
                {t("home2.sections.servicesTitle", "Services")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t(
                  "home2.sections.servicesLead",
                  "Everything you need to run successful campaigns.",
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <article
                  key={i}
                  className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-xl transform transition hover:-translate-y-2"
                >
                  {/* accent band */}
                  <div
                    className={`h-12 w-full ${
                      i % 2 === 0
                        ? "bg-linear-to-r from-emerald-50 to-white"
                        : "bg-linear-to-r from-emerald-100 to-emerald-50"
                    }`}
                  />

                  <div className="p-6 -mt-8">
                    <div className="-mt-4 mb-3 w-14 h-14 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center shadow ring-1 ring-emerald-100 text-emerald-600 font-semibold text-lg">
                      {i + 1}
                    </div>

                    <h4 className="mt-2 font-semibold text-gray-900 dark:text-gray-100">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {s.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="py-16 bg-linear-to-b from-white/0 via-white/5 to-white/0 dark:from-transparent"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">
                {t("home2.sections.howTitle", "How it works")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t(
                  "home2.sections.howLead",
                  "Simple steps to get your campaign live and collecting funds.",
                )}
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {how.map((h, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-emerald-50 dark:bg-emerald-900 shadow-lg">
                      <div className="text-emerald-600 dark:text-emerald-200 font-bold text-lg">
                        {h.step}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left md:pr-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {h.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Spotlights */}
        <section id="volunteers" className="py-16   bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">
                {t("home2.sections.volunteersTitle", "Volunteer Spotlights")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t(
                  "home2.sections.volunteersLead",
                  "Meet a few of the people powering our work — then join them.",
                )}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {volunteers.map((v, idx) => (
                <article
                  key={idx}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl shadow   transform transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="p-4 pt-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={v.img}
                        alt={v.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-white dark:ring-gray-800 shadow -mt-10"
                      />

                      <div className="flex-1">
                        <p className="italic text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                          “{v.quote}”
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-gray-100">
                              {v.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {v.role}
                            </div>
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
        <section
          id="campaigns"
          className="py-16  bg-linear-to-b from-white/0 via-white/5 to-white/0 dark:from-transparent"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">
                {t("home2.sections.campaignsTitle", "Featured campaigns")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t(
                  "home2.sections.campaignsLead",
                  "Hand-picked community projects you can support today.",
                )}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {campaigns.map((c, i) => {
                const pct = Math.min(
                  100,
                  Math.round((c.raised / c.goal) * 100),
                );
                return (
                  <article
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden"
                  >
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg">{c.title}</h4>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {c.raised.toLocaleString()} raised
                      </p>

                      <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
