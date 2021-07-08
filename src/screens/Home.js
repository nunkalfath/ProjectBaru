import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.TextLogin}>Mau ke Login (navigate)</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Text>Home Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Home... again"
        onPress={() =>
          navigation.push('Home', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Text style={styles.TextLogin}>Mau ke Home lagi (push)</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.push('Home')}
      />
      <Text style={styles.TextLogin}>Mau kembali aja lah (go back)</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text style={styles.TextLogin}>Mau balik ke awal aja lah (popToTop)</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Text style={styles.TextLogin}>Mau ke Akun (push)</Text>
      <Button
        title="Go to Account"
        onPress={() => navigation.push('Account', {userId: 'Jane'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextLogin: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
export default HomeScreen;
