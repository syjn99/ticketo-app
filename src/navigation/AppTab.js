import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FaucetScreen from '../screen/FaucetScreen';
import TicketScreen from '../screen/TicketScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();


export default function AppTab() {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen name="Faucet" component={FaucetScreen} />
      <Tab.Screen name="Home" component={HomeStack} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
    </Tab.Navigator>
  )
}