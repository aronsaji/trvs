import React from "react";
import Icon1 from "images/svg-1.svg";
import Icon2 from "images/svg-1.svg";
import Icon3 from "images/svg-1.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServiceLeksehjelpLink,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="discover">
      <ServicesH1>Våre tilbud</ServicesH1>
      <ServicesWrapper>
        <ServiceLeksehjelpLink to="/leksehjelp">
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Undervisning og Leksehjelp</ServicesH2>
            {/* <ServicesP>Info om leksehjelp</ServicesP> */}
          </ServicesCard>
        </ServiceLeksehjelpLink>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Mental helse og fysisk aktivitet</ServicesH2>
          {/* <ServicesP>Info om tilbud for eldre</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Kulturvern</ServicesH2>
          {/* <ServicesP>Info om FUR</ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
