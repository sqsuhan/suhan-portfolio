import { ImageResponse } from "next/og";

export const alt = "Suhan — Web3-native builder & brand-protection investigator who ships with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#07070d",
          color: "#eceaf6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#a78bfa",
          }}
        >
          SUHAN GWEI · @suhan_gwei
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 0.9 }}>Suhan</div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              color: "#9b96b0",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Web3-native builder & brand-protection investigator who ships with AI
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9b96b0" }}>
          <span>Guntur, Andhra Pradesh, India</span>
          <span>Shaik Sharooq</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
