import React from 'react'
import { Card } from 'antd'

const { Meta} = Card;

const CardExamples: React.FC = () => {
    return(
        <div className='flex flex-row gap-8 justify-center items-center pt-30 pb-15'>
            <Card
                hoverable
                style={{ width: 426}}
                cover={<img alt="img" src="public/images/startup-3267505_640.jpg" />}
                > 
                <Meta title="Concept" description="We'll set up a meeting to determine the scope of the project." />
            </Card>
            <Card
                hoverable
                style={{ width: 426}}
                cover={<img alt="img" src="public/images/code-820275_640.jpg" />}
                > 
                <Meta title="Creation" description="Our team of experts will create a model of the project to present to you." />
            </Card>
            <Card
                hoverable
                style={{ width: 426 }}
                cover={<img alt="img" src="public/images/man-791049_640.jpg" />}
                > 
                <Meta title="Testing" description="We will test and refine the model according to your feedback until your dream is a reality." />
            </Card>
            <Card
                hoverable
                style={{ width: 426}}
                cover={<img alt="img" src="public/images/stock-trading-6525081_640.jpg" />}
                > 
                <Meta title="Launch" description="Once you are completely satisfied, we will launch on your behalf." />
            </Card>
            <Card
                hoverable
                style={{ width: 426}}
                cover={<img alt="img" src="public/images/seychelles-4916045_640.jpg" />}
                > 
                <Meta title="Enjoy" description="We offering ongoing support for as long as you need us. Sit back and enjoy" />
            </Card>
           
        </div>
    )
}

export default CardExamples;