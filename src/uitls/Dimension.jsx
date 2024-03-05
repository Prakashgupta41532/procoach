import { Dimensions, Platform, PixelRatio } from 'react-native';

// https://medium.com/nerd-for-tech/react-native-styles-normalization-e8ce77a3110c

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const screenWidth = width;
const screenHeight = height;

// Guideline sizes are based on standard iPhone 11 screen mobile device
// const guidelineBaseWidth = 414;
// const guidelineBaseHeight = 896;

const widthBaseScale = width / 428;
const heightBaseScale = height / 926;

function normalize(size, based = 'width') {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// for width  pixel
const widthPixel = (size) => normalize(size, 'width');
// for height  pixel
const heightPixel = (size) => normalize(size, 'height');
// for font  pixel
const fontPixel = (size) => heightPixel(size);
// for Margin and Padding vertical pixel
const pixelSizeVertical = (size) => heightPixel(size);
// for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size) => widthPixel(size);

// based on iphone 5s's scale
const scale = height / 600;

const normalizeSize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const paddingVertical = (size) => heightPixel(size);

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  screenWidth,
  screenHeight,
  normalizeSize,
  paddingVertical,
};
