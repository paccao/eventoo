import React from 'react';
import styled from 'styled-components'

interface CardButtonProps {

  text: string; 
  isActive: boolean;
  clickHandler: () => void;
  icon?: React.ReactChild;

}

export default function CardButton({ text, isActive, clickHandler, icon }: CardButtonProps) {
  return <StyledButton onClick={clickHandler} isActive={isActive}>{text}{icon}</StyledButton>;
}


const StyledButton = styled.button<{ isActive: boolean} >`


  background-color: transparent;
  border: 1px solid white;
  border-radius: ${props => props.theme.borderRadius};
  border-color: ${props => props.theme.accentColor};

  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  color: ${props => props.theme.textColor};



`