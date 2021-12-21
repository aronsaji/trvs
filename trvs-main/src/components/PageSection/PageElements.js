import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { theme } from "variables/theme";

export const PageContainer = styled.div`
  background: ${theme.light};
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    padding: 90px 0;
    margin: 0;
  }
`;

export const BackIcon = styled(LinkRouter)`
  display: flex;
  cursor: pointer;
  color: ${theme.dark};
  font-size: 1.8rem;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  padding: 24px 0 0 24px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const BackIconText = styled.p`
  font-size: 1rem;
  color: ${theme.dark};
  display: inline-block;
  cursor: pointer;
`;

export const PageContent = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px 32px 24px;
  justify-content: center;
`;

export const PageDescription = styled.p`
  color: ${theme.dark};
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

export const PageRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ColumnHeading = styled.h3`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? theme.light : theme.dark)};

  @media screen and (max-width: 480px) {
  }
`;

export const ColumnDescription = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${theme.dark};
`;

export const HorizontalLine = styled.hr`
  border: 1px solid rgba(30, 38, 61, 0.2);
  margin: 32px 0;
`;

export const TeacherRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const TeacherColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

export const TeacherPicture = styled.img`
  border-radius: 50%;
  width: 175px;
  margin: 24px 0;

  @media screen and (max-width: 768px) {
    width: 120px;
  }
`;

export const TeacherDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;

export const TeacherName = styled.div`
  font-weight: bold;
  font-size: 14px;
  background: ${theme.dark};
  color: ${theme.light};
  width: 150px;
  text-align: center;
  margin-top: -36px;
  margin-bottom: 24px;
  padding: 4px 2px;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TeacherEducation = styled.div`
  font-size: 12px;
  @media screen and (max-width: 768px) {
  }
`;

export const TeacherClass = styled.div`
  @media screen and (max-width: 768px) {
  }
`;

export const ContactContainer = styled.div`
  background: ${theme.dark};
  height: 500px;
`;

export const ContactTitle = styled.h3`
  color: ${theme.light};
  font-size: 24px;
  padding: 24px;

  @media screen and (max-width: 768px) {
  }
`;
