module.exports = {
  siteTitle: 'Jakub Štěrba | Softwarový inženýr',
  siteDescription:
    'Jakub Štěrba je softwarový inženýr z Prahy, který rád vytváří webové stránky a webové aplikace, které poskytují intuitivní uživatelské rozhraní s pomocí nejmodernějších technoligí.',
  siteKeywords:
    'Jakub Štěrba, Jakub, Štěrba, Esskimo, softwarový inženýr, web developer, javascript, react, acomware',
  siteUrl: 'https://kubasterba.cz',
  siteLanguage: 'cs_CZ',
  googleAnalyticsID: 'UA-113873623-1',
  googleVerification: '',
  name: 'Jakub Štěrba',
  location: 'Prague',
  email: 'kubas.sterba@gmail.com',
  github: 'https://github.com/Esskimo',
  twitterHandle: '@SterbaJakub',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Esskimo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kubasterba',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kubas.sterba',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SterbaJakub',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#ff8c00',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
