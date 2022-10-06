import thumbImg from '../../assets/thumbnail.jpeg';
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function ConcertInfoBox({ navigation }) {
  const concertInfo = {
    title: 'Title',
    description: 'Description',
    info: 'Event Information',
    price: 100,
    bookingDate: 'Booking Date',
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('EventDetail', concertInfo)}>
      <View style={{ padding: 10, borderWidth: 1 }}>
        <View>
          <Image source={thumbImg} style={{ width: '100 %' }} />
        </View>
        <View style={{ borderTopWidth: 1 }}>
          <View>
            <Text>{concertInfo.title}</Text>
            <Text>{concertInfo.description}</Text>
            <Text>{concertInfo.info}</Text>
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <Text>{concertInfo.price} CASH</Text>
            <Text>{concertInfo.bookingDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity >
  )
}