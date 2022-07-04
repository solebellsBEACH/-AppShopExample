import {Platform, PixelRatio, Dimensions} from 'react-native';

export const getHeightSize = (pixels: number): number =>
  getPixelSize(pixels, 'height');
export const getWidthSize = (pixels: number): number =>
  getPixelSize(pixels, 'width');

export function getPixelSize(pixels: number, base?: 'width' | 'height') {
  return normalize(pixels, base);
}

export var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iPhone 8's scale
const wscale = SCREEN_WIDTH / 375;
const hscale = SCREEN_HEIGHT / 667;

export default function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
