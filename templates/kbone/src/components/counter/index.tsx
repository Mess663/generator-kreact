import * as React from 'react';

import './index.less';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps): React.ReactElement => {
  const [state, setState] = React.useState(0);
  const { compiler, framework } = props;

  return (
    <button type="button" onClick={() => setState((e) => e + 1)}>
      Hello {state} from {compiler} and {framework}!
      <div>
        hahah
      </div>
    </button>
  );
};
