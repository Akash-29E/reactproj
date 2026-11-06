import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import { githubInfoLoader } from './components/Github/Github'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
// import { router } from './router.jsx'
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route path="github/:id" element={<Github />} />
      <Route loader={githubInfoLoader} path="github/" element={<Github />} />
    </Route>,
    //   [
    // {
    //   path: "/",
    //   element: <Layout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <Home />,
    //     },
    //     {
    //       path: "about",
    //       element: <About />,
    //     },
    //     {
    //       path: "contact",
    //       element: <Contact />,
    //     },
    //   ]
    // },
    //   ]
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
