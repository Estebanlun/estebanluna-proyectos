import React from "react";
import styled from "styled-components";
import ProjectLine from "../../Components/ProjectLine/ProjectLine";

export default function HomePage() {
  return (
    <Home>
      {/* Titulo */}
      <span className="span">
        <h1 className="title"> Mas Proyectos </h1>
      </span>
      {/* Expositor de Idiomas */}
      <div className="div">
        {/* Texto */}
        <p className="text">
          Acá sera el lugar donde iré subiendo distintos
          proyectos, tengo muchos realizados pero aun no los pongo en producción.
           Quiero aclarar que la experiencia de ver estos proyectos sera muchos
           mejor desde una computadora, ya que no todos estos proyectos estan adaptados a dispositivos
           moviles como lo esta esta pagina y probablemente no te funcionen.<br/>
           Tengo planificado realizar muchos proyectos mas...
          
        </p>
      </div>
      <section className="section">
        <ProjectLine n={"1. "} li="MarvelGallery" title="Galeria de Marvel (Computadora)" ></ProjectLine>
      </section>
    </Home>
  );
}

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  min-height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 30%,
    rgba(9, 9, 121, 1) 50%,
    rgba(5, 89, 174, 1) 90%,
    rgba(2, 0, 36, 1) 100%
  );

  /* Span contenedor con Titulo adentro */
  .span {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
    margin: 1rem;
    .title {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 2rem;
      font-size: 2rem;
      color: white;
      margin: 0.3rem;
    }
  }

  .div {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 1rem;
  }

  .section{
    width:100%;
    display:flex;
    flex-direction:column;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem;
  }

  .text{
    color: white;
    text-decoration: none;
  }

  /* Tablet */
  @media (min-width: 768px) {
    .span {
      .title {
        font-size: 3rem;
      }
    }

    .div {
      width: 100%;
      padding: 1rem;

    }

    .text {
      width: 75%;
      text-align: center;
      justify-content: start;
      align-items: flex-start;
    }
  }

  @media (min-width: 1024px) {
    .span {
      .title {
        font-size: 3.5rem;
      }
    }

    .text {
      width: 70%;
      font-size: 1.2rem;
    }
  }
`;
