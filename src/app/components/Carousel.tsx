import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
    images: string[]; // Array de URLs das imagens
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Função para mudar a imagem a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [images.length]);

    return (
        <CarouselContainer>
            <AnimatePresence>
                <ImageContainer
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
                </ImageContainer>
            </AnimatePresence>
            <Dots>
                {images.map((_, index) => (
                    <Dot
                        key={index}
                        isActive={index === currentIndex}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </Dots>
        </CarouselContainer>
    );
};

export default Carousel;

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px
`;

const ImageContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#f06292" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s;
`;
