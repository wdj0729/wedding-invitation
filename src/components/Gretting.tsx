import { styled } from "@stitches/react";
import { Divider } from "antd";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
} from "react";

const Wrapper = styled("div", {
  width: "100%",
  background: "#f8f9fa",
  padding: "30px 0",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

type GrettingProps = {
  data?: any;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>결혼합니다</Title>
      </Divider>
      <Content>
        {data?.gretting
          ?.split("\n")
          ?.map(
            (
              value:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined,
              index: Key | null | undefined
            ) => {
              return (
                <div key={index}>
                  {value}
                  <br />
                </div>
              );
            }
          )}
      </Content>
      <GroomBride>
        {data?.groom?.parents?.father?.name} ·{" "}
        {data?.groom?.parents?.mother?.name}의 장남 {data?.groom?.name}
        <br />
        {data?.bride?.parents?.father?.name} ·{" "}
        {data?.bride?.parents?.mother?.name}의 차녀 {data?.bride?.name}
      </GroomBride>
    </Wrapper>
  );
}
