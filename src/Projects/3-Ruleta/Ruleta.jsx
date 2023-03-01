import React, { useState, useEffect } from "react";
import styled from "styled-components";

const colors = [
  "#FF4136",
  "#111111",
  "#FF4136",
  "#111111",
  "#FF4136",
  "#111111",
  "#FF4136",
  "#111111",
  "#FF4136",
  "#2ECC40",
  
];

const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 80px 80px 80px;
  border-color: transparent transparent ${(props) => props.color} transparent;
  transform-origin: bottom center;
  transform: rotate(${(props) => props.rotate}deg);
`;

const Pointer = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 70px 20px 0 20px;
  border-color: #111111 transparent transparent transparent;
  transform: translateY(-70px);
`;

const CenterCircle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #111111;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RouletteContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;

const Button = styled.button`
  margin-top: 20px;
`;

const Result = styled.h2`
  margin-top: 20px;
  color: white;
  
`;

const Roulette = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 10);
      }, 50);
      setTimeout(() => {
        clearInterval(interval);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setResult(
          randomColor === "#FFDC00"
            ? "Verde"
            : randomColor === "#111111"
            ? "Negro"
            : "Rojo"
        );
        setIsSpinning(false);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isSpinning]);

  const handleSpinClick = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setRotation(Math.floor(Math.random() * 360));
    }
  };

  const numTriangles = colors.length;
  const triangleAngle = 360 / numTriangles;

  return (
    <div>
      <RouletteContainer>
        {colors.map((color, index) => (
          <Triangle
            key={index}
            color={color}
            rotate={index * triangleAngle + rotation}
          />
        ))}
        <Pointer />
        <CenterCircle />
      </RouletteContainer>
      <Button onClick={handleSpinClick}>Girar</Button>
      {result && <Result>{result} ganó!</Result>}
    </div>
  );
};

export default Roulette;
