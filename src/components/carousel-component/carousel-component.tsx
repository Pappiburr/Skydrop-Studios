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
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;