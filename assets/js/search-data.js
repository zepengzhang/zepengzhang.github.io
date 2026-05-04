// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications in chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-on-graph-neural-networks-with-adaptive-structures-has-been-accepted-by-ieee-journal-of-selected-topics-in-signal-processing",
          title: 'Our work on “Graph Neural Networks with Adaptive Structures” has been accepted by...',
          description: "",
          section: "News",},{id: "news-our-work-on-domain-adaptive-unfolded-graph-neural-networks-has-been-accepted-by-aaai-2025",
          title: 'Our work on “Domain Adaptive Unfolded Graph Neural Networks” has been accepted by...',
          description: "",
          section: "News",},{id: "news-i-have-joined-prof-jhony-h-giraldo-s-group-at-télécom-paris-institut-polytechnique-de-paris-as-a-visiting-student",
          title: 'I have joined Prof. Jhony H. Giraldo’s group at Télécom Paris, Institut Polytechnique...',
          description: "",
          section: "News",},{id: "news-our-paper-weighted-sum-rate-maximization-using-mm-convergence-rate-and-deep-adaptation-has-been-accepted-by-eusipco-2025",
          title: 'Our paper “Weighted Sum-Rate Maximization using MM: Convergence Rate and Deep Adaptation” has...',
          description: "",
          section: "News",},{id: "news-our-paper-algorithm-informed-graph-neural-networks-for-leakage-detection-and-localization-in-water-distribution-networks-has-been-accepted-by-reliability-engineering-amp-amp-system-safety",
          title: 'Our paper “Algorithm-Informed Graph Neural Networks for Leakage Detection and Localization in Water...',
          description: "",
          section: "News",},{id: "news-our-paper-geolink-empowering-remote-sensing-foundation-model-with-openstreetmap-data-has-been-accepted-by-neurips-2025",
          title: 'Our paper “GeoLink: Empowering Remote Sensing Foundation Model with OpenStreetMap Data” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-rins-t-robust-implicit-neural-solvers-for-time-series-linear-inverse-problems-has-been-accepted-by-ieee-transactions-on-instrumentation-amp-amp-measurement",
          title: 'Our paper “RINS-T: Robust Implicit Neural Solvers for Time Series Linear Inverse Problems”...',
          description: "",
          section: "News",},{id: "news-our-paper-spatiotemporal-imputation-with-graph-informed-flow-matching-has-been-accepted-by-icml-2026",
          title: 'Our paper “Spatiotemporal Imputation with Graph-Informed Flow Matching” has been accepted by ICML...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%65%70%65%6E%67.%7A%68%61%6E%67@%65%70%66%6C.%63%68", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zepeng-zhang-a02303204", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hyBOSa0AAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
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
