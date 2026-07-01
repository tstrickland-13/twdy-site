import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared definition for both the Open Graph image (`opengraph-image`) and the
// Twitter card image (`twitter-image`). The wordmark is read from disk and
// inlined as a data URL, so this must run on the Node.js runtime (the edge
// runtime cannot read the filesystem).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "TWDY Agency";

export async function renderShareImage() {
  // `logo-white.png` is a genuine PNG (rgb24, 500×500): the orange TWDY
  // wordmark on a solid white field. Matching the canvas background to white
  // makes the square edges seamless, so the card reads as one clean white panel
  // with the centered orange wordmark.
  const logo = await readFile(join(process.cwd(), "public", "logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="TWDY Agency"
          width={size.height}
          height={size.height}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size },
  );
}
