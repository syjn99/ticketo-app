import { BottomSheetModal, BottomSheetModalProvider, TouchableOpacity } from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FullHeader from '../component/FullHeader';
import TicketInfoBox from '../component/TicketInfoBox';
import ticketImg from '../../assets/ticket.jpeg';

export default function TicketScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [concertInfo, setConcertInfo] = useState({});
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["90%", "75%"];


  function handlePresentModal(concertInfo) {
    setConcertInfo(concertInfo);
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  return (

    <BottomSheetModalProvider>
      <View
        style={[
          styles.container,
          { backgroundColor: isOpen ? "gray" : "white" },
        ]}
      >
        <SafeAreaView>
          <FullHeader />
          <Text>My Tickets</Text>

          <View>
            <TicketInfoBox onPress={handlePresentModal} />
          </View>
        </SafeAreaView>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 50 }}
          onDismiss={() => setIsOpen(false)}
        >
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <View style={{ alignItems: 'center' }}>
                <Image source={ticketImg} style={{ width: '80%', height: 100 }} />
              </View>
              <Text>{concertInfo.title}</Text>
              <Text>{concertInfo.info}</Text>
              <Text>Payment Info</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity>
                <Text>get refund</Text>
              </TouchableOpacity>
              <Text>QR code</Text>
            </View>
          </View>

        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
});