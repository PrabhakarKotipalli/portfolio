import { createContext, useMemo, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Layout from "./shared/Layout/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";

export const MyContext = createContext();

const router = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
];

function App() {
    const [currentTab, setCurrentTab] = useState("");

    // Memoize the context value to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({ currentTab, setCurrentTab }), [currentTab]);

    return (
        <MyContext.Provider value={contextValue}>
            <Layout>
                <HashRouter basename="/">
                    <Routes>
                        {router.map((r) => (
                            <Route key={r.path} path={r.path} element={r.element} />
                        ))}
                    </Routes>
                </HashRouter>
            </Layout>
        </MyContext.Provider>
    );
}

export default App;
