import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventDetailScreen from '../screen/EventDetailScreen';
import MainScreen from '../screen/MainScreen';
import PaymentStack from './PaymentStack';
import TicketingStack from './TicketingStack';


const Stack = createNativeStackNavigator();


export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
      <Stack.Screen name="Ticketing" component={TicketingStack} />
      <Stack.Screen name="Payment" component={PaymentStack} />
    </Stack.Navigator>
  )
}