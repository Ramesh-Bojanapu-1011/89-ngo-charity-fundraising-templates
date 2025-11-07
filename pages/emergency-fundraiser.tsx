import Head from "next/head";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";
import { useTranslation } from "react-i18next";

export default function EmergencyFundraiser() {
  const publishedDate = "Nov 7, 2025";
  const author = "Emerald Aid Editorial";
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("emergency.hero.title")}</title>
        <meta name="description" content={t("emergency.hero.lead")} />
      </Head>

      <SiteHeadder />

      <main className="caret-transparent">
        {/* Hero — blog style */}
        <section className="relative bg-linear-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {t("emergency.hero.badge")}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
                  {t("emergency.hero.title")}
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  {t("emergency.hero.lead")}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/fundraising-campaigns"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full shadow hover:scale-[1.01] transition-transform"
                  >
                    {t("emergency.actions.exploreTemplates")}
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-200 text-emerald-700 rounded-full"
                  >
                    {t("emergency.actions.talkToTeam")}
                  </a>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop"
                    alt={t("emergency.hero.imgAlt")}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4 bg-white dark:bg-slate-800">
                    <div className="text-xs text-slate-500">
                      {t("emergency.auther.by", { author: author })}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {t("emergency.auther.date", { date: publishedDate })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article content — two-column layout with a styled aside for key takeaways and quick actions */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <article className="   flex flex-col gap-6 md:col-span-2   ">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  {t("emergency.tags.emergency")}
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  {t("emergency.tags.fundraising")}
                </span>
                <span className="text-xs px-2 py-1 bg-white/60 dark:bg-slate-800 text-slate-700 rounded-full">
                  {t("emergency.tags.guide")}
                </span>
              </div>

              <div className="rounded-lg p-5 bg-emerald-50 dark:bg-slate-800 border border-emerald-100 mb-6">
                <p className="lead text-slate-700 dark:text-slate-300">
                  {t("emergency.hero.summary")}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("emergency.metrics.onboardingTime.value")}
                    </div>
                    <div className="text-slate-500">
                      {t("emergency.metrics.onboardingTime.label")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("emergency.metrics.sampleGoal.value")}
                    </div>
                    <div className="text-slate-500">
                      {t("emergency.metrics.sampleGoal.label")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">
                      {t("emergency.metrics.seedSupporters.value")}
                    </div>
                    <div className="text-slate-500">
                      {t("emergency.metrics.seedSupporters.label")}
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <h2>{t("emergency.sections.moveFast.title")}</h2>
                <p>{t("emergency.sections.moveFast.body")}</p>
              </section>

              <blockquote className="border-l-4 border-emerald-300 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
                {t("emergency.quote")}
              </blockquote>

              <section>
                <h2>{t("emergency.sections.goal.title")}</h2>
                <p>{t("emergency.sections.goal.body")}</p>
              </section>

              <section>
                <h2>{t("emergency.sections.mobilize.title")}</h2>
                <p>{t("emergency.sections.mobilize.body")}</p>

                <div className="mt-3 p-3 bg-emerald-50 dark:bg-slate-800 rounded-md">
                  <div className="text-sm font-semibold text-emerald-800">
                    {t("emergency.personalMessage.title")}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {t("emergency.personalMessage.body")}
                  </div>
                </div>

                <h3 className="mt-4">{t("emergency.channels.title")}</h3>
                <ul>
                  <li>{t("emergency.channels.email")}</li>
                  <li>{t("emergency.channels.social")}</li>
                  <li>{t("emergency.channels.sms")}</li>
                  <li>{t("emergency.channels.media")}</li>
                </ul>
              </section>

              <section>
                <h2>{t("emergency.sections.messaging.title")}</h2>
                <p>{t("emergency.sections.messaging.body")}</p>
              </section>

              <section>
                <h2>{t("emergency.sections.logistics.title")}</h2>
                <p>{t("emergency.sections.logistics.body")}</p>

                <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  <li>{t("emergency.sections.logistics.list.assign")}</li>
                  <li>{t("emergency.sections.logistics.list.proof")}</li>
                  <li>{t("emergency.sections.logistics.list.publish")}</li>
                </ul>
              </section>

              <section>
                <h2>{t("emergency.sections.checklist.title")}</h2>
                <ul>
                  <li>{t("emergency.checklist.define")}</li>
                  <li>{t("emergency.checklist.publish")}</li>
                  <li>{t("emergency.checklist.seed")}</li>
                  <li>{t("emergency.checklist.prepare")}</li>
                  <li>{t("emergency.checklist.commit")}</li>
                </ul>
              </section>

              <section>
                <h2>{t("emergency.examples.title")}</h2>
                <p>{t("emergency.examples.headline")}</p>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">
                    {t("emergency.examples.emailSubject.title")}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {t("emergency.examples.emailSubject.body")}
                  </div>
                </div>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">
                    {t("emergency.examples.tweet.title")}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {t("emergency.examples.tweet.body")}
                  </div>
                </div>
              </section>

              <section className="mt-10 p-6 rounded-lg bg-emerald-600 text-white">
                <h3 className="text-lg font-semibold">
                  {t("emergency.cta.title")}
                </h3>
                <p className="mt-2 text-emerald-100">
                  {t("emergency.cta.lead")}
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="/fundraising-campaigns"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-md shadow-sm"
                  >
                    {t("emergency.actions.createCampaign")}
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-md"
                  >
                    {t("emergency.actions.contactSupport")}
                  </a>
                </div>
              </section>
            </article>

            <aside className="md:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("emergency.aside.takeawaysTitle")}
                  </h4>
                  <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>{t("emergency.aside.takeaways.0")}</li>
                    <li>{t("emergency.aside.takeaways.1")}</li>
                    <li>{t("emergency.aside.takeaways.2")}</li>
                    <li>{t("emergency.aside.takeaways.3")}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("emergency.aside.shareTitle")}
                  </h4>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-emerald-600"
                    >
                      {t("emergency.aside.share.twitter")}
                    </a>
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-blue-600"
                    >
                      {t("emergency.aside.share.facebook")}
                    </a>
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-sky-600"
                    >
                      {t("emergency.aside.share.linkedin")}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {t("emergency.aside.actionsTitle")}
                  </h4>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="/fundraising-campaigns"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      {t("emergency.aside.actions.createCampaign")}
                    </a>
                    <a
                      href="/contact-us"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      {t("emergency.aside.actions.contactSupport")}
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
