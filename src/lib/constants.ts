export type Skills = {
  label: string;
  url: string;
  type: "frontend" | "backend" | "fullstack" | "others";
}[];

export const skills: Skills = [
  {
    label: "HTML",
    url: "/svg/html5.svg",
    type: "frontend",
  },
  {
    label: "CSS",
    url: "/svg/css3.svg",
    type: "frontend",
  },
  {
    label: "JS",
    url: "/svg/js.svg",
    type: "frontend",
  },

  {
    label: "Typescript",
    url: "/svg/ts.svg",
    type: "frontend",
  },
  {
    label: "Python",
    url: "/svg/python.svg",
    type: "backend",
  },
  {
    label: "Go lang",
    url: "/svg/golang.svg",
    type: "backend",
  },
  {
    label: "Node.js",
    url: "/svg/nodeJS.svg",
    type: "backend",
  },
  {
    label: "React",
    url: "/svg/react.svg",
    type: "frontend",
  },

  {
    label: "Redux",
    url: "/svg/redux.svg",
    type: "frontend",
  },
  {
    label: "Next.js",
    url: "/svg/next.svg",
    type: "fullstack",
  },
  {
    label: "Tailwind CSS",
    url: "/svg/tailwind.svg",
    type: "frontend",
  },
  {
    label: "Express.js",
    url: "/svg/express.svg",
    type: "backend",
  },
  {
    label: "Mongo DB",
    url: "/svg/mongoDB.svg",
    type: "backend",
  },
  {
    label: "SQLite",
    url: "/svg/SQLite.svg",
    type: "backend",
  },
  {
    label: "MySQL",
    url: "/svg/mySQL.svg",
    type: "backend",
  },

  {
    label: "PostgreSQL",
    url: "/svg/PostgreSQL.svg",
    type: "backend",
  },
  {
    label: "Git",
    url: "/svg/git.svg",
    type: "others",
  },
  { label: "GitHub", url: "/svg/github.svg", type: "others" },
];

type Projects = {
  img?: string;
  label: string;
  info: string;
  github: string;
  live?: string;
}[];
export const projects: Projects = [
  {
    label: "User Management System",
    info: "User Management system is REST application, made with express.js, mongoDB and more.",
    github: "https://github.com/Brassalsa/user-management",
  },
  {
    label: "Blog Application",
    info: "Blog Application made with Next.js, ShadCn, Acternity and more. User can perform CRUD operations",
    github: "https://github.com/Brassalsa/blog-app-next",
  },
  {
    img: "/img/dummy-products.png",
    label: "Dummy Products",
    info: "Dummy Products application made with Next.js.",
    github: "https://github.com/Brassalsa/dummy-products",
    live: "https://dummy-products-two.vercel.app/",
  },
  {
    img: "/img/cart-app.png",
    label: "Cart App",
    info: "Cart Application made with React.js. It fetch data from fakestore api.",
    github: "https://github.com/Brassalsa/cart-app",
    live: "https://compromise-io.netlify.app/",
  },
  {
    label: "M-chat",
    info: "Full stack chat application made with Go, HTMX, mongoDb and more.",
    github: "https://github.com/Brassalsa/m-chat",
  },
  {
    label: "Distributed File Storage",
    info: "Made with Go lang, distributed file storage with encryption",
    github: "https://github.com/Brassalsa/dist-file-store",
  },
];

type MediaLinks = {
  name: string;
  url: string;
  img: string;
}[];

export const mediaLinks: MediaLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Brassalsa",
    img: "/svg/github.svg",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/saurav.chauhan.940098/",
    img: "/svg/facebook.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bruhsalsa/",
    img: "/svg/instagram.svg",
  },

  {
    name: "Twitter",
    url: "https://twitter.com/Sauravc64320635",
    img: "/svg/twitter.svg",
  },
];
