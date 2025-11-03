import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.postimg.cc/9XK6Z0gF/favicon.png"
        />
      </Head>
      <body className="[&::-webkit-scrollbar]:hidden  max-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
