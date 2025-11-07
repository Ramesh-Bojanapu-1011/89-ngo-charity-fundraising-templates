import Head from "next/head";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";
import { useTranslation } from "react-i18next";

export default function SchoolRebuildDesign() {
  const { t } = useTranslation();
  const publishedDate = "Nov 7, 2025";
  const author = "Emerald Aid Program Design Team";

  return (
    <>
      <Head>
        <title>{t("schoolRebuild.meta.title")}</title>
        <meta
          name="description"
          content={t("schoolRebuild.meta.description")}
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
                    {t("schoolRebuild.hero.badge")}
                  </span>
                  <span className="text-sm text-slate-500">
                    {t("schoolRebuild.hero.updated", {
                      date: publishedDate,
                    })}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
                  {t("schoolRebuild.hero.title")}
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  {t("schoolRebuild.hero.lead")}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/fundraising-campaigns"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full shadow hover:scale-[1.01] transition-transform"
                  >
                    {t("schoolRebuild.actions.viewTemplates")}
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-200 text-emerald-700 rounded-full"
                  >
                    {t("schoolRebuild.actions.requestSupport")}
                  </a>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
                    alt={t("schoolRebuild.hero.imgAlt")}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4 bg-white dark:bg-slate-800">
                    <div className="text-xs text-slate-500">
                      {t("schoolRebuild.by", {
                        author,
                      })}
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

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-6 md:col-span-2">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  {t("schoolRebuild.tags.education")}
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  {t("schoolRebuild.tags.resilience")}
                </span>
                <span className="text-xs px-2 py-1 bg-white/60 dark:bg-slate-800 text-slate-700 rounded-full">
                  {t("schoolRebuild.tags.communityLed")}
                </span>
              </div>

              <div className="rounded-lg p-5 bg-emerald-50 dark:bg-slate-800 border border-emerald-100 mb-6">
                <p className="lead text-slate-700 dark:text-slate-300">
                  {t("schoolRebuild.intro")}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("schoolRebuild.metrics.time")}
                    </div>
                    <div className="text-slate-500">
                      {t("schoolRebuild.metrics.timeLabel")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("schoolRebuild.metrics.engagement")}
                    </div>
                    <div className="text-slate-500">
                      {t("schoolRebuild.metrics.engagementLabel")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("schoolRebuild.metrics.pillars")}
                    </div>
                    <div className="text-slate-500">
                      {t("schoolRebuild.metrics.pillarsLabel")}
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <h2>{t("schoolRebuild.sections.assessment.title")}</h2>
                <p>{t("schoolRebuild.sections.assessment.body")}</p>
              </section>

              <section>
                <h2>{t("schoolRebuild.sections.coDesign.title")}</h2>
                <p>{t("schoolRebuild.sections.coDesign.body")}</p>
              </section>

              <section>
                <h2>{t("schoolRebuild.sections.prioritize.title")}</h2>
                <p>{t("schoolRebuild.sections.prioritize.body")}</p>
              </section>

              <section>
                <h2>{t("schoolRebuild.sections.procurement.title")}</h2>
                <p>{t("schoolRebuild.sections.procurement.body")}</p>
                <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  <li>{t("schoolRebuild.procurement.items.materials")}</li>
                  <li>{t("schoolRebuild.procurement.items.train")}</li>
                  <li>{t("schoolRebuild.procurement.items.docs")}</li>
                </ul>{" "}
              </section>

              <section>
                <h2>{t("schoolRebuild.sections.handover.title")}</h2>
                <p>{t("schoolRebuild.sections.handover.body")}</p>
              </section>

              <section>
                <h2>{t("schoolRebuild.checklist.title")}</h2>
                <ul>
                  <li>{t("schoolRebuild.checklist.items.0")}</li>
                  <li>{t("schoolRebuild.checklist.items.1")}</li>
                  <li>{t("schoolRebuild.checklist.items.2")}</li>
                  <li>{t("schoolRebuild.checklist.items.3")}</li>
                  <li>{t("schoolRebuild.checklist.items.4")}</li>
                </ul>
              </section>

              <section>
                <h2>{t("schoolRebuild.templates.title")}</h2>
                <p className="mt-3">{t("schoolRebuild.templates.lead")}</p>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">
                    {t("schoolRebuild.templates.meeting.title")}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {t("schoolRebuild.templates.meeting.body")}
                  </div>
                </div>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">
                    {t("schoolRebuild.templates.donor.title")}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {t("schoolRebuild.templates.donor.body")}
                  </div>
                </div>
              </section>

              <section className="mt-10 p-6 rounded-lg bg-emerald-600 text-white">
                <h3 className="text-lg font-semibold">
                  {t("schoolRebuild.cta.title")}
                </h3>
                <p className="mt-2 text-emerald-100">
                  {t("schoolRebuild.cta.lead")}
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="/fundraising-campaigns"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-md shadow-sm"
                  >
                    {t("schoolRebuild.cta.viewTemplates")}
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-md"
                  >
                    {t("schoolRebuild.cta.requestWorkshop")}
                  </a>
                </div>
              </section>
            </article>

            <aside className="md:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("schoolRebuild.aside.takeawaysTitle")}
                  </h4>
                  <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>{t("schoolRebuild.aside.takeaways.0")}</li>
                    <li>{t("schoolRebuild.aside.takeaways.1")}</li>
                    <li>{t("schoolRebuild.aside.takeaways.2")}</li>
                    <li>{t("schoolRebuild.aside.takeaways.3")}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("schoolRebuild.aside.shareTitle")}
                  </h4>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-emerald-600"
                    >
                      {t("schoolRebuild.aside.share.twitter")}
                    </a>
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-blue-600"
                    >
                      {t("schoolRebuild.aside.share.facebook")}
                    </a>
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-sky-600"
                    >
                      {t("schoolRebuild.aside.share.linkedin")}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("schoolRebuild.aside.actionsTitle")}
                  </h4>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="/fundraising-campaigns"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      {t("schoolRebuild.aside.actions.createCampaign")}
                    </a>
                    <a
                      href="/contact-us"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      {t("schoolRebuild.aside.actions.requestWorkshop")}
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
