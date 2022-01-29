import React from 'react';
import styled from 'styled-components'

export default function Page404() {
	return (
		<Page404Container>
			<h1> 404</h1>
			<h2> Page Not Found</h2>
		</Page404Container>
	);
}


const Page404Container = styled.div`

height: 80vh;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`