import {Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const fontScale = Dimensions.get('screen').fontScale;
const scale = Dimensions.get('screen').scale;
// system font scale info
console.log('fontScale: ', fontScale, 'scale: ', scale);
console.log('width: ', width.toFixed(0), 'height: ', height.toFixed(0));

type props = {
  primary: string;
  secondary: string;
  tertiary: string;
  quarternary: string;
};

export const Colors: props = {
  primary: '#FFFFFF',
  secondary: '#67C4A7',
  tertiary: '#939393',
  quarternary: '#000000',
};

export const sizeScreen = {
  width,
  height,
};

export const dynamicSize = (number: number) => {
  const size = (width < height ? width : height) * (1 / 360);
  let px = Math.floor(size * number);
  px < 1 ? (px = 1) : px;
  return px;
};

export const chave = '587b7c49-8k12-j0546d01f574';
