import React from 'react';
import styled from 'styled-components'

interface CardButtonProps {

  text: string; 
  isActive: boolean;
  isSelected?: boolean;
  clickHandler: () => void;
  icon?: React.ReactChild;

}

export default function CardButton({ text, isActive, clickHandler, icon, isSelected }: CardButtonProps) {

  
  return <StyledButton 
  
    isSelected={isSelected}
    disabled={isActive} 
    onClick={clickHandler} 
    isActive={isActive}>{text}{icon}

  </StyledButton>;
}


const StyledButton = styled.button<{ isActive: boolean, isSelected?: boolean} >`


  background-color: transparent;
  border: 1px solid white;
  border-radius: ${props => props.theme.borderRadius};
  border-color: ${props => props.isSelected ? props.theme.accentColor : '#fff'} ;
  color: ${props => props.theme.textColor};

  font-size: 1rem;
  font-weight: 300;
  padding: 0.3rem 1rem;
  margin: 0.5rem;
  opacity: ${props => props.isActive ? '30%' : '100%' };
/*   pointer-events: ${props => props.isActive && 'none'};  */


  :hover { 
    transition: 0.2s;
    opacity: 80%;
  };
  cursor: pointer;


  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;


`