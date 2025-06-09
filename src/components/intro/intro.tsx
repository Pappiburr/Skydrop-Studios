import React from 'react'
import { Button, ConfigProvider, Space } from 'antd';
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom';

const Intro: React.FC = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/home');
    };

    return(
        <header className="w-full h-screen flex justify-center items-center text-center bg-main-bg">
            <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto px-4">
                <h1 className='text-7xl font-roboto-slab text-main-text mb-4'> 
                    Welcome to Skydrop Studios
                </h1>
             
                
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#384640',
                            colorBgContainer: '#eff4f0',
                            colorText: '#384640',
                            borderRadius: 8,
                            fontSize: 16,
                        },
                        components: {
                            Button: {
                                colorPrimary: '#384640',
                                algorithm: true,
                            }
                        }
                    }}
                >
                    <Space size="large" className="flex-col sm:flex-row">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button 
                                type="primary" 
                                size="large" 
                                className="px-8 py-2 h-12 font-medium"
                                onClick={handleGetStarted}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                        
                    </Space>
                    
                    
                </ConfigProvider>
            </div>
        </header>
    );
};

export default Intro;