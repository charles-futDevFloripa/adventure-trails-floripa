import Header from './components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
import { TrilhasContextProvider } from './context/TrilhasContext';

function App() {
  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
    </TrilhasContextProvider>
  );
}

export default App;
