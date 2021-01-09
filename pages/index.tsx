import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import Fifth from 'components/home/fifth';
import First from 'components/home/first';
import Forth from 'components/home/forth';
import Second from 'components/home/second';
import Third from 'components/home/third';

export default function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.7,
    });
    sectionRefs.current.forEach((ref) => observer.observe(ref));
  }, []);

  return (
    <Container>
      <First ref={sectionRefs} />
      <Second ref={sectionRefs} />
      <Third ref={sectionRefs} />
      <Forth ref={sectionRefs} />
      <Fifth ref={sectionRefs} />
    </Container>
  );
}

const Container = styled.article``;
