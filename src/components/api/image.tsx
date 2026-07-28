import { getHostname } from "@/utils/domain";
import Random from "@/utils/random";

export default function OGImage({ searchParams }: { searchParams: URLSearchParams }) {
  const hasTitle = searchParams.has("title");
  const characterTheme = Random(["light", "dark"]);
  const imgSrc = `${getHostname()}/themes/${characterTheme}/og.png`;

  return (
    <div
      tw="flex w-full h-full items-center justify-between px-16 rounded-[24px]"
      style={{
        position: "relative",
        backgroundImage:
          "linear-gradient(135deg, #ffffff 0%, #eef2ff 45%, #f5f3ff 75%, #ffffff 100%)",
      }}
    >
      {/* Modern left border accent */}
      <div
        tw="flex"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "10px",
          borderRadius: "24px 0 0 24px",
          backgroundImage: "linear-gradient(180deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
        }}
      />

      <div tw="flex flex-col justify-center">
        <span tw="flex text-2xl font-bold text-slate-900 tracking-tight">
          Proyecto Grand Order
        </span>
        <span tw="flex text-lg text-slate-600 mt-2">
          {hasTitle
            ? searchParams.get("title")
            : "¡Juega Fate/Grand Order en español!"}
        </span>
        <div
          tw="flex h-[4px] w-[80px] rounded-full mt-4"
          style={{
            backgroundImage: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          }}
        />
      </div>

      <div tw="flex" style={{ position: "relative" }}>
        {/* Glow aura behind the character — radial gradient, no filter needed */}
        <div
          tw="flex"
          style={{
            position: "absolute",
            inset: "-40px",
            backgroundImage:
              "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.9) 0%, rgba(199,210,254,0.6) 35%, rgba(139,92,246,0.25) 55%, rgba(139,92,246,0) 75%)",
          }}
        />

        {/* Original image — untouched */}
        <img
          tw="mt-65"
          src={imgSrc}
        />
      </div>
    </div>
  );
}