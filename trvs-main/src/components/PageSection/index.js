import React, { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Icon1 from "images/svg-1.svg";
import {
  PageContainer,
  BackIcon,
  BackIconText,
  PageContent,
  PageDescription,
  PageRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  ColumnHeading,
  ColumnDescription,
  HorizontalLine,
  TeacherRow,
  TeacherColumn,
  TeacherPicture,
  TeacherDescription,
  TeacherName,
  TeacherEducation,
  TeacherClass,
  ContactContainer,
  ContactTitle,
} from "./PageElements";

const PageSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <BackIcon to="/">
        <FaChevronLeft />
        <BackIconText>Tilbake</BackIconText>
      </BackIcon>
      <PageDescription>beskrivelse av leksehjelp</PageDescription>
      <PageContent>
        <PageRow>
          <Column1>
            <ImgWrap>
              <Img src={Icon1} alt="image" />
            </ImgWrap>
          </Column1>
          <Column2>
            <ColumnHeading>Slik fungerer</ColumnHeading>
            <ColumnDescription>undervisning og leksehjelp</ColumnDescription>
          </Column2>
        </PageRow>
        <PageRow>
          <Column1>
            <ColumnHeading>Pris</ColumnHeading>
            <ColumnDescription>700 NOK</ColumnDescription>
          </Column1>
          <Column2>
            <ColumnHeading>Du får: </ColumnHeading>
            <ColumnDescription>lalaalala</ColumnDescription>
          </Column2>
        </PageRow>
        <HorizontalLine />
        <ColumnHeading>Våre Lærere</ColumnHeading>
        <TeacherRow>
          <TeacherColumn>
            <TeacherPicture src={Icon1} alt="profile picture" />
            <TeacherDescription>
              <TeacherName>Nitharshaan Thevarajah</TeacherName>
              <TeacherEducation>M.Sc Computer Science</TeacherEducation>
              <TeacherClass>10. trinn</TeacherClass>
            </TeacherDescription>
          </TeacherColumn>
          <TeacherColumn>
            <TeacherPicture src={Icon1} alt="profile picture" />
            <TeacherDescription>
              <TeacherName>Nitharshaan Thevarajah</TeacherName>
              <TeacherEducation>M.Sc Computer Science</TeacherEducation>
              <TeacherClass>10. trinn</TeacherClass>
            </TeacherDescription>
          </TeacherColumn>
          <TeacherColumn>
            <TeacherPicture src={Icon1} alt="profile picture" />
            <TeacherDescription>
              <TeacherName>Nitharshaan Thevarajah</TeacherName>
              <TeacherEducation>M.Sc Computer Science</TeacherEducation>
              <TeacherClass>10. trinn</TeacherClass>
            </TeacherDescription>
          </TeacherColumn>
          <TeacherColumn>
            <TeacherPicture src={Icon1} alt="profile picture" />
            <TeacherDescription>
              <TeacherName>Lashand S. Nadarajah</TeacherName>
              <TeacherEducation>M.Sc Computer Science</TeacherEducation>
              <TeacherClass>10. trinn</TeacherClass>
            </TeacherDescription>
          </TeacherColumn>
        </TeacherRow>
      </PageContent>
      <ContactContainer>
        <ContactTitle>Kontaktpersjon</ContactTitle>
      </ContactContainer>
    </PageContainer>
  );
};

export default PageSection;
