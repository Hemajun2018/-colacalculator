import { ImageResponse } from "next/og";
import { COLA_DATA } from "@/lib/cola-data";

export const runtime = "edge";
export const alt = "2027 Social Security COLA Forecast & Calculator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 60%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: "#1E40AF",
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          colacalculator.com
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: "#0F172A",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 40,
          }}
        >
          2027 Social Security COLA Forecast
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            padding: "28px 48px",
            borderRadius: 20,
            background: "#FFFFFF",
            border: "4px solid #1E40AF",
          }}
        >
          <div style={{ fontSize: 32, color: "#475569" }}>Forecast Range</div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#1E40AF",
            }}
          >
            {COLA_DATA.forecastRange.low}%–{COLA_DATA.forecastRange.high}%
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: "#475569",
          }}
        >
          Calculate your estimated 2027 benefit increase
        </div>
      </div>
    ),
    { ...size }
  );
}
