// src/components/Glow.tsx
import styled, { keyframes } from "styled-components";

export type GlowProps = {
  size: string;
  top: string;
  left: string;
};

const Glow = ({ size, top, left }: GlowProps) => {
  return <StyledGlow size={size} top={top} left={left} />;
};

const glowAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 0.8;
  }
  to {
    transform: scale(1.3);
    opacity: 0.4;
  }
`;

const StyledGlow = styled.div<GlowProps>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: radial-gradient(circle, rgba(252, 162, 232, 0.5), #ffffff);
  animation: ${glowAnimation} 6s infinite alternate ease-in-out;
  z-index: 0
`;

export default Glow;
