import styled from '@emotion/styled';
import {ComponentProps, FC} from 'react';

import {precision} from '../precision';
import {color} from '../styles';

import {Cell} from './Cell';

type Props = ComponentProps<typeof Component> & {
  cost: number;
};

const Component = styled(Cell)({
  fontSize: '24px',
  color: color.final,
});

export const Final: FC<Props> = (props) => {
  const cost = precision(props.cost);

  const copy = () => {
    navigator.clipboard.writeText(cost.toString());
  };

  return <Component onClick={copy}>${cost}</Component>;
};
