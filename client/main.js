// Any JS in here is automatically ran for us by meteor.
// Import React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create a Component:
// Single funciton or object that produces some HTML to screen
class App extends Component {
  constructor(props) {
    super(props);
    // State is a property that every class-based component has acces to.
    // State is a JS object that we can make changes to.
    // When State changes the component will re-render

    this.state = { images: [] };
  }

  // Method runs just before component is rendered to the screen.
  componentWillMount() {
    // Place to load data
    // ALWAYS update state with this.setState
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data }));
    // NEVER update as this.state
  }

  render() {
    // console.log(this.state.images);
    return (
      <div>
        {/* state being passed to ImageList as pictures prop */}
        <ImageList pictures={this.state.images} />
      </div>
    );
  }
};

// Render component to screen
// Have Meteor wait until server is ready
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
