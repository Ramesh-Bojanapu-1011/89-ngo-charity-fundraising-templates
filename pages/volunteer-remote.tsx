import Head from "next/head";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";

export default function VolunteerRemote() {
  const publishedDate = "Nov 7, 2025";
  const author = "Emerald Aid Volunteer Team";

  return (
    <>
      <Head>
        <title>Volunteer management tips for remote teams — Emerald Aid</title>
        <meta
          name="description"
          content="Practical tips to recruit, onboard, and manage remote volunteers with clarity, flexibility, and measurable impact."
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
                    Guide
                  </span>
                  <span className="text-sm text-slate-500">
                    Updated {publishedDate}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
                  Volunteer management tips for remote teams
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  Remote volunteering unlocks talent beyond geography. These
                  practical tips help you recruit, onboard, engage, and
                  recognize remote volunteers while keeping coordination simple
                  and impact measurable.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/volunteer-management"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full shadow hover:scale-[1.01] transition-transform"
                  >
                    Volunteer Resources
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-200 text-emerald-700 rounded-full"
                  >
                    Ask an Expert
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
                    <div className="text-xs text-slate-500">By {author}</div>
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
                  Manage remote volunteers with clarity and empathy: define
                  roles, set short milestones, and make communication
                  predictable. Small investments in onboarding and recognition
                  pay big dividends in retention.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">30–60 min</div>
                    <div className="text-slate-500">Onboarding session</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">2–4 hrs</div>
                    <div className="text-slate-500">Weekly coordination</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">3 items</div>
                    <div className="text-slate-500">Clear responsibilities</div>
                  </div>
                </div>
              </div>

              <section>
                <h2>1. Recruit with clear, bite-sized roles</h2>
                <p>
                  Break opportunities into small, well-defined tasks with
                  expected time commitments and outcomes. Example: "Data entry —
                  3 hours to clean 200 records". Clarity reduces friction and
                  increases sign-ups.
                </p>
              </section>

              <section>
                <h2>2. Onboard quickly and consistently</h2>
                <p>
                  Use a 30–60 minute onboarding call or a short recorded
                  walkthrough. Share a one-page role brief, key contacts,
                  expected hours, and where to ask for help.
                </p>
              </section>

              <section>
                <h2>3. Make communication predictable</h2>
                <p>
                  Choose 1–2 tools (e.g., Slack + email) and a weekly check-in
                  rhythm. Use short agendas and micro-updates: what I did, what
                  I will do, blockers. That keeps remote contributors aligned
                  without overwhelming them.
                </p>
              </section>

              <section>
                <h2>4. Support across timezones</h2>
                <p>
                  Prefer asynchronous updates for daily work. Schedule live
                  meetings at rotating times or offer multiple session slots.
                  Record meetings and publish concise notes so everyone can
                  catch up.
                </p>
              </section>

              <section>
                <h2>5. Build simple metrics and short milestones</h2>
                <p>
                  Define 1–3 measurable outcomes per volunteer role. Track
                  progress with a shared sheet or lightweight project board
                  (Trello, Notion). Celebrate small wins publicly to keep
                  momentum.
                </p>
              </section>

              <section>
                <h2>6. Provide tools & reduce friction</h2>
                <p>
                  Provide templates, short SOPs, and the exact files or links
                  volunteers need. Minimize tool-hopping by consolidating info
                  in one accessible place.
                </p>
              </section>

              <section>
                <h2>7. Recognition & retention</h2>
                <p>
                  Say thank you: a public shoutout, a short personalised note,
                  or a small certificate goes a long way. Ask top contributors
                  about deeper roles or longer-term opportunities.
                </p>
              </section>

              <section>
                <h2>Quick checklist</h2>
                <ul>
                  <li>Create a one-page role brief</li>
                  <li>Run a 30–60 minute onboarding session</li>
                  <li>Set a single coordination channel and weekly recap</li>
                  <li>Track 1–3 measurable outcomes per role</li>
                  <li>Recognize contributors publicly each month</li>
                </ul>
              </section>

              <section>
                <h2>Templates & quick scripts</h2>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">
                    Meeting agenda (3 items)
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    1) Introductions 2) Role brief & tools 3) First milestone
                    and questions.
                  </div>
                </div>
              </section>

              <section className="mt-10 p-6 rounded-lg bg-emerald-600 text-white">
                <h3 className="text-lg font-semibold">
                  Ready to scale remote volunteering?
                </h3>
                <p className="mt-2 text-emerald-100">
                  Use clear roles, predictable rhythms, and light tooling to
                  onboard and retain remote volunteers. If you want, we can help
                  create role briefs and onboarding templates tailored to your
                  programs.
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="/volunteer-management"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-md shadow-sm"
                  >
                    Volunteer Hub
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-md"
                  >
                    Request Templates
                  </a>
                </div>
              </section>
            </article>

            <aside className="md:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    Key takeaways
                  </h4>
                  <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Define short, clear roles</li>
                    <li>Onboard in 30–60 minutes</li>
                    <li>Make communication predictable</li>
                    <li>Recognize contributors regularly</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    Share this guide
                  </h4>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-emerald-600"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-blue-600"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-sm inline-flex items-center gap-2 text-sky-600"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-slate-800 shadow">
                  <h4 className="text-sm font-semibold text-emerald-800">
                    Quick actions
                  </h4>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href="/volunteer-management"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      Volunteer resources
                    </a>
                    <a
                      href="/contact-us"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      Request templates
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
