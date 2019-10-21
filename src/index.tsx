// import Demo from "./pages/Demo";
import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import Demo from './pages/Demo';
import ApiRef from './pages/ApiRef';

import GettingStarted from './pages/GettingStarted';



ReactDOM.render(
    <Catalog
        title="React Event Agenda"
        theme={{
            pageHeadingBackground: `#038387`,

        }}
        pages={[
            { path: `/getting-started`, title: `Getting Started`, content: GettingStarted },
            { path: `/demo`, title: `Demo`, content: Demo },
            { path: `/api`, title: `API Reference`, content: ApiRef },
        ]}
    />,
    document.getElementById(`root`)
);