import React from 'react'

import Nav from '../components/nav/nav'
import Content from '../components/content/content'
import Footer from '../components/footer/footer'


const HomePage: React.FC = () =>{
    return(
        <div>
            <Nav />
            <Content />
            <Footer />
        </div>
    )
}

export default HomePage;