import React, { ReactElement } from 'react';

export default function createApp(): ReactElement {
  return <div>我是log页面</div>;
}

// typeof wx !== 'undefined' && wx.getSystemInfoSync || createApp();
