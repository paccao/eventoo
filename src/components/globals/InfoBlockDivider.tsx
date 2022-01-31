import React from 'react';
import styled from 'styled-components';


interface InfoBlockDividerProps {
	text?: string;
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
	margin-right: 0.5rem;

	.blog-shadow-dreamy {
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
}
	:hover {


	}

	h5 {
		padding: 0.5rem 0rem;
	}
`;
