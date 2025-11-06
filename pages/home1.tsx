import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";

// Small CountUp component that starts when it scrolls into view
function Counter({
  end,
  suffix = "",
  duration = 1400,
}: {
  end: number;
  suffix?: string;
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
      {suffix}
    </div>
  );
}

export default function Home1() {
  const impactMetrics = [
    { label: "Donations", end: 120, suffix: "K+", duration: 1200 },
    { label: "Donors", end: 8, suffix: "K+", duration: 1200 },
    { label: "Campaigns", end: 500, suffix: "+", duration: 1200 },
  ];

  const getInvolved = [
    {
      title: "Donate",
      desc: "Support ongoing campaigns with a one-time or recurring gift.",
      href: "/donate",
      cta: "Give now",
      style: "accent",
    },
    {
      title: "Volunteer",
      desc: "Join local initiatives or help remotely — we make signups easy.",
      href: "/volunteer",
      cta: "Sign up",
      style: "outline",
    },
    {
      title: "Host an event",
      desc: "Use our event templates to run fundraisers, workshops and community meetups.",
      href: "/events",
      cta: "Create event",
      style: "neutral",
    },
    {
      title: "Spread the word",
      desc: "Share campaigns on social media to amplify your impact.",
      href: "#",
      cta: "Share",
      style: "neutral",
    },
  ];

  const howSteps = [
    {
      step: "Step 1",
      title: "Create your page",
      desc: "Pick a template, add your story and images — no design skills required.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
        </svg>
      ),
    },
    {
      step: "Step 2",
      title: "Share & collect",
      desc: "Share across social media, email and embed the donation component — supporters give in seconds.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A2 2 0 0122 9.618V18a2 2 0 01-2 2H4a2 2 0 01-2-2V9.618a2 2 0 011.447-1.894L8 10m4 0v6"
          />
        </svg>
      ),
    },
    {
      step: "Step 3",
      title: "Manage & report",
      desc: "Track donations, export reports and share outcomes with supporters to build trust.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17v-6a3 3 0 013-3h0a3 3 0 013 3v6M5 21h14"
          />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        "Using the fundraising templates helped us double donations in one quarter.",
      name: "Charity A",
      role: "Campaign Lead",
      avatar: "CA",
      bg: "bg-emerald-600",
    },
    {
      quote: "Event management was simple — RSVPs and ticketing in minutes.",
      name: "Nonprofit B",
      role: "Events Coordinator",
      avatar: "NB",
      bg: "bg-emerald-500",
    },
    {
      quote: "Volunteers signed up quickly thanks to the clean signup flow.",
      name: "Org C",
      role: "Volunteer Manager",
      avatar: "OC",
      bg: "bg-emerald-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 caret-transparent">
      <SiteHeadder />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-r from-emerald-600 to-emerald-400 text-white">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* subtle pattern */}
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 800 600"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop stopColor="#ffffff" stopOpacity="0.06" offset="0" />
                  <stop stopColor="#ffffff" stopOpacity="0.02" offset="1" />
                </linearGradient>
              </defs>
              <rect width="800" height="600" fill="url(#g1)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                  NGO · Charity · Fundraising
                </div>

                <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md">
                  Empower Communities. Transform Lives.
                </h1>

                <p className="mt-4 text-lg text-white/95 max-w-xl">
                  Beautiful templates and tools built for nonprofits — tell your
                  story, accept donations, organize volunteers, and report
                  impact.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 items-center">
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-3 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold shadow hover:scale-[1.02] transform transition"
                  >
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                      />
                    </svg>
                    Donate Now
                  </Link>

                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-full hover:bg-white/10 transition"
                  >
                    Explore Services
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>

                <div className="mt-8 flex gap-8 text-white/95">
                  <div>
                    <div className="text-3xl font-bold">120K+</div>
                    <div className="text-sm opacity-90">Donations raised</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">8K+</div>
                    <div className="text-sm opacity-90">Volunteers engaged</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 p-6 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=60"
                    alt="community"
                    className="w-full h-80 object-cover rounded-lg"
                  />

                  {/* small overlay card */}
                  <div className="absolute left-6 bottom-6 bg-white/95 text-gray-900 rounded-xl p-4 shadow-lg w-56 transform -translate-y-6">
                    <div className="text-sm font-semibold">Recent donation</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold">$320</div>
                        <div className="text-xs text-gray-600">
                          from Maria S.
                        </div>
                      </div>
                      <div className="text-emerald-600 font-semibold text-sm">
                        Live
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* decorative wave */}
          <div className="-mt-2">
            <svg
              viewBox="0 0 1440 48"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 48h1440V0C960 24 480 24 0 0v48z"
                fill="currentColor"
                className="text-white/95"
              />
            </svg>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-16 bg-linear-to-b from-white/0 via-white/5 to-white/0 dark:from-transparent"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* left: copy + features */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  About our templates
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
                  Designed with NGOs, charities and fundraisers in mind —
                  flexible templates that make storytelling, donations and
                  volunteer management simple and effective.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
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
                      <div className="font-semibold">Easy to customize</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Drag & drop sections, use preset styles and launch
                        quickly.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 11c0-3.866 3.582-7 8-7v14c-4.418 0-8-3.134-8-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Secure donations</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        PCI-ready flows, multiple gateways and donor receipts.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 9l3 3-3 3M13 9l3 3-3 3"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Volunteer tools</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Signup forms, scheduling and shift management built in.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7h18M6 7v10a2 2 0 002 2h8a2 2 0 002-2V7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Events & ticketing</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Create public events, sell tickets and manage attendees.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href="/services"
                    className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-md font-semibold shadow hover:opacity-95"
                  >
                    See services
                  </Link>
                  <Link
                    href="/donate"
                    className="inline-block border border-emerald-600 text-emerald-600 px-5 py-3 rounded-md"
                  >
                    Start a campaign
                  </Link>
                </div>

                <div className="mt-8 flex gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">120K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Donations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">8K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Volunteers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Campaigns
                    </div>
                  </div>
                </div>
              </div>

              {/* right: mosaic image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60"
                      alt="volunteers"
                      className="rounded-xl shadow-lg h-40 w-full object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=60"
                      alt="community"
                      className="rounded-xl shadow-lg h-40 w-full object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60"
                      alt="event"
                      className="rounded-xl shadow-lg h-40 w-full object-cover col-span-2"
                    />
                  </div>

                  <div className="absolute -left-6 -top-6 bg-white/95 dark:bg-gray-900 rounded-xl p-3 shadow-md">
                    <div className="text-xs text-gray-500">Featured</div>
                    <div className="text-sm font-semibold">
                      Community Impact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works / Features - refreshed */}
        <section id="how" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">How it works</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Launch a campaign in minutes — build fast pages, accept
                donations, recruit volunteers and show impact.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {howSteps.map((s, i) => (
                <article
                  key={i}
                  className="relative rounded-2xl bg-white dark:bg-gray-800 p-6 border border-transparent hover:border-emerald-100 shadow-md hover:shadow-xl transform transition hover:-translate-y-2  "
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-linear-to-br from-emerald-100 to-emerald-300 dark:from-emerald-900 dark:to-emerald-700 shadow-lg">
                      {/* keep icon color neutral so svg inherits */}
                      <div className="text-emerald-700 dark:text-emerald-200">
                        {s.icon}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900 text-emerald-600 text-sm font-semibold">
                      {s.step}
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {s.title}
                    </h4>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-emerald-600 hover:underline"
                    >
                      Learn how
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Partners — polished layout */}
        <section
          id="impact"
          className="py-20 bg-linear-to-b from-white/60 to-white/0 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* metrics */}
              <div className="w-full lg:w-1/3">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold">Impact & partners</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-lg">
                    Trusted by nonprofits and supported by partners who help us
                    scale projects and reach more people.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {impactMetrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center"
                    >
                      <Counter
                        end={m.end}
                        suffix={m.suffix}
                        duration={m.duration}
                      />
                      <div className="text-xs text-gray-500 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* partner badges */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white/50 dark:bg-gray-800/40 rounded-xl p-6 shadow-inner">
                  <div className="flex items-center justify-center flex-wrap gap-4">
                    {[
                      "Hope Foundation",
                      "CharityWorks",
                      "GoodHands",
                      "BrightAid",
                      "LocalCare",
                    ].map((name, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center w-36 h-16 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:scale-105 transition transform overflow-hidden"
                      >
                        <svg
                          width="88"
                          height="36"
                          viewBox="0 0 88 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="max-h-8"
                        >
                          <rect
                            width="88"
                            height="36"
                            rx="6"
                            fill={i % 2 === 0 ? "#E6FFFA" : "#F0FFF4"}
                          />
                          <text
                            x="44"
                            y="22"
                            textAnchor="middle"
                            fill="#065f46"
                            fontSize="10"
                            fontFamily="Inter, sans-serif"
                          >
                            {name}
                          </text>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved — new card band look */}
        <section
          id="get-involved"
          className="py-16 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">Get involved</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Pick one of the simple ways to help — each option gives you a
                clear next step.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getInvolved.map((item, idx) => (
                <article
                  key={idx}
                  className="relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 transform transition hover:-translate-y-3 hover:shadow-2xl"
                >
                  {/* top accent band */}
                  <div
                    className="h-16 w-full"
                    style={{
                      background:
                        idx % 2 === 0
                          ? "linear-gradient(90deg, rgba(16,185,129,0.08), rgba(236,253,245,0.02))"
                          : "linear-gradient(90deg, rgba(6,95,70,0.04), rgba(255,255,255,0))",
                    }}
                  />

                  <div className="p-6 flex flex-col items-start">
                    <div className="-mt-10 mb-3 w-20 h-20 rounded-xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-900 shadow-sm ring-1 ring-emerald-100">
                      {/* icon */}
                      {idx === 0 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 21s-6-4.35-9-7.5A5 5 0 0112 3a5 5 0 019 10.5C18 16.65 12 21 12 21z"
                          />
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m8-4a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {idx === 3 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 8a3 3 0 11-6 0 3 3 0 016 0zM19 20l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
                          />
                        </svg>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials — refreshed card style */}
        <section
          id="testimonials"
          className="py-16 bg-gray-50 dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">Success Stories</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real results from organizations using the templates. Short,
                believable quotes with the person and role shown.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  className="relative p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-emerald-500 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h8m-8 4h6"
                    />
                  </svg>

                  <p className="mt-2 text-gray-700 dark:text-gray-200 leading-relaxed">
                    “{t.quote}”
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="hidden sm:block">
                      <div
                        className={`${t.bg} w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold`}
                      >
                        <img
                          src={t.avatar}
                          alt=""
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {t.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
