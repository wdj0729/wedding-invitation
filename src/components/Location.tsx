"use client";

// pages/index.tsx
import { useEffect } from "react";
import { styled } from "@stitches/react";

const Content = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
  textAlign: "center",
  padding: "30px 0",
});

const NaverMapPage = () => {
  useEffect(() => {
    const initializeMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.5058149679709, 127.056130956028),
        zoom: 17,
      };

      const map = new naver.maps.Map("map", mapOptions);

      new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5058149679709, 127.056130956028),
        map: map,
      });
    };

    const loadNaverMapScript = () => {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=9n2e06ihc2`;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    if (typeof window !== "undefined") {
      loadNaverMapScript();
    }
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "400px",
        }}
      />
      <Content>
        포스코 센터
        <br />
        서울특별시 강남구 테헤란로 440
        <br />
        (포스코센터 서관 4층 아트홀)
        <br />
        2호선 삼성역 4번출구 약 도보 8분 직진후 대각선
        <br />
        2호선 선릉역 1번출구 약 도보 10분 직진
        <br />
        간선버스(파랑) : 146, 341, 360, 730
        <br />
        지선버스(초록) : 2415, 3411, 3415, 3312, 4420
      </Content>
    </>
  );
};

export default NaverMapPage;
