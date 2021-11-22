import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const font = "Arial, Helvetica, sans-serif";

const SignUp = styled.div`
  position: absolute;
  font-family: ${font};
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 0;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    color: #3f0068;
    /* background-color: blue; */
  }

  form {
    height: 80%;
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
      top: -0.6rem;
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
      top: -0.6rem;
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
      width: 25rem;
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
  }
`;

export default function FormSignUp() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // mudança
  const createUser = () => {
    axios
      .post("http://localhost:3001/createUser", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);
        } else {
          setUser([
            ...user,
            {
              name: name,
              email: email,
              password: password,
            },
          ]);
        }
      });
  };

  return (
    <SignUp>
      <h1>Faça seu cadastro</h1>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
        <div className="float-label">
          <input
            type="text"
            className="input-style"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label
            htmlFor=""
            className={
              name === "" ? "style-down label-style" : "style-up label-style"
            }
          >
            Nome
          </label>
        </div>
        <div className="float-label">
          <input
            type="email"
            className="input-style"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label
            htmlFor=""
            className={
              email === "" ? "style-down label-style" : "style-up label-style"
            }
          >
            Email
          </label>
        </div>
        <div className="float-label">
          <input
            type="password"
            className="input-style"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label
            htmlFor=""
            className={
              password === ""
                ? "style-down label-style"
                : "style-up label-style"
            }
          >
            Senha
          </label>
        </div>
        <div className="float-label">
          <input
            type="password"
            className="input-style"
            name="confirm-password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <label
            htmlFor=""
            className={
              confirmPassword === ""
                ? "style-down label-style"
                : "style-up label-style"
            }
          >
            Confirme a senha
          </label>
        </div>
        <input
          type="submit"
          value="Cadastrar"
          onClick={() => {
            window.alert(name);
          }}
        />
      </form>
    </SignUp>
  );
}
