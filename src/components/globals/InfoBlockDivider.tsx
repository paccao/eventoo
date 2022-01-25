import React from 'react';
import styled from 'styled-components';


interface InfoBlockDividerProps {
	text: string;
	toggle?: React.ReactNode;
}

export default function InfoBlockDivider({ text, toggle }: InfoBlockDividerProps) {
	return (
		<InfoBlockDividerContainer>
			<h5>{text}</h5>
			{toggle}
		</InfoBlockDividerContainer>
	);
}

const InfoBlockDividerContainer = styled.div`
	display: flex;
	justify-content: space-between;
	opacity: 40%;
	border-bottom: ${props => props.theme.hr};
	width: auto;
	margin-left: 1rem;

	h5 {
		padding: 0.5rem 0rem;
	}
`;
