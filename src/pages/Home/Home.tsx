import React from "react";
import { FallingContainer, ImageWrapper } from "./style/HomeStyle";
const Home: React.FC = (): JSX.Element => {
  return (
    <FallingContainer>
      <h2>This Is MY PERSONAL SITE!</h2>
      <ImageWrapper>
        <i className="fas fa-tshirt fa-5x"></i>
        <i className="fas fa-tshirt fa-3x"></i>
        <i className="fas fa-tshirt fa-5x"></i>
        <i className="fas fa-tshirt fa-3x"></i>
        <i className="fas fa-code fa-5x"></i>
        <i className="fas fa-tshirt fa-3x"></i>
        <i className="fas fa-code fa-3x"></i>
        <i className="fas fa-tshirt fa-3x"></i>
        <i className="fas fa-code fa-5x"></i>
        <i className="fas fa-tshirt fa-3x"></i>
        <i className="fas fa-code fa-5x"></i>
        <i className="fas fa-tshirt fa-5x"></i>
        <i className="fas fa-code fa-3x"></i>
      </ImageWrapper>
    </FallingContainer>
  );
};

export default Home;
