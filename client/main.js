// Any JS in here is automatically ran for us by meteor.
// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Create a Component:
// Single funciton or object taht produces some HTML to screen
const App = () => {
  return (
    <div>
      React App #2
    </div>
  );
};

// Render component to screen
// Have Meteor wait until server is ready
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
