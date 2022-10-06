import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AmountScreen from '../screen/AmountScreen';
import DateScreen from '../screen/DateScreen';
import SeatScreen from '../screen/SeatScreen';


const Stack = createNativeStackNavigator();


export default function TicketingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Amount" component={AmountScreen} />
      <Stack.Screen name="Date" component={DateScreen} />
      <Stack.Screen name="Seat" component={SeatScreen} />
    </Stack.Navigator>
  )
}