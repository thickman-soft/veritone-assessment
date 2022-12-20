import React from 'react';
import styled from 'styled-components';

const TitleText = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.1rem;
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
`;

const Title = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};

export default Title;
