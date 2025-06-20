import React from 'react'
import CSSGeneration from '../welcome-banner/welcome-banner'
import CardExamples from '../card-examples/card-examples'
import CarouselComponent from '../carousel-component/carousel-component'

const HomeContent: React.FC = () => {
    return(
        <div>
            <div className='bg-auto bg-top bg-[url(/images/ai-generated-8662021_1920.jpg)] bg-fixed'>
               <div className='flex flex-row justify-center items-center pt-15 pb-200'>
                    <CSSGeneration />
                </div>
            </div>
            <div className='flex flex-row justify-center items-center pt-5 pb-10 px-50 mx-20'>
                    <CardExamples />
            </div>
            <div className='flex flex-row justify-center items-center text-center px-20'>
                <p className='text-lg'> 
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </div>
            
            <CarouselComponent />
        </div>
    )
}

export default HomeContent;