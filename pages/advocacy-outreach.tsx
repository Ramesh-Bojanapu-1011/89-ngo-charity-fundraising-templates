import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SiteHeadder from "../src/components/SiteHeadder";
import SiteFooter from "../src/components/SiteFooter";

type Campaign = {
  id: string;
  title: string;
  goal: number;
  raised: number;
  image: string;
  summary: string;
  tags?: string[];
};

const CAMPAIGNS: Campaign[] = [
  {
    id: "c1",
    title: "advocacy.campaigns.c1.title",
    goal: 25000,
    raised: 18250,
    image:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1200&auto=format&fit=crop",
    summary: "advocacy.campaigns.c1.summary",
    tags: ["Community", "Outreach", "Advocacy"],
  },
  {
    id: "c2",
    title: "advocacy.campaigns.c2.title",
    goal: 15000,
    raised: 6400,
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    summary: "advocacy.campaigns.c2.summary",
    tags: ["Education", "Advocacy", "Training"],
  },
  {
    id: "c3",
    title: "advocacy.campaigns.c3.title",
    goal: 40000,
    raised: 31000,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    summary: "advocacy.campaigns.c3.summary",
    tags: ["Community", "Mobilization", "Advocacy"],
  },
  {
    id: "c4",
    title: "advocacy.campaigns.c4.title",
    goal: 18000,
    raised: 9200,
    image:
      "https://images.unsplash.com/photo-1515165562835-c4c8b815a3e8?q=80&w=1200&auto=format&fit=crop",
    summary: "advocacy.campaigns.c4.summary",
    tags: ["Youth", "Leadership", "Advocacy"],
  },
  {
    id: "c5",
    title: "advocacy.campaigns.c5.title",
    goal: 30000,
    raised: 14500,
    image:
      "https://images.unsplash.com/photo-1576765607924-b53bb3b6f066?q=80&w=1200&auto=format&fit=crop",
    summary: "advocacy.campaigns.c5.summary",
    tags: ["Health", "Awareness", "Outreach"],
  },
  {
    id: "c6",
    title: "advocacy.campaigns.c6.title",
    goal: 12000,
    raised: 7600,
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
    summary: "advocacy.campaigns.c6.summary",
    tags: ["Technology", "Digital", "Advocacy"],
  },
];

