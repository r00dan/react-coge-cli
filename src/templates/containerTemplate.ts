export const containerTemplate = (name: string): string => 
`import { createElement, useState, useEffect } from 'react';

import { ${name} } from './${name}'

export function ${name}Container() {
  return createElement(${name}, {});
}
`;