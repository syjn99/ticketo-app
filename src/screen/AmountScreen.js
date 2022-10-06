import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AmountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Amount Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Date')}>
        <Text>navigate to Date</Text>
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