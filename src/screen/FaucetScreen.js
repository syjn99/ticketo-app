import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FullHeader from '../component/FullHeader';

export default function FaucetScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FullHeader />
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Text>logos</Text>
          <Text>You will get 500,000 CASH</Text>
        </View>

        <View>
          <TouchableOpacity style={{ borderWidth: 1 }}>
            <Text>Claim Free Tokens</Text>
          </TouchableOpacity>
          <Text>Note: once a week</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});