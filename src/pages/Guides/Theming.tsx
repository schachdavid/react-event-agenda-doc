import React from "react";
import { markdown, ReactSpecimen, CodeSpecimen } from "catalog";
import Agenda, { AgendaViewModel } from 'react-event-agenda'



export default () =>
    markdown`
> Change fonts, iconography and the color palette to theme the component.


### Colors
Quickly change the component's appearance by applying a new fabric ui color pallette. Create the color palette using the [UI Fabric Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/index.html) and pass it to the component via the \`colorPalette\` prop.
${(<CodeSpecimen lang="jsx" collapsed={true} rawBody={`import React, { Component } from 'react'
import Agenda, {AgendaViewModel} from 'react-event-agenda'


export default class App extends Component {

  constructor() {
    super();
    this.agendaViewModel = new AgendaViewModel();
  }

  colorPalette = {
    themePrimary: '#29b59a',
    themeLighterAlt: '#020706',
    themeLighter: '#061d19',
    themeLight: '#0c362e',
    themeTertiary: '#186c5d',
    themeSecondary: '#249f88',
    themeDarkAlt: '#39bca3',
    themeDark: '#51c7b0',
    themeDarker: '#79d5c4',
    neutralLighterAlt: '#082a35',
    neutralLighter: '#0c313d',
    neutralLight: '#123c4b',
    neutralQuaternaryAlt: '#174453',
    neutralQuaternary: '#1c4a5a',
    neutralTertiaryAlt: '#326476',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#05222c',
  };

  render () {
    return (
      <div style={{height: '100vh', width: '100vw', maxWidth: '100%'}}>
        <Agenda agendaViewModel={this.agendaViewModel} colorPalette={this.colorPalette}/>
      </div>
    )
  }
}`}></CodeSpecimen>)}

    ${(
            <ReactSpecimen noSource={true}>
                <div style={{ height: '600px', width: '100%' }}>
                    <Agenda agendaViewModel={new AgendaViewModel()} 
                    colorPalette={{
                      themePrimary: '#29b59a',
                      themeLighterAlt: '#020706',
                      themeLighter: '#061d19',
                      themeLight: '#0c362e',
                      themeTertiary: '#186c5d',
                      themeSecondary: '#249f88',
                      themeDarkAlt: '#39bca3',
                      themeDark: '#51c7b0',
                      themeDarker: '#79d5c4',
                      neutralLighterAlt: '#082a35',
                      neutralLighter: '#0c313d',
                      neutralLight: '#123c4b',
                      neutralQuaternaryAlt: '#174453',
                      neutralQuaternary: '#1c4a5a',
                      neutralTertiaryAlt: '#326476',
                      neutralTertiary: '#c8c8c8',
                      neutralSecondary: '#d0d0d0',
                      neutralPrimaryAlt: '#dadada',
                      neutralPrimary: '#ffffff',
                      neutralDark: '#f4f4f4',
                      black: '#f8f8f8',
                      white: '#05222c',
                    }}/>
                </div>
            </ReactSpecimen>

        )}
  
### Fonts
change the font by...
    
### Icons
change the icons by...

    
`;




