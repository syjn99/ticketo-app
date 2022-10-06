import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '../component/SimpleHeader';
import thumbImg from '../../assets/thumbnail.jpeg';


export default function EventDetailScreen({ route, navigation }) {
  const concertInfo = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Text>{concertInfo.title}</Text>
          <Image source={thumbImg} style={{ width: '100 %' }} />
          <Text>{concertInfo.price} CASH</Text>
          <Text>{concertInfo.bookingDate}</Text>
          <Text>{concertInfo.description}</Text>
          <Text>{concertInfo.info}</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Ticketing', { screen: 'Amount', params: concertInfo })}>
            <Text>Buy Ticket</Text>
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