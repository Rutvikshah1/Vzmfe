import { mount } from 'joblist/JoblistApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {},
    });
  }, []);

  return <div ref={ref} />;
};
