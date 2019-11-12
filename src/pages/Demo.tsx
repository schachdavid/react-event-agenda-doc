import React from "react";
import { markdown, ReactSpecimen } from "catalog";
import ExampleComponent from 'react-event-agenda';


export default () =>
  markdown`
### Example Usage
Simple Agenda${(
      <ReactSpecimen>
        <div style={{ height: '550px' }}>
          <div style={{ height: '500px' }}>
            <ExampleComponent />
          </div>

        </div>
      </ReactSpecimen>
    )}
  `;

