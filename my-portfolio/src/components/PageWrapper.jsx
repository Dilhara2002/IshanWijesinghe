// components/PageWrapper.jsx
import React from 'react';
import { MotionDiv } from '../utils/motion';
import { pageVariants, pageTransition } from '../utils/motion';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <MotionDiv
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      {children}
    </MotionDiv>
  );
};

export default PageWrapper;