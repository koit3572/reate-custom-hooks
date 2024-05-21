import React, { useEffect, useState } from 'react'
import useThrottle from '../hooks/useThrottle'

const UseThrottleTest = () => {
  /**
   * discription : windowScrollY의 값이 500을 넘어가게 되면 UseThrottleTest를 콘텐츠로 가진 div가 사라지는(display:hidden) 코드
   **/
  const [isDiv, setIsDiv] = useState<boolean>(true);
  const listener = () => {
    if (window.scrollY > 500) {
      setIsDiv(false);
    } else {
      setIsDiv(true);
    }
  };
  const DebounceListener = useThrottle(listener, 300);
  useEffect(() => {
    window.addEventListener("scroll", DebounceListener);
    return () => window.removeEventListener("scroll", DebounceListener);
  }, []);
  return (
    <div className="w-full h-[3000px]">
      <div className={`fixed ${isDiv ? "block" : "hidden"}`}>
        UseThrottleTest
      </div>
    </div>
  );
}

export default UseThrottleTest