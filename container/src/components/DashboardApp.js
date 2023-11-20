import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        history.push(nextPathname);
      },
    });
  }, [history]);

  return <div ref={ref} />;
};
