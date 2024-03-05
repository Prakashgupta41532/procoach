import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './StylesButtonInterceptor';
import Config from '../Config';
import RouteUserName from '../../routes/RouteUser/RouteUsernames';

function ButtonInterceptor({ show }) {
  const color = Config.isStaging !== 'false' ? '#FF1744' : '#F4511E';
  const buttonText = Config.isStaging !== 'false' ? 'S' : 'P';
  const containerStyle = { backgroundColor: color };
  const navigation = useNavigation();

  if (!show) {
    return null;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate(RouteUserName.ScreenNetworkLogger);
      }}
      style={styles.buttonStyle}
    >
      <View style={{ ...containerStyle, ...styles.containerStyle }}>
        <Text style={styles.versionTextStyle}>
          {`${Config.version}` || '-'}
        </Text>
        <Text style={styles.textInputStyle}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default ButtonInterceptor;
