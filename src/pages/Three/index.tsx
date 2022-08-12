import React, { useEffect, useState } from 'react';
import { Subject } from 'rxjs';

const myObservable = new Subject();
const Three: React.FC = () => {
  const [num, setNum] = useState<number>(0);
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

  return <>{num}</>;
};

export default Three;
