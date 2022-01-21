import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MeetupListPage from './pages/MeetupListPage';
import DetailsPage from './pages/DetailsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MeetupListPage />} />
            </Routes>
            <Routes>
                <Route path="/details" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
