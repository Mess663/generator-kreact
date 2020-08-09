import React, { ReactElement, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add, asyncDec } from '../../store/actions/count';

export default function Index(): ReactElement {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(asyncDec());
      console.log(1111);
    })();
  }, [dispatch]);

  return (
    <div>
      我是Index页面
      <button type="button" onClick={() => dispatch(add())}>++</button>
      {counter}
      <Link to="/log">go log</Link>
    </div>
  );
}

// typeof wx !== 'undefined' && wx.getSystemInfoSync || createApp();
