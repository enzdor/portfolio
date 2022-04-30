import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<h1 className="e">Try clicking objects. Click them to go back</h1>
	</React.StrictMode>
);

