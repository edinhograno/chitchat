import React from "react";
import styled from "styled-components";

const font = "Arial, Helvetica, sans-serif";

const SignIn = styled.div`
  position: absolute;
  font-family: ${font};
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  h1 {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 30%;
    color: #3f0068;
    /* background-color: blue; */
  }
  form {
    height: 70%;
    width: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    .float-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-bottom: 1rem;

      &:first-child {
        margin-top: 2rem;
      }
    }

    .label-style {
      font-size: 1rem;
      position: absolute;
      pointer-events: none;
      transition: top, transform, 0.2s ease-in-out;
    }

    .float-label:focus-within label {
      top: -0.5rem;
      left: 2rem;
      transform: scale(0.9);
      color: #3f0068;
      font-weight: 700;

      &:before {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        top: 35%;
        background-color: #fff;
      }
    }
    .style-up {
      color: #3f0068;
      font-weight: 700;
      top: -0.5rem;
      left: 2rem;
      transform: scale(0.9);

      &:before {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        top: 35%;
        background-color: #fff;
      }
    }
    .style-down {
      top: 1rem;
      left: 1.5rem;
      transform: scale(1);
      color: #c9c9c9;
    }
    .input-style {
      padding-left: 1rem;
      flex: 2;
      border: 0.1rem solid #c9c9c9;
      border-radius: 2rem;
      outline: none;
    }
    .input-style,
    button {
      width: 18rem;
      height: 3rem;
    }
    button {
      font-family: ${font};
      cursor: pointer;
      margin-top: 2.5rem;
      border: none;
      border-radius: 2rem;
      color: #fff;
      font-size: 1.2rem;
      background-color: #3f0068;

      &:hover {
        background-color: #3f2968;
      }
    }
    .forgot-pass {
      margin-top: -0.5rem;
      width: 17rem;
      display: flex;
      justify-content: flex-end;
      a {
        font-size: 0.9rem;
        color: #3f0068;
      }
    }
  }
`;

export default function FormSignIn(props) {
  return (
    <SignIn>
      <h1>Faça seu login</h1>
      <form action="">
        <div className="float-label">
          <input
            className="input-style"
            type="email"
            name="email"
            id="email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
          />
          <label
            htmlFor=""
            className={
              props.email === ""
                ? "style-down label-style"
                : "style-up label-style"
            }
          >
            E-mail
          </label>
        </div>
        <div className="form float-label">
          <input
            className="input-style"
            type="password"
            name="password"
            id="password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <label
            className={
              props.password === ""
                ? "style-down label-style"
                : "style-up label-style"
            }
            htmlFor=""
          >
            Password
          </label>
        </div>
        <span className="forgot-pass">
          <a href="https://google.com.br">Esqueceu sua senha?</a>
        </span>
        <button
          type="submit"
          onClick={() => {
            window.alert(props.email);
          }}
        >
          Entrar
        </button>
      </form>
    </SignIn>
  );
}
