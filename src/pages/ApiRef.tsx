import React from 'react';
import { markdown, ReactSpecimen } from 'catalog';
import jsonFile from '../apidocs.json';




const getDoc = () => {
  if (jsonFile.children[0].children[0].children) {
    let mdString = ``;
    jsonFile.children[0].children[0].children.forEach((method: any) => {
      const name = method.name;
      const description = method.signatures[0].comment ? method.signatures[0].comment.shortText : "";
      const parametersData: any = method.signatures[0].parameters ? method.signatures[0].parameters : "";
      let parametersForSignature = ""
      let parameterTableRows = ""

      for (let i: number = 0; i < parametersData.length; i++) {
        parametersForSignature = parametersForSignature + parametersData[i].name + ": " + parametersData[i].type.name;
        if (i < parametersData.length - 1) {
          parametersForSignature = parametersForSignature + ",";
        }
        //fill table

        parameterTableRows = parameterTableRows + `- Name: ${parametersData[i].name}
  Type: ${parametersData[i].type.name}
  `

      }

      const type = method.signatures[0].type ? "=>" + method.signatures[0].type.name : "";

      mdString = mdString + `## ${name}
\`${name}(${parametersForSignature})${type}\`

${description}
${parameterTableRows!=="" ? `#### Parameters
\`\`\`table
span: 3
rows:
${parameterTableRows}
\`\`\`` : ""}

`;
    });
    return mdString;
  }

}


export default () =>
  markdown`# API Reference
  ${getDoc()}
`;

