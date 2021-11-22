import React from "react";
import styled from "styled-components";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import background from "./img/purple-background.svg";
import logoPurple from "./img/logo-purple.svg";
import logoOrange from "./img/logo-orange.svg";

const orangeSat = "#FF4E00";
const purpleSat = "#3F0068";
const orangeDesat = "#FF6E00";
const purpleDesat = "#3f2968";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    left: 0;
    object-fit: cover;
  }
`;

const Box = styled.div.attrs((props) => ({
  move: props.move,
}))`
  position: absolute;
  top: 0;
  background-color: ${(props) => (props.move ? orangeSat : purpleSat)};
  right: ${(props) => (props.move ? "0" : "70%")};
  transition: background-color 0.5s, right 0.5s, border-radius 0.5s ease-in-out;
  border-radius: ${(props) => (props.move ? "0 1rem 1rem 0" : "1rem 0 0 1rem")};
  width: 30%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  .content {
    height: 60%;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Luckiest Guy", cursive;
    .text {
      color: #fff;
      height: 45%;
      /* background-color: red; */
      display: flex;
      align-items: center;
      flex-direction: column;

      h2 {
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.2rem;
      }

      p {
        text-align: center;
        padding: 0 0.5rem;
      }
    }

    button {
      cursor: pointer;
      width: 10rem;
      height: 2.5rem;
      border: none;
      border-radius: 5rem;
      color: #fff;
      background-color: ${(props) => (props.move ? purpleSat : orangeSat)};

      &:hover {
        background-color: ${(props) =>
          props.move ? purpleDesat : orangeDesat};
      }
    }
  }
`;

const Login = styled.div.attrs((props) => ({
  move: props.move,
}))`
  background-color: #fff;
  box-shadow: 5px 5px 20px 5px #c9c9c9;
  border-radius: 1rem;
  width: 70vw;
  height: 80vh;
  max-width: 65rem;
  max-height: 40rem;
  margin: 0 auto;
  display: flex;
  position: relative;
`;

export default function LoginPage(props) {
  return (
    <Container>
      <img className="background" src={background} alt="" />
      <Login move={props.move}>
        {props.move ? (
          <FormSignIn
            email={props.email}
            password={props.password}
            setEmail={props.setEmail}
            setPassword={props.setPassword}
          />
        ) : (
          <FormSignUp />
        )}
        <Box move={props.move}>
          <div className="logo">
            <img src={props.move ? logoPurple : logoOrange} alt="" />
          </div>
          <div className="content">
            <div className="text">
              <h2>
                {props.move ? "Não possui conta?" : "Finalmente, você chegou!"}
              </h2>
              <p>
                {props.move
                  ? "Crie a sua conta e venha conversar com o seus amigos."
                  : "Faça o seu login ai e bora conversar com seus amigos."}
              </p>
            </div>
            <button
              onClick={() => {
                props.setMove(!props.move);
              }}
            >
              {props.move ? "Crie sua conta" : "Faça seu login"}
            </button>
          </div>
        </Box>
      </Login>
    </Container>
  );
}
