import Link from "next/link";
import { useState } from "react";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribe: true,
  });
  const [status, setStatus] = useState<{
    type: "idle" | "sending" | "success" | "error";
    message?: string;
  }>({ type: "idle" });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const { t } = useTranslation();
  const faqs = Array.from({ length: 4 }).map((_, idx) => {
    return {
      q: t(`contactUs.faq.items.${idx}.q`),
      a: t(`contactUs.faq.items.${idx}.a`),
    };
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // basic client validation
    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: t("contactUs.form.validationError"),
      });
      return;
    }

    setStatus({ type: "sending" });

    // simulate API call
    setTimeout(() => {
      console.log("Contact submitted", form);
      setStatus({
        type: "success",
        message: t("contactUs.form.successDefault"),
      });
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        subscribe: false,
      });
      // clear status after a bit
      setTimeout(() => setStatus({ type: "idle" }), 5000);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 caret-transparent">
      <SiteHeadder />

      <main>
        {/* Hero */}
        <section className="min-h-screen justify-center flex items-center bg-linear-to-r from-emerald-600 to-emerald-400 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold">
              {t("contactUs.hero.title")}
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              {t("contactUs.hero.lead")}
            </p>
          </div>
        </section>

        {/* Contact form */}
        <section id="form" className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold">
                {t("contactUs.form.title")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t("contactUs.form.lead")}
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7-5 7 5v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {t("contactUs.contact.email.label")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t("contactUs.contact.email.value")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5h12M9 3v2m0 0v2m0-2h6"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {t("contactUs.contact.phone.label")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t("contactUs.contact.phone.value")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v6a2 2 0 002 2h2"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {t("contactUs.contact.hours.label")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t("contactUs.contact.hours.value")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("contactUs.form.placeholders.name")}
                      className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 bg-transparent focus:ring-2 focus:ring-emerald-300"
                    />
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("contactUs.form.placeholders.email")}
                      className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 bg-transparent focus:ring-2 focus:ring-emerald-300"
                    />
                  </div>

                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={t("contactUs.form.placeholders.subject")}
                    className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 bg-transparent focus:ring-2 focus:ring-emerald-300"
                  />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("contactUs.form.placeholders.message")}
                    rows={6}
                    className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 bg-transparent focus:ring-2 focus:ring-emerald-300"
                  />

                  <div className="flex items-center justify-between gap-4">
                    <label className="inline-flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        name="subscribe"
                        checked={form.subscribe}
                        onChange={handleChange}
                      />
                      <span className="text-gray-600 dark:text-gray-300">
                        {t("contactUs.form.subscribeLabel")}
                      </span>
                    </label>

                    <div className="text-sm text-gray-500">
                      {t("contactUs.form.replyNote")}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center px-5 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-500"
                    >
                      {status.type === "sending"
                        ? t("contactUs.form.sending")
                        : t("contactUs.form.send")}
                    </button>

                    {status.type === "success" && (
                      <div className="text-sm text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-2 rounded-md">
                        {status.message || t("contactUs.form.successDefault")}
                      </div>
                    )}

                    {status.type === "error" && (
                      <div className="text-sm text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-300 px-3 py-2 rounded-md">
                        {status.message || t("contactUs.form.validationError")}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer & Partnership CTAs — refreshed two-card layout */}
        <section className="py-12 bg-white dark:bg-gray-900  ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">
                {t("contactUs.getInvolved.title")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("contactUs.getInvolved.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Volunteer card */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow transform-gpu hover:-translate-y-1">
                <div className="absolute right-0 top-0 -mt-6 -mr-6">
                  <div className="bg-emerald-600 text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-sm font-semibold">
                    {t("contactUs.joinBadge")}
                  </div>
                </div>

                <div className="p-6 lg:p-8 flex flex-col lg:flex-row gap-6 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-emerald-600"
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

                  <div className="flex-1">
                    <h4 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                      {t("contactUs.volunteer.title")}
                    </h4>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {t("contactUs.volunteer.lead")}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3 items-center">
                      <div className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                        <div className="text-emerald-600 font-semibold">
                          1.2k
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {t("contactUs.volunteer.metrics.activeLabel")}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <div className="text-sm text-gray-600">
                          {t("contactUs.volunteer.metrics.avgCommitmentLabel")}
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          3–6 months
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnerships card */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow transform-gpu hover:-translate-y-1">
                <div className="absolute left-0 top-0 -mt-6 -ml-6">
                  <div className="bg-emerald-600 text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl text-sm font-semibold">
                    {t("contactUs.partnerBadge")}
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-20 h-20 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7 8h10M7 12h8m-8 4h6"
                        />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                        {t("contactUs.partner.title")}
                      </h4>
                      <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {t("contactUs.partner.lead")}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-3 text-center">
                          <div className="text-sm text-gray-600">
                            {t("contactUs.partner.metrics.partnersLabel")}
                          </div>
                          <div className="mt-1 font-semibold text-emerald-600">
                            45
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-100 dark:bg-gray-700 p-3 text-center">
                          <div className="text-sm text-gray-600">
                            {t(
                              "contactUs.partner.metrics.projectsPerYearLabel",
                            )}
                          </div>
                          <div className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
                            18
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office & locations - refreshed style */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">
                {t("contactUs.offices.title")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("contactUs.offices.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  city: "Nairobi",
                  addr: "123 Community Rd",
                  hours: "Mon–Fri 9am–5pm",
                  map: "https://images.unsplash.com/photo-1505765057661-7b9a1f8c3b1b?w=800&q=60&auto=format&fit=crop",
                  tagKey: "regionalHub",
                },
                {
                  city: "Kisumu",
                  addr: "45 Market St",
                  hours: "Mon–Fri 8:30am–4:30pm",
                  map: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=60&auto=format&fit=crop",
                  tagKey: "programOffice",
                },
                {
                  city: "Remote",
                  addr: "Virtual Office",
                  hours: "Always available",
                  map: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800&q=60&auto=format&fit=crop",
                  tagKey: "remoteSupport",
                },
              ].map((o, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-36">
                    <iframe
                      title={`${o.city} map`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        o.addr + ", " + o.city,
                      )}&output=embed`}
                      loading="lazy"
                      className="w-full h-full border-0 rounded-t-md"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-white/90 dark:bg-gray-900/70 rounded-full px-3 py-1 text-xs">
                      <span className="font-medium text-emerald-600">
                        {t(`contactUs.offices.tags.${o.tagKey}`)}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {o.city}
                        </div>
                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {o.addr}
                        </div>
                      </div>

                      <div className="text-sm text-gray-500">{o.hours}</div>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <Link
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          o.addr + ", " + o.city,
                        )}`}
                        className="inline-flex items-center px-3 py-2 bg-emerald-600 text-white rounded-md text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("contactUs.offices.actions.directions")}
                      </Link>

                      <Link
                        href="#form"
                        className="inline-flex items-center px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-200"
                      >
                        {t("contactUs.offices.actions.contactOffice")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ (replaces Emergency hotline) */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">
                {t("contactUs.faq.title")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("contactUs.faq.lead")}
              </p>
            </div>

            <div className="grid grid-cols-1  gap-6">
              {faqs.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <button
                    aria-expanded={openFaq === idx}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">
                          {item.q}
                        </div>
                      </div>
                    </div>

                    <div className="text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 transform transition-transform ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`mt-3 text-sm text-gray-600 dark:text-gray-300 overflow-hidden transition-all ${
                      openFaq === idx ? "block" : " hidden"
                    }`}
                  >
                    <div className="pb-2">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe section */}
        <section className="py-16 bg-linear-to-r from-emerald-600 to-emerald-400 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold">
              {t("contactUs.subscribe.title")}
            </h3>
            <p className="mt-2 max-w-2xl mx-auto text-emerald-100">
              {t("contactUs.subscribe.lead")}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newsletterEmail || !newsletterEmail.includes("@")) {
                  setNewsletterStatus("error");
                  setTimeout(() => setNewsletterStatus("idle"), 3000);
                  return;
                }
                setNewsletterStatus("sending");
                setTimeout(() => {
                  console.log("Subscribed to newsletter:", newsletterEmail);
                  setNewsletterStatus("success");
                  setNewsletterEmail("");
                  setTimeout(() => setNewsletterStatus("idle"), 4000);
                }, 900);
              }}
              className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center"
            >
              <input
                type="email"
                aria-label={t("contactUs.subscribe.ariaEmail")}
                placeholder={t("contactUs.subscribe.placeholder")}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full sm:w-auto min-w-60 border rounded-md px-4 py-3 text-gray-900"
              />

              <button
                type="submit"
                className="inline-flex items-center px-5 py-3 bg-white text-emerald-600 rounded-md font-semibold"
              >
                {newsletterStatus === "sending"
                  ? t("contactUs.subscribe.sending")
                  : t("contactUs.subscribe.button")}
              </button>
            </form>

            <div className="mt-4">
              {newsletterStatus === "success" && (
                <div className="inline-block bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-md px-3 py-2 text-sm">
                  {t("contactUs.subscribe.success")}
                </div>
              )}

              {newsletterStatus === "error" && (
                <div className="inline-block bg-red-100 text-red-700 rounded-md px-3 py-2 text-sm">
                  {t("contactUs.subscribe.validationError")}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ContactUs;
