import { StyleSheet, Text, View } from 'react-native';

export default function TicketScreen() {
  return (
    <View style={styles.container}>
      <Text>Ticket Screen</Text>
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