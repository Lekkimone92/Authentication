import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity } from 'react-native';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount(){

  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>- LOGIN -</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Username'}
            onChangeText={(username) => this.setState({username})}
            underlineColorAndroid='transparent' />

            <TextInput
              style={styles.textInput}
              placeholder={'Password'}
              onChangeText={(password) => this.setState({password})}
              underlineColorAndroid='transparent' />

            <TouchableOpacity
              style={styles.btn}
              onPress={this.login}>
              <Text>Log In </Text>
            </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }

  login = () => {
    alert('login');
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#2896d3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#01c853',
    padding: 20,
    alignSelf: 'stretch',
  }
});
