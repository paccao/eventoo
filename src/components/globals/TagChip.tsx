import React from 'react';
import styled from 'styled-components';

export default function TagChip({ text }: { text: string }) {
	return <TagChipContainer>{text}</TagChipContainer>;
}

const TagChipContainer = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.accentColor};
	height: 2rem;
	width: 5rem;
	border-radius: 15px;
	color: ${props => props.theme.textColorDark }
`;
