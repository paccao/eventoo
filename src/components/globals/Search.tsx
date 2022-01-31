import React, { ChangeEvent } from 'react';
import { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import { BsSearch } from 'react-icons/bs';

import styled from 'styled-components';

export default function Search() {
	const { dispatch } = useContext(UiContext);

	function onChangeHandler(event: ChangeEvent<HTMLInputElement> ) {
		dispatch({ type: 'SET_SEARCH_STRING', payload: event.target.value });
	}

	return (
		<SearchContainer>
			<input
				placeholder='Sök på taggar'
				onChange={e => onChangeHandler(e)}
				type='text'
			/>
			<BsSearch className='search-icon' />
		</SearchContainer>
	);
}

const SearchContainer = styled.div`
	display: flex;
	align-items: center;

	.search-icon {
		margin-left: -2rem;
	}

	input {
		border-radius: 15px;
		height: 2rem;
		border: none;
		margin-left: 0.5rem;
		background-color: ${props => props.theme.cardBgColor};
		color: ${props => props.theme.textColor};
		padding-left: 0.5rem;
	}
`;
