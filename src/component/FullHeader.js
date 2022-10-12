import { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { UserContext } from '../context/UserContext';
import logo from '../../assets/logo.png';


export default function FullHeader() {
  const { userAddress, userBalance } = useContext(UserContext);
  console.log(userAddress);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={logo} style={{ width: 40, height: 40 }} />
        <Text>Ticketo</Text>
      </View>
      <View>
        <Text>{`${userBalance} CASH`}</Text>
      </View>

      <View>
        <Text>{`${userAddress.substr(0, 6)}...`}</Text>
      </View>
    </View>
  )
}