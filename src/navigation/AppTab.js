import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import FaucetScreen from '../screen/FaucetScreen';
import TicketScreen from '../screen/TicketScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  console.log(route);
  let routeName = getFocusedRouteNameFromRoute(route);
  if (!routeName) {
    routeName = 'Home';
  }

  if (routeName == 'Home' || routeName == 'Main') {
    return 'flex';
  }
  return 'none';
};


export default function AppTab() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Faucet" component={FaucetScreen} />
      <Tab.Screen name="Home" component={HomeStack}
        options={({ route }) => (
          {
            unmountOnBlur: true,
            tabBarStyle: {
              display: getTabBarVisibility(route),
            }
          }
        )}
      />
      <Tab.Screen name="Ticket" component={TicketScreen} />
    </Tab.Navigator>
  )
}