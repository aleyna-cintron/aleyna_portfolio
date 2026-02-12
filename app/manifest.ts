import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aleyna Cintron | Full Stack Developer",
    short_name: "Aleyna Cintron",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, Node.js, and the MERN stack.",
    start_url: "/",
    display: "standalone",
    background_color: "#030213",
    theme_color: "#030213",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
