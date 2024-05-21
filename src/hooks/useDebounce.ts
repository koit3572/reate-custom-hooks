import { useEffect, useState } from "react";

interface IDebounceProps<T> {
  value: T;
  delay: number;
}
const useDebounce = <T>({ value, delay }: IDebounceProps<T>): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [delay, value]);
  return debouncedValue;
};
export default useDebounce;
