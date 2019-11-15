import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";
import Demo from './pages/Demo';
import ApiRef from './pages/APIReference/ApiRef';
import Theming from './pages/Guides/Theming';
import Fundamentals from './pages/Guides/Fundamentals';
import CustomActions from './pages/Guides/CustomActions';


import GettingStarted from './pages/Guides/GettingStarted';



ReactDOM.render(
    <Catalog
        title="React Event Agenda"

        theme={{
            pageHeadingHeight: 150,
            pageHeadingBackground: `#038387`,

        }}
        pages={[
            { path: `/demo`, title: `Demo`, content: Demo },
            {
                title: 'Guides',
                pages: [
                    { path: `/getting-started`, title: `Getting Started`, content: GettingStarted },
                    { path: `/fundamentals`, title: `Fundamentals`, content: Fundamentals },
                    { path: `/theming`, title: `Theming`, content: Theming },
                    { path: `/custom-actions`, title: `Custom Actions`, content: CustomActions },

                    // Other subpages of 'Basics'
                ]
            },
            {
                title: 'API Reference',
                pages: [
                    { path: `/api`, title: `API Reference`, content: ApiRef },
                    // Other subpages of 'Basics'
                ]
            },

        ]}
    />,
    document.getElementById(`root`)
);