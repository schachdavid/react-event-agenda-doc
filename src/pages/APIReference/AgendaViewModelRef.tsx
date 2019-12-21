import React from 'react';
import { markdown, ReactSpecimen } from 'catalog';
import jsonFile from '../../apidocs.json';



/**
 * generates API Reference Documentation for the View Model
 */
const getDoc = () => {
  if (jsonFile.children[0].children[0].children) {
    let mdString = ``;
    let linkOverView = ``;
    jsonFile.children[0].children[0].children.forEach((method: any) => {
      const name: string = method.name;
      if (!method.signatures) return;
      linkOverView = `
${linkOverView}
- [${name}](/api#${name.toLowerCase()})`;
      const comment = method.signatures[0].comment
      if (comment === undefined) return;
      const description: string = comment.shortText ? comment.shortText : "";
      const parameters: any = method.signatures[0].parameters ? method.signatures[0].parameters : [];
      let parametersForSignature = "";
      let parameterTableRows = "";
      for (let i: number = 0; i < parameters.length; i++) {
        const parameterName: string = parameters[i].name ? parameters[i].name : "";
        const parameterType: string = parameters[i].type && parameters[i].type.name ? parameters[i].type.name : "any";
        let parameterDescription: string = '';
        if( parameters[i].comment) {
          if(parameters[i].comment.text !== undefined){
            parameterDescription = parameters[i].comment.text;
          } else if(parameters[i].comment.shortText !== undefined) {
            parameterDescription = parameters[i].comment.shortText;
          } 
        }

        if(name) console.log(parameterDescription);
        
        parametersForSignature = parametersForSignature + parameterName + ": " + parameterType;
        if (i < parameters.length - 1) {
          parametersForSignature = parametersForSignature + ",";
        }
        //fill parameter table
        parameterTableRows = parameterTableRows +
          `
- Name: '**${parameterName}**'
  Type: '*${parameterType}*'
  Description: ${parameterDescription}`

      }

      const type = method.signatures[0].type ? "=>" + method.signatures[0].type.name : "";

      //get example
      const tags = method.signatures[0].comment.tags;
      const example = tags && tags[0] && tags[0].text ? tags[0].text : undefined;


      mdString = mdString + `## ${name}
\`${name}(${parametersForSignature})${type}\`

${description}

${parameterTableRows !== "" ? `#### Parameters
\`\`\`table
span: 3
rows:
${parameterTableRows}
\`\`\`
` : ""}

${ example ?
          `#### Example Usage
\`\`\`code
span: 5
lang: jsx
---
${example}
\`\`\`

` : ''}
`;
    });

    mdString = `
## Overview
${linkOverView}


${mdString}
`
    return mdString;
  }

}


export default () => markdown`${getDoc()}`;

