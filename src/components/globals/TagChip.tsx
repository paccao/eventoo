import React from 'react';
import styled from 'styled-components';

export default function TagChip({ text }: { text: string }) {
    return (
        <TagChipContainer>
            <p className='tag-p'>{text}</p>
        </TagChipContainer>
    );
}

const TagChipContainer = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${(props) => props.theme.borderRadius};
    padding: 0.3rem;
    font-size: 10px;
    margin-top: 0.5rem;
    width: auto;

    .tag-p {
        padding: 0.3rem;
        border-radius: ${(props) => props.theme.borderRadius};
        color: ${(props) => props.theme.textColorDark};
        font-weight: 300;
        background-color: ${(props) => props.theme.accentColor};
    }
`;
