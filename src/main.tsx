import ReactDOM from 'react-dom/client'
import './index.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux';
import { store } from './state/store';

const router = createHashRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
