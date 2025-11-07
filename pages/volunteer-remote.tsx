import Head from "next/head";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";
import { useTranslation } from "react-i18next";

export default function VolunteerRemote() {
  const { t } = useTranslation();
  const publishedDate = t("volunteerRemote.publishedDate", {
    defaultValue: "Nov 7, 2025",
  });
  const author = t("volunteerRemote.author", {
    defaultValue: "Emerald Aid Volunteer Team",
  });

  return (
    <>
      <Head>
        <title>
          {t("volunteerRemote.meta.title", {
            defaultValue:
              "Volunteer management tips for remote teams — Emerald Aid",
          })}
        </title>
        <meta
          name="description"
          content={t("volunteerRemote.meta.description", {
            defaultValue:
              "Practical tips to recruit, onboard, and manage remote volunteers with clarity, flexibility, and measurable impact.",
          })}
        />
      </Head>

      <SiteHeadder />

      <main className="caret-transparent">
        {/* Hero */}
        <section className="relative bg-linear-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {t("volunteerRemote.badge", "Guide")}
                  </span>
                  <span className="text-sm text-slate-500">
                    {t("volunteerRemote.updated", { date: publishedDate })}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
                  {t(
                    "volunteerRemote.title",
                    "Volunteer management tips for remote teams",
                  )}
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  {t("volunteerRemote.lead")}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/volunteer-management"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full shadow hover:scale-[1.01] transition-transform"
                  >
                    {t("volunteerRemote.cta.resources")}
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-200 text-emerald-700 rounded-full"
                  >
                    {t("volunteerRemote.cta.ask")}
                  </a>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
                    alt="remote volunteer working on laptop"
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4 bg-white dark:bg-slate-800">
                    <div className="text-xs text-slate-500">
                      {t("volunteerRemote.by", { author })}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {publishedDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-6 md:col-span-2">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  Volunteers
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Remote
                </span>
                <span className="text-xs px-2 py-1 bg-white/60 dark:bg-slate-800 text-slate-700 rounded-full">
                  Best practices
                </span>
              </div>

              <div className="rounded-lg p-5 bg-emerald-50 dark:bg-slate-800 border border-emerald-100 mb-6">
                <p className="lead text-slate-700 dark:text-slate-300">
                  {t("volunteerRemote.leadShort")}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("volunteerRemote.metrics.onboardingTime")}
                    </div>
                    <div className="text-slate-500">
                      {t("volunteerRemote.metrics.onboardingLabel")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("volunteerRemote.metrics.coordinationTime")}
                    </div>
                    <div className="text-slate-500">
                      {t("volunteerRemote.metrics.coordinationLabel")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("volunteerRemote.metrics.responsibilitiesCount")}
                    </div>
                    <div className="text-slate-500">
                      {t("volunteerRemote.metrics.responsibilitiesLabel")}
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <h2>{t("volunteerRemote.sections.recruit.title")}</h2>
                <p>{t("volunteerRemote.sections.recruit.body")}</p>
              </section>

              <section>
                <h2>{t("volunteerRemote.sections.onboard.title")}</h2>
                <p>{t("volunteerRemote.sections.onboard.body")}</p>
              </section>

              <section>
                <h2>{t("volunteerRemote.sections.communicate.title")}</h2>
                <p>{t("volunteerRemote.sections.communicate.body")}</p>
              </section>

              <section>
                <h2>{t("volunteerRemote.sections.timezones.title")}</h2>
                <p>{t("volunteerRemote.sections.timezones.body")}</p>
              </section>

              <section>
                <h2>{t("volunteerRemote.sections.metrics.title")}</h2>
                <p>{t("volunteerRemote.sections.metrics.body")}</p>
              </section>

              <section>
                <h2>{t("volunteerRemote.sections.tools.title")}</h2>
                <p>{t("volunteerRemote.sections.tools.body")}</p>
              </section>

              <section>
                <h2>{t("volunteerRemote.sections.recognition.title")}</h2>
                <p>{t("volunteerRemote.sections.recognition.body")}</p>
              </section>

              <section>
                <h2>{t("volunteerRemote.checklist.title")}</h2>
                <ul>
                  {(
                    t("volunteerRemote.checklist.items", {
                      returnObjects: true,
                    }) as string[]
                  ).map((it: string, i: number) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>{t("volunteerRemote.templates.title")}</h2>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">
                    {t("volunteerRemote.templates.agendaTitle")}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {t("volunteerRemote.templates.agendaBody")}
                  </div>
                </div>
              </section>

              <section className="mt-10 p-6 rounded-lg bg-emerald-600 text-white">
                <h3 className="text-lg font-semibold">
                  {t("volunteerRemote.ready.title")}
                </h3>
                <p className="mt-2 text-emerald-100">
                  {t("volunteerRemote.ready.body")}
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="/volunteer-management"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-md shadow-sm"
                  >
                    {t("volunteerRemote.actions.hub")}
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-md"
                  >
                    {t("volunteerRemote.actions.request")}
                  </a>
                </div>
              </section>
            </article>

            <aside className="md:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("volunteerRemote.aside.takeawaysTitle")}
                  </h4>
                  <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    {(
                      t("volunteerRemote.aside.takeaways", {
                        returnObjects: true,
                      }) as string[]
                    ).map((it: string, i: number) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("volunteerRemote.aside.shareTitle")}
                  </h4>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-emerald-600"
                    >
                      {t("volunteerRemote.aside.share.twitter")}
                    </a>
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-blue-600"
                    >
                      {t("volunteerRemote.aside.share.facebook")}
                    </a>
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-sky-600"
                    >
                      {t("volunteerRemote.aside.share.linkedin")}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("volunteerRemote.aside.actionsTitle")}
                  </h4>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="/volunteer-management"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      {t("volunteerRemote.aside.actions.resources")}
                    </a>
                    <a
                      href="/contact-us"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      {t("volunteerRemote.aside.actions.request")}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
