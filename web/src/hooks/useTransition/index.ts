import * as ReactSpring from 'react-spring';

//types
import { AnimationStyles } from './types';

export const useTransition = (
  isMounting: boolean, 
  animationStyles: AnimationStyles,
  ignoreFirstAnimation?: boolean,
) => {
  const { from, enter, leave } = animationStyles;

  return ReactSpring.useTransition(isMounting, {
    from: ignoreFirstAnimation ? {} : from,
    enter,
    leave,
  });
}