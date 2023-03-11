

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { useGlobalContext } from '../../context/globalContext';

const Statistic = () => {
 const {getExpenses} = useGlobalContext()
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, [getExpenses]);

  const asyncFetch = () => {
    fetch('http://localhost:5000/api/v1/get-expenses/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    padding:20,
    width:1700,
    
    xField: 'date',
    yField: 'amount',
    seriesField: 'category',
    slider: {
      start: 0.1,
      end: 0.9,
    },
  };

  return <Area  {...config} style={{padding:20 }} />;
};
export default Statistic

