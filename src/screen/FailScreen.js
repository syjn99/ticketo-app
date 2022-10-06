import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '../component/SimpleHeader';

export default function FailScreen({ route, navigation }) {
  const { concertInfo, amount, date, seatNumber } = route.params;
  return (
    <SafeAreaView style={styles.container}>

      <SimpleHeader navigation={navigation} />
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

          <View>
            <Text>Error Msg</Text>
          </View>

        </View>

        <View>

          <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => navigation.goBack()}>
            <Text>Go to back</Text>
          </TouchableOpacity>

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