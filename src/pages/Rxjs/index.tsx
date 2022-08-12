import React, { useEffect, useState } from 'react';
import { Subject } from 'rxjs';

const myObservable = new Subject();
const Three: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    myObservable.subscribe((value) => {
      const a = value as number;
      setNum(a);
      if (a < 1000) {
        const nextNum = a + Math.floor(Math.random() * 100);
        setTimeout(() => {
          myObservable.next(nextNum);
        }, 20);
      } else {
        setNum(1000);
      }
    });
    myObservable.next(1);
  }, []);

  return <>{num}</>;
};

export default Three;
