// @flow
import React, {Component} from 'react';
import Slider from 'react-slick';
import {ResponsiveContainer} from '../generals/components';
import {View} from '../generals/core-ui';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let coverImages = [
  'https://www.w3schools.com/css/img_lights.jpg',
  'https://travel.gc.ca/vt/images/promo/travel-insurance-bag.jpg',
  'https://www.rentokil.com/blog/wp-content/uploads/2016/03/how-to-prevent-bed-bugs-when-travelling-v2.jpg',
  'http://cdn.thecoolist.com/wp-content/uploads/2013/01/Fujifilm-X100s-Digital-Camera-3.jpg',
];

class Jumbotron extends Component<*> {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <View>
        <Slider {...settings}>
          {coverImages.map((imageUrl, id) => (
            <View
              key={id}
              style={{
                height: '100vh',
                width: '100%',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
              }}
            />
          ))}
        </Slider>
        <ResponsiveContainer device="DESKTOP">
          <View
            style={{
              position: 'absolute',
              width: '90%',
              marginHorizontal: 50,
              borderRadius: 50,
              top: '80vh',
              height: 50,
              backgroundColor: 'white',
            }}
          />
        </ResponsiveContainer>
      </View>
    );
  }
}

export default Jumbotron;
