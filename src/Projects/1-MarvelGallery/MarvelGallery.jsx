import React from "react";
import styled from "styled-components";

export default function MarvelGallery() {
  return (
    <Gal>
      <section>
        <img
          src="https://images.indianexpress.com/2018/04/avengers-iron-man.jpg?w=630"
          alt=""
        />
        <img
          src="https://images.indianexpress.com/2018/04/avengers-captain-america.jpg?w=630"
          alt=""
        />
        <img
          src="https://images.indianexpress.com/2018/04/avengers-doctorstrange.jpg?w=630"
          alt=""
        />
        <img
          src="https://images.indianexpress.com/2018/04/avengers-hulk.jpg?w=630"
          alt=""
        />
        <img
          src="https://images.indianexpress.com/2018/04/avengers-spiderman.jpg?w=630"
          alt=""
        />
      </section>
    </Gal>
  );
}

const Gal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 30%,
    rgba(9, 9, 121, 1) 50%,
    rgba(3, 89, 174, 1) 90%,
    rgba(0, 212, 255, 1) 100%
  );

  section {
    display: flex;
    width: 60rem;
    height: 40rem;
  }

  section img {
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: 0.8;
    transition: 0.5s ease;
  }

  section img:hover {
    cursor: crosshair;
    width: 300px;
    opacity: 1;
    filter: contrast(120%);
  }
`;
