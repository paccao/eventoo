import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import { UiContext } from '../../context/UiState';

import { BsSearch } from 'react-icons/bs'

import styled from 'styled-components';

export default function Search() {
	const { state: appState } = useContext(AppContext);
	const { state: uiState, dispatch } = useContext(UiContext);

	function onChangeHandler(target: any) {
		dispatch({ type: 'SET_SEARCH_STRING', payload: target.value });
	}

	return (
		<SearchContainer>
			<input placeholder='Sök på taggar' onChange={e => onChangeHandler(e.target)} type='text' />
      <BsSearch />
		</SearchContainer>
	);
}


const SearchContainer = styled.div`

  input {

    border-radius: 15px;
    height: 2rem;
    border: none;
    margin: 0.5rem;
    background-color: ${props => props.theme.cardBgColor};
    color: ${props => props.theme.textColor};
    padding-left: 0.5rem;
  }


`
