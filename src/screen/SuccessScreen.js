import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Success Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Ticket')}>
        <Text>go to my tickets</Text>
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