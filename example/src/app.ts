import type { FC, ReactElement } from 'react';
import './app.less';

const App: FC<{ children: ReactElement }> = ({ children }) => {
  return children;
};

export default App;
