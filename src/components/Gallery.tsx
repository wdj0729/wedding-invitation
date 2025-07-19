import { Divider } from "antd";
import { createStitches } from "@stitches/react";

export const { styled, css, theme, createTheme, globalCss } = createStitches({
  media: {
    sm: "(max-width: 640px)", // ✅ 여기 확인
  },
});

const Wrapper = styled("div", {
  width: "100%",
  padding: "30px 0 60px 0",
});

const Title = styled("p", {
  fontSize: "2.4vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const GridWrapper = styled("div", {
  display: "grid",
  gap: 16,
  justifyItems: "center",
  gridTemplateColumns: "repeat(4, 1fr)",

  "@sm": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

const images = [
  {
    original: "./assets/Gallery_Photo_1.jpg",
    thumbnail: "./assets/Gallery_Photo_1.jpg",
  },
  {
    original: "./assets/Gallery_Photo_2.jpg",
    thumbnail: "./assets/Gallery_Photo_2.jpg",
  },
  {
    original: "./assets/Gallery_Photo_3.jpg",
    thumbnail: "./assets/Gallery_Photo_3.jpg",
  },
  {
    original: "./assets/Gallery_Photo_4.jpg",
    thumbnail: "./assets/Gallery_Photo_4.jpg",
  },
  {
    original: "./assets/Gallery_Photo_5.jpg",
    thumbnail: "./assets/Gallery_Photo_5.jpg",
  },
  {
    original: "./assets/Gallery_Photo_6.jpg",
    thumbnail: "./assets/Gallery_Photo_6.jpg",
  },
  {
    original: "./assets/Gallery_Photo_7.jpg",
    thumbnail: "./assets/Gallery_Photo_7.jpg",
  },
  {
    original: "./assets/Gallery_Photo_8.jpg",
    thumbnail: "./assets/Gallery_Photo_8.jpg",
  },
  {
    original: "./assets/Gallery_Photo_9.jpg",
    thumbnail: "./assets/Gallery_Photo_9.jpg",
  },
  {
    original: "./assets/Gallery_Photo_10.jpg",
    thumbnail: "./assets/Gallery_Photo_10.jpg",
  },
  {
    original: "./assets/Gallery_Photo_11.jpg",
    thumbnail: "./assets/Gallery_Photo_11.jpg",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <GridWrapper>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.original}
            alt={`갤러리 사진 ${idx + 1}`}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
        ))}
      </GridWrapper>
    </Wrapper>
  );
}
