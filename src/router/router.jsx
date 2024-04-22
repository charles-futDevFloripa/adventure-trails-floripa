import { createBrowserRouter } from 'react-router-dom';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <PaginaInicial />,
  },
  {
    path: '/cadastro-trilha',
    element: <PaginaCadastroTrilha />,
  },
  {
    path: '/lista-trilha',
    element: <PaginaListaTrilhas />,
  },
]);
