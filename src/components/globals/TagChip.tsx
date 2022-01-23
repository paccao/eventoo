import React from 'react';
import styled from 'styled-components';

export default function TagChip({ text }: { text: string }) {
	return <TagChipContainer>{text}</TagChipContainer>;
}

const TagChipContainer = styled.li`
	display: inline;
	border-radius: 15px;
	padding: 0.2rem;
	vertical-align: middle;
	font-size: 10px;
	margin: 0.3rem 0rem;

	color: ${props => props.theme.textColorDark};
	background-color: ${props => props.theme.accentColor};
`;
