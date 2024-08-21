// In a component within Host App
import React, { useState, Suspense, lazy } from 'react';

import {useStore} from 'second/ZustandStore';
// const useStore = lazy(() => import('second/ZustandStore'));

const CounterComponent = () => {
  const { count, filterData } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>{filterData("id", 1)}}>Filter</button>
    </div>
  );
};

export default CounterComponent;
