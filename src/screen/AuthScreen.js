import { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from '../../assets/logo.png';
import { UserContext } from '../context/UserContext';

export default function AuthScreen() {
  const { connect } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Ticketo</Text>
      <TouchableOpacity
        style={styles.klipButton}
        onPress={connect}
      >
        <Text style={styles.text}>Klip으로 로그인</Text>
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
  logo: {
    width: 50,
    height: 50
  },
  klipButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white'
  }
});