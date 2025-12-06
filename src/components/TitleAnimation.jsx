const TITLE_ANIM_URL = "https://mycs2.pro/public/video/blue_header.webp?v=2";

export function TitleAnimation() {
  return (
    <img
      src={TITLE_ANIM_URL}
        style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}