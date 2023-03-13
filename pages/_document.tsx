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
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="DateGPT AI-Powered Bio Generator" />
          <meta
            name="twitter:description"
            content="Generate your next dating bio in seconds."
          />
          <meta
            property="og:image"
            content="https://dategpt.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
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
