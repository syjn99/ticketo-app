import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Date Screen</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>back</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Seat')}>
        <Text>navigate to Seat</Text>
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