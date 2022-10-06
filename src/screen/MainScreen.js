import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
        <Text>navigate to Event Detail</Text>
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