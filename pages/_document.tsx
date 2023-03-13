import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/heartLogo.png" />
          <meta
            name="description"
            content="Generate your next bio in seconds."
          />
          <meta property="og:site_name" content="dategpt.vercel.app" />
          <meta
            property="og:description"
            content="Generate your next bio in seconds."
          />
          <meta property="og:title" content="DateGPT: AI-Powered Bio Generator" />
          <meta name="tinder:card" content="summary_large_image" />
          <meta name="tinder:title" content="DateGPT AI-Powered Bio Generator" />
          <meta
            name="tinder:description"
            content="Generate your next Tinder bio in seconds."
          />
          <meta
            property="og:image"
            content="https://dategpt.vercel.app/og-image.png"
          />
          <meta
            name="tinder:image"
            content="https://dategpt.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
