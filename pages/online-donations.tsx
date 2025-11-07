import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SiteHeadder from "../src/components/SiteHeadder";
import SiteFooter from "../src/components/SiteFooter";

type Campaign = {
  id: string;
  goal: number;
  raised: number;
  image: string;
  tags?: string[]; // tag identifiers
};

// Keep language-agnostic fields in code (ids, numbers, images, tags).
const CAMPAIGNS: Campaign[] = [
  {
    id: "c1",
    goal: 25000,
    raised: 18250,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    tags: ["water", "online"],
  },
  {
    id: "c2",
    goal: 15000,
    raised: 6400,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    tags: ["education", "online"],
  },
  {
    id: "c3",
    goal: 40000,
    raised: 31000,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    tags: ["emergency", "online"],
  },
  {
    id: "c4",
    goal: 18000,
    raised: 9200,
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
    tags: ["education", "women", "online"],
  },
  {
    id: "c5",
    goal: 30000,
    raised: 14500,
    image:
      "https://images.unsplash.com/photo-1580281657527-6c1b7dcb9b7d?q=80&w=1200&auto=format&fit=crop",
    tags: ["health", "online"],
  },
  {
    id: "c6",
    goal: 12000,
    raised: 7600,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    tags: ["livelihoods", "online"],
  },
];

