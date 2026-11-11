import { COLA_DATA } from "@/lib/cola-data";

export const dynamic = "force-static";

// Google's certification authority ID for ads.txt (same for every publisher).
const GOOGLE_TAG_ID = "f08c47fec0942fa0";

export function GET() {
  const clientId: string = COLA_DATA.adsenseClientId;
  if (!clientId) {
    return new Response("Not Found", { status: 404 });
  }
  // ads.txt uses "pub-…" without the "ca-" prefix.
  const publisherId = clientId.replace(/^ca-/, "");
  return new Response(`google.com, ${publisherId}, DIRECT, ${GOOGLE_TAG_ID}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
