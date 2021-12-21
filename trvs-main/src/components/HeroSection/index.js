import React from "react";
import { HeroContainer, HeroContent, HeroImg, HeroP } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroImg></HeroImg>
        <HeroP>
          TRVS er den største norske organisasjonen som har spesialisert seg på
          å ivareta interessene knyttet til tamilske og norsktamilske barn og
          unge i Norge. Senteret har en rekke aktiviteter som nettopp ivaretar
          disse interessene. Organisasjonen har blitt bygget opp til det den er
          i dag ved hjelp av et uttallig antall frivillige ressurser i det
          tamilske samfunnet.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
