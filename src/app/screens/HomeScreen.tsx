import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useState, useEffect } from "react";

const HomeScreen = ({ onNext }: { onNext: () => void }) => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [buttonPosition, setButtonPosition] = useState({ top: "50%", left: "50%" });

  const repositionButton = () => {
    const randomTop = Math.random() * 80 + 10; // Entre 10% e 90% do viewport
    const randomLeft = Math.random() * 80 + 10; // Entre 10% e 90% do viewport
    setButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonVisible(false); // Faz o botão desaparecer
      setTimeout(() => {
        repositionButton(); // Reposiciona o botão
        setButtonVisible(true); // Faz o botão reaparecer
      }, 750); // Delay para reaparecer
    }, 750); // Intervalo entre os ciclos

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    onNext();
  };

  return (
    <Container>
      <TopLine>
        <Countdown>
          {calculateTimeLeft().days}d {calculateTimeLeft().hours}h {calculateTimeLeft().minutes}m{" "}
          {calculateTimeLeft().seconds}s
        </Countdown>
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
          Venha curtir um dia de piscina comigo para juntas celebrar meu aniversário!
        </Subtitle>
        <MinnieWrapper>
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
        {buttonVisible && (
          <ButtonWrapper style={{ top: buttonPosition.top, left: buttonPosition.left }}>
            <Button
              variant="pixel"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleButtonClick}
            >
              Quero ir!
            </Button>
          </ButtonWrapper>
        )}
      </Content>
    </Container>
  );
};

const calculateTimeLeft = () => {
  const targetDate = new Date("2024-12-22T10:00:00");
  const currentDate = new Date();
  const difference = targetDate.getTime() - currentDate.getTime();

  return {
    days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
    seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
  };
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
  justify-content: flex-start;
  align-items: center;
  background-color: #fff5f8;
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100lvh;
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

const Countdown = styled.div`
  font-size: 1.6rem;
  color: white;
  font-weight: bold;
`;

const Content = styled.div`
  z-index: 1;
  text-align: center;
`;

const Highlight = styled.div``;

const Name = styled(motion.h1)`
  font-size: 6rem;
  color: #f06292;
  font-family: var(--font-bonbon), 'Arial', sans-serif;
  animation: ${pulse} 2s infinite;
`;

const Age = styled.p`
  font-size: 2.5rem;
  color: #555;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
`;

const Word = styled(motion.span)`
  font-size: 2rem;
  color: #f06292;
  font-family: var(--font-pacifico), 'Arial', sans-serif;
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #555;
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
  opacity: 0.2;
`;

const OverlayText = styled.div<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 20px;
  ${({ left }) => left && "left: 20px;"}
  ${({ right }) => right && "right: 20px;"}
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 0;
`;

const InfoTextHeader = styled.p`
  font-size: 5.2rem;
  color: #555;
  margin-bottom: -25px;
`;

const ButtonWrapper = styled(motion.div)`
  position: absolute;
  transition: top 0.5s ease, left 0.5s ease;
`;

export default HomeScreen;
