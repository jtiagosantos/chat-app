import { useTransition } from 'react-spring';

export const useAnimatedTransition = (
  isMount: boolean, ignoreFirstAnimation?: boolean
) => {
  return useTransition(isMount, {
    from: ignoreFirstAnimation ? {} : { x: 0, y: 180, opacity: 0.3 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 180, opacity: 0.3 },
  });
}