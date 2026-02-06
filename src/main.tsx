import { createRoot } from 'react-dom/client'
// import {routes2} from "./router/routes.tsx";
// import './index.css';
import {RouterProvider} from 'react-router-dom';
import {routes} from "./router/routes.tsx";


createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)


// createRoot(document.getElementById('root')!)
//     .render(routes2);
