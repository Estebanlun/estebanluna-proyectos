import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ProjectLine({ n, li, title }) {
  return (
    <Linea>
      <Link className="link" to={`/${li}`}>
        <h1 className="num"> {n} </h1>
        &nbsp;&nbsp;&nbsp;
        <h2 className="title"> {title} </h2>
      </Link>
    </Linea>
  );
}

const Linea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  z-index: 0;
  position: relative;
  height: 2rem;
  .link {
    color: #fff;
    font-size: 1.4rem;
    border-radius: 12px;
    background: #000010;
    position: relative;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-style: none;
    cursor: pointer;
    ::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        black,
        blue,
        lightblue,
        blue,
        black,
        blue,
        lightblue,
        blue
      );
      background-size: 800%;
      border-radius: 10px;
      filter: blur(8px);
      animation: glowing 20s linear infinite;
    }
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media (min-width: 768px) {
    .link {
      justify-content: start;
      padding: 1rem;
      align-items: center;
      text-align: center;
    }
  }
`;
