import { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '../component/SimpleHeader';
import { UserContext } from '../context/UserContext';

export default function CheckScreen({ route, navigation }) {
  const { userBalance } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const { concertInfo, amount, date, seatNumber } = route.params;

  const onPressSuccessButton = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Success', route.params);
  }

  const onPressFailButton = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Fail', route.params);
  }

  return (
    <SafeAreaView style={styles.container}>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please Wait...</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onPressSuccessButton}>
              <Text style={styles.textStyle}>Go to Success</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onPressFailButton}>
              <Text style={styles.textStyle}>Go to Fail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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

          <View>
            <Text>My Balance: {userBalance} CASH</Text>
          </View>
          <View>
            <Text>Ticket Price: {concertInfo.price * amount} CASH</Text>
          </View>
          <View>
            <Text>Gas Fee: 10</Text>
          </View>

        </View>

        <View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1 }} onPress={() => setModalVisible(true)}>
              <Text>Pay</Text>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});