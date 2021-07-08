import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.TextLogin}>Welcome to My App</Text>

      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Button
        title="Go to Home"
        onPress={() => {
          /* 1. Navigate to the Home route with params */
          navigation.navigate('Home', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Go to Account"
        onPress={() => {
          navigation.navigate('Account');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
export default Login;
