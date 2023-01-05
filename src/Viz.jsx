import { useState, useEffect, useRef } from 'react';
import { viz } from './viz';

export const Viz = () => {
  const ref = useRef();
  const [state, setState] = useState({});
  
  useEffect(() => {
    viz(ref.current, { state, setState });
  }, [state]);
  
  return <svg ref={ref} />;
};
