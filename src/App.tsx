import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './components/menu/Header';
import { darkTheme } from './themes/appTheme';
import { Routes, Route } from 'react-router-dom';

import MeetupListPage from './pages/MeetupListPage';
import MeetupPage from './pages/MeetupPage';

function App() {
   
    return (
        <ThemeProvider theme={darkTheme}>
            <AppContainer data-testid="app-container" className="App">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<MeetupListPage />} />
                    </Routes>
                    <Routes>
                        <Route path="/meetup/:id" element={<MeetupPage />} />
                    </Routes>
                </main>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;

const AppContainer = styled.div`
    background-color: ${(props) => props.theme.__bgColorLargePageWidth};
    max-width: 980px;
    margin: 0 auto;

    min-height: 100vh;

    main {
        padding: 1rem;
        width: 100%;
        background-color: ${(props) => props.theme.bgColor};
    }
`;
