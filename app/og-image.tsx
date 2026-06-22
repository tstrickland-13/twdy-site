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
  // `logo-twdy.png` is the dark-background brand asset: the orange TWDY
  // wordmark on a near-black (#1c1c1c) field. Using it full-bleed gives a
  // seamless dark share image with the centered wordmark (no white box, which
  // is what `logo-white.png`'s opaque white background would produce).
  // Note: `logo-twdy.png` is actually JPEG-encoded despite the .png extension,
  // so the data URL must be declared as image/jpeg or Satori cannot decode it.
  const logo = await readFile(join(process.cwd(), "public", "logo-twdy.png"));
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  // The logo is a square (1024×1024) orange wordmark on a #1c1c1c field. We
  // place it full-height and center it; matching the canvas background to the
  // logo's own #1c1c1c means the square edges are seamless and the result reads
  // as one dark panel with the centered wordmark.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1c1c1c",
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
