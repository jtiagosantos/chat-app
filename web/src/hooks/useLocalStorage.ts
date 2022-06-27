import { useState, useCallback } from 'react';

type HookReturn<T> = [
  T, 
  (value: Record<string, unknown> | string | number) => void
];

export const useLocalStorage = <T = string>(
  key: string, 
  initialValue: Record<string, unknown> | string | number = ''
): HookReturn<T> => {
  const [storage, setStorage] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const handleStorage = useCallback((
    value: Record<string, unknown> | string | number
  ) => {
    try {
      setStorage(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  return [storage, handleStorage]
}