export default function GrantApplicationManager() {
  const [selected, setSelected] = useState<Campaign | null>(CAMPAIGNS[0]);
  const [donation, setDonation] = useState<number>(50);
  const [status, setStatus] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string>("all");
  const { t } = useTranslation();

  const allTags = Array.from(
    new Set(CAMPAIGNS.flatMap((c) => c.tags ?? [])),
  ).sort();
  const filterTags = ["all", ...allTags];

  function tagKey(tag: string) {
    return `advocacy.tags.${tag.toLowerCase().replace(/\s+/g, "_")}`;
  }

  function handleDonate(e?: React.FormEvent) {
    e?.preventDefault();
    setStatus("Processing your sign-up — thank you!");
    setTimeout(() => {
      setStatus(
        "Thank you — your sign-up is received (demo). We will follow up by email.",
      );
    }, 800);
  }

  function percent(c: Campaign) {
    return Math.min(100, Math.round((c.raised / c.goal) * 100));
  }

  // Small CountUp component for subtle animations
  function Counter({
    end,
    prefix = "",
    duration = 1400,
  }: {
    end: number;
    prefix?: string;
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
      <div ref={ref}>
        {prefix}
        {value.toLocaleString()}
      </div>
    );
  }

  // Metrics data for Impact Snapshot (rendered via map)
  const METRICS = [
    {
      id: "campaignsLaunched",
      label: "Campaigns Launched",
      value: 120,
      duration: 1000,
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
            d="M13 16h-1v-4h-1m2 4h1v-4h1m-6 0v4h1v-4h-1zm6-5a2 2 0 10-4 0v1h4v-1z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19v2m-6-2a9 9 0 1118 0H6z"
          />
        </svg>
      ),
    },
    {
      id: "activeInitiatives",
      label: "Active Initiatives",
      value: CAMPAIGNS.length,
      duration: 700,
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
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
      ),
    },
    {
      id: "peopleReached",
      label: "People Reached",
      value: 250000,
      duration: 1200,
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
            d="M17 20h5v-2a4 4 0 00-4-4h-1m-4 6H6a4 4 0 01-4-4v-2a4 4 0 014-4h7m0 0V4m0 6l-3-3m3 3l3-3"
          />
        </svg>
      ),
    },
    {
      id: "partnersEngaged",
      label: "Partner Organizations",
      value: 85,
      duration: 900,
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
            d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm0 0v4"
          />
        </svg>
      ),
    },
  ];

  // Small set of upcoming events for the CTA panel
  const EVENTS = [
    {
      id: "e1",
      title: t("advocacy.events.e1.title"),
      date: "Nov 22",
      location: t("advocacy.events.e1.location"),
      spots: 60,
    },
    {
      id: "e2",
      title: t("advocacy.events.e2.title"),
      date: "Dec 6",
      location: t("advocacy.events.e2.location"),
      spots: 45,
    },
    {
      id: "e3",
      title: t("advocacy.events.e3.title"),
      date: "Jan 10",
      location: t("advocacy.events.e3.location"),
      spots: 100,
    },
  ];

  // FAQs driven by React state so we can filter/search easily
  const FAQS = [
    {
      id: "f1",
      q: "How can I start an advocacy campaign in my community?",
      a: "You can start by joining our Advocacy & Outreach network. We provide step-by-step resources, mentorship, and campaign templates to help you mobilize your community effectively.",
      category: "Advocacy & Outreach",
    },
    {
      id: "f2",
      q: "Do I need prior experience to participate in outreach programs?",
      a: "Not at all. Our training sessions and workshops are designed for all levels — from beginners to experienced advocates. We’ll guide you through every stage of your advocacy journey.",
      category: "Advocacy & Outreach",
    },
    {
      id: "f3",
      q: "How do you measure the impact of advocacy campaigns?",
      a: "We track engagement data, policy outcomes, event attendance, and community feedback to assess how effectively each campaign raises awareness and drives change.",
      category: "Advocacy & Outreach",
    },
    {
      id: "f4",
      q: "Can I collaborate with local organizations for outreach projects?",
      a: "Yes, partnerships are a key part of our approach. You can collaborate with NGOs, schools, or civic groups to expand reach and amplify advocacy efforts in your region.",
      category: "Advocacy & Outreach",
    },
  ];

  // FAQ UI state
  const [faqQuery, setFaqQuery] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const faqCategories = Array.from(new Set(FAQS.map((f) => f.category)));

  return (
    <>
      <Head>
        <title>Advocacy & Outreach — Emerald Aid</title>
        <meta
          name="description"
          content="Plan and run advocacy campaigns — mobilize supporters, coordinate outreach events, and measure impact for verified causes."
        />
      </Head>

      <SiteHeadder />

      <main className=" caret-transparent">
        {/* Hero — refreshed look */}
        <section className="relative min-h-screen flex items-center justify-center  bg-linear-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800      ">
          <div className="relative max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {t("advocacy.hero.badge")}
                  </span>
                  <span className="text-sm text-slate-500">
                    {t("advocacy.hero.updated")}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
                  {t("advocacy.hero.title")}
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  {t("advocacy.hero.lead")}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#campaigns"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full shadow hover:scale-[1.01] transition-transform"
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
                        d="M12 8v8m0 0l-3-3m3 3l3-3"
                      />
                    </svg>
                    {t("advocacy.hero.cta.explore")}
                  </a>
                  <a
                    href="#featured"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-200 text-emerald-700 rounded-full"
                  >
                    {t("advocacy.hero.cta.start")}
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop"
                    alt="advocacy outreach"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/80 p-3 rounded-lg shadow-md">
                    <div className="text-sm text-emerald-700 font-semibold">
                      {t(`advocacy.campaigns.${selected?.id}.title`)}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t("advocacy.hero.supporters", {
                        raised: selected?.raised?.toLocaleString(),
                        goal: selected?.goal?.toLocaleString(),
                        percent: percent(selected || CAMPAIGNS[0]),
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaigns grid */}
        <section
          id="campaigns"
          className="py-16 bg-linear-to-b from-white to-emerald-50 dark:from-slate-800 dark:to-slate-900"
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-8 ">
            <h2 className="text-2xl text-center font-bold text-emerald-800 mb-4">
              {t("advocacy.campaignsTitle")}
            </h2>
            <div className="mb-4 flex flex-wrap justify-center items-center gap-2">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={activeTag === tag}
                  className={
                    `text-sm px-3 py-1 rounded-full border transition ` +
                    (activeTag === tag
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white/60 dark:bg-slate-800/60 text-slate-700 border-slate-200")
                  }
                >
                  {tag === "All"
                    ? t("advocacy.tags.all")
                    : t(
                        `advocacy.tags.${tag
                          .toLowerCase()
                          .replace(/\s+/g, "_")}`,
                        { defaultValue: tag },
                      )}
                </button>
              ))}
            </div>

            {/* filtered list */}
            {/** compute filtered campaigns */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTag === "all"
                ? CAMPAIGNS
                : CAMPAIGNS.filter((c) => c.tags?.includes(activeTag))
              ).map((c) => (
                <article
                  key={c.id}
                  className="group bg-white dark:bg-slate-800 rounded-lg   shadow-sm transform transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-48 md:h-40 lg:h-44">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent mix-blend-multiply" />

                    <div className="absolute left-4 bottom-4">
                      <h3 className="text-lg font-bold text-white drop-shadow">
                        {t(`advocacy.campaigns.${c.id}.title`, {
                          defaultValue: c.title,
                        })}
                      </h3>
                      <p className="text-xs text-white/90 max-w-xs line-clamp-2">
                        {t(`advocacy.campaigns.${c.id}.summary`, {
                          defaultValue: c.summary,
                        })}
                      </p>
                    </div>

                    <div className="absolute -top-3 right-3 bg-white dark:bg-slate-900/90 rounded-full p-2 shadow-md text-emerald-700 font-semibold text-sm">
                      {percent(c)}%
                    </div>
                  </div>

                  <div className="p-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-slate-700 dark:text-slate-300">
                          {c.raised.toLocaleString()}{" "}
                          {t("advocacy.labels.supporters")}
                        </div>
                        <div className="text-xs text-slate-400">
                          {t("advocacy.labels.target")}{" "}
                          {c.goal.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {c.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full"
                          >
                            {t(
                              `advocacy.tags.${tag
                                .toLowerCase()
                                .replace(/\s+/g, "_")}`,
                              { defaultValue: tag },
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => setSelected(c)}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-md bg-emerald-600 text-white text-sm transition group-hover:scale-[1.02]"
                      >
                        {t("advocacy.actions.details")}
                      </button>
                      <button
                        onClick={() => {
                          setSelected(c);
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-md border border-emerald-200 text-emerald-700 text-sm bg-white/60"
                      >
                        {t("advocacy.actions.join")}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured campaign + donate CTA — new layout */}
        <section
          id="featured"
          className="py-8 bg-linear-to-b from-white to-emerald-50 dark:from-slate-800 dark:to-slate-900"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
            {/* Left: visual with circular progress */}
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800">
              <img
                src={selected?.image}
                alt={selected?.title}
                className="w-full h-full object-top object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30 opacity-80" />

              <div className="absolute left-6 bottom-6 flex items-center gap-6">
                <div className="flex items-center gap-4">
                  {/* circular progress (simple ring using border) */}
                  <div className="relative w-24 h-24 rounded-full bg-white/95 dark:bg-slate-900/90 flex items-center justify-center shadow">
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold text-emerald-700">
                          {percent(selected || CAMPAIGNS[0])}%
                        </div>
                        <div className="text-xs text-slate-500">Staffed</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-white max-w-xs">
                    <div className="text-sm uppercase text-emerald-200 font-semibold">
                      {selected?.title}
                    </div>
                    <div className="text-xs text-white/90 mt-1">
                      Supporters {selected?.raised?.toLocaleString()} of{" "}
                      {selected?.goal?.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: donate card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">
                  {t(`advocacy.campaigns.${selected?.id}.title`)}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  {t(`advocacy.campaigns.${selected?.id}.summary`)}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[5, 10, 20].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setDonation(amt)}
                      className={`py-2 rounded-md text-sm font-medium border ${
                        donation === amt
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white dark:bg-slate-900 text-slate-700 border-slate-200"
                      }`}
                    >
                      {amt} actions
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded text-emerald-600"
                      aria-checked={false}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Make this an ongoing campaign
                    </span>
                  </label>
                </div>

                <form onSubmit={handleDonate} className="mt-4">
                  <label className="text-sm">Custom actions</label>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="number"
                      min={1}
                      value={donation}
                      onChange={(e) => setDonation(Number(e.target.value || 0))}
                      className="w-full p-3 border rounded-md"
                    />
                    <button
                      type="submit"
                      className="px-4 bg-emerald-600 text-white rounded-md"
                    >
                      Participate
                    </button>
                  </div>
                </form>

                {status && (
                  <div className="text-sm text-emerald-700 mt-3">{status}</div>
                )}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-emerald-50 rounded-md p-3 text-center">
                  <div className="font-bold text-emerald-700">
                    {selected ? percent(selected) : 0}%
                  </div>
                  <div className="text-slate-500">Engaged</div>
                </div>
                <div className="bg-white dark:bg-slate-900/60 rounded-md p-3 text-center">
                  <div className="font-bold text-emerald-700">
                    {selected?.raised
                      ? `${selected.raised.toLocaleString()}`
                      : "-"}
                  </div>
                  <div className="text-slate-500">Supporters</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact stats — mapped metrics (array -> map) */}
        <section className="  flex justify-center items-center   bg-linear-to-b from-white to-emerald-50 dark:from-slate-800 dark:to-slate-900  px-6">
          <div className=" flex flex-col max-w-6xl w-full py-8">
            <h2 className="text-2xl text-center font-bold text-emerald-800 mb-4">
              {t("advocacy.metricsTitle")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {METRICS.map((m) => (
                <div
                  key={m.id}
                  className="relative overflow-hidden w-50 rounded-lg p-6 text-center shadow-sm bg-linear-to-b from-white to-emerald-50 dark:from-slate-800 dark:to-slate-900"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3 mb-3">
                    <div className="p-3 rounded-full bg-white dark:bg-slate-900 shadow-sm">
                      {m.icon}
                    </div>
                  </div>

                  <div className="relative z-10 text-3xl font-extrabold text-emerald-600">
                    <Counter end={m.value} duration={m.duration} />
                  </div>

                  <div className="relative z-10 text-sm text-slate-500 mt-2">
                    {t(`advocacy.metrics.${m.id}`, { defaultValue: m.label })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer & Events CTA — new layout: upcoming events + signup */}
        <section className="    py-18 bg-linear-to-b from-white to-emerald-50 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
            {/* Left: headline + description */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-emerald-800">
                {t("advocacy.cta.title")}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mt-3">
                {t("advocacy.cta.lead")}
              </p>

              <div className="mt-4 flex gap-2">
                <a
                  href="#campaigns"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md shadow-sm"
                >
                  Get Involved
                </a>
              </div>
            </div>

            {/* Middle: upcoming events list */}
            <div className="md:col-span-1 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-emerald-700 mb-3">
                {t("advocacy.eventsTitle")}
              </h4>
              <ul className="flex flex-col gap-3">
                {EVENTS.map((ev) => (
                  <li
                    key={ev.id}
                    className="flex items-center justify-between gap-3 p-2 rounded-md hover:bg-emerald-50 dark:hover:bg-slate-900 transition"
                  >
                    <div>
                      <div className="text-sm font-semibold text-emerald-800">
                        {ev.title}
                      </div>
                      <div className="text-xs text-slate-500">
                        {ev.date} • {ev.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-emerald-700">
                        {ev.spots}
                      </div>
                      <div className="text-xs text-slate-400">
                        {t("advocacy.events.spots")}
                      </div>
                      <button
                        onClick={() => setSelected(CAMPAIGNS[0])}
                        className="mt-2 ml-auto inline-flex items-center px-3 py-1 rounded-full bg-emerald-600 text-white text-xs"
                      >
                        {t("advocacy.actions.rsvp")}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Help Center + Contact (React-driven FAQs) */}
        <section className="bg-linear-to-b from-white to-emerald-50 dark:from-slate-800 dark:to-slate-900 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl text-center font-bold text-emerald-800 mb-4">
              {t("advocacy.faqsTitle")}
            </h2>

            <div className="grid  gap-6">
              {/* Left: searchable, categorized FAQs (accordion style) */}
              <div>
                <div className="mb-4">
                  <div className="mt-3 flex gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setFaqQuery("")}
                      className={`text-sm px-3 py-1 rounded-full border ${
                        faqQuery === ""
                          ? "bg-emerald-600 text-white"
                          : "bg-white/60 text-slate-700"
                      }`}
                    >
                      {t("advocacy.tags.all")}
                    </button>
                    {faqCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFaqQuery(cat)}
                        className={`text-sm px-3 py-1 rounded-full border ${
                          faqQuery === cat
                            ? "bg-emerald-600 text-white"
                            : "bg-white/60 text-slate-700"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  {(() => {
                    const q = faqQuery.trim().toLowerCase();
                    const filtered = FAQS.filter((f) => {
                      if (!q) return true;
                      return (f.q + " " + f.a + " " + f.category)
                        .toLowerCase()
                        .includes(q);
                    });

                    if (!filtered.length) {
                      return (
                        <div className="text-sm text-slate-500">
                          {t("advocacy.faqs.noResults")}
                        </div>
                      );
                    }

                    return (
                      <div className="grid   gap-4">
                        {filtered.map((f) => (
                          <div
                            aria-expanded={openFaq === f.id}
                            onClick={() =>
                              setOpenFaq(openFaq === f.id ? null : f.id)
                            }
                            key={f.id}
                            className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-1">
                                <div className="flex items-center justify-between gap-3">
                                  <div>
                                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                                      {t(`advocacy.faqs.${f.id}.q`, {
                                        defaultValue: f.q,
                                      })}
                                    </div>
                                    <div className="text-xs text-emerald-700 mt-1">
                                      {f.category}
                                    </div>
                                  </div>
                                  <button className="text-slate-400 hover:text-slate-600">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className={`w-5 h-5 transform ${
                                        openFaq === f.id ? "rotate-180" : ""
                                      }`}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  </button>
                                </div>

                                <div
                                  className={`mt-3 text-sm text-slate-500 transition-opacity duration-300 ${
                                    openFaq === f.id
                                      ? "opacity-100"
                                      : "opacity-0 h-0 overflow-hidden"
                                  }`}
                                >
                                  {t(`advocacy.faqs.${f.id}.a`, {
                                    defaultValue: f.a,
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA — last section with mini inline contact form */}
        <section className=" py-16 bg-linear-to-b from-white to-emerald-50 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-lg p-6  shadow-md grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-emerald-100 text-emerald-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">
                      {t("advocacy.contact.title")}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      {t("advocacy.contact.lead")}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full shadow-sm"
                      >
                        {t("advocacy.contact.cta")}
                      </a>

                      <a
                        href="mailto:events@emeraldaid.org"
                        className="inline-flex items-center gap-2 px-3 py-2 border border-emerald-200 text-emerald-700 rounded-md"
                      >
                        {t("advocacy.contact.email", {
                          defaultValue: "outreach@emeraldaid.org",
                        })}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
