import React from "react";
import { markdown, ReactSpecimen, CodeSpecimen } from "catalog";
import Agenda, { AgendaViewModel, IItem } from 'react-event-agenda'

import { FiInfo } from 'react-icons/fi';



export default () =>
  markdown`
> Add custom actions with icon buttons to extend the component's UI.

e.g. add a button to download an agenda item as iCal file via the \`customItemActions\` prop

There are four different props for custom actions:

#### \`customItemActions\`
CustomItemActions are displayed at the agenda items like the delete, edit and select buttons.

\`\`\`code
lang: jsx
collapsed: true
---

import { FiInfo} from 'react-icons/fi';
//[...]

const customItemActions: ICustomItemAction[] = [
  {
    action: (item: IItem) => alert(item.title),
    iconName: 'info',
    iconToRender: <FiInfo size={'1.2em'} strokeWidth={1.2}/>
  }
];

//[...]
<Agenda 
  agendaViewModel={this.agendaViewModel}
  customItemActions={customItemActions}
/>
\`\`\`


#### \`customAgendaActions\`
CustomAgendaActions are displayed at the command bar on the left.

\`\`\`code
lang: jsx
collapsed: true
---

import { FiInfo} from 'react-icons/fi';
//[...]

const customAgendaActions= {[
  {
    key: 'info',
    ariaLabel: 'info',
    iconProps: {
      iconName: 'info'
    },
    iconOnly: true,
    onClick: () => alert("clicked info")
  }
]}

//[...]
<Agenda 
icons={{
    icons: {
      'info': <FiInfo size={'1.2em'} strokeWidth={1.2} />,
    }
  }}
  agendaViewModel={this.agendaViewModel}
  customAgendaActions={customAgendaActions}
/>
\`\`\`

#### \`customAgendaActionsFar\`
CustomAgendaActionsFar are displayed at the command bar on the right.

\`\`\`code
lang: jsx
collapsed: true
---

import { FiInfo} from 'react-icons/fi';
//[...]

const customAgendaActionsFar={[
  {
    key: 'info',
    ariaLabel: 'info',
    iconProps: {
      iconName: 'info'
    },
    iconOnly: true,
    onClick: () => alert("clicked info")
  }
]}

//[...]
<Agenda 
icons={{
    icons: {
      'info': <FiInfo size={'1.2em'} strokeWidth={1.2} />,
    }
  }}
  agendaViewModel={this.agendaViewModel}
  customAgendaActionsFar={customAgendaActionsFar}
/>
\`\`\`

#### \`customItemSelectionActionsFar\`
CustomItemSelectionActionsFar are displayed at the selection bar.

\`\`\`code
lang: jsx
collapsed: true
---

import { FiInfo} from 'react-icons/fi';
//[...]

const   customItemSelectionActionsFar={[
  {
    key: 'info',
    ariaLabel: 'info',
    iconProps: {
      iconName: 'info'
    },
    iconOnly: true,
    onClick: () => alert("clicked info")
  }
]};

//[...]
<Agenda 
icons={{
  icons: {
    'info': <FiInfo size={'1.2em'} strokeWidth={1.2} />,
  }
  }}
  agendaViewModel={this.agendaViewModel}
  customItemSelectionActionsFar={customItemSelectionActionsFar}
/>
\`\`\`



    ${(
      <ReactSpecimen noSource={true}>
        <div style={{ height: '600px', width: '100%' }}>
          <Agenda
            icons={{
              icons: {
                'info': <FiInfo size={'1.2em'} strokeWidth={1.2} />,
              }
            }}
            customItemSelectionActionsFar={[
              {
                key: 'info',
                ariaLabel: 'info',
                iconProps: {
                  iconName: 'info'
                },
                iconOnly: true,
                onClick: () => alert("clicked info")
              }
            ]}
            customAgendaActions={[
              {
                key: 'info',
                ariaLabel: 'info',
                iconProps: {
                  iconName: 'info'
                },
                iconOnly: true,
                onClick: () => alert("clicked info")
              }
            ]}
            customAgendaActionsFar={[
              {
                key: 'info',
                ariaLabel: 'info',
                iconProps: {
                  iconName: 'info'
                },
                iconOnly: true,
                onClick: () => alert("clicked info")
              }
            ]}
            customItemActions={[
              {
                action: (item: IItem) => alert(item.title),
                iconName: 'info',
                iconToRender: <FiInfo size={'1.2em'} strokeWidth={1.2} />
              }
            ]}

            agendaViewModel={new AgendaViewModel({
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

