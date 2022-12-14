import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

/* Importamos los pages */
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminSubjects from "../pages/Admin/Subjects";


import Home from "../pages/Home";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../pages/Contact";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
  {
    path: "/admin/users",
    layout: LayoutAdmin,
    component: AdminUsers,
  },
  {
    path: "/admin/subjects",
    layout: LayoutAdmin,
    component: AdminSubjects,
  },
];

/* Ruta home, notfound */
const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const routeNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;




/*
import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notfound";
import Signin from "../pages/Admin/Signin";
import GeneralLayout from "../layouts/GeneralLayouts";
import { Layout } from "antd";

const routesAdmin = [
    {path: "/admin", layout:GeneralLayout, component: Home},
    {path: "/admin/login/*", layout: GeneralLayout, component: Signin},
];

const routesGeneral = [
    {path: "/", layout: GeneralLayout, component: Home},
    {path: "*", layout: GeneralLayout, component: NotFound},
];
const projectRoutes = [...routesAdmin, ...routesGeneral];



export default projectRoutes;

/*const routesAdmin = [
    { path: "/admin", layout: GeneralLayout, component: Signin},
    { path: "/admin/contact", layout: GeneralLayout, component: Contact},
];
*/
