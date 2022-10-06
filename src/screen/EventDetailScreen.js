import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function EventDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Event Detail Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Ticketing')}>
        <Text>navigate to Ticketing</Text>
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