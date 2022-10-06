import thumbImg from '../../assets/thumbnail.jpeg';
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TicketInfoBox({ onPress }) {
  const concertInfo = {
    title: 'Title',
    description: 'Description',
    info: 'Event Information',
    price: 100,
    bookingDate: 'Booking Date',
  }

  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderWidth: 1 }} onPress={() => onPress(concertInfo)}>
      <View>
        <Image source={thumbImg} style={{ width: 150, height: 150 }} />
      </View>
      <View>
        <Text>{concertInfo.title}</Text>
        <Text>{concertInfo.description}</Text>
        <Text>{concertInfo.price} CASH</Text>
      </View>
      <MaterialIcons name='arrow-forward-ios' size={40} />
    </TouchableOpacity >
  )
}