/** Positivus landing page copy & assets — from Figma node 330:762 */

export const partnerLogos = [
  { name: "Amazon", src: "/assets/home/logo-amazon.svg" },
  { name: "Dribbble", src: "/assets/home/logo-dribbble.svg" },
  { name: "HubSpot", src: "/assets/home/logo-hubspot.svg" },
  { name: "Notion", src: "/assets/home/logo-notion.svg" },
  { name: "Netflix", src: "/assets/home/logo-netflix.svg" },
  { name: "Zoom", src: "/assets/home/logo-zoom.svg" },
] as const;

export const services = [
  {
    title: ["Search engine", "optimization"],
    labelTone: "accent" as const,
    variant: "muted" as const,
    illustration: "/assets/home/service-seo.png",
    darkLink: false,
  },
  {
    title: ["Pay-per-click", "advertising"],
    labelTone: "surface" as const,
    variant: "accent" as const,
    illustration: "/assets/home/service-ppc.png",
    darkLink: false,
  },
  {
    title: ["Social Media", "Marketing"],
    labelTone: "surface" as const,
    variant: "dark" as const,
    illustration: "/assets/home/service-smm.png",
    darkLink: true,
  },
  {
    title: ["Email", "Marketing"],
    labelTone: "accent" as const,
    variant: "muted" as const,
    illustration: "/assets/home/service-email.png",
    darkLink: false,
  },
  {
    title: ["Content", "Creation"],
    labelTone: "surface" as const,
    variant: "accent" as const,
    illustration: "/assets/home/service-content.png",
    darkLink: false,
  },
  {
    title: ["Analytics and", "Tracking"],
    labelTone: "accent" as const,
    variant: "dark" as const,
    illustration: "/assets/home/service-analytics.png",
    darkLink: true,
  },
] as const;

export const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    defaultOpen: true,
  },
  { number: "02", title: "Research and Strategy Development", body: "", defaultOpen: false },
  { number: "03", title: "Implementation", body: "", defaultOpen: false },
  { number: "04", title: "Monitoring and Optimization", body: "", defaultOpen: false },
  { number: "05", title: "Reporting and Communication", body: "", defaultOpen: false },
  { number: "06", title: "Continual Improvement", body: "", defaultOpen: false },
] as const;

export const teamMembers = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    photo: "/assets/home/team-john.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    photo: "/assets/home/team-jane.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    photo: "/assets/home/team-michael.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    photo: "/assets/home/team-emily.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    photo: "/assets/home/team-john.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    photo: "/assets/home/team-john.png",
  },
] as const;

export const testimonial = {
  quote:
    '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  name: "John Smith",
  role: "Marketing Director at XYZ Corp",
};
