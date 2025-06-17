import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 'auto',
  height: '500px',
  width: '900px',
  color: '#fff',
  lineHeight: '450px',
  textAlign: 'center',
  background: 'rgba(0,0,0,0.3)',
  fontSize: '40px'
};

const CarouselComponent: React.FC = () => {

  

  return (
    <div className=' m-10 justify-center align-center'>
      <Carousel autoplay={{ dotDuration: true}} autoplaySpeed={5000}>
      <div>
        <h3 style={contentStyle}>
          <img src="/images/wildlife-9653797_1280.jpg" alt="Cowwwwwws" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="/images/boat-7618814_1280.jpg" alt="Boat" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="/images/mountain-8531778_1280.jpg" alt="Mountain" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img src="/images/italy-8266783_1280.jpg" alt="Mountain" />
        </h3>
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;