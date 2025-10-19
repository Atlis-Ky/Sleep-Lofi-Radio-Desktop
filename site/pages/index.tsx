import { useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global.js";

import { AiOutlineApple } from "react-icons/ai";
import { SiWindows95 } from "react-icons/si";
import HeadMeta from "../components/Head";
import { rain } from "../components/rain.js";
import Github from "../components/Github";

export default function Home() {
  useEffect(() => {
    rain();
  }, []);

  return (
    <>
      <HeadMeta />
      <GlobalStyle />
      <>
        <Container>
          <Title>Sleep Tales Desktop Radio</Title>
          <Subtitle>Desktop radio for sleepy lofi made by Atlis</Subtitle>

          <Img src="/Thumbnail-st.png" alt="lofi desktop app" />

          <div className="rain front-row" />

          <div style={{ display: "flex" }}>
            <Button_1>
              <Link href="https://github.com/Atlis-Ky/Sleep-Lofi-Radio-Desktop/releases/download/v1.0.0/Sleep.Tales.Desktop.Radio_0.1.0_universal.dmg">
                Download <AiOutlineApple />
              </Link>
            </Button_1>

            <Button_2>
              <Link href="#" onClick={(e) => e.preventDefault()}>
                Coming Soon <SiWindows95 />
              </Link>
            </Button_2>
          </div>
          <Github />
        </Container>
      </>
    </>
  );
}

// STYLES

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;

const Title = styled.h1`
  font-family: "Varela Round", sans-serif;
  font-size: 3rem;
  margin: 55px;
  color: white;
  display: inline-block;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-family: "Varela Round", sans-serif;
  font-size: 1.2rem;
  margin: -40px 55px 40px 55px;
  color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  text-align: center;
  font-weight: 400;
  @media (max-width: 420px) {
    font-size: 1rem;
    margin: -30px 30px 30px 30px;
  }
`;

const Img = styled.img`
  box-shadow: rgba(170, 170, 170, 0.3) 0px 19px 38px,
    rgba(158, 158, 158, 0.22) 0px 15px 12px;
  max-width: 603px;
  max-height: 339px;
  width: 90%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  margin: 8em 2em;
  height: 3.75em;
  width: 10em;
  border-radius: 15px;
  border: none;
  font-size: 0.9rem;
  font-weight: 900;
  transition: 1s;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 420px) {
    margin: 5em 1em;
  }
`;

const Button_1 = styled(Button)`
  background: linear-gradient(
    90deg,
    rgba(164, 123, 207, 0.83) 24%,
    rgba(6, 46, 68, 1) 100%
  );
`;

const Button_2 = styled(Button)`
  background: linear-gradient(
    90deg,
    rgba(27, 71, 84, 1) 24%,
    rgba(200, 208, 95, 1) 100%
  );
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  width: 100%;
  height: 54px;
  color: inherit;
  text-decoration: none;
`;
