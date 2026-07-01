import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TWDY Agency",
    short_name: "TWDY",
    description:
      "TWDY Agency is a creator & athlete management agency specializing in brand partnerships, campaign management, and talent strategy.",
    start_url: "/",
    display: "standalone",
    // White to match the white-background TWDY logo used for the icons /
    // splash screen.
    background_color: "#ffffff",
    // Kept black: theme_color controls the browser/OS UI chrome, which should
    // continue to match the dark site rather than the white logo.
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
