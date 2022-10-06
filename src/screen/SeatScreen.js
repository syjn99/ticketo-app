import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '../component/SimpleHeader';

export default function SeatScreen({ route, navigation }) {
  const { concertInfo, amount, date } = route.params;
  const [seatNumber, setSeatNumber] = useState(10);
  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>{concertInfo.title}</Text>
        </View>

        <View>
          <Text>event summary?</Text>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <View>
            <Text>subtitle</Text>
            <Text>{concertInfo.description}</Text>
          </View>

          <View style={{ width: '100%', borderWidth: 1 }}>
            <Text>seat image</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>summary</Text>
            <Text>{amount} Adult</Text>
            <Text>{date}</Text>
            <Text>seat number: {seatNumber}</Text>
            <Text>total: {concertInfo.price * amount} CASH</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => navigation.navigate('Payment', {
              screen: 'Check', params: {
                concertInfo: concertInfo,
                amount: amount,
                date: date,
                seatNumber: seatNumber
              }
            })}>
              <Text>Confirm and Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});