import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PaginaListaTrilhas from '../pages/PaginaListaTrilhas';
import PaginaCadastroTrilha from '../pages/PaginaCadastroTrilha';
import PaginaInicial from '../pages/PaginaInicial';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PaginaInicial />,
      },
      {
        path: '/cadastro-trilha',
        element: <PaginaCadastroTrilha />,
      },
      {
        path: '/lista-trilhas',
        element: <PaginaListaTrilhas />,
      },
    ],
  },
]);

export default routes;
