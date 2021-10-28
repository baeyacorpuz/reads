import AsyncStorage from '@react-native-async-storage/async-storage';
import { helper } from './helper';

export class authController {
  static login = async data => {
    const response = await helper.unauthenticated({
      method: 'POST',
      url: 'login',
      data: data,
    });

    if (response.status) {
      await AsyncStorage.setItem(
        'userdata',
        JSON.stringify(response.data.user),
      );
      await AsyncStorage.setItem('token', response.data.token);
    }

    return response.data;
  };

  static signup = async data => {
    const response = await helper.unauthenticated({
      method: 'POST',
      url: 'login',
      data: data,
    });

    return response;
  };
}
