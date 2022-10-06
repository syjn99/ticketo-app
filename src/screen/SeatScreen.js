import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SeatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Seat Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <Text>confirm and pay</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});