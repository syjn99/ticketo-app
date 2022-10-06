import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckScreen from '../screen/CheckScreen';
import FailScreen from '../screen/FailScreen';
import SuccessScreen from '../screen/SuccessScreen';


const Stack = createNativeStackNavigator();


export default function PaymentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Check" component={CheckScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name="Fail" component={FailScreen} />
    </Stack.Navigator>
  )
}