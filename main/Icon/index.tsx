import {FC} from 'react';
import {ViewStyle} from 'react-native';
import collectingFontIconSelection from './selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import styled from '@emotion/native';

export type IconName =
  | 'cog-light'
  | 'picture-light'
  | 'moment-solid'
  | 'moment-light'
  | 'cross-light'
  | 'tile-light'
  | 'list-light'
  | 'setting-light'
  | 'tick-light'
  | 'chevron-right'
  | 'chevron-down-light'
  | 'chevron-up-light'
  | 'chevron-left-light'
  | 'share-solid'
  | 'add-solid'
  | 'like-solid'
  | 'discover-solid'
  | 'account-solid'
  | 'collection-solid'
  | 'search-solid'
  | 'bell-solid'
  | 'home-solid'
  | 'camera-solid'
  | 'share-light'
  | 'add-light'
  | 'like-light'
  | 'discover-light'
  | 'account-light'
  | 'collection-light'
  | 'search-light'
  | 'bell-light'
  | 'home-light'
  | 'camera-light';

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const Ico: FC<Props> = createIconSetFromIcoMoon(
  collectingFontIconSelection,
  'IcoMoon',
  'doobooui.ttf',
);

export const Icon = styled(Ico)`
  color: ${({theme, color}) => color || theme.text};
`;
