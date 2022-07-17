export const componentTemplate = (name: string): string => 
`import classnames from 'classnames';

import style from './${name}.module.scss';

export interface I${name}Props {}

export function ${name}({

}: I${name}Props) {
  return (
    <div>${name}</div>
  );
}`;