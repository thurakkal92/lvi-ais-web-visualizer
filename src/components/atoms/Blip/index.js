import React from 'react';
import { motion } from 'framer-motion';
import { normalizeSize } from '../../../utils';

const BlipAnimation = (props) => {
    const { color, size = 50, ...otherProps } = props
    return (
        <motion.div
            style={{
                width: normalizeSize(size) || 50,
                height: normalizeSize(size) || 50,
                background: color,
                borderRadius: '50%',
            }}
            animate={{
                scale: [ 1, 1.5, 1 ], // Scale animation values
                opacity: [ 0, 0.5, 0 ], // Opacity animation values
            }}
            transition={{
                duration: 1, // Duration of each cycle
                repeat: Infinity, // Repeat animation infinitely
                ease: 'easeInOut', // Easing function
            }}
            {...otherProps}
        />
    );
};

export default BlipAnimation;