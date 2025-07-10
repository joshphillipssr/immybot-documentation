import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "immy.bot",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF34XF88');`,
    ],
  ],
  description: "A documentation suite for all things ImmyBot",
  sitemap: {
    hostname: "https://docs.immy.bot",
  },
  themeConfig: {
    logo: "/immybot-glasses.png",
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "What's New", link: "/releases" },
          { text: "Add Users", link: "./add-users" },
          { text: "Onboarding", link: "./onboarding" },
          { text: "Recommended Deployments", link: "./recommended-deployments" },
          { text: "Terminology", link: "./terminology" },
          { text: "Troubleshooting", link: "./troubleshooting" },
          { text: "User Roles", link: "./user-roles" },
          { text: "Windows Sandbox", link: "./windows-sandbox" },
        ],
      },
      {
        text: "Integrations",
        collapsed: true,
        items: [
          { text: "Build Your Own", link: "/build-your-own-integration" },
          { text: "ConnectSecure", link: "/connectsecure-integration-setup" },
          { text: "ConnectWise Automate", link: "/connectwise-automate-integration-setup" },
          { text: "ConnectWise Control", link: "/connectwise-control-integration-setup" },
          { text: "ConnectWise Manage", link: "/connectwise-manage-integration-setup" },
          { text: "N-Central", link: "/ncentral-integration-setup" },
          { text: "NinjaRMM", link: "/ninjarmm-integration-setup" },
          { text: "HaloPSA", link: "/halo-integration-setup" },
          { text: "Azure", link: "/azure-graph-permissions-setup" },
          { text: "Support Override", link: "/support-override-integration-setup" },
        ],
      },
      {
        text: "Advanced",
        collapsed: true,
        items: [
          { text: "Scripting Guide", link: "/scripts" },
          { text: "Metascripts / Cloud Scripts", link: "/immy-commands" },
          { text: "Metascript Variables", link: "/metascript-variables" },
        ],
      },
      {
        text: "Metascript Commands",
        collapsed: true,
        items: [
          { text: "Metascript Functions Script", link: "/metascript-functions" },
          { text: "Metascript Functions A-C", link: "/metascript-functions-a-c" },
          { text: "Metascript Functions D-F", link: "/metascript-functions-d-f" },
          { text: "Metascript Functions G-H", link: "/metascript-functions-g-h" },
          { text: "Metascript Functions I-N", link: "/metascript-functions-i-n" },
          { text: "Metascript Functions O-R", link: "/metascript-functions-o-r" },
          { text: "Metascript Functions S-T", link: "/metascript-functions-s-t" },
          { text: "Metascript Functions U-Z", link: "/metascript-functions-u-z" },
        ],
      },
      {
        text: "Miscellaneous",
        collapsed: true,
        items: [
      { text: "Frequently Asked Questions", link: "/FAQ" },
      { text: "Known Issues", link: "/known-issues" },
      { text: "Uncategorized / Notes", link: "/notes" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/immense/immybot-documentation" }],
    search: {
      provider: "algolia",
      options: {
        apiKey: "e84eee7e1fa61571b3814adfcb2a70f2",
        indexName: "immy",
        appId: "SU6GB55GXI",
      },
    },
  },
  ignoreDeadLinks: true,
});
