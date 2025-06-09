import React from 'react'
import { motion } from 'motion/react'
import Intro from '../components/intro/intro'

const IntroPage: React.FC = () => {
    return(
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '+100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
            className="w-full"
        >
            <Intro />
        </motion.div>
    );
};

export default IntroPage;