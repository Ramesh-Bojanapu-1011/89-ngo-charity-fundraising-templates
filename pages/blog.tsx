import Link from "next/link";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";

const BlogPage = () => {
  const blogs = [
    {
      title: "How to run an effective emergency fundraiser",
      date: "Oct 2, 2025",
      excerpt:
        "Lessons from rapid-response campaigns: message, cadence, and local partners.",
      author: "Amina Farah",
      image:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&q=60&auto=format&fit=crop",
      href: "/emergency-fundraiser",
    },
    {
      title: "Designing school rebuild programs with local input",
      date: "Sep 14, 2025",
      excerpt:
        "A step-by-step look at community-led design and how it improves outcomes.",
      author: "Daniel Ortiz",
      image:
        "https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1200&q=60&auto=format&fit=crop",
      href: "/school-rebuild-design",
    },
    {
      title: "Volunteer management tips for remote teams",
      date: "Aug 28, 2025",
      excerpt:
        "How to recruit, train, and retain volunteers when your program spans timezones.",
      author: "Rukmini Patel",
      image:
        "https://images.unsplash.com/photo-1584438784816-3a5f29a9b0b3?w=1200&q=60&auto=format&fit=crop",
      href: "/volunteer-remote",
    },
    // additional items for featured/resources
    {
      title: "Measuring impact: simple indicators you can use",
      date: "Jul 9, 2025",
      excerpt: "Practical monitoring indicators for small teams.",
      author: "Samuel K.",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=60&auto=format&fit=crop",
      href: "/measuring-impact",
    },
    {
      title: "Budget transparency: preparing donor-friendly reports",
      date: "Jun 21, 2025",
      excerpt: "Simple templates and tips to make financials clear.",
      author: "Finance Team",
      image:
        "https://images.unsplash.com/photo-1531123414780-fd3d0f4e1b4f?w=1200&q=60&auto=format&fit=crop",
      href: "/budget-transparency",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 caret-transparent">
      <SiteHeadder />

      <main>
        {/* Hero */}
        <section className="relative bg-linear-to-r from-emerald-600 to-emerald-400 text-white min-h-screen flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold">
              Insights & Stories
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              News, field reports, and practical guides from our teams and
              partners — all focused on creating accountable and effective
              programs.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/contact-us"
                className="bg-white text-emerald-600 px-5 py-3 rounded-full font-semibold"
              >
                Support our work
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white px-5 py-3 rounded-full"
              >
                Our services
              </Link>
            </div>
          </div>
        </section>

        {/* 3 latest blog cards */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">Latest posts</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Fresh content from our field teams and program leads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.slice(0, 3).map((b, i) => (
                <article
                  key={i}
                  className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-2xl transition-shadow group"
                >
                  <div className="relative">
                    <div className="h-44 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                      <img
                        src={b.image}
                        alt={b.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-full px-3 py-1 text-xs text-gray-800 dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-emerald-600"
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
                      <span>{b.date}</span>
                    </div>
                  </div>

                  <div className="p-5 flex gap-4">
                    <img
                      src={b.image}
                      alt={b.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-900 shadow-sm"
                    />

                    <div className="flex-1">
                      <div className="text-xs text-gray-500">{b.author}</div>
                      <h4 className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                        <Link href={b.href} className="hover:underline">
                          {b.title}
                        </Link>
                      </h4>

                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                        {b.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          href={b.href}
                          className="inline-flex items-center text-emerald-600 font-medium hover:underline"
                        >
                          Read post
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 ml-2"
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
                        </Link>

                        <div className="text-xs text-gray-400">
                          • 4 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Get involved - action cards */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">Get involved</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join our work in the way that fits you best — volunteer,
                fundraise, partner or help spread the word.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Volunteer",
                  desc: "Lend your time on the ground or remotely — roles for different skills and availability.",

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
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l6.16-3.422A12 12 0 0112 21a12 12 0 01-6.16-10.422L12 14z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Fundraise",
                  desc: "Start a fundraiser or join an existing campaign to mobilize your network.",

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
                        d="M12 14v7"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Partnerships",
                  desc: "Collaborate with us — institutions, local orgs and corporate partners welcome.",

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
                        d="M7 8h10M7 12h8m-8 4h6"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Share",
                  desc: "Help amplify our stories — share reports, posts and calls to action with your network.",

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
                        d="M4 12v.01M12 12v.01M20 12v.01M7 12a5 5 0 015-5v0a5 5 0 015 5"
                      />
                    </svg>
                  ),
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between shadow-2xl hover:shadow-lg transition-shadow"
                >
                  <div>
                    <div className="inline-flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                        {c.icon}
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {c.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners & supporters - grayscale collage */}
        <section className="py-16 ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* left - large image */}
              <div className="order-1 lg:order-0">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=60&auto=format&fit=crop"
                  alt="field team"
                  style={{ filter: "grayscale(100%)" }}
                  className="w-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* middle - stacked images */}
              <div className="order-3 lg:order-0 flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=60&auto=format&fit=crop"
                  alt="volunteers"
                  style={{ filter: "grayscale(100%)" }}
                  className="w-full h-36 object-cover rounded-xl shadow"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=60&auto=format&fit=crop"
                    alt="local team"
                    style={{ filter: "grayscale(100%)" }}
                    className="w-full h-24 object-cover rounded-lg shadow"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=60&auto=format&fit=crop"
                    alt="beneficiaries"
                    style={{ filter: "grayscale(100%)" }}
                    className="w-full h-24 object-cover rounded-full shadow"
                  />
                </div>
              </div>

              {/* right - text, progress, CTA */}
              <div className="order-2 lg:order-0">
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                  Give a helping hand to those who need it
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg">
                  We partner with local leaders to deliver essential services.
                  Your support helps fund immediate needs and long-term
                  recovery.
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <div className="text-sm text-gray-500">Goal</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      $60,000
                    </div>
                  </div>

                  <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-emerald-600 h-3 rounded-full"
                      style={{ width: "60%" }}
                    />
                  </div>

                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    $36,000 raised — Thank you to donors and partners.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming events */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">Upcoming events</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join us at these field events, trainings and fundraisers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Community workshop",
                  date: "Nov 20, 2025",
                  loc: "Kisumu",
                },
                {
                  title: "Volunteer training",
                  date: "Dec 5, 2025",
                  loc: "Hybrid",
                },
                {
                  title: "Year-end fundraiser",
                  date: "Dec 18, 2025",
                  loc: "Online",
                },
              ].map((e, i) => {
                // build a short month/day for the badge
                const [month, day] = e.date.split(" ");
                const dayNum = day?.replace(",", "") ?? "";

                return (
                  <article
                    key={i}
                    className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-emerald-600 text-white flex flex-col items-center justify-center font-semibold">
                          <div className="text-xs">{month}</div>
                          <div className="text-lg leading-none">{dayNum}</div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {e.title}
                        </h4>
                        <div className="text-sm text-gray-500 mt-1">
                          {e.loc} • {e.date}
                        </div>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                          Seats are limited — register to secure your spot and
                          receive updates.
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <Link
                        href={"/contact-us"}
                        className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-md"
                      >
                        Register
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Volunteer resources - redesigned */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">Volunteer resources</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Helpful guides, templates and quick-start materials for
                volunteers — concise and ready to use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Volunteer handbook",
                  desc: "Roles, safety and code of conduct. Essential reading for new volunteers.",
                  tags: ["Policy", "Safety"],
                  size: "2.4 MB",
                },
                {
                  title: "Remote volunteer toolkit",
                  desc: "Templates, checklists and communication tips for remote roles.",
                  tags: ["Templates", "Remote"],
                  size: "1.1 MB",
                },
                {
                  title: "Training schedule",
                  desc: "Upcoming sessions and recorded materials to bring you up to speed.",
                  tags: ["Training", "Calendar"],
                  size: "—",
                },
              ].map((r, i) => (
                <article
                  key={i}
                  className="relative rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-lg transition-shadow hover:scale-[1.01]  "
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                        {/* simple icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 14l6.16-3.422A12 12 0 0112 21a12 12 0 01-6.16-10.422L12 14z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col h-full justify-between">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {r.title}
                        </h4>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {r.size}
                        </div>
                      </div>

                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {r.desc}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {r.tags.map((t, j) => (
                          <span
                            key={j}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
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
};

export default BlogPage;
