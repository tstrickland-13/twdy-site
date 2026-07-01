import { renderShareImage } from "./og-image";

export const runtime = "nodejs";
export { size, contentType, alt } from "./og-image";

export default function OpengraphImage() {
  return renderShareImage();
}
