import styled from "styled-components";
import Button from "../components/Button";
import Glow from "../components/Glow";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

const ThemeRevealScreen = ({ onNext }: { onNext: () => void }) => {
  const [glows, setGlows] = useState<{ size: string; top: string; left: string }[]>([]);

  const images = [
    "/images/img_1.jpg",
    "/images/img_2.jpg",
    "/images/img_3.jpg",
    "/images/img_4.jpg",
  ];

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
        <Title>Pool Party!</Title>
        <SubTitle>Festa da Piscina!</SubTitle>
        <Title>Minnie</Title>
        <ImageWrapper>
          <Image src="/images/minnie_2.png" alt="Tema Minnie" />
        </ImageWrapper>
        <CollapsibleSection title="Como chegar:">
          Entrar pelo Pesqueiro, subir a rua,.. etc, ou{" "}
          <a href="https://www.google.com/maps/place/rua conde de oriola 239">clique aqui!</a>
        </CollapsibleSection>
        <CollapsibleSection title="Indicações:">
          É desejável que tragam roupa de banho, para o "Parabéns" vestimenta com a temática Minnie.
        </CollapsibleSection>
        <CollapsibleSection title="Presentes:">
          <li>Roupas tamanho 06 ou 07</li>
          <li>Calçados 26</li>
          <li>Brinquedo</li>
          <li>Toalhas</li>
          <li>Perfume</li>
        </CollapsibleSection>
        <Carousel images={images} />
        <Button onClick={handleConfirm}>Confirmar</Button>
      </Content>
    </Container>
  );
};

const CollapsibleSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section>
      <SectionTitle onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen}>
        {title}
      </SectionTitle>
      {isOpen && <SectionText>{children}</SectionText>}
    </Section>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 20px;
  text-align: center;
  background-color: #fff5f8;
  width: 100vw;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #f06292;
  z-index: 1;
`;

const SubTitle = styled.p`
  font-size: 0.8rem;
  color: #555;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 10px 0;
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

const SectionTitle = styled.h2<{ isOpen: boolean }>`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Comic-Sans';
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &:after {
    content: "${(props) => (props.isOpen ? "-" : "+")}";
    font-size: 1.2rem;
    margin-left: 10px;
    color: #f06292;
  }
`;

const SectionText = styled.div`
  font-size: 0.8rem;
  color: #555;
  font-family: 'Comic-Sans';
  line-height: 1.5;
  padding-left: 10px;
  border-left: 2px solid #f06292;
  margin-top: 10px;
`;

export default ThemeRevealScreen;
