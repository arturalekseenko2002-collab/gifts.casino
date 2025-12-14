const TITLE_ANIM_URL =
  "https://mycs2.pro/public/video/blue_header.webp?v=2";

export function TitleAnimation() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* сама анимация */}
      <img
        src={TITLE_ANIM_URL}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* слой с цветом + luminosity */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#7c3aed", // нужный цвет
          mixBlendMode: "luminosity",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}