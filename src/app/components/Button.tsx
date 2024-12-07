// src/components/Button.tsx
import styled, { keyframes } from "styled-components";

// Animação de partículas
const particles = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2);
  }
`;

// Botão estilo Pixel Art com cores da Minnie e animação de partículas
const MinniePixelButton = styled.button`
  font-family: "Press Start 2P", cursive; /* Fonte retrô (baixe do Google Fonts) */
  background-color: #ff385c; /* Vermelho Minnie */
  color: white;
  text-transform: uppercase;
  border: 3px solid #2d3436; /* Preto para contraste */
  border-radius: 15px;
  padding: 15px 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, background-color 0.3s;
  z-index: 10;

  &:hover {
    background-color: #ffc0cb; /* Rosa claro ao passar o mouse */
    transform: scale(1.1);
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
    animation: ${particles} 0.8s ease-out;
  }
`;

const Button = ({ children, ...props }: any) => {
  return <MinniePixelButton {...props}>{children}</MinniePixelButton>;
};

export default Button;
