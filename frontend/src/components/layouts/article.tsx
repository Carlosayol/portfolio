import Head from "next/head";

import { GridItemStyle } from "../gridItem";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  const t = `${title} - Carlos Ayala`;
  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta property="og:title" content={t} />
        </Head>
      )}
      {children}

      <GridItemStyle />
    </>
  );
};

export default Layout;
