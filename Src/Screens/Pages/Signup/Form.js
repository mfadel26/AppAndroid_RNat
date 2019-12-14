import React, {Component} from 'react';
import {ActivityIndiccator, StyleSheet, Image, Dimensions} from 'react-native';
import {View, Text, Button, Container, Content, Card} from 'native-base';
import logo from '../../../../Images/TAR.png';
import {TextInput} from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window');
class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  render() {
    return (
      <View style={styles.FormContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoTextform}>Add Your Profile </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Your Name'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Date Of Birth'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Phone Number'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Location'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Skill'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Description'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Profession'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Showcase'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Photo'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>

        <Button
          rounded
          primary
          onPress={() => this.props.navigation.navigate('Card')}>
          <Text>Submit</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fbe7',
  },
  logoTextform: {
    color: 'black',
    fontSize: 38,
    fontWeight: '300',
    marginTop: 20,
    opacity: 4,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 4,
    fontSize: 16,
    paddingLeft: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    marginBottom: 20,
  },
});

export default Form1;
