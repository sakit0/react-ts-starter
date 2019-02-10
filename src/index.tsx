/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import React, {useState} from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  name: string;
}

const helloStyle = css`
  color: pink;
`;

const Hello: React.FC<Props> = ({name}) => (
  <h1 css={helloStyle}>Hello {name}!</h1>
);

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <Hello name="react" />
      <h3>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>Count</button>
      </h3>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
