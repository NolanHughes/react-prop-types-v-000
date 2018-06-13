import React from 'react';
import ReactDOM from 'react-dom';

import Order from './components/Order';

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes + ':' + seconds;

ReactDOM.render(
  <Order size="small" cone={false} scoops={["rocky road", "cookies and cream"]} orderInfo={{customerName: "Jessie", orderedAt: formattedTime}} />,
  document.getElementById('global')
);
