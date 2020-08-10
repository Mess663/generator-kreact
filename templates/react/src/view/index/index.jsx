import './index.less';
import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Index() {
  return (
    <div>Index
      <Link to="/log">go log</Link>
    </div>
  );
}
