import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next dating app bio in seconds."
          />
          <meta property="og:site_name" content="tinderbio.vercel.app" />
          <meta
            property="og:description"
            content="Generate your next dating app bio in seconds."
          />
          <meta property="og:title" content="Dating Bio Generator" />
          <meta name="datingapp:card" content="summary_large_image" />
          <meta name="datingapp:title" content="Dating Bio Generator" />
          <meta
            name="datingapp:description"
            content="Generate your next datingapp bio in seconds."
          />
          <meta
            property="og:image"
            content="https://tinderbio.vercel.app/og-image.png"
          />
          <meta
            name="datingapp:image"
            content="https://tinderbio.vercel.app/og-image.png"
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
