// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "resume",
          description: "Biography &amp; Resume",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses with teaching responsibilities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-genealogy",
          title: "genealogy",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/Academic_Genealogy.pdf";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-genealogy2",
          title: "genealogy2",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/genealogy/";
          },
        },{id: "news-graduated-from-bogazici-university-electrical-electronics-engineering-ms-program",
          title: 'Graduated from Bogazici University Electrical Electronics Engineering MS program',
          description: "",
          section: "News",},{id: "news-awarded-special-achievement-award-for-master-s-thesis-by-ieee-communications-society-turkey",
          title: 'Awarded Special Achievement Award for Master’s Thesis by IEEE Communications Society Turkey',
          description: "",
          section: "News",},{id: "news-started-phd-in-electrical-and-computer-engineering-at-yale",
          title: 'Started PhD in Electrical and Computer Engineering at Yale',
          description: "",
          section: "News",},{id: "news-new-paper-robust-and-reliable-stochastic-resource-allocation-via-tail-waterfilling-preprint-available",
          title: 'New paper “Robust and Reliable Stochastic Resource Allocation via Tail Waterfilling” - preprint...',
          description: "",
          section: "News",},{id: "news-channel-modeling-for-multi-receiver-molecular-communication-systems-accepted-for-publication-in-ieee-transactions-on-communications",
          title: '“Channel Modeling for Multi-Receiver Molecular Communication Systems” - accepted for publication in IEEE...',
          description: "",
          section: "News",},{id: "news-robust-and-reliable-stochastic-resource-allocation-via-tail-waterfilling-accepted-to-ieee-spawc-2023",
          title: '“Robust and Reliable Stochastic Resource Allocation via Tail Waterfilling” accepted to IEEE SPAWC...',
          description: "",
          section: "News",},{id: "news-robust-and-reliable-stochastic-resource-allocation-via-tail-waterfilling-published-in-ieee-spawc-2023",
          title: '“Robust and Reliable Stochastic Resource Allocation via Tail Waterfilling” published in IEEE SPAWC...',
          description: "",
          section: "News",},{id: "news-new-paper-stochastic-resource-allocation-via-dual-tail-waterfilling-preprint-available",
          title: 'New paper “Stochastic Resource Allocation via Dual Tail Waterfilling”  - preprint available',
          description: "",
          section: "News",},{id: "news-stochastic-resource-allocation-via-dual-tail-waterfilling-accepted-to-ciss-2024",
          title: '“Stochastic Resource Allocation via Dual Tail Waterfilling”  accepted to CISS 2024',
          description: "",
          section: "News",},{id: "news-stochastic-resource-allocation-via-dual-tail-waterfilling-published-in-ciss-2024",
          title: '“Stochastic Resource Allocation via Dual Tail Waterfilling”  published in CISS 2024',
          description: "",
          section: "News",},{id: "news-distributionally-robust-power-policies-for-wireless-systems-under-power-fluctuation-risk-accepted-to-asilomar-2024",
          title: '“Distributionally Robust Power Policies for Wireless Systems under Power Fluctuation Risk” accepted to...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
