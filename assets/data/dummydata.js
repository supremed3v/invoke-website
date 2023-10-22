import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of market experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Unique technologies & modern approach ",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "100+ successful cases in portfolio",
  },
  {
    icon: <BiUser size={25} />,
    title: "Customer satisfaction is our top priority",
  },
];
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: "auto",
    maxWidth: "90%", // Adjust the width to a percentage of the screen width
    padding: "20px", // Add some padding for content spacing

    // Media query for small screens (e.g., mobile)
    "@media (max-width: 768px)": {
      maxWidth: "95%", // Adjust the width for smaller screens
      padding: "10px", // Reduce padding for smaller screens
    },
  },
};

export const expertise = [
  {
    id: 1,
    title: "Web Design & Development",
    cover: "../images/e1.jpg",
    desc: [
      { text: "Web design" },
      { text: "Web development" },
      { text: "Custom icons & illustrations" },
      { text: "Hosting" },
      { text: "Website audit" },
    ],
  },
  {
    id: 2,
    title: "Digital Marketing",
    cover: "../images/e2.jpg",
    desc: [
      { text: "Social media marketing" },
      { text: "Marketing campaigns" },
      { text: "Markting management" },
      { text: "SEO" },
    ],
  },
  {
    id: 3,
    title: "E-Commerce",
    cover: "../images/e3.jpg",
    desc: [
      { text: "E-Commerce website design" },
      { text: "WooCommerce" },
      { text: "Content management" },
      { text: "Hosting" },
    ],
  },
  {
    id: 4,
    title: "Branding & Creative Services",
    cover: "../images/e4.jpg",
    desc: [
      { text: "Visual identity" },
      { text: "Branding for social media" },
      { text: "Custom illustrations" },
    ],
  },
];
export const testimonial = [
  {
    id: 1,
    name: "John Doe",
    cover: "../images/e1.jpg",
    post: "CEO, Tech Solutions Inc.",
    desc: "I've had the pleasure of working with Tech Solutions Inc., and their expertise is truly remarkable. They've provided valuable insights and solutions, helping our company succeed in various ways. I highly recommend their services.",
  },
  {
    id: 2,
    name: "Emily Smith",
    cover: "../images/e2.jpg",
    post: "Marketing Manager, Creative Minds Co.",
    desc: "The marketing strategies and creativity displayed by Emily and her team at Creative Minds Co. have been outstanding. They understand our brand and have significantly improved our marketing efforts. I'm grateful for their dedication and results.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    cover: "../images/e3.jpg",
    post: "CEO, Innovation Group",
    desc: "I've had the pleasure of working with Innovation Group, and their expertise is truly remarkable. They've provided valuable insights and solutions, helping our company succeed in various ways. I highly recommend their services.",
  },
  {
    id: 4,
    name: "Mark Davis",
    cover: "../images/e4.jpg",
    post: "Marketing Manager, Artistic Creations",
    desc: "The marketing strategies and creativity displayed by Mark and his team at Artistic Creations have been outstanding. They understand our brand and have significantly improved our marketing efforts. I'm grateful for their dedication and results.",
  },
];
export const showcase = [
  {
    id: 1,
    title: "Neon Lights",
    cover: "../images/s1.jpg",
    catgeory: "DIGITAL MARKETING",
  },
  {
    id: 2,
    title: "Futuristic Furniture",
    catgeory: "WEBSITES",
    cover: "../images/s2.jpg",
  },
  {
    id: 3,
    title: "Smart Living",
    cover: "../images/s3.jpg",
    catgeory: "WEBSITES",
  },
  {
    id: 4,
    title: "Light Painting",
    cover: "../images/s4.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "Ideabox",
    cover: "../images/s5.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 6,
    title: "VR Experience",
    cover: "../images/s6.jpg",
    catgeory: "WEBSITES	",
  },
];
export const brand = [
  {
    id: 1,
    cover: "../images/l1.svg",
  },
  {
    id: 2,
    cover: "../images/l2.svg",
  },
  {
    id: 3,
    cover: "../images/l3.svg",
  },
  {
    id: 4,
    cover: "../images/l4.svg",
  },
  {
    id: 5,
    cover: "../images/l5.svg",
  },
  {
    id: 6,
    cover: "../images/l6.svg",
  },
];
export const blogdata = [
  {
    id: 1,
    title: "Ligula vel urna accumsan placerat",
    cover: "../images/b1.webp",
    catgeory: "INDUSTRY",
    date: "JANUARY 12, 2023",
  },
  {
    id: 2,
    title: "Don’t underestimate the lorem ipsum dolor amet",
    cover: "../images/b2.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 20, 2023",
  },
  {
    id: 3,
    title:
      "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    cover: "../images/b3.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 9, 2023",
  },
  {
    id: 4,
    title: "What eleifend posuere tincidunt",
    cover: "../images/b4.jpg",
    catgeory: "EVENTS",
    date: "OCTOBER 8, 2023",
  },
];
export const teamdata = [
  {
    id: 1,
    title: "Alexander Black",
    cover: "../images/t1.jpg",
    post: "FOUNDER, CEO",
  },
  {
    id: 2,
    title: "Anna Kovalenko",
    cover: "../images/t2.jpg",
    post: "FINANCE DIRECTOR",
  },
  {
    id: 3,
    title: "Tiffany White",
    cover: "../images/t3.jpg",
    post: "CREATIVE DIRECTOR",
  },
  {
    id: 4,
    title: "Richard Greenwood",
    cover: "../images/t4.jpg",
    post: "PROGRAMMER",
  },
  {
    id: 5,
    title: "Jessica Brown",
    cover: "../images/t5.jpg",
    post: "MARKETING DIRECTOR",
  },
  {
    id: 6,
    title: "Gregory Windstorm",
    cover: "../images/t6.jpg",
    post: "ACCOUNTING MANAGER",
  },
  {
    id: 7,
    title: "Anna Red",
    cover: "../images/t7.jpg",
    post: "PROJECT MANAGER",
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "../images/t8.jpg",
    post: "",
  },
];
export const tabs = [
  "Web Development",
  "Logo Design",
  "Branding",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Custom Web/App Development",
];
export const pricingData = {
  "Web Development": [
    {
      plan: "Basic",
      price: "$399",
      description: (
        <ul>
          <li>3 Page Website with Custom Design</li>
          <li>Contact / Query Form Integration</li>
          <li>1 Banner Design</li>
          <li>2 Stock Photos</li>
          <li>FREE Favicon Design</li>
          <li>Cross Browser Compatibility</li>
          <li>Complete W3C Certified HTML</li>
          <li>Initial Website Concepts in 48 Hours</li>
          <li>Design & Deployment Included</li>
          <li>Complete Source Files Delivery</li>
          <li>API Integrations Available</li>
          <li>Dedicated Project Manager</li>
          <li>100% Ownership Rights</li>
          <li>100% Satisfaction Guarantee</li>
          <li>Mobile Responsive Design</li>
          <li>Content Management System (CMS)</li>
        </ul>
      ),
    },
    {
      plan: "Startup",
      price: "$799",
      description: (
        <ul>
          <li>5 Page Website with Custom Design</li>
          <li>Contact / Query Form Integration</li>
          <li>2 Banner Designs</li>
          <li>4 Stock Photos</li>
          <li>FREE Favicon Design</li>
          <li>Cross Browser Compatibility</li>
          <li>Complete W3C Certified HTML</li>
          <li>Initial Website Concepts in 48 Hours</li>
          <li>Design & Deployment Included</li>
          <li>Complete Source Files Delivery</li>
          <li>API Integrations Available</li>
          <li>Dedicated Project Manager</li>
          <li>100% Ownership Rights</li>
          <li>100% Satisfaction Guarantee</li>
          <li>Mobile Responsive Design</li>
          <li>Content Management System (CMS)</li>
        </ul>
      ),
    },
    {
      plan: "E-Commerce",
      price: "$2,999",
      description: (
        <ul>
          <li>Custom Ecommerce Website</li>
          <li>Up to 200 Products</li>
          <li>CMS / Admin Panel Integration</li>
          <li>Fully Mobile Responsive</li>
          <li>Shopping Cart Integration</li>
          <li>Payment Gateway Integration</li>
          <li>Product Listing & Management</li>
          <li>Order Management & Tracking</li>
          <li>Initial Website Concepts in 48 Hours</li>
          <li>Design & Deployment Included</li>
          <li>Complete Source Files Delivery</li>
          <li>API Integrations Available</li>
          <li>Dedicated Project Manager</li>
          <li>100% Ownership Rights</li>
          <li>100% Satisfaction Guarantee</li>
          <li>Mobile Responsive Design</li>
          <li>Content Management System (CMS)</li>
        </ul>
      ),
    },
    {
      plan: "Platinum",
      price: "$4,999",
      description: (
        <ul>
          <li>Custom Website with Unlimited Pages</li>
          <li>Contact / Query Form Integration</li>
          <li>Multiple Banner Designs</li>
          <li>High-Quality Stock Photos</li>
          <li>FREE Favicon Design</li>
          <li>Cross Browser Compatibility</li>
          <li>Complete W3C Certified HTML</li>
          <li>Initial Website Concepts in 48 Hours</li>
          <li>Design & Deployment Included</li>
          <li>Complete Source Files Delivery</li>
          <li>API Integrations Available</li>
          <li>Dedicated Project Manager</li>
          <li>100% Ownership Rights</li>
          <li>100% Satisfaction Guarantee</li>
          <li>Mobile Responsive Design</li>
          <li>Content Management System (CMS)</li>
        </ul>
      ),
    },
  ],
  "Logo Design": [
    {
      plan: "Starter",
      price: "$49",
      description: (
        <ul>
          <li>1 Unique Logo Design</li>
          <li>2 Revisions</li>
          <li>High-Resolution Vector Files</li>
          <li>Multiple File Formats</li>
          <li>Ownership Rights</li>
        </ul>
      ),
    },
    {
      plan: "Professional",
      price: "$99",
      description: (
        <ul>
          <li>2 Unique Logo Designs</li>
          <li>Unlimited Revisions</li>
          <li>High-Resolution Vector Files</li>
          <li>Multiple File Formats</li>
          <li>Ownership Rights</li>
          <li>Brand Style Guide</li>
        </ul>
      ),
    },
    {
      plan: "Premium",
      price: "$199",
      description: (
        <ul>
          <li>3 Unique Logo Designs</li>
          <li>Unlimited Revisions</li>
          <li>High-Resolution Vector Files</li>
          <li>Multiple File Formats</li>
          <li>Ownership Rights</li>
          <li>Brand Style Guide</li>
          <li>Business Card Design</li>
          <li>Social Media Profile Images</li>
        </ul>
      ),
    },
  ],
  Branding: [
    {
      plan: "Basic",
      price: "$1,499",
      description: (
        <ul>
          <li>Logo Design</li>
          <li>6 Unique Logo Concepts</li>
          <li>FREE Icon</li>
          <li>FREE Grayscale Copy</li>
          <li>Unlimited Revisions</li>
          <li>100% Ownership Right</li>
          <li>AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats</li>
          <li>Print Media</li>
          <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
          <li>Website Design</li>
          <li>10 Pages Custom Business Website</li>
          <li>Mobile Responsive</li>
          <li>FREE Google Friendly Sitemap Search Engine Submission</li>
          <li>Complete W3C Certified HTML</li>
          <li>Complete Deployment</li>
        </ul>
      ),
    },
    {
      plan: "Pro",
      price: "$499",
      description: (
        <ul>
          <li>Logo Design</li>
          <li>12 Unique Logo Concepts</li>
          <li>FREE Icon</li>
          <li>FREE Grayscale Copy</li>
          <li>Unlimited Revisions</li>
          <li>100% Ownership Right</li>
          <li>AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats</li>
          <li>Print Material</li>
          <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
          <li>Flyer Design / Label Design</li>
          <li>Website Design</li>
          <li>Custom Ecommerce Website</li>
          <li>Up to 200 Products</li>
          <li>CMS / Admin Panel Integration</li>
          <li>Fully Mobile Responsive</li>
          <li>Shopping Cart Integration</li>
          <li>Payment Gateway Integration</li>
          <li>Responsive Design (Mobile Compatible)</li>
          <li>Complete Deployment</li>
          <li>Social Media Design</li>
          <li>Facebook Fanpage Splash Page + Cover Photo</li>
        </ul>
      ),
    },
  ],
  "Social Media Marketing": [
    {
      plan: "Starter",
      price: "$299",
      description: (
        <ul>
          <li>Optimize FB Page</li>
          <li>1 Social Cover</li>
          <li>Engagement</li>
          <li>Reviews</li>
          <li>Check-ins</li>
          <li>Posts</li>
          <li>3 Posts per Week</li>
          <li>1 Facebook Event</li>
          <li>Monthly Reporting</li>
        </ul>
      ),
    },
    {
      plan: "Professional",
      price: "$549",
      description: (
        <ul>
          <li>Optimize FB Page</li>
          <li>1 Social Cover</li>
          <li>Engagement</li>
          <li>Reviews</li>
          <li>Check-ins</li>
          <li>Posts</li>
          <li>Shares</li>
          <li>Mentions</li>
          <li>Invite to Like</li>
          <li>Inbox Responses</li>
          <li>4 Posts per Week</li>
          <li>2 Facebook Events</li>
          <li>Monthly Reporting</li>
        </ul>
      ),
    },
  ],
  "Search Engine Optimization": [
    {
      plan: "Starter",
      price: "$299/month",
      description: (
        <ul>
          <li>Website Audit</li>
          <li>Keyword Research</li>
          <li>On-Page Optimization</li>
          <li>Content Creation</li>
          <li>Basic Reporting</li>
          <li>Monthly Performance Review</li>
        </ul>
      ),
    },
    {
      plan: "Pro",
      price: "$499/month",
      description: (
        <ul>
          <li>Website Audit</li>
          <li>Keyword Research</li>
          <li>On-Page Optimization</li>
          <li>Content Creation</li>
          <li>Advanced Reporting</li>
          <li>Monthly Performance Review</li>
          <li>Link Building</li>
        </ul>
      ),
    },
    {
      plan: "Premium",
      price: "$799/month",
      description: (
        <ul>
          <li>Website Audit</li>
          <li>Keyword Research</li>
          <li>On-Page Optimization</li>
          <li>Content Creation</li>
          <li>Advanced Reporting</li>
          <li>Monthly Performance Review</li>
          <li>Link Building</li>
          <li>Local SEO Optimization</li>
        </ul>
      ),
    },
  ],
  "Custom Web/App Development": [
    {
      plan: "Basic",
      price: "Get a Quote",
      description: (
        <ul>
          <li>Custom Web Application Development</li>
          <li>Up to 5 Pages</li>
          <li>Responsive Design</li>
          <li>User Authentication</li>
          <li>Basic Database Integration</li>
          <li>One Round of Revisions</li>
          <li>Deployment on Your Server</li>
          <li>Ownership Rights</li>
        </ul>
      ),
    },
    {
      plan: "Pro",
      price: "Get a Quote",
      description: (
        <ul>
          <li>Custom Web or App Development</li>
          <li>Up to 10 Pages</li>
          <li>Responsive Design</li>
          <li>User Authentication & Authorization</li>
          <li>Database Integration</li>
          <li>Two Rounds of Revisions</li>
          <li>Deployment on Your Server or App Store</li>
          <li>Ownership Rights</li>
          <li>Basic Maintenance & Support</li>
        </ul>
      ),
    },
    {
      plan: "Enterprise",
      price: "Get a Quote",
      description: (
        <ul>
          <li>Custom Web and App Development</li>
          <li>Unlimited Pages</li>
          <li>Custom Features & Functionality</li>
          <li>Advanced User Management</li>
          <li>Database Integration & Optimization</li>
          <li>Custom Revisions</li>
          <li>Deployment & Maintenance Support</li>
          <li>Ownership Rights</li>
          <li>Priority Support & Ongoing Maintenance</li>
        </ul>
      ),
    },
  ],
};
