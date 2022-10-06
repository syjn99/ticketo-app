import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CheckScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Check Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>back</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Success')}>
        <Text>pay success</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Fail')}>
        <Text>pay fail</Text>
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