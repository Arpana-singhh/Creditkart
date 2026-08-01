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
    title: "Web Development",
    heading: 'Web Development <br class="d-none d-lg-block"> For Better Business',
    description: "We build fast, scalable websites and web apps tailored to your business goals, from marketing sites to full-stack platforms.",
    categories: [
      { id: 1, title: "Frontend Development", text: "Responsive, accessible interfaces built with modern HTML, CSS and JavaScript frameworks." },
      { id: 2, title: "Backend Development", text: "Robust APIs and server-side logic that power your application securely and reliably." },
      { id: 3, title: "E-commerce Solutions", text: "Custom online stores with secure payments, inventory, and checkout flows built to convert." },
    ],
  },
  {
    id: 2,
    name: "Mortgage Loan",
    slug: "mortgage-loan",
    title: "UI/UX Design",
    heading: 'UI/UX Design <br class="d-none d-lg-block"> That Feels Effortless',
    description: "We design intuitive, user-first experiences backed by research, wireframing, and iterative testing.",
    categories: [
      { id: 4, title: "Wireframing & Prototyping", text: "Low to high fidelity prototypes that validate ideas before a single line of code is written." },
      { id: 5, title: "Visual Design", text: "Pixel-perfect visual language, typography and color systems that reflect your brand." },
      { id: 6, title: "Usability Testing", text: "Real user feedback loops to catch friction points early and refine the experience." },
    ],
  },
  {
    id: 3,
    name: "Personal Loan",
    slug: "personal-loan",
    title: "Digital Marketing",
    heading: 'Digital Marketing <br class="d-none d-lg-block"> That Drives Growth',
    description: "Data-driven campaigns across search, social and email to grow your audience and revenue.",
    categories: [
      { id: 7, title: "Search Engine Optimization", text: "On-page and technical SEO to help your site rank where your customers are searching." },
      { id: 8, title: "Social Media Marketing", text: "Content and ad strategies tailored to each platform's audience and format." },
      { id: 9, title: "Email Campaigns", text: "Automated, segmented email flows that nurture leads into paying customers." },
    ],
  },
  {
    id: 4,
    name: "Business Loan",
    slug: "business-loan",
    title: "Product Design",
    heading: 'Product Design <br class="d-none d-lg-block"> Built Around Users',
    description: "End-to-end product design from concept to launch, balancing usability with business goals.",
    categories: [
      { id: 10, title: "Discovery & Research", text: "Stakeholder interviews and market research to define the right problem to solve." },
      { id: 11, title: "Design Systems", text: "Reusable component libraries that keep every screen consistent as the product scales." },
      { id: 12, title: "MVP Design", text: "Lean, focused design scoped to ship a testable first version quickly." },
    ],
  },
  {
    id: 5,
    name: "Gold Loan",
    slug: "gold-loan",
    title: "Branding & Illustration",
    heading: 'Branding &amp; Illustration <br class="d-none d-lg-block"> With Real Character',
    description: "Distinct brand identities and custom illustration work that make you memorable.",
    categories: [
      { id: 13, title: "Logo & Identity", text: "A logo and visual identity system designed to work everywhere your brand shows up." },
      { id: 14, title: "Custom Illustration", text: "Original artwork and iconography that gives your product a unique visual voice." },
      { id: 15, title: "Brand Style Guides", text: "Documented rules for color, type and imagery so your brand stays consistent at scale." },
    ],
  },
  {
    id: 6,
    name: "Project Loan",
    slug: "project-loan",
    title: "Mobile Solutions",
    heading: 'Mobile Solutions <br class="d-none d-lg-block"> For Every Device',
    description: "Cross-platform mobile strategy and design that keeps experiences consistent everywhere.",
    categories: [
      { id: 16, title: "Cross-Platform Strategy", text: "One design language that adapts cleanly across iOS, Android and tablet form factors." },
      { id: 17, title: "Mobile UX Optimization", text: "Touch-first interactions and layouts optimized for small screens and on-the-go use." },
      { id: 18, title: "App Store Readiness", text: "Assets, screenshots and metadata prepared to meet app store submission requirements." },
    ],
  },
  {
    id: 7,
    name: "Gold Loan",
    slug: "gold-loan-2",
    title: "App Development",
    heading: 'App Development <br class="d-none d-lg-block"> Built To Scale',
    description: "Native and cross-platform app development from prototype through production release.",
    categories: [
      { id: 19, title: "iOS & Android Apps", text: "Native and cross-platform builds tuned for performance on both major platforms." },
      { id: 20, title: "API Integration", text: "Connecting your app to payment gateways, CRMs, and third-party services securely." },
      { id: 21, title: "App Maintenance", text: "Ongoing updates, bug fixes and OS-version support after your app goes live." },
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
