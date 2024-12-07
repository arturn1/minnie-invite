// src/components/screens/ThemeRevealScreen.tsx
import styled from "styled-components";
import Button from "../components/Button";
import Glow from "../components/Glow";
import { useEffect, useState } from "react";

const ThemeRevealScreen = ({ onNext }: { onNext: () => void }) => {
  const [glows, setGlows] = useState<{ size: string; top: string; left: string }[]>([]);

  useEffect(() => {
    // Gera 10 elementos de Glow com tamanhos e posições aleatórios
    const generatedGlows = Array.from({ length: 10 }, () => ({
      size: `${Math.random() * 200 + 50}px`, // Tamanho entre 50px e 250px
      top: `${Math.random() * 100}%`, // Posição vertical entre 0% e 100%
      left: `${Math.random() * 100}%`, // Posição horizontal entre 0% e 100%
    }));
    setGlows(generatedGlows);
  }, []);

  const handleConfirm = () => {
    // Envia mensagem via WhatsApp
    const message = encodeURIComponent("Confirmo minha presença na festa da Minnie!");
    const whatsappURL = `https://wa.me/5511966803356?text=${message}`;
    window.open(whatsappURL, "_blank");

    // Retorna para a tela inicial
    onNext();
  };

  return (
    <Container>
      {/* Renderiza os elementos de Glow dinamicamente */}
      {glows.map((glow, index) => (
        <Glow key={index} size={glow.size} top={glow.top} left={glow.left} />
      ))}

      <Content>
        <Title>Tema da Festa:</Title>
        <Title>Minnie!</Title>
        <ImageWrapper>
          <Image src="/images/minnie_2.png" alt="Tema Minnie" />
        </ImageWrapper>
        <Section>
          <SectionTitle>Como chegar:</SectionTitle>
          <SectionText>
            Este é um texto de exemplo com aproximadamente 100 caracteres para ilustrar a seção "Como chegar".
          </SectionText>
        </Section>
        <Section>
          <SectionTitle>Indicações:</SectionTitle>
          <SectionText>
            Este é outro texto de exemplo com cerca de 100 caracteres, representando a seção "Indicações".
          </SectionText>
        </Section>
        <Button onClick={handleConfirm}>Confirmar</Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  text-align: center;
  background-color: #fff5f8;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #f06292;
  z-index: 1;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 45%;
  max-width: 300px;
  position: relative;
  z-index: 1;
`;

const Section = styled.div`
  margin: 20px 0;
  text-align: left;
  width: 100%;
  z-index: 1000;
  max-width: 400px;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Comic-Sans';
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #555;
  font-family: 'Comic-Sans';
  line-height: 1.5;
`;

export default ThemeRevealScreen;
