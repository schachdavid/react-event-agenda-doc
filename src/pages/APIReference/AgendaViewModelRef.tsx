import React from 'react';
import { markdown, ReactSpecimen } from 'catalog';
import jsonFile from '../../apidocs.json';
import { bool } from 'prop-types';



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
				let parameterType: string = "any";
				if (parameters[i].type) {
					if (parameters[i].type.name) {
						parameterType = parameters[i].type.name;
					} else {
						if ( //case it is a function as a param
							parameters[i].type.types &&
							parameters[i].type.types[1] &&
							parameters[i].type.types[1].declaration &&
							parameters[i].type.types[1].declaration.signatures &&
							parameters[i].type.types[1].declaration.signatures[0].parameters
						) {
							const parameterFunctionParameters = parameters[i].type.types[1].declaration.signatures[0].parameters;
							const parameterFunctionParameterName = parameterFunctionParameters[0].name;
							const parameterFunctionParameterType = parameterFunctionParameters[0].type.name;
							const parameterFunctionReturnType = parameters[i].type.types[1].declaration.signatures[0].type.name

							parameterType = `(${parameterFunctionParameterName}:${parameterFunctionParameterType})=>${parameterFunctionReturnType}`;
						}
					}
				}
				let parameterDescription: string = '';
				if (parameters[i].comment) {
					if (parameters[i].comment.text !== undefined) {
						parameterDescription = parameters[i].comment.text;
					} else if (parameters[i].comment.shortText !== undefined) {
						parameterDescription = parameters[i].comment.shortText;
					}
				}

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
span: 4
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

