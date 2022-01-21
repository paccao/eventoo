import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './components/menu/Header';
import { darkTheme } from './themes/appTheme';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppContainer data-testid="app-container" className="App">
                <Header />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;

const AppContainer = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;
