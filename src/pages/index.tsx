import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import JsonData from "@/data.json";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="황의민❤원유경 결혼식에 초대합니다" name="Title" />
        <meta
          content="2025년 09월 14일 일요일 오후 14시 00분"
          name="Description"
        />
        <meta content="2025년 09월 14일 일요일 오후 14시 00분" name="Keyword" />
        <meta property="og:title" content="황의민❤원유경 결혼식에 초대합니다" />
        <meta
          property="og:description"
          content="2025년 09월 14일 일요일 오후 14시 00분"
        />
        {/* TODO: meta tag에 이미지 썸네일 넣기 */}
        <meta
          property="og:url"
          content="https://euimin-youkyung-wedding-invitation.vercel.app"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>황의민❤원유경 결혼식에 초대합니다</title>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Title data={JsonData} />
        <Gretting data={JsonData} />
        <Gallery />
        <Location />
        <CongratulatoryMoney data={JsonData} />
      </main>
    </>
  );
}
