import { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FullHeader from '../component/FullHeader';
import { UserContext } from '../context/UserContext';
import { MaterialIcons } from '@expo/vector-icons';
import ConcertInfoBox from '../component/ConcertInfoBox';

export default function MainScreen({ route, navigation }) {
  const { userAddress, userBalance } = useContext(UserContext);

  // console.log(route);


  return (
    <SafeAreaView style={styles.container}>
      <FullHeader />

      <ScrollView>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>subtitle</Text>
          <View style={styles.searchInput}>
            <TextInput placeholder='Search' />
            <MaterialIcons name="search" size={20} color='#C6C6C6' style={{ marginRight: 5 }} />
          </View>
        </View>

        <ConcertInfoBox navigation={navigation} />

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  searchInput: {
    flexDirection: 'row',
    borderColor: 'C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8
  }
});