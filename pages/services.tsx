import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";

const ServicesPage = () => {
  const services = [
    {
      title: "Fundraising Campaigns",
      desc: "Beautiful campaign pages to tell your story",
      href: "/fundraising-campaigns",
    },
    {
      title: "Online Donations",
      desc: "Secure donations with optimized checkout",
      href: "/online-donations",
    },
    {
      title: "Volunteer Management",
      desc: "Organize and schedule volunteers easily",
      href: "/volunteer-management",
    },
    {
      title: "Event Management",
      desc: "Create events, sell tickets, manage RSVPs",
      href: "/event-management",
    },
    {
      title: "Grant Applications",
      desc: "Templates and tracking for grant writing",
      href: "/grant-applications",
    },
    {
      title: "Advocacy & Outreach",
      desc: "Share campaigns and mobilize supporters",
      href: "/advocacy-outreach",
    },
  ];

  const metrics = [
    { label: "Communities", value: 245 },
    { label: "Volunteers", value: 842 },
    { label: "Projects", value: 124 },
  ];

  const testimonials = [
    {
      name: "Amina",
      role: "Community leader",
      org: "Kakuma Community",
      quote: "They rebuilt our school quickly and with care.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60&auto=format&fit=crop",
      href: "/partners/amina",
    },
    {
      name: "Daniel",
      role: "Field coordinator",
      org: "ReliefWorks",
      quote: "Volunteer coordination was easy and impactful.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=60&auto=format&fit=crop",
      href: "/partners/daniel",
    },
    {
      name: "Global Partner",
      role: "Strategic partner",
      org: "Global Aid Network",
      quote: "Transparent reporting made us confident to give.",
      avatar:
        "https://images.unsplash.com/photo-1531123414780-fd3d0f4e1b4f?w=800&q=60&auto=format&fit=crop",
      href: "/partners/global",
    },
  ];

  const campaigns = [
    {
      title: "Clean Water for Village X",
      desc: "Drill wells, install filtration and train maintenance teams.",
      image:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&q=60&auto=format&fit=crop",
      raised: 42000,
      goal: 60000,
      href: "/campaigns/water-village-x",
    },
    {
      title: "School Rebuild Program",
      desc: "Rebuild classrooms and provide school supplies for 500 children.",
      image:
        "https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1200&q=60&auto=format&fit=crop",
      raised: 27500,
      goal: 50000,
      href: "/campaigns/school-rebuild",
    },
    {
      title: "Emergency Medical Kits",
      desc: "Supply first-response kits and train local health volunteers.",
      image:
        "https://images.unsplash.com/photo-1584438784816-3a5f29a9b0b3?w=1200&q=60&auto=format&fit=crop",
      raised: 18000,
      goal: 20000,
      href: "/campaigns/medical-kits",
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
                Our Services
              </h1>
              <p className="mt-4 text-lg">
                Programs designed to support communities in crisis and build
                lasting resilience.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <Link
                  href="/contact-us"
                  className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold"
                >
                  Donate
                </Link>
                <Link
                  href="/volunteer"
                  className="border border-white/30 text-white px-5 py-3 rounded-full"
                >
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services: themed cards with icons and short bullets */}
        <section id="services" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">What we provide</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive tools and templates that make fundraising, events
                and volunteer coordination simple and effective.
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
                              <li>• Responsive campaign pages</li>
                              <li>• Fast donation checkout</li>
                              <li>• Integrated volunteer signups</li>
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
                        Learn more
                      </Link>

                      <a
                        href="/contact"
                        className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Get help
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
                <h2 className="text-3xl font-extrabold">How we work</h2>
                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
                  We partner with local organizations, prioritize community
                  leadership, and transparently report outcomes. Below is our
                  simple, repeatable approach that keeps communities at the
                  center.
                </p>

                <div className="mt-10 relative">
                  {/* vertical decorative line for lg+ */}
                  <div className="hidden lg:block absolute left-10 top-6 bottom-6 w-px bg-emerald-100 dark:bg-emerald-700" />

                  <ol className="space-y-10">
                    {[
                      {
                        title: "Assess",
                        body: "Rapid needs assessments with trusted local partners to design relevant, community-led responses.",
                        icon: (
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
                        ),
                      },
                      {
                        title: "Act",
                        body: "Deliver targeted programs, source local teams, and scale what works with careful stewardship of funds.",
                        icon: (
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
                        ),
                      },
                      {
                        title: "Account",
                        body: "Measure outcomes, publish transparent reports, and iterate together with community feedback.",
                        icon: (
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
                              d="M11 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
                            />
                          </svg>
                        ),
                      },
                    ].map((s, idx) => (
                      <li key={idx} className="relative flex items-start gap-6">
                        <div className="shrink-0">
                          <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center ring-1 ring-emerald-100 dark:ring-emerald-700">
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
                <h4 className="font-semibold">Quick metrics</h4>
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
                  Real-time figures across our programs — updated monthly.
                </div>
                <div className="mt-4">
                  <a
                    href="/impact"
                    className="inline-block text-sm font-medium text-emerald-600 hover:underline"
                  >
                    See detailed reports
                  </a>
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
                Partners & Testimonials
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stories from partners and field leaders who see our work in
                action. Real voices, real impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
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
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        className="w-20 h-20 rounded-xl object-cover ring-4 ring-white dark:ring-gray-900 shadow-md"
                      />
                    </div>

                    <div className="flex-1">
                      <blockquote className="text-gray-800 dark:text-gray-100 italic text-lg leading-relaxed">
                        “{t.quote}”
                      </blockquote>

                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100">
                            {t.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {t.role} •{" "}
                            <span className="text-xs text-gray-400">
                              {t.org}
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
              <h3 className="text-2xl font-semibold">Featured campaigns</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hand-picked campaigns that need your support today. Each shows
                progress and what donations will achieve.
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
                          <div>{c.raised.toLocaleString()} raised</div>
                          <div>{c.goal.toLocaleString()} goal</div>
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
                          href={c.href}
                          className="text-sm text-emerald-600 font-medium hover:underline"
                        >
                          View
                        </a>
                        <a
                          href="/contact-us"
                          className="bg-emerald-600 text-white px-3 py-2 rounded-full text-sm"
                        >
                          Donate
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
                      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=60&auto=format&fit=crop"
                      alt="impact"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=60&auto=format&fit=crop"
                      alt="impact"
                      className="w-full h-40 object-cover rounded-xl shadow"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=60&auto=format&fit=crop"
                      alt="impact"
                      className="w-full h-40 object-cover rounded-xl shadow"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-6 left-6 hidden md:block">
                  <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg w-64">
                    <div className="text-sm text-gray-500">
                      Recent milestone
                    </div>
                    <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                      10,000 meals delivered
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      Thanks to donors and volunteers across our programs.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                  Impact snapshot
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">
                  A quick view of the measurable outcomes our programs deliver —
                  transparent, local-led, and accountable.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow flex flex-col items-start">
                    <div className="text-sm text-gray-500">People served</div>
                    <div className="mt-2 text-2xl font-bold text-emerald-600">
                      <Counter end={24500} />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Since Jan 2024
                    </div>
                  </div>

                  <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow flex flex-col items-start">
                    <div className="text-sm text-gray-500">
                      Projects completed
                    </div>
                    <div className="mt-2 text-2xl font-bold text-emerald-600">
                      <Counter end={124} />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Across 20 regions
                    </div>
                  </div>

                  <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow flex flex-col items-start">
                    <div className="text-sm text-gray-500">
                      Volunteers active
                    </div>
                    <div className="mt-2 text-2xl font-bold text-emerald-600">
                      <Counter end={842} />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Field & remote
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
