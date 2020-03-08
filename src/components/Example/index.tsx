import React, { FC } from 'react';

export enum Colors {
  black = 'black',
  red = 'red',
  yellow = 'yellow'
}

interface ExampleProps {
  color?: Colors,
  onClick: Function,
  text: string,
}

const Example: FC<ExampleProps> = ({ color = Colors.black, onClick, text }) => {
  return (
    <div onClick={() => onClick()} style={{ color }}>
      <h1>Example</h1>
      <h2>This is the Example components, it renders a text</h2>
      <p><strong>Text:&nbsp;</strong>{text}</p>
    </div>
  )
}

export default Example