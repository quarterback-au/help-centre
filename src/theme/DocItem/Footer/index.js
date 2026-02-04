import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import FeedbackFooter from '@site/src/components/FeedbackFooter';

export default function FooterWrapper(props) {
  return (
    <>
      <FeedbackFooter />
      <Footer {...props} />
    </>
  );
}
