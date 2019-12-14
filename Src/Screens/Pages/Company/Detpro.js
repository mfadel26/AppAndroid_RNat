import React, {Component} from 'react';
import {
  ActivityIndiccator,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  View,
  Text,
  Item,
  Input,
  Button,
  Container,
  Content,
  Card,
  Form,
  Label,
  FooterTab,
  Footer,
  Icon,
} from 'native-base';
import {connect} from 'react-redux';

// Imports: Redux Actions
import {login} from '../../../../redux/actions/authActions';
import {
  increaseCounter,
  decreaseCounter,
} from '../../../../redux/actions/counterActions';
import {getEngineer} from '../../../../redux/actions/engineerActions';
import {jwt} from '../../../../redux/actions/tokenAction';
import {role} from '../../../../redux/actions/categoryAction';
import Axios from 'axios';
import {} from 'react-native-gesture-handler';
let isLogin = 0;
const {width: WIDTH} = Dimensions.get('window');
class Detpro extends React.Component {
  constructor() {
    super()
    this.state = {
        Detaill: ''

    }
}

componentDidMount() {
    this.getMyData();
}

async getMyData() {
    try {
        Axios.defaults.headers.common['Authorization'] = this.props.token;
        const profile = await Axios.get(`http://54.161.87.89:7000/engineer/by/${this.props.id}`)
        console.log(profile.data[0]);

        await this.setState({
            Detaill: profile.data[0]

        });
    } catch (error) {
        console.log(error);
    }
}

  render() {
    console.log(this.props.id);
    return (
      <Container>
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titlebar} />
            <View style={{alignSelf: 'center'}}>
             
            </View>
            <View style={styles.infocontainer}>
              <Text style={[styles.text, {fontWeight: '200', fontSize: 36}]}>
                {this.state.Detaill.name}
              </Text>
              <Text style={[styles.text, {color: '#AEB5BC', fontSize: 16}]}>
                {this.state.Detaill.skill}
              </Text>
              <Text style={[styles.text, {color: '#AEB5BC', fontSize: 16}]}>
                javascript
              </Text>
              <Text style={[styles.text, {color: '#AEB5BC', fontSize: 16}]}>
                Padang
              </Text>
              <Text style={[styles.text, {color: '#AEB5BC', fontSize: 16}]}>
                26-03-1995
              </Text>
              <Text style={[styles.text, {color: '#AEB5BC', fontSize: 16}]}>
                muhammadfadelp@gmail.com
              </Text>
              <Text style={[styles.text, {color: '#AEB5BC', fontSize: 16}]}>
                www.github.com/mfadel26
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
        <Footer style={styles.putter}>
          <FooterTab>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Card')}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical active>
              <Icon name="person" />
              <Text>Profil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'HelveticaNeve',
    color: '#52575D',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titlebar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  infocontainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  putter: {
    flex: 0,
    overflow: 'hidden',
    backgroundColor: '#ffd600',
  },
});

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
    token: state.tokenReducer.token,
    id: state.engineerReducer.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxIncreaseCounter: () => dispatch(increaseCounter()),
    reduxDecreaseCounter: () => dispatch(decreaseCounter()),
    reduxLogin: trueFalse => dispatch(login(trueFalse)),
    reduxToken: token => dispatch(jwt(token)),
    reduxEngineer: id => dispatch(getEngineer(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detpro);