export default function DonationCampaigns() {
  const { t, i18n } = useTranslation();

  type LocalizedCampaign = Campaign & { title?: string; summary?: string };

  const [selected, setSelected] = useState<LocalizedCampaign | null>(null);
  const [donation, setDonation] = useState<number>(50);
  const [status, setStatus] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string>("all");

  const allTags = Array.from(
    new Set(CAMPAIGNS.flatMap((c) => c.tags ?? [])),
  ).sort();
  const filterTags = ["all", ...allTags];

  // Build localized campaigns (no returnObjects: translate per-id fields)
  const localizedCampaigns: LocalizedCampaign[] = CAMPAIGNS.map((c) => ({
    ...c,
    title: t(`onlineDonations.campaigns.${c.id}.title`),
    summary: t(`onlineDonations.campaigns.${c.id}.summary`),
  }));

  useEffect(() => {
    setSelected(localizedCampaigns[0] ?? null);
  }, [i18n.language]);

  function handleDonate(e?: React.FormEvent) {
    e?.preventDefault();
    setStatus(t("onlineDonations.processing"));
    setTimeout(() => {
      setStatus(t("onlineDonations.thanks"));
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
      id: "donors",
      label: "donors",
      value: 1240,
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
            d="M17 20h5v-2a4 4 0 00-4-4h-1"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 20H4v-2a4 4 0 014-4h1"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 12a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
      ),
    },
    {
      id: "campaigns",
      label: "campaigns",
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
      id: "raised",
      label: "raised",
      value: 123450,
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v4m0 8v4"
          />
        </svg>
      ),
    },
    {
      id: "volunteers",
      label: "volunteers",
      value: 320,
      duration: 900,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
        >
          <path
            fill="#009966"
            d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
          ></path>
        </svg>
      ),
    },
  ];

  // Small set of upcoming events for the CTA panel
  const EVENTS = [
    { id: "e1", date: "Nov 22", location: "Online Event", spots: 100 },
    { id: "e2", date: "Dec 6", location: "City Center & Online", spots: 120 },
    { id: "e3", date: "Jan 10", location: "Virtual (Zoom)", spots: 60 },
  ];

  // FAQs driven by React state so we can filter/search easily
  const FAQS = [
    { id: "f1", category: "Donations" },
    { id: "f2", category: "Donations" },
    { id: "f3", category: "Donations" },
    { id: "f4", category: "Donations" },
  ];

  // FAQ UI state
  const [faqQuery, setFaqQuery] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const faqCategories = Array.from(new Set(FAQS.map((f) => f.category)));

  return (
    <>
      <Head>
        <title>{t("onlineDonations.meta.title")}</title>
        <meta
          name="description"
          content={t("onlineDonations.meta.description")}
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
                    {t("onlineDonations.hero.badge")}
                  </span>
                  <span className="text-sm text-slate-500">
                    {t("onlineDonations.hero.updated")}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
                  {t("onlineDonations.hero.title")}
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  {t("onlineDonations.hero.lead")}
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
                    {t("onlineDonations.hero.ctaBrowse")}
                  </a>
                  <a
                    href="#featured"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-200 text-emerald-700 rounded-full"
                  >
                    {t("onlineDonations.hero.ctaDonate")}
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop"
                    alt="volunteers"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/80 p-3 rounded-lg shadow-md">
                    <div className="text-sm text-emerald-700 font-semibold">
                      {selected?.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t("onlineDonations.labels.raisedPrefix")} $
                      {selected?.raised?.toLocaleString()}{" "}
                      {t("onlineDonations.labels.of")} $
                      {selected?.goal?.toLocaleString()} (
                      {percent(selected || CAMPAIGNS[0])}%)
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
              {t("onlineDonations.campaignsTitle")}
            </h2>
            <div className="mb-4 flex flex-wrap justify-center items-center gap-2">
              {filterTags.map((tk) => (
                <button
                  key={tk}
                  onClick={() => setActiveTag(tk)}
                  aria-pressed={activeTag === tk}
                  className={
                    `text-sm px-3 py-1 rounded-full border transition ` +
                    (activeTag === tk
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white/60 dark:bg-slate-800/60 text-slate-700 border-slate-200")
                  }
                >
                  {tk === "all"
                    ? t("onlineDonations.tags.all")
                    : t(`onlineDonations.tags.${tk}`)}
                </button>
              ))}
            </div>

            {/* filtered list */}
            {/** compute filtered campaigns */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTag === "all"
                ? localizedCampaigns
                : localizedCampaigns.filter((c) => c.tags?.includes(activeTag))
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
                        {c.title}
                      </h3>
                      <p className="text-xs text-white/90 max-w-xs line-clamp-2">
                        {c.summary}
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
                          ${c.raised.toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-400">
                          of ${c.goal.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {c.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full"
                          >
                            {t(`onlineDonations.tags.${tag}`)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => setSelected(c)}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-md bg-emerald-600 text-white text-sm transition group-hover:scale-[1.02]"
                      >
                        {t("onlineDonations.view")}
                      </button>
                      <button
                        onClick={() => {
                          setSelected(c);
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-md border border-emerald-200 text-emerald-700 text-sm bg-white/60"
                      >
                        {t("onlineDonations.donate")}
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
                        <div className="text-xs text-slate-500">Funded</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-white max-w-xs">
                    <div className="text-sm uppercase text-emerald-200 font-semibold">
                      {selected?.title}
                    </div>
                    <div className="text-xs text-white/90 mt-1">
                      {t("onlineDonations.labels.raisedPrefix")} $
                      {selected?.raised?.toLocaleString()}{" "}
                      {t("onlineDonations.labels.of")} $
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
                  {selected?.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  {selected?.summary}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[25, 50, 100].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setDonation(amt)}
                      className={`py-2 rounded-md text-sm font-medium border ${
                        donation === amt
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white dark:bg-slate-900 text-slate-700 border-slate-200"
                      }`}
                    >
                      ${amt}
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
                      {t("onlineDonations.monthlyDonation")}
                    </span>
                  </label>
                </div>

                <form onSubmit={handleDonate} className="mt-4">
                  <label className="text-sm">
                    {t("onlineDonations.customAmount")}
                  </label>
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
                      {t("onlineDonations.donate")}
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
                  <div className="text-slate-500">
                    {t("onlineDonations.labels.funded")}
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/60 rounded-md p-3 text-center">
                  <div className="font-bold text-emerald-700">
                    {selected?.raised
                      ? `$${selected.raised.toLocaleString()}`
                      : "-"}
                  </div>
                  <div className="text-slate-500">
                    {t("onlineDonations.labels.raised")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact stats — mapped metrics (array -> map) */}
        <section className="  flex justify-center items-center   bg-linear-to-b from-white to-emerald-50 dark:from-slate-800 dark:to-slate-900  px-6">
          <div className=" flex flex-col max-w-6xl w-full py-8">
            <h2 className="text-2xl text-center font-bold text-emerald-800 mb-4">
              {t("onlineDonations.impact.title")}
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
                    <Counter
                      end={m.value}
                      duration={m.duration}
                      prefix={m.id === "raised" ? "$" : ""}
                    />
                  </div>

                  <div className="relative z-10 text-sm text-slate-500 mt-2">
                    {t(`onlineDonations.metrics.${m.label}`)}
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
                {t("onlineDonations.volunteer.title")}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mt-3">
                {t("onlineDonations.volunteer.lead")}
              </p>

              <div className="mt-4 flex gap-2">
                <a
                  href="#campaigns"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md shadow-sm"
                >
                  Volunteer Opportunities
                </a>
              </div>
            </div>

            {/* Middle: upcoming events list */}
            <div className="md:col-span-1 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-emerald-700 mb-3">
                {t("onlineDonations.events.title")}
              </h4>
              <ul className="flex flex-col gap-3">
                {EVENTS.map((ev) => (
                  <li
                    key={ev.id}
                    className="flex items-center justify-between gap-3 p-2 rounded-md hover:bg-emerald-50 dark:hover:bg-slate-900 transition"
                  >
                    <div>
                      <div className="text-sm font-semibold text-emerald-800">
                        {t(`onlineDonations.events.${ev.id}.title`)}
                      </div>
                      <div className="text-xs text-slate-500">
                        {ev.date} •{" "}
                        {t(`onlineDonations.events.${ev.id}.location`, {
                          defaultValue: ev.location,
                        })}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-emerald-700">
                        {ev.spots}
                      </div>
                      <div className="text-xs text-slate-400">
                        {t("onlineDonations.events.spots")}
                      </div>
                      <button
                        onClick={() => setSelected(localizedCampaigns[0])}
                        className="mt-2 ml-auto inline-flex items-center px-3 py-1 rounded-full bg-emerald-600 text-white text-xs"
                      >
                        {t("onlineDonations.events.register")}
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
              {t("onlineDonations.help.title")}
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
                      All
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
                    const enriched = FAQS.map((f) => ({
                      ...f,
                      q: t(`onlineDonations.faq.${f.id}.q`),
                      a: t(`onlineDonations.faq.${f.id}.a`),
                    }));

                    const filtered = enriched.filter((f) => {
                      if (!q) return true;
                      return (f.q + " " + f.a + " " + f.category)
                        .toLowerCase()
                        .includes(q);
                    });

                    if (!filtered.length) {
                      return (
                        <div className="text-sm text-slate-500">
                          {t("onlineDonations.faq.noResults")}
                        </div>
                      );
                    }

                    // New card-grid FAQ style: icon + question + badge, answer toggles with fade
                    const categoryIcons: Record<string, any> = {
                      Donations: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v4m0 8v4"
                          />
                        </svg>
                      ),
                      Volunteering: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7a4 4 0 118 0 4 4 0 01-8 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2 21a8 8 0 0116 0"
                          />
                        </svg>
                      ),
                    } as any;

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
                                      {f.q}
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
                                  className={`mt-3 text-sm text-slate-500 transition-opacity duration-300 ${openFaq === f.id ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
                                >
                                  {f.a}
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
                      {t("onlineDonations.contact.title")}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      {t("onlineDonations.contact.lead")}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full shadow-sm"
                      >
                        {t("onlineDonations.contact.cta")}
                      </a>

                      <a
                        href="mailto:donate@emeraldaid.org"
                        className="inline-flex items-center gap-2 px-3 py-2 border border-emerald-200 text-emerald-700 rounded-md"
                      >
                        donate@emeraldaid.org
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
