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
        <Agenda agendaViewModel={new AgendaViewModel({
      "id": "f4159afc-ca9b-452b-9779-b2fb0289d5ac ",
      "days": [
        {
          "id": "49982ca2-95b7-4c5e-b0c2-bbe51465736e",
          "startTime": "2013-02-08T07:00:00.000Z",
          "endTime": "2013-02-08T16:30:00.000Z",
          "tracks": [
            {
              "id": "dba5df09-95b7-43aa-bae8-8d670a696417",
              "name": "",
              "items": [
                {
                  "id": "5331f2cf-4b0b-40fe-9d61-60221e3694f3",
                  "title": "Welcome",
                  "speaker": "Host Company",
                  "start": "2013-02-08T09:00:00.000Z",
                  "end": "2013-02-08T10:00:00.000Z"
                }
              ]
            }
          ]
        },
        {
          "id": "49982ca2-95b7-4c5e-b0c2-b65736e",
          "startTime": "2013-02-09T07:00:00.000Z",
          "endTime": "2013-02-09T16:30:00.000Z",
          "tracks": [
            {
              "id": "dba5df09-95b7-43aa-0a696417",
              "name": "",
              "items": [
                {
                  "id": "5331f2cf-4b0b-40fe-9d61-61e3694f3",
                  "title": "Welcome",
                  "speaker": "Host Company",
                  "start": "2013-02-09T09:00:00.000Z",
                  "end": "2013-02-09T10:00:00.000Z"
                }
              ]
            }
          ]
        }
      ]
    })} />
        </div>
      </ReactSpecimen>

    )}
    
`;

