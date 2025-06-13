import React, { useEffect } from 'react'
import { Card } from 'antd'

const gridStyle : React.CSSProperties = {
    width: '100%',
    textAlign: 'start',

}
const FooterContent: React.FC = () => {
    useEffect(() => {
        // Load LinkedIn badge script
        const script = document.createElement('script')
        script.src = 'https://platform.linkedin.com/badges/js/profile.js'
        script.async = true
        script.defer = true
        document.body.appendChild(script)

        // Cleanup
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return(
        <div className='flex justify-around items-center mt-8 pt-10'>
            <div className='flex flex-row justify-evenly items-center'>
                <div 
                    className="badge-base LI-profile-badge " 
                    data-locale="en_US" 
                    data-size="large" 
                    data-theme="light" 
                    data-type="HORIZONTAL" 
                    data-vanity="alex-perez-17166a194" 
                    data-version="v1"
                >
                    <a 
                        className="badge-base__link LI-simple-link" 
                        href="https://www.linkedin.com/in/alex-perez-17166a194?trk=profile-badge"
                    >
                        <span>
                            <h1 className='text-2xl font-bold text-center' style={{color: 'var(--primary-color)'}}>
                                Linkedin
                            </h1>
                        </span>
                    </a>
                </div>
            </div>
            <Card title="Some really cool stuff i'm proud of">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                Content
                </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        </div>
    )
}

export default FooterContent;