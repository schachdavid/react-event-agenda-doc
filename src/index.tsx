import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";
import Demo from './pages/Demo';
import AgendaViewModelRef from './pages/APIReference/AgendaViewModelRef';
import Theming from './pages/Guides/Theming';
import CustomActions from './pages/Guides/CustomActions';


import GettingStarted from './pages/Guides/GettingStarted';



ReactDOM.render(
    <Catalog
        useBrowserHistory={true}
        title="React Event Agenda"

        theme={{
            pageHeadingHeight: 150,
            // pageHeadingBackground: `#038387`,
            pageHeadingBackground: '#ffffff',
            pageHeadingTextColor: '#404040',
            linkColor: '#0065b3',
            brandColor: '#038387',
            sidebarColorTextActive: '#038387',
            textColor: '#404040',
            sidebarColorHeading: '#404040',
            codeStyles: {
                comment: { color: '#b3b3b3'},
                string: {color: '#038387'},
                function: {color: '#ba1a1a'},
                keyword: {color: '#0065b3'},
            }



        }}
        pages={[
            { path: `/`, title: `Demo`, content: Demo },
            {
                title: 'Guides',
                pages: [
                    { path: `/getting-started`, title: `Getting Started`, content: GettingStarted },
                    { path: `/theming`, title: `Theming`, content: Theming },
                    { path: `/custom-actions`, title: `Custom Actions`, content: CustomActions },
                ]
            },
            {
                title: 'API Reference',
                pages: [
                    { path: `/api`, title: `AgendaViewModel`, content: AgendaViewModelRef },
                ]
            },

        ]}
    />,
    document.getElementById(`root`)
);