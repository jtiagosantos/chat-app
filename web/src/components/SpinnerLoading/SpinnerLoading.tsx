import { FC } from 'react';
import { SpinnerLoadingProps } from './types';

import { Loading } from './styles';

export const SpinnerLoading: FC<SpinnerLoadingProps> = (props) => {
  return (
    <Loading {...props} />
  );
}