import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";
import Demo from './pages/Demo';
import agendaViewModelRef from './pages/APIReference/AgendaViewModelRef';
import theming from './pages/Guides/Theming';
import customActions from './pages/Guides/CustomActions';


import gettingStarted from './pages/Guides/GettingStarted';



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
                comment: { color: '#b3b3b3' },
                string: { color: '#038387' },
                function: { color: '#ba1a1a' },
                keyword: { color: '#0065b3' },
            }
        }}
        pages={[
            { path: `/`, title: `Demo`, content: Demo },
            {
                title: 'Guides',
                pages: [
                    { path: `/getting-started`, title: `Getting Started`, content: gettingStarted },
                    { path: `/theming`, title: `Theming`, content: theming },
                    { path: `/custom-actions`, title: `Custom Actions`, content: customActions },
                ]
            },
            {
                title: 'API Reference',
                pages: [
                    { path: `/api`, title: `AgendaViewModel`, content: agendaViewModelRef },
                ]
            },
        ]}
    />,
    document.getElementById(`root`)
);