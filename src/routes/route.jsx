
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            }
        ],
    },
]);

export default router;