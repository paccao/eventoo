import React from 'react';
import styled from 'styled-components'

interface CardButtonProps {

  text: string; 
  isActive: boolean;
  clickHandler: () => void;



}

export default function CardButton({ text, isActive, clickHandler, }: CardButtonProps) {
  return <StyledButton onClick={clickHandler} isActive={isActive}>{text}</StyledButton>;
}


const StyledButton = styled.button<{ isActive: boolean} >`



`