import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Sobre from "../pages/sobre";
import Tarefa from "../pages/produto";
import Formulario from "../pages/formulario";

const router = createBrowserRouter([
    {path: '/', element: <Home/>, errorElement: <NotFound />},
    {path: '/sobre', element: <Sobre/>},
    {path: '/tarefa', element: <Tarefa/>},
    {path: '/formulario', element: <Formulario/>}
  ])
  
export default router