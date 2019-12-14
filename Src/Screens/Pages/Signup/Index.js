import React, {Component} from 'react';
import {ActivityIndiccator, StyleSheet, Image, Dimensions} from 'react-native';
import {View, Text, Button, Container, Content, Card} from 'native-base';

import logo from '../../../../Images/TAR.png';
import {TextInput} from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window');
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  render() {
    return (
      <View style={styles.bContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>reg </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>

        <Button
          rounded
          dark
          onPress={() => this.props.navigation.navigate('Form')}>
          <Text>Submit</Text>
        </Button>
        <View style={styles.logoContainer}>
          <Text style={styles.futer}>Have an account ? </Text>
          <Text
            style={styles.futer1} onPress={() => this.props.navigation.navigate('Home')}>
 
            Login
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90caf9',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoText: {
    color: 'black',
    fontSize: 38,
    fontWeight: '300',
    marginTop: 6,
    opacity: 4,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 20,
    fontSize: 16,
    paddingLeft: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    marginBottom: 30,
  },
});

export default Signup;
