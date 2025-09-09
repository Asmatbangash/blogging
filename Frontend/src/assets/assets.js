import logo from "./logo.png";
import blogImg from "./blog.webp";
import upload_area from "./upload_area.webp";
import Finance1 from "./Finance1.webp";
import Finance2 from "./Finance2.webp";
import LifeStyl1 from "./LifeStyl1.webp";
import LifeStyl2 from "./LifeStyl2.webp";
import Startup1 from "./Startup1.webp";
import Startup2 from "./Startup2.webp";
import Tech1 from "./Tech1.webp";
import Tech2 from "./Tech2.webp";

const routes = [
  { name: "All", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "lifeStyle", href: "/lifeStyle" },
  { name: "startup", href: "/start-up" },
  { name: "Finance", href: "/finance" },
];

const blogPosts = [
  {
    _id: 1,
    autherName: "John Smith",
    title: "The Future of AI: What to Expect in 2030",
    category: "Technology",
    desc: "Artificial Intelligence is evolving rapidly. Here's what experts predict for the next decade.",
    date: "2025-05-30",
    img: Tech1,
  },
  {
    _id: 2,
    autherName: "Sophia Johnson",
    title: "How to Launch a Successful Startup in 2025",
    category: "Startup",
    desc: "Startups in 2025 face new challenges and opportunities. Learn key strategies for success.",
    date: "2025-05-28",
    img: Startup1,
  },
  {
    _id: 3,
    autherName: "Emily Davis",
    title: "Top 10 Lifestyle Changes for a Healthier You",
    category: "Lifestyle",
    desc: "Small changes can lead to big results. Try these daily habits for a better lifestyle.",
    date: "2025-05-25",
    img: LifeStyl1,
  },
  {
    _id: 4,
    autherName: "Michael Lee",
    title: "Cryptocurrency Trends to Watch in 2025",
    category: "Finance",
    desc: "From regulation to innovation, here’s what’s happening in the world of digital finance.",
    date: "2025-05-22",
    img: Finance1,
  },
  {
    _id: 5,
    autherName: "Olivia Brown",
    title: "Remote Work: Tools Every Team Needs",
    category: "Technology",
    desc: "Remote work is here to stay. These tools help keep your team productive and connected.",
    date: "2025-05-20",
    img: Tech2,
  },
  {
    _id: 6,
    autherName: "David Wilson",
    title: "Bootstrapping Your Business: A Guide",
    category: "Startup",
    desc: "No VC? No problem. Here’s how to build a company from scratch with limited funds.",
    date: "2025-05-18",
    img: Startup2,
  },
  {
    _id: 7,
    autherName: "Emma Martinez",
    title: "Saving vs Investing: What Should You Focus On?",
    category: "Finance",
    desc: "Understanding the difference can make or break your financial future.",
    date: "2025-05-16",
    img: Finance2,
  },
  {
    _id: 8,
    autherName: "Liam Anderson",
    title: "Morning Routines of Highly Successful People",
    category: "Lifestyle",
    desc: "Success starts in the morning. See what habits successful people swear by.",
    date: "2025-05-14",
    img: LifeStyl2,
  },
  {
    _id: 9,
    autherName: "John Smith",
    title: "The Future of AI: What to Expect in 2030",
    category: "Technology",
    desc: "Artificial Intelligence is evolving rapidly. Here's what experts predict for the next decade.",
    date: "2025-05-30",
    img: Tech1,
  },
  {
    _id: 10,
    autherName: "Sophia Johnson",
    title: "How to Launch a Successful Startup in 2025",
    category: "Startup",
    desc: "Startups in 2025 face new challenges and opportunities. Learn key strategies for success.",
    date: "2025-05-28",
    img: Startup1,
  },
  {
    _id: 11,
    autherName: "Emily Davis",
    title: "Top 10 Lifestyle Changes for a Healthier You",
    category: "Lifestyle",
    desc: "Small changes can lead to big results. Try these daily habits for a better lifestyle.",
    date: "2025-05-25",
    img: LifeStyl1,
  },
  {
    _id: 12,
    autherName: "Michael Lee",
    title: "Cryptocurrency Trends to Watch in 2025",
    category: "Finance",
    desc: "From regulation to innovation, here’s what’s happening in the world of digital finance.",
    date: "2025-05-22",
    img: Finance1,
  },
  {
    _id: 13,
    autherName: "Olivia Brown",
    title: "Remote Work: Tools Every Team Needs",
    category: "Technology",
    desc: "Remote work is here to stay. These tools help keep your team productive and connected.",
    date: "2025-05-20",
    img: Tech2,
  },
  {
    _id: 14,
    autherName: "David Wilson",
    title: "Bootstrapping Your Business: A Guide",
    category: "Startup",
    desc: "No VC? No problem. Here’s how to build a company from scratch with limited funds.",
    date: "2025-05-18",
    img: Startup2,
  },
  {
    _id: 15,
    autherName: "Emma Martinez",
    title: "Saving vs Investing: What Should You Focus On?",
    category: "Finance",
    desc: "Understanding the difference can make or break your financial future.",
    date: "2025-05-16",
    img: Finance2,
  },
  {
    _id: 16,
    autherName: "Liam Anderson",
    title: "Morning Routines of Highly Successful People",
    category: "Lifestyle",
    desc: "Success starts in the morning. See what habits successful people swear by.",
    date: "2025-05-14",
    img: LifeStyl2,
  },
];

export const assets = {
  logo,
  routes,
  blogPosts,
  upload_area,
};
