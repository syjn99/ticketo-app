import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { UserContext } from '../context/UserContext';
import AuthScreen from '../screen/AuthScreen';
import AppTab from './AppTab';

export default function AppNav() {
  const { isLoading, userAddress } = useContext(UserContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {userAddress === '' ? <AuthScreen /> : <AppTab />}
    </NavigationContainer>
  )
}