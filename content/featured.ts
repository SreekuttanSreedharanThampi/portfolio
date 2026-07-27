// Personal / external projects shown at the top of the "Selected work" section.
// These link out to a live site. Case studies (the detailed write-ups) are loaded
// separately from content/projects/*.mdx and rendered below these.
export type FeaturedProject = {
  kind: string;
  title: string;
  org: string;
  url: string;
  desc: string;
  stack: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    kind: "Featured Project · Personal",
    title: "Cricket Scoring App",
    org: "Personal project",
    url: "https://allmand-cricket.web.app/",
    desc: "A real-time cricket scoring web app for tracking innings, overs, wickets and player statistics ball-by-ball. Built with Next.js, it covers match setup, live scoreboard updates and a clean, mobile-friendly interface for scoring games on the go.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];
