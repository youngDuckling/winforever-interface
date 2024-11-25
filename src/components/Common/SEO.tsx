import { Helmet } from "react-helmet";
import { t } from "@lingui/macro";
import logoImg from "img/winforeverPng.png";

function SEO(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: t`WinForever | Trading Competition Platform`,
    description: t`The most degen trading competition on perpetuals BTC, ETH, AVAX and other top cryptocurrencies with up to 100x leverage directly from your wallet on Arbitrum.`,
    image: {logoImg}, //"https://gmx.io/og.png",//@note change this later
    type: "exchange",
    ...customMeta,
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="GMX" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gmx_io" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Helmet>
      {children}
    </>
  );
}

export default SEO;
