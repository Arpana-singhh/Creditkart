/*
 * Single source of truth for page-service.html.
 * The page reads ?do=&productId=&productCategoryId= from the URL and
 * renders this data instead of shipping a separate .html file per item.
 */
const products = [
  {
    id: 1,
    name: "Home Loan",
    slug: "home-loan",
    title: "Home Loan",
    heading: 'Home Loan <br class="d-none d-lg-block"> For Better Business',
    description: "We build fast, scalable websites and web apps tailored to your business goals, from marketing sites to full-stack platforms.",
    categories: [
      {
        id: 1,
        title: "Home Loan for Salaried",
        text: "Home loan options designed for salaried applicants.",
        subcategories: [
          { id: 14, title: "Indusind Bank Home Loan" },
          { id: 22, title: "Shriram Housing Finance Home Loan" },
          { id: 10, title: "ICICI Home Loan" },
          { id: 6, title: "Bank of Baroda Home Loan" },
          { id: 23, title: "Sundaram Home Loan" },
          { id: 2488, title: "testing22222000" },
          { id: 25, title: "Ujjivan Small Finance Home Loan" },
          { id: 12, title: "IDFC First Home Loan" },
          { id: 3, title: "Axis Bank Home Loan" },
        ],
      },
      {
        id: 2,
        title: "Home Loan for Self Employed",
        text: "Home loan options for self-employed professionals and business owners.",
        subcategories: [
          { id: 28, title: "Aadhar Housing Home Loan" },
          { id: 35, title: "HDFC Bank Home Loan" },
          { id: 52, title: "Ujjivan Small Finance Home Loan" },
          { id: 41, title: "Indusind Bank Home Loan" },
          { id: 50, title: "Sundaram Home Loan" },
          { id: 46, title: "MuthootFinance Finance Home Loan" },
          { id: 48, title: "PNB Housing Finance Home Loan" },
          { id: 43, title: "Wonder Finance Home Loan" },
          { id: 32, title: "Bandhan Home Loan" },
          { id: 31, title: "Bajaj Finance Home Loan" },
        ],
      },
      {
        id: 3,
        title: "Home Loan Balance Transfer",
        text: "Transfer an existing home loan to a lender with a more suitable offer.",
        subcategories: [
          { id: 69, title: "Kotak Mahindra Bank Home Loan" },
          { id: 59, title: "Bandhan Home Loan" },
          { id: 70, title: "Wonder Finance Home Loan" },
          { id: 74, title: "Piramal Finance Home Loan" },
          { id: 66, title: "IDFC First Home Loan" },
          { id: 79, title: "Ujjivan Small Finance Home Loan" },
          { id: 57, title: "Axis Bank Home Loan" },
          { id: 73, title: "MuthootFinance Finance Home Loan" },
          { id: 77, title: "Sundaram Home Loan" },
          { id: 55, title: "Aadhar Housing Home Loan" },
        ],
      },
      {
        id: 4,
        title: "Self Construction Home Loan",
        text: "Finance for constructing your own home.",
      },
      {
        id: 5,
        title: "Home Loan for Plot Purchase",
        text: "Finance for purchasing a residential plot.",
      },
      {
        id: 6,
        title: "Rural (akarani) Home Loan",
        text: "Home loan options for rural and akarani properties.",
      },
      {
        id: 7,
        title: "Home Loan for NRI",
        text: "Home financing options for non-resident Indians.",
      },
    ],
  },
  {
    id: 2,
    name: "Mortgage Loan",
    slug: "mortgage-loan",
    title: "Mortgage Loan",
    heading: 'Mortgage Loan <br class="d-none d-lg-block"> That Feels Effortless',
    description: "We design intuitive, user-first experiences backed by research, wireframing, and iterative testing.",
    categories: [
      {
        id: 4,
        title: "Wireframing & Prototyping",
        text: "Low to high fidelity prototypes that validate ideas before a single line of code is written.",
      },
      {
        id: 5,
        title: "Visual Design",
        text: "Pixel-perfect visual language, typography and color systems that reflect your brand.",
      },
      {
        id: 6,
        title: "Usability Testing",
        text: "Real user feedback loops to catch friction points early and refine the experience.",
      },
    ],
  },
  {
    id: 3,
    name: "Personal Loan",
    slug: "personal-loan",
    title: "Personal Loan",
    heading: 'Personal Loan <br class="d-none d-lg-block"> That Drives Growth',
    description: "Data-driven campaigns across search, social and email to grow your audience and revenue.",
    categories: [
      {
        id: 7,
        title: "Search Engine Optimization",
        text: "On-page and technical SEO to help your site rank where your customers are searching.",
      },
      {
        id: 8,
        title: "Social Media Marketing",
        text: "Content and ad strategies tailored to each platform's audience and format.",
      },
      {
        id: 9,
        title: "Email Campaigns",
        text: "Automated, segmented email flows that nurture leads into paying customers.",
      },
    ],
  },
  {
    id: 4,
    name: "Business Loan",
    slug: "business-loan",
    title: "Business Loan",
    heading: 'Business Loan <br class="d-none d-lg-block"> Built Around Users',
    description: "End-to-end product design from concept to launch, balancing usability with business goals.",
    categories: [
      {
        id: 10,
        title: "Discovery & Research",
        text: "Stakeholder interviews and market research to define the right problem to solve.",
      },
      {
        id: 11,
        title: "Design Systems",
        text: "Reusable component libraries that keep every screen consistent as the product scales.",
      },
      {
        id: 12,
        title: "MVP Design",
        text: "Lean, focused design scoped to ship a testable first version quickly.",
      },
    ],
  },
  {
    id: 5,
    name: "Gold Loan",
    slug: "gold-loan",
    title: "Gold Loan",
    heading: 'Gold Loan <br class="d-none d-lg-block"> With Real Character',
    description: "Distinct brand identities and custom illustration work that make you memorable.",
    categories: [
      {
        id: 13,
        title: "Logo & Identity",
        text: "A logo and visual identity system designed to work everywhere your brand shows up.",
      },
      {
        id: 14,
        title: "Custom Illustration",
        text: "Original artwork and iconography that gives your product a unique visual voice.",
      },
      {
        id: 15,
        title: "Brand Style Guides",
        text: "Documented rules for color, type and imagery so your brand stays consistent at scale.",
      },
    ],
  },
  {
    id: 6,
    name: "Project Loan",
    slug: "project-loan",
    title: "Project Loan",
    heading: 'Project Loan <br class="d-none d-lg-block"> For Every Device',
    description: "Cross-platform mobile strategy and design that keeps experiences consistent everywhere.",
    categories: [
      {
        id: 16,
        title: "Cross-Platform Strategy",
        text: "One design language that adapts cleanly across iOS, Android and tablet form factors.",
      },
      {
        id: 17,
        title: "Mobile UX Optimization",
        text: "Touch-first interactions and layouts optimized for small screens and on-the-go use.",
      },
      {
        id: 18,
        title: "App Store Readiness",
        text: "Assets, screenshots and metadata prepared to meet app store submission requirements.",
      },
    ],
  },
  {
    id: 7,
    name: "Gold Loan",
    slug: "gold-loan-2",
    title: "Gold Loan",
    heading: 'Gold Loan <br class="d-none d-lg-block"> Built To Scale',
    description: "Native and cross-platform app development from prototype through production release.",
    categories: [
      {
        id: 19,
        title: "iOS & Android Apps",
        text: "Native and cross-platform builds tuned for performance on both major platforms.",
      },
      {
        id: 20,
        title: "API Integration",
        text: "Connecting your app to payment gateways, CRMs, and third-party services securely.",
      },
      {
        id: 21,
        title: "App Maintenance",
        text: "Ongoing updates, bug fixes and OS-version support after your app goes live.",
      },
    ],
  },
];

function getProductById(productId) {
  return products.find(function (p) {
    return p.id === productId;
  });
}

function getCategoryById(productCategoryId) {
  for (var i = 0; i < products.length; i++) {
    var match = products[i].categories.find(function (c) {
      return c.id === productCategoryId;
    });
    if (match) return { product: products[i], category: match };
  }
  return null;
}
