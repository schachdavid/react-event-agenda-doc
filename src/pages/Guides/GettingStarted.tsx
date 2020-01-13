import { markdown, CodeSpecimen } from "catalog";
import React from "react";


export default () =>
  markdown`
> react-event-agenda is reusable react component. It allows users to create an event's agenda in a flexible manner.  

\`\`\`hint
React Event Agenda is not actively maintained and there are still some features missing. It was mainly developed as a ui component for the MS Outlook [agenda-builder-add-in](https://github.com/schachdavid/agenda-builder-add-in)
\`\`\`

## Installation
Install using npm:

\`npm install react-event-agenda --save\`

or yarn:

\`yarn add react-event-agenda\`

## Usage
\`\`\`code
lang: jsx
collapsed: false
---
import React, { Component } from 'react'
import Agenda, {AgendaViewModel} from 'react-event-agenda'
import initialData from './initialData.js';


export default class App extends Component {

  constructor() {
    super();
    this.agendaViewModel = new AgendaViewModel(initialData);
  }

  render () {
    return (
      <div style={{height: '100vh', width: '100vw', maxWidth: '100%'}}>
        <Agenda agendaViewModel={this.agendaViewModel}/>
      </div>
    )
  }
}
\`\`\`

## Access Data
The React Event Agenda Component has one central view model. To track changes of the agenda hand a handleDataChange function to the view model's constructor.

\`\`\`code
lang: jsx
collapsed: false
---
const handleDataChange = async (data: IAgendaJSON) => {
  //save the data...
};

agendaViewModel = new AgendaViewModel(initialData, handleDataChange);
\`\`\`

The view model also exposes many methods to read and write the agenda's data or access the logic of the component.
Learn more about the view model and its API [here](/api).
`

