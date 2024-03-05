import RNConfig from 'react-native-config';

const ENVIRONMENT = RNConfig.APP_ENV;
const DEBUG = ENVIRONMENT === ' local' || ENVIRONMENT === 'staging';
const Config = {
  useInterceptor: RNConfig.USE_INTERCEPTOR,
  apiHost: RNConfig.API_HOST,
  debug: DEBUG,
  isStaging: RNConfig.IS_STAGING,
  version: RNConfig.VERSION,
};
export default Config;
