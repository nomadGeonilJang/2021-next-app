import React, {
  forwardRef, useState, useRef, useEffect,
} from 'react';
import _ from 'lodash';
import styled from 'styled-components';

function Fifth(props, ref) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section ref={((fifthRef) => {
      // const observer = new MutationObserver((event) => {
      //   const target = _.cloneDeep(event);
      //   console.log(target[0]);

      //   console.log((event[0].target as any).classList.contains('active'));
      //   if (true) {
      //     setIsActive(true);
      //   } else {
      //     setIsActive(false);
      //   }
      // });

      // observer.observe(fifthRef, {
      //   attributes: true,
      //   attributeFilter: ['class'],
      //   childList: false,
      //   characterData: false,
      // });

      ref.current.push(fifthRef);
    })}
    >
      <h1>다섯 번째 !!</h1>
      <div>
        {isActive && <NumberCounter start={1000} end={4000} />}
      </div>
    </Section>
  );
}

function NumberCounter({ start, end }:{start:number, end:number}) {
  const [cnt, setCnt] = useState(start);

  useEffect(() => {
    const idx = setInterval(() => {
      setCnt((prev) => {
        const plus = prev + 1;
        if (plus >= end) {
          setCnt(end);
          clearInterval(idx);
        }

        return plus;
      });
    }, 1);
  }, []);

  return (
    <span>{cnt.toLocaleString()}원</span>
  );
}

export default forwardRef(Fifth);

const Section = styled.section`
  height:400px;
  background-color:blue;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;


  div{
    transform:translateX(-50px);
    transition:transform 2s ease-in;
  }

  &.active{
    div{
      transform:translateX(0px);
    }
  }
`;
