import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '../component/SimpleHeader';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function AmountScreen({ route, navigation }) {
  const [amount, setAmount] = useState(1);

  const concertInfo = route.params;

  const onPressMinus = () => {
    if (amount === 0) {
      return;
    }
    setAmount(prev => prev - 1);
  }
  const onPressPlus = () => {
    setAmount(prev => prev + 1);
  }



  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>ticket buy</Text>
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

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text>Adult</Text>
              <Text>{concertInfo.price * amount} CASH</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1 }}>
              <View>
                <TouchableOpacity onPress={onPressMinus}>
                  <AntDesign name='minus' size={40} />
                </TouchableOpacity>
              </View>
              <View>
                <Text>{amount}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={onPressPlus}>
                  <AntDesign name='plus' size={40} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text>summary</Text>
            <Text>{amount} Adult</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => navigation.navigate('Date', { concertInfo: concertInfo, amount: amount })}>
              <Text>Next</Text>
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