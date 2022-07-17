export const containerTemplate = (name: string): string => 
`import { createElement, useState, useEffect } from 'react';

import { ${name} } from './${name}'

interface I${name}ContainerProps {}

export function ${name}Container({

}: I${name}ContainerProps) {
  return createElement(${name});
}
`;