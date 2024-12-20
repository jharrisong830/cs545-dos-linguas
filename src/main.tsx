import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import NotFound from "./NotFound.tsx";
import Vocab from "./Vocab.tsx";
import Grammar from "./Grammar.tsx";
import ConversationsIntro from "./ConversationsIntro.tsx";
import Study from "./Study.tsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/vocab", element: <Vocab /> },
    { path: "/grammar", element: <Grammar /> },
    { path: "/study", element: <Study /> },
    { path: "*", element: <NotFound /> }
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
