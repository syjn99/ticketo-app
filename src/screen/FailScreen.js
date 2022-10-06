import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Fail Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text>To First</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>back</Text>
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