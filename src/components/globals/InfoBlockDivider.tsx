import React from 'react';
import styled from 'styled-components';


interface InfoBlockDividerProps {
	text: string;
	toggle?: () => void;
}

export default function InfoBlockDivider({ text }: InfoBlockDividerProps) {
	return (
		<InfoBlockDividerContainer>
			<h5>{text}</h5>
		</InfoBlockDividerContainer>
	);
}

const InfoBlockDividerContainer = styled.div`
	display: flex;
	opacity: 40%;
	border-bottom: ${props => props.theme.hr};
	width: auto;
	margin-left: 1rem;

	h5 {
		padding: 0.5rem 0rem;
	}
`;
