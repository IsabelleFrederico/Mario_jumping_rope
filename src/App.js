import Router from './Router/Router'
import GloblaStateProvider from './Global/GloblaStateProvider'
import { BrowserRouter } from 'react-router-dom';

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
