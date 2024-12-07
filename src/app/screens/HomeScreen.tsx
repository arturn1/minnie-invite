import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useState, useRef, useEffect } from "react";

const HomeScreen = ({ onNext }: { onNext: () => void }) => {
  const [buttonMoved, setButtonMoved] = useState(false);
  const buttonWrapperRef = useRef<HTMLDivElement | null>(null);
  const minnieWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = () => {
    if (!buttonMoved) {
      if (buttonWrapperRef.current && minnieWrapperRef.current) {
        const minnieBounds = minnieWrapperRef.current.getBoundingClientRect();
        const buttonWrapperBounds = buttonWrapperRef.current.getBoundingClientRect();

        // Gera nova posição aleatória dentro dos limites visíveis
        const randomTop = Math.max(
          minnieBounds.bottom + 20, // Sempre abaixo da Minnie
          Math.min(window.innerHeight - buttonWrapperBounds.height - 20, Math.random() * window.innerHeight)
        );

        const randomLeft = Math.max(
          20, // Mínimo deslocamento da borda esquerda
          Math.min(window.innerWidth - buttonWrapperBounds.width - 20, Math.random() * window.innerWidth)
        );

        buttonWrapperRef.current.style.top = `${randomTop}px`;
        buttonWrapperRef.current.style.left = `${randomLeft}px`;
      }
      setButtonMoved(true);
    } else {
      onNext();
    }
  };

  return (
    <Container>
      <TopLine>
        <MinnieLineImage src="/images/minnie.png" alt="Minnie" />
      </TopLine>
      <Content>
        <Highlight>
          <Name
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            Alicia
          </Name>
          <Age>6 anos</Age>
        </Highlight>
        <Title>
          {["Você", "foi", "convidado!"].map((word, index) => (
            <Word
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <b>{word}</b>
            </Word>
          ))}
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <b>Venha para a festa!</b>
        </Subtitle>
        <MinnieWrapper ref={minnieWrapperRef}>
          <MinnieImage src="/images/minnie.png" alt="Minnie" />
          <OverlayText left>
            <InfoTextHeader>22</InfoTextHeader>
            <InfoText>Dezembro</InfoText>
          </OverlayText>
          <OverlayText right>
            <InfoTextHeader>10h</InfoTextHeader>
            <InfoText>Horas</InfoText>
          </OverlayText>
        </MinnieWrapper>
        <ButtonWrapper
          ref={buttonWrapperRef}
          initial={!buttonMoved && { opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="pixel"
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleButtonClick}
          >
            {buttonMoved ? "Tem certeza?" : "Quero ir!"}
          </Button>
        </ButtonWrapper>
      </Content>
      <BottomLine>
        <MinnieLineImage src="/images/minnie_2.png" alt="Minnie" />
      </BottomLine>
    </Container>
  );
};

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #fff5f8;
  overflow: hidden;
  position: relative;
  width: 100vw
`;

const Line = styled.div`
  background-color: #f87ba5;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TopLine = styled(Line)``;

const BottomLine = styled(Line)``;

const MinnieLineImage = styled.img`
  height: 50px;
`;

const Content = styled.div`
  z-index: 1;
  text-align: center;
  margin: 0
`;

const Highlight = styled.div`
`;

const Name = styled(motion.h1)`
  font-size: 7rem;
  color: #f06292;
  font-family: var(--font-bonbon), 'Arial', sans-serif;
  margin: 0;
  animation: ${pulse} 2s infinite;
`;

const Age = styled.p`
  font-size: 1.6rem;
  color: #555;
  margin: 0 0 30px 0;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const Word = styled(motion.span)`
  font-size: 2rem;
  color: #f06292;
  font-family: var(--font-pacifico), 'Arial', sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
`;

const MinnieWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const MinnieImage = styled.img`
  width: 250px;
  height: 250px;
  opacity: 0.4;
`;

const OverlayText = styled.div<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 20px;
  ${({ left }) => left && "left: 10px;"}
  ${({ right }) => right && "right: 10px;"}
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 0;
`;

const InfoTextHeader = styled.p`
  font-size: 4.2rem;
  color: #555;
  margin: 0;
`;

const ButtonWrapper = styled(motion.div)`
  position: absolute;
  right: 150px
`;

export default HomeScreen;
