import React from "react";
import NavBar from "../NavBar";
import styled from "styled-components";
import Mundi from "../../src/LikedPage/mundi.jpg";

export const MainContainer = styled.div`
  width: 80vw;
  float: left;
  margin: 10vw;
  margin-top: 2vh;
`;

export const AboutContainer = styled.div`
  width: 40vw;
  float: left;
  margin-left: 5vw;
  margin-top: 5vh;
`;

export const AboutText = styled.h1`
  font-size: 1.5rem;
  line-height: 2;
`;

export const AboutTextLink = styled.a`
  font-size: 1.5rem;
`;
export const ImageDiv = styled.div`
  width: 20vw;
  height: 40vh;
  margin-top: 5vh;
  margin-left: 10vw;
  background-image: url(${Mundi});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  float: left;
`;

const AboutPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <MainContainer>
        <h1>About Us</h1>
        <hr></hr>
        <ImageDiv></ImageDiv>
        <AboutContainer>
          <AboutText>
            This site was built by&nbsp;
            <AboutTextLink
              href="https://www.linkedin.com/in/ajay-mundi-195838181/"
              target="_blank"
            >
              Ajay Mundi&nbsp;
            </AboutTextLink>
            using the React library for the Shopify Frontend Challenge 2022.
            Photos are courtesy of NASA's Astronomy Picture of the Day (APOD)
            API. For more information about the API please visit&nbsp;
            <AboutTextLink href="https://api.nasa.gov" target="_blank">
              https://api.nasa.gov.
            </AboutTextLink>
          </AboutText>
        </AboutContainer>
      </MainContainer>
    </>
  );
};

export default AboutPage;
