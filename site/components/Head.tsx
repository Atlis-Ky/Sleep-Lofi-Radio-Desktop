import Head from "next/head";
import Script from "next/script";

export default function HeadMeta() {
  return (
    <>
      <Head>
        <title>Lofi Sleep Desktop Radio</title>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="Lofi Sleep Desktop Radio" />
        <meta
          name="description"
          content="About
Listen to sleep tales 24/7 radio from your desktop any time!"
        />
        <meta
          name="google-site-verification"
          content="0L-OGw7wusEygK1F_ra_origg8lgYJsgfezVrpvljJw"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lofi-radio-desktop.vercel.app"
        />
        <meta property="og:title" content="Lofi Radio Desktop" />
        <meta
          property="og:description"
          content="About
Listen to sleep tales 24/7 radio from your desktop any time!"
        />
        <meta property="og:image" content="/Thumbnail-st.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://lofi-radio-desktop.vercel.app"
        />
        <meta property="twitter:title" content="Lofi Radio Desktop" />
       
      </Head>
    </>
  );
}
