import React, { useEffect, useState, useRef } from 'react';
import { Subject } from 'rxjs';

const myObservable = new Subject();
const Three: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  const domA = useRef<HTMLDivElement>(null);
  useEffect(() => {
    myObservable.subscribe((val) => {
      const a = val as number;
      if (a < 1000) {
        const nextNum = a + Math.floor(Math.random() * 100);
        setTimeout(() => {
          myObservable.next(nextNum);
        }, 20);
      }
      setNum(a < 1000 ? a : 1000);
    });
    myObservable.next(1);
  }, []);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        if (domA.current) {
          if (
            window.pageYOffset + window.innerHeight >= domA.current.offsetTop ||
            0 + 50
          ) {
            console.log('domA出现了');
          }
        }
      },
      true
    );

    return () => {
      window.removeEventListener('scroll', () => {}, false);
    };
  }, []);

  const gotoDomA = () => {
    document.getElementById('domA')?.scrollIntoView();
  };

  return (
    <>
      {num}
      <div onClick={gotoDomA}>click</div>
      <div style={{ height: '1300px' }}></div>
      <div id="domA" ref={domA}>
        111111
      </div>
    </>
  );
};

export default Three;
