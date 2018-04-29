import React, { Component } from 'react';
import AppNavBar from './components/appNavBar/AppNavBar.js';
import CarouselSlider from './components/carouselSlider/CarouselSlider.js';
import SocialMediaBar from './components/socialMediaBar/SocialMediaBar.js';
import CallToActionBar from './components/callToActionBar/CallToActionBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <CarouselSlider />
        <CallToActionBar />
        <SocialMediaBar />
      </div>
    );
  }
}

export default App;
