import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const btnDimensions = 44;
const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    right: 10,
    top: height / 2,
    zIndex: 99,
  },
  containerStyle: {
    width: btnDimensions,
    height: btnDimensions,
    borderRadius: btnDimensions / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  versionTextStyle: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default styles;
