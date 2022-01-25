import React from 'react';
import styled from 'styled-components';

import { AiOutlineStar } from 'react-icons/ai';

export default function AttendingIndicator() {
	return (
		<AttendingIndicatorContainer>
			attending&nbsp;<AiOutlineStar className='star-icon' />
		</AttendingIndicatorContainer>
	);
}


const AttendingIndicatorContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
font-size: 0.7rem;

opacity: ${props => props.theme.textMediumEmph};

`