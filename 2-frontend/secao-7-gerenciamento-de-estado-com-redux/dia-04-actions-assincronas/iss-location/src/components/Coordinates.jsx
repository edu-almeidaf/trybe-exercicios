import React, { Component } from 'react';
import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';

class Coordinates extends Component {
  render() {
    const { latitude, longitude } = this.props;
    return (
      <div className="lat-long-section-wrapper">
        <section className="lat-long-section">
          <div className="lat-long">
            <img
              className="lat-long-img"
              width={ 24 }
              height={ 24 }
              src={ latitudeImg }
              alt="latitude"
            />
            <span>
              { `Latitude: ${latitude}` }
            </span>
          </div>

          <div className="lat-long">
            <img
              className="lat-long-img"
              width={ 24 }
              height={ 24 }
              src={ longitudeImg }
              alt="latitude"
            />
            <span>
              { `Longitude: ${longitude}` }
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default Coordinates;
