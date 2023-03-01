import Head from "next/head";
import { GridItemStyle } from "../gridItem";

const Layout = ({ children, title }) => {
  const t = `${title} - Takuya Matsuyama`;
  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      {children}

      <GridItemStyle />
    </>
  );
};

export default Layout;
