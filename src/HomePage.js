import React, { Component } from 'react';
import './homepage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 1,
      showBookingForm: false,
    };
  }
  toggleBookingForm = () => {
    this.setState((prevState) => ({
      showBookingForm: !prevState.showBookingForm,
    }));
  }

  componentDidMount() {
    this.scrollImages();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  scrollImages = () => {
    this.timer = setTimeout(() => {
      const { currentImage } = this.state;
      const nextImage = currentImage === 3 ? 1 : currentImage + 1;
      this.setState({ currentImage: nextImage }, this.scrollImages);
    }, 3000); // Change the duration (in milliseconds) to control the scrolling speed
  };

  render() {
    const { currentImage } = this.state;
    return (
      <div className="home-page">
        <div
          className={`background-image background-image-${currentImage}`}
        >
        <div className="sea-villas">Sea Villas</div>
        </div>


      </div>
    );
  }
}

export default HomePage;
