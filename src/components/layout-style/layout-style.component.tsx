import React from 'react'
import { Layout as AntLayout } from 'antd'
import { motion } from 'motion/react'
import Nav from '../nav/nav'
import FooterContent from '../footer-content/footer-content'

const { Header, Content, Footer } = AntLayout;

// Default styles
const defaultHeaderStyle: React.CSSProperties = {
  textAlign: 'left',
  color: 'var(--color-main-text)',
  height: 120,
  paddingInline: 0,
  backgroundColor: 'var(--color-main-bg)',
  opacity: 0.75,
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, .8)',
  fontFamily: 'var(--font-family)',
  fontSize: '20px',
  lineHeight: '120px',
};

const defaultContentStyle: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-main-text)',
  lineHeight: '120px',
  minHeight: 'calc(100vh - 240px)', // Subtract header and footer height
  padding: '24px',
  backgroundColor: 'var(--color-main-bg)',
};

const defaultFooterStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'var(--color-main-accent)',
};

const defaultLayoutStyle: React.CSSProperties = {
  overflow: 'hidden',
  width: '100%',
  height: '100%',
};

// Motion animation presets
const defaultMotionProps = {
  initial: { y: '-100%' },
  animate: { y: 0 },
  exit: { y: '100%' },
  transition: { 
    type: 'spring' as const, 
    stiffness: 100, 
    damping: 15,
    duration: 0.8
  }
};

interface LayoutProps {
  children: React.ReactNode;
  headerStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  layoutStyle?: React.CSSProperties;
  showHeader?: boolean;
  showFooter?: boolean;
  showNavigation?: boolean;
  motionProps?: typeof defaultMotionProps;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  headerStyle,
  contentStyle,
  footerStyle,
  layoutStyle,
  showHeader = true,
  showFooter = true,
  showNavigation = true,
  motionProps,
  className = "w-full"
}) => {
  // Merge default styles with custom styles
  const finalHeaderStyle = { ...defaultHeaderStyle, ...headerStyle };
  const finalContentStyle = { ...defaultContentStyle, ...contentStyle };
  const finalFooterStyle = { ...defaultFooterStyle, ...footerStyle };
  const finalLayoutStyle = { ...defaultLayoutStyle, ...layoutStyle };
  const finalMotionProps = { ...defaultMotionProps, ...motionProps };

  return (
    <motion.div
      {...finalMotionProps}
      className={className}
    >
      <AntLayout style={finalLayoutStyle}>
        {showHeader && (
          <Header style={finalHeaderStyle}>
            {showNavigation && <Nav />}
          </Header>
        )}
        
        <Content style={finalContentStyle}>
          {children}
        </Content>
        
        {showFooter && (
          <Footer style={finalFooterStyle}>
            <FooterContent />
          </Footer>
        )}
      </AntLayout>
    </motion.div>
  );
};

export default Layout;
