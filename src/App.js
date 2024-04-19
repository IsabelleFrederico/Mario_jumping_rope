import Router from './Router/Router'
import GloblaStateProvider from './Global/GloblaStateProvider'
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <GloblaStateProvider>
        <Router />
      </GloblaStateProvider>
    </BrowserRouter>
  );
}

export default App;
