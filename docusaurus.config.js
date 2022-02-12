const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Blog - ArchLan',
  tagline: 'ArchLan Blog',
  url: 'https://archlan.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-alt.svg',
  organizationName: 'archlan', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          editUrl: 'https://github.com/archlan/blog/edit/main/',
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `Copyright Lanhild © 2021-${new Date().getFullYear()} | ArchLan Linux`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-TYBT7W3JHT',
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        hideOnScroll: true,
        title: 'ArchLan Blog',
        logo: {
          alt: 'ArchLan Logo',
          src: 'img/logo-alt.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ArchLan',
            items: [
              {
                label: 'Home',
                to: 'https://archlan.github.io',
              },
              {
                label: 'Docs',
                to: 'https://archlan.github.io/documentation',
              },
              {
                label: 'Tutorials',
                to: 'https://archlan.github.io/blog',
              },
              {
                label: 'News',
                to: 'https://archlan.github.io/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/archlan_linux/',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/archlan',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ArchLan_Linux',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/5XBTCeBvvN',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'Source',
                to: 'https://github.com/archlan/iso',
              },
              {
                label: 'Releases',
                to: 'https://github.com/archlan/releases',
              },
              {
                label: 'Issues',
                to: 'https://github.com/archlan/issue-tracker/issues',
              },
              {
                label: 'Documentation',
                to: 'https://github.com/archlan/documentation',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Donate',
                to: 'https://archlan.github.io/donate',
              },
              {
                label: 'Contact',
                href: 'mailto:archlan@pm.me',
              },
            ],
          },
        ],
        copyright: `Copyright Lanhild © 2021-${new Date().getFullYear()} | ArchLan Linux`,
      },
      prism: {
        defaultMode: 'dark',
        // Dark/light switch icon options
        switchConfig: {
          // Icon for the switch while in dark mode
          darkIcon: 'light_mode',
  
          // CSS to apply to dark icon
          darkIconStyle: {
            fontFamily: 'Material Icons',
          },
  
          lightIcon: 'dark_mode',
  
          lightIconStyle: {
            fontFamily: 'Material Icons',
          },
        },
      },
    }),
};

module.exports = config;
