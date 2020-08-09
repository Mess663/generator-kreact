import React, { ReactElement } from 'react';
import {
  Link,
} from 'react-router-dom';

export default function createApp(): ReactElement {
  return (
    <div>
      我是404页面
      <Link to="/log" />
    </div>
  );
}

// typeof wx !== 'undefined' && wx.getSystemInfoSync || createApp();
