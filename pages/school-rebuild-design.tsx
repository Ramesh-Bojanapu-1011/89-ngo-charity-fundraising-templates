import Head from "next/head";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";

export default function SchoolRebuildDesign() {
  const publishedDate = "Nov 7, 2025";
  const author = "Emerald Aid Program Design Team";

  return (
    <>
      <Head>
        <title>
          Designing school rebuild programs with local input — Emerald Aid
        </title>
        <meta
          name="description"
          content="A practical guide to designing school rebuild programs that center local voices, build resilience, and deliver measurable learning outcomes."
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
                  Designing school rebuild programs with local input
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  Rebuilding a school after a disaster is about more than bricks
                  — it's about restoring learning, safety, and community trust.
                  This guide shows how to design school rebuild programs that
                  center local voices, reduce future risks, and deliver
                  measurable education outcomes.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/fundraising-campaigns"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-full shadow hover:scale-[1.01] transition-transform"
                  >
                    See Rebuild Templates
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-emerald-200 text-emerald-700 rounded-full"
                  >
                    Request Support
                  </a>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
                    alt="community meeting at a school site"
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

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-6 md:col-span-2">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  Education
                </span>
                <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Resilience
                </span>
                <span className="text-xs px-2 py-1 bg-white/60 dark:bg-slate-800 text-slate-700 rounded-full">
                  Community-led
                </span>
              </div>

              <div className="rounded-lg p-5 bg-emerald-50 dark:bg-slate-800 border border-emerald-100 mb-6">
                <p className="lead text-slate-700 dark:text-slate-300">
                  Center local input at every step — from needs assessment to
                  handover. When communities lead decisions, rebuilt schools are
                  safer, more relevant, and more likely to sustain learning
                  gains.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">6–8 weeks</div>
                    <div className="text-slate-500">
                      Participatory design phase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">80%+</div>
                    <div className="text-slate-500">
                      Local stakeholder engagement
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-emerald-800">3 pillars</div>
                    <div className="text-slate-500">
                      Safety, learning, sustainability
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <h2>1. Ground your work in a short participatory assessment</h2>
                <p>
                  Convene teachers, caregivers, local builders and students for
                  a focused needs assessment. Use small focus groups, a short
                  household survey, and a site walk to capture priorities,
                  safety concerns, and classroom needs.
                </p>
              </section>

              <section>
                <h2>2. Build co-designed solutions — not pre-packaged ones</h2>
                <p>
                  Share simple design options (floor plans, materials, and
                  maintenance approaches) and surface trade-offs in plain
                  language. Let communities pick or adapt solutions so the final
                  design matches local preferences and maintenance capacity.
                </p>
              </section>

              <section>
                <h2>3. Prioritize safety, flexibility and learning</h2>
                <p>
                  Balance structural safety (seismic, flood elevation) with
                  flexible learning spaces and durable low-maintenance finishes.
                  Design for multi-purpose use so classrooms can serve as
                  community shelters in future emergencies.
                </p>
              </section>

              <section>
                <h2>4. Local procurement & skills transfer</h2>
                <p>
                  Where feasible, hire local contractors and run short
                  skills-transfer workshops. This creates local ownership,
                  reduces costs, and leaves the community with maintenance
                  skills after the project ends.
                </p>

                <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  <li>Use locally appropriate, resilient materials.</li>
                  <li>
                    Train at least two local maintenance leads per school.
                  </li>
                  <li>
                    Document simple maintenance manuals in the local language.
                  </li>
                </ul>
              </section>

              <section>
                <h2>5. Monitoring, accountability & handover</h2>
                <p>
                  Agree early on how progress will be shared — use photos, short
                  field notes, and community check-ins. Define clear handover
                  criteria and confirm who will provide ongoing maintenance
                  support.
                </p>
              </section>

              <section>
                <h2>Quick checklist for community-led rebuilds</h2>
                <ul>
                  <li>Run a 2-week participatory needs assessment</li>
                  <li>Co-design 2–3 layout options with users</li>
                  <li>
                    Include safety checks in all designs (drainage, elevation)
                  </li>
                  <li>Plan a 6–8 week skills-transfer & procurement plan</li>
                  <li>
                    Agree handover & maintenance responsibilities in writing
                  </li>
                </ul>
              </section>

              <section>
                <h2>Templates & messaging</h2>
                <p className="mt-3">
                  Use these short templates when engaging stakeholders:
                </p>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">
                    Community meeting invite
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    We invite caregivers, teachers and local builders to a short
                    meeting to co-design the rebuilt school. Your experience
                    will shape the design and maintenance plan.
                  </div>
                </div>

                <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded">
                  <div className="text-sm font-semibold">
                    Donor update blurb
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    With local leaders we completed the participatory design
                    phase and selected a design that balances safety, learning,
                    and local maintenance capacity. Next: procurement and skills
                    training.
                  </div>
                </div>
              </section>

              <section className="mt-10 p-6 rounded-lg bg-emerald-600 text-white">
                <h3 className="text-lg font-semibold">
                  Ready to design with communities?
                </h3>
                <p className="mt-2 text-emerald-100">
                  We offer simple co-design workshops and rebuild templates to
                  help mobilize local teams and donors. Start with a short
                  assessment and use our templates to speed implementation.
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="/fundraising-campaigns"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-md shadow-sm"
                  >
                    View Templates
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-md"
                  >
                    Request a Workshop
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
                    <li>Start with a short participatory assessment</li>
                    <li>Co-design options and make trade-offs explicit</li>
                    <li>Hire locally & transfer maintenance skills</li>
                    <li>Agree handover, monitoring and maintenance early</li>
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
                      Request a workshop
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
