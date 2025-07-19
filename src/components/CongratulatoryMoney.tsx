import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ClipboardWrapper = CopyToClipboard as unknown as React.ComponentType<any>;

const Wrapper = styled("div", {
  width: "100%",
  textAlign: "center",
  background: "#f8f9fa",
  padding: "30px 0",
});

const Title = styled("p", {
  fontSize: "2.4vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("p", {
  fontSize: "2vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const SubContent = styled("p", {
  fontSize: "1.8vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontSize: "1.4vh",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
});

type CongratulatoryMoneyProps = {
  data?: any;
};

export default function CongratulatoryMoney({
  data,
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>축하의 마음을 전하세요</Title>
      </Divider>
      <Content>축하의 마음을 담아 축의금을 전달해 보세요.</Content>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 48, marginBottom: 16 }}
          twoToneColor="#829fe0"
        />
        <br />
        <SubContent>신랑측 계좌번호 확인</SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 48, marginBottom: 16 }}
          twoToneColor="#fe7daf"
        />
        <br />
        <SubContent>신부측 계좌번호 확인</SubContent>
      </ContactButton>
      <Modal
        title={<b>신랑측 계좌번호</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.groom?.parents?.father && (
          <div>
            <b>부) {data?.groom?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <ClipboardWrapper
              text={data?.groom?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.parents?.father?.account_number}
              </Button>
            </ClipboardWrapper>
          </div>
        )}
        {data?.groom?.parents?.mother && (
          <div style={{ margin: "16px 0" }}>
            <b>모) {data?.groom?.parents?.mother.name}</b>
            <Divider type="vertical" />
            <ClipboardWrapper
              text={data?.groom?.parents?.mother.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.parents?.mother.account_number}
              </Button>
            </ClipboardWrapper>
          </div>
        )}
        {data?.groom && (
          <div>
            <b>신랑 {data?.groom?.name}</b>
            <Divider type="vertical" />
            <ClipboardWrapper text={data?.groom?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.account_number}
              </Button>
            </ClipboardWrapper>
          </div>
        )}
        <div>
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>
        </div>
      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.bride?.parents?.father && (
          <div>
            <b>부) {data?.bride?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <ClipboardWrapper
              text={data?.bride?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.parents?.father?.account_number}
              </Button>
            </ClipboardWrapper>
          </div>
        )}
        {data?.bride?.parents?.mother && (
          <div style={{ margin: "16px 0" }}>
            <b>모) {data?.bride?.parents?.mother?.name}</b>
            <Divider type="vertical" />
            <ClipboardWrapper
              text={data?.bride?.parents?.mother?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.parents?.mother?.account_number}
              </Button>
            </ClipboardWrapper>
          </div>
        )}
        {data?.bride && (
          <div>
            <b>신부 {data?.bride?.name}</b>
            <Divider type="vertical" />
            <ClipboardWrapper text={data?.bride?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.account_number}
              </Button>
            </ClipboardWrapper>
          </div>
        )}
        <div>
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>
        </div>
      </Modal>
    </Wrapper>
  );
}
