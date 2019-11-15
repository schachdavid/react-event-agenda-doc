import React from "react";
import { markdown, ReactSpecimen, CodeSpecimen } from "catalog";
import Agenda, { AgendaViewModel } from 'react-event-agenda'



export default () =>
  markdown`
> Add custom actions with icons for the agenda items.

${(<CodeSpecimen lang="jsx" collapsed={true} rawBody={`import React, { Component } from 'react'
import Agenda, {AgendaViewModel} from 'react-event-agenda'


export default class App extends Component {

  constructor() {
    super();
    this.agendaViewModel = new AgendaViewModel();
  }

  render () {
    return (
      <div style={{height: '100vh', width: '100vw', maxWidth: '100%'}}>
        <Agenda agendaViewModel={this.agendaViewModel}/>
      </div>
    )
  }
}`}>
    </CodeSpecimen>
    )}

    ${(
      <ReactSpecimen noSource={true}>
        <div style={{ height: '600px', width: '100%' }}>
          <Agenda agendaViewModel={new AgendaViewModel()} />
        </div>
      </ReactSpecimen>

    )}
    
`;

