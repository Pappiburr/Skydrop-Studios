import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '500px',
  color: '#fff',
  lineHeight: '450px',
  textAlign: 'center',
  background: '#364d79',
  fontSize: '40px'
};

const CarouselComponent: React.FC = () => {

  

  return (
    <div className=' m-10'>
      <Carousel arrows infinite={false}>
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