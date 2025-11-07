import Head from "next/head";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";

export default function EmergencyFundraiser() {
  const publishedDate = "Nov 7, 2025";
  const author = "Emerald Aid Editorial";

  return (
    <>
      <Head>
        <title>
          How to run an effective emergency fundraiser — Emerald Aid
        </title>
        <meta
          name="description"
          content="Practical, step-by-step guidance to launch a fast, effective emergency fundraiser — plan, mobilize supporters, set messaging, and manage logistics."
        />
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
                    Guide
                  </span>
                  <span className="text-sm text-slate-500">
                    Updated {publishedDate}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
                  How to run an effective emergency fundraiser
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  When a crisis hits, speed and clarity matter. This practical
                  step-by-step guide helps nonprofits and community groups
                  launch a focused emergency fundraiser that raises resources
                  quickly and responsibly.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/fundraising-campaigns"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full shadow hover:scale-[1.01] transition-transform"
                  >
                    Explore Campaign Templates
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-200 text-emerald-700 rounded-full"
                  >
                    Talk to our team
                  </a>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop"
                    alt="volunteers packing relief supplies"
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

        {/* Article content — two-column layout with a styled aside for key takeaways and quick actions */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <article className="   flex flex-col gap-6 md:col-span-2   ">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  Emergency
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Fundraising
                </span>
                <span className="text-xs px-2 py-1 bg-white/60 dark:bg-slate-800 text-slate-700 rounded-full">
                  Guide
                </span>
              </div>

              <div className="rounded-lg p-5 bg-emerald-50 dark:bg-slate-800 border border-emerald-100 mb-6">
                <p className="lead text-slate-700 dark:text-slate-300">
                  Launch an effective emergency fundraiser in hours — not weeks.
                  This concise playbook focuses on speed, clarity, and
                  measurable impact so you can mobilize support and deliver
                  results fast.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">72 hrs</div>
                    <div className="text-slate-500">Initial updates</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">$20k</div>
                    <div className="text-slate-500">Sample goal</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">5+</div>
                    <div className="text-slate-500">Seed supporters</div>
                  </div>
                </div>
              </div>

              <section>
                <h2>1. Move fast — then be transparent</h2>
                <p>
                  The first step is a 24–48 hour plan: name the need, pick a
                  single goal, and decide how you will use and report funds. Use
                  one clear sentence on the fundraiser page that answers those
                  questions — donors need clarity more than detail.
                </p>
              </section>

              <blockquote className="border-l-4 border-emerald-300 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
                “Speed builds trust when it’s paired with clarity — tell donors
                exactly what you will do and how you’ll follow up.”
              </blockquote>

              <section>
                <h2>2. Set a clear goal and timeline</h2>
                <p>
                  Pick one measurable goal and a tight timeline. Specificity
                  increases urgency and trust — for example: “Raise $20,000 in
                  10 days to deliver 400 hygiene kits.” Post daily milestones
                  (e.g., 25% reached) to maintain momentum.
                </p>
              </section>

              <section>
                <h2>3. Mobilize your network quickly</h2>
                <p>
                  Start with your inner circle: board members, past major
                  donors, and active volunteers. Ask five trusted supporters to
                  seed the campaign — early momentum makes the page more
                  persuasive to the broader audience.
                </p>

                <div className="mt-3 p-3 bg-emerald-50 dark:bg-slate-800 rounded-md">
                  <div className="text-sm font-semibold text-emerald-800">
                    Personal message starter
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    “We’re launching an emergency fund to help [who]. Would you
                    consider a seed gift today? We’ll share daily updates.”
                  </div>
                </div>

                <h3 className="mt-4">Channels that work</h3>
                <ul>
                  <li>
                    Email: short, urgent subject line and clear CTA — keep it
                    under 3 sentences.
                  </li>
                  <li>
                    Social: one strong image, one-sentence ask, clear link.
                  </li>
                  <li>
                    SMS/WhatsApp: short, direct, to small consent-based lists.
                  </li>
                  <li>
                    Local media & partners: provide a fact-sheet and one
                    spokesperson.
                  </li>
                </ul>
              </section>

              <section>
                <h2>4. Use simple, human messaging</h2>
                <p>
                  Focus on one short human story and a single supporting image.
                  Then explain the impact in concrete amounts — that helps
                  donors choose an amount and visualize the result.
                </p>
              </section>

              <section>
                <h2>5. Logistics & stewardship</h2>
                <p>
                  Build stewardship into the plan. Decide who signs receipts,
                  who documents distribution (photos, short notes), and how
                  you’ll publish a final accounting. Even a short “how we’ll use
                  funds” section reduces donor hesitation.
                </p>

                <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  <li>
                    Assign one logistics lead and one communications lead.
                  </li>
                  <li>Collect proof at handoff (photo + short note).</li>
                  <li>Publish a summary within 7 days of distribution.</li>
                </ul>
              </section>

              <section>
                <h2>Quick checklist</h2>
                <ul>
                  <li>Define goal & short timeline (amount & end date)</li>
                  <li>Publish a 1-sentence plan on the fundraiser page</li>
                  <li>Seed the campaign with 3–5 supporters</li>
                  <li>Prepare 2 email templates + 1 social post</li>
                  <li>Commit to daily or every-other-day updates</li>
                </ul>
              </section>

              <section>
                <h2>Examples & messaging snippets</h2>
                <p>
                  Headline: “Emergency Relief for Riverside Families — Help us
                  deliver food kits in 5 days”
                </p>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">Email subject</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Urgent: Help deliver food kits to Riverside families —
                    10-day goal
                  </div>
                </div>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">Tweet</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Floods displaced families in Riverside. We’re raising $12k
                    for emergency kits — donate & share: [link]
                  </div>
                </div>
              </section>

              <section className="mt-10 p-6 rounded-lg bg-emerald-600 text-white">
                <h3 className="text-lg font-semibold">Ready to start?</h3>
                <p className="mt-2 text-emerald-100">
                  Use our campaign templates to spin up an emergency fundraiser
                  in minutes, or contact our team for help with messaging and
                  logistics.
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="/fundraising-campaigns"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-md shadow-sm"
                  >
                    Create a Campaign
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-md"
                  >
                    Contact Support
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
                    <li>Set a single goal & short timeline</li>
                    <li>Seed the campaign with 3–5 initial supporters</li>
                    <li>Use simple messaging + one image</li>
                    <li>Report progress daily while momentum is high</li>
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
                      href="/fundraising-campaigns"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      Create a campaign
                    </a>
                    <a
                      href="/contact-us"
                      className="text-sm inline-flex items-center gap-2"
                    >
                      Contact support
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
