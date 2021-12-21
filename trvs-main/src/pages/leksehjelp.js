import React, { useState } from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import PageTitle from "components/PageTitle";
import PageSection from "components/PageSection";

const LeksehjelpPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const title = "Undervisning og Leksehjelp";

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} showNavMenu={showNavMenu} />
      <Navbar toggle={toggle} showNavMenu={showNavMenu} />
      <PageTitle title={title} />
      <PageSection />
    </>
  );
};

export default LeksehjelpPage;
