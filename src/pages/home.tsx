import React from 'react'
import {  Layout } from 'antd'
import { motion } from 'motion/react'
import Nav from '../components/nav/nav'
import HomeContent from '../components/home-content/home-content'
import FooterContent from '../components/footer-content/footer-content'

const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'left',
    textDecoration: 'underline',
    color: '#fff',
    height: 120,
    paddingInline: 0,
    backgroundColor: '#384640',
    opacity: 0.75,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
    fontFamily: 'var(--font-family)',
    fontSize: '20px',
    lineHeight: '120px',
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    fontFamily: 'var(--font-family)',
    color: 'var(--color-main-text)',
    lineHeight: '120px',
    color: '#fff',
  minHeight: 'calc(100vh - 240px)', // Subtract header and footer height
  padding: '24px',
  backgroundColor: 'var(--color-main-bg)',
  };
  
//   const siderStyle: React.CSSProperties = {
//     textAlign: 'center',
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#1677ff',
//   };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  };

const HomePage: React.FC = () =>{
    return(
        <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
                type: 'spring', 
                stiffness: 100, 
                damping: 15,
                duration: 0.8
            }}
            className="w-full"
        >
            
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>
                    <Nav />
                </Header>
                <Content style={contentStyle}>
                    <HomeContent />
                </Content>
                <Footer style={footerStyle}>
                    <FooterContent />
                </Footer>
            </Layout>
        </motion.div>
    )
}

export default HomePage;