import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import { ModeToggle } from "@/components/theme/ModeToggle";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NGO / Charity / Fundraising Templates</title>
        <meta
          name="description"
          content="Templates for NGO, Charity, and Fundraising websites built with Next.js and Tailwind CSS. Easily customizable and responsive designs to help you create impactful online presence for your cause."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <SiteHeadder />
        <SiteFooter />
        <ModeToggle />
      </>
    </>
  );
}
