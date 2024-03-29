import ReactDOM from 'react-dom/client';
import '@/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <RouterProvider router={routes} />
);
