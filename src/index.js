console.log('Set up is continuing...');

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Webpack Babels call';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('root')
);

module.hot.accept();