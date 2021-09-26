import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { InformationData } from '../data/InformationData';



const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
 padding: 3rem calc((100vw-1300px) / 2);
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-template-rows: 800px;
 
  @media screen and (max-width:770px) {
    grid-template-columns: 1fr;
    margin-top: 200px;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1{
      margin-bottom:1rem;
      font-size:clamp(1.5rem, 6vw, 2rem) ;
  }
  p{
      margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and(max-width:770px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }
  img{
      width:100%;
      height: 100%;
      object-fit: cover;
      margin-top: 50px;
  }
  @media screen and(max-width:770px) {
      width:90%;
      height: 90%;
  }
`;

const Information = () => {
  return (
    <Section>
      {InformationData.map((car, index) => (
      <Container  key={index}>
        
          
        
        <ColumnLeft>
          <h1>{car.heading}</h1>
          <p>{car.paragraphOne}</p>
          <p>{car.paragraphTwo}</p>
          <Button to="/home">{car.buttonLabel}</Button>
        </ColumnLeft>
        <ColumnRight reverse={car.reverse}  key={index}>
          <img src={car.image} alt="home" />
        </ColumnRight>
        </Container>
        ))}
    </Section>
  );
};

export default Information;
