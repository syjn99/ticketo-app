import { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { UserContext } from '../context/UserContext';
import logo from '../../assets/logo.png';


export default function SimpleHeader({ navigation }) {
  const { userBalance } = useContext(UserContext);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image source={logo} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{`${userBalance} CASH`}</Text>
      </View>
    </View>
  )
}