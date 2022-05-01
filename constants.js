import Head from "next/head";
export const emailPattern =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const appRoutes = {
  /**
   * @var pathIsUnProtected Add before login routes here
   */
  HOME_PAGE: "/",
  ABOUT_US_PAGE: "/about",
  SERVICE_PAGE: "/services",
  PORTFOLIO_PAGE: "/portfolio",
  TEAM_PAGE: "/teams",
  GALLERY_PAGE: "/gallery",
  CAREER_PAGE: "/career",
  CONTACT_US_PAGE: "/contact",
  LOGIN_PAGE: "/admin/login",
  /**
   * @var pathIsProtected Add after login routes here
   */
  DASHBOARD: "/admin/dashboard",
  PROFILE: "/admin/profile",
  TEAM_LIST: "/admin/team",
  TEAM_CREATE: "/admin/team/create",
  TEAM_UPDATE: "/admin/team/[id]",
};

export const metaTags = {
  HOME_PAGE: (
    <Head>
      <title>YuvaSoft Solutions</title>
      <meta name="description" content="Home page" />
      <meta name="keywords" content="titla, meta, nextjs" />
    </Head>
  ),
  ABOUT_US_PAGE: (
    <Head>
      <title>YuvaSoft Solutions - About</title>
      <meta name="description" content="About us page" />
      <meta name="keywords" content="titla, meta, nextjs" />
    </Head>
  ),
  SERVICE_PAGE: (
    <Head>
      <title>YuvaSoft Solutions - Service</title>
      <meta name="description" content="Service page" />
      <meta name="keywords" content="titla, meta, nextjs" />
    </Head>
  ),
  PORTFOLIO_PAGE: (
    <>
      <title>YuvaSoft Solutions - Portfolio</title>
      <meta name="description" content="Portfolio page" />
      <meta name="keywords" content="titla, meta, nextjs" />
    </>
  ),
  TEAM_PAGE: (
    <Head>
      <title>YuvaSoft Solutions - Team</title>
      <meta name="description" content="Team page" />
      <meta name="keywords" content="titla, meta, nextjs" />
    </Head>
  ),
  GALLERY_PAGE: (
    <Head>
      <title>YuvaSoft Solutions - Gallery</title>
      <meta name="description" content="Gallery page" />
      <meta name="keywords" content="titla, meta, nextjs" />
    </Head>
  ),
  CAREER_PAGE: (
    <Head>
      <title>YuvaSoft Solutions - Career</title>
      <meta name="description" content="Career page" />
      <meta name="keywords" content="titla, meta, nextjs" />
    </Head>
  ),
  CONTACT_US_PAGE: (
    <Head>
      <title>YuvaSoft Solutions - Contact</title>
      <meta name="description" content="Contact page" />
      <meta name="keywords" content="titla, meta, nextjs" />
    </Head>
  ),
};

export const socialLinks = {
  facebook: "https://www.facebook.com/YuvaSoftSolutions",
  twitter: "https://twitter.com/yuvasoftech",
  linkedin: "https://in.linkedin.com/company/yuvasoft-solutions-pvt-ltd",
  instagram: "https://www.instagram.com/yuvasoftsolutions/?hl=en",
};
