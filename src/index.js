import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML =  `.color-1 {background-color: #DAF7A6;}
					.color-1:after, .color-1:before {border-color: #DAF7A6;}

					.color-2 {background-color: #FFC300;}
					.color-2:after, .color-2:before {border-color: #FFC300;}

					.color-3 {background-color: #FF5733;}
					.color-3:after, .color-3:before {border-color: #FF5733;}

					.color-4 {background-color: #C70039;}
					.color-4:after, .color-4:before {border-color: #C70039;}

					.color-5 {background-color: #900C3F;}
					.color-5:after, .color-5:before {border-color: #900C3F;}

					.color-6 {background-color: #581845;}
					.color-6:after, .color-6:before {border-color: #581845;}`;

document.getElementsByTagName('head')[0].appendChild(style);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
