import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Card,
  CardItem,
  Thumbnail,
  Text,
  FooterTab,
  Footer,
  Button,
  Icon,
  Left,
  Title,
  Body,
  Right,
} from 'native-base';
import Axios from 'axios';

import {connect} from 'react-redux';

// Imports: Redux Actions
import {login} from '../../../redux/actions/authActions';
import {
  increaseCounter,
  decreaseCounter,
} from '../../../redux/actions/counterActions';
import {getEngineer} from '../../../redux/actions/engineerActions';
import {jwt} from '../../../redux/actions/tokenAction';
import {role} from '../../../redux/actions/categoryAction';

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      items: [],
    };
  }

  getData() {
    Axios({
      method: 'get',
      url: 'http://54.161.87.89:7000/engineer/read',
    })
      .then(res => {
        const result = res.data;
        this.setState({
          items: result,
        });
      })
      .catch(err => {
        if (err.response) {
          console.log('from respon: ', err.response.data);
        }
        if (err.request) {
          console.log('From request ', err.request);
        }
      });
  }
  componentDidMount() {
    this.getData();
  }
  _sendLogout = async () => {
    isLogin = 0;
    console.log(this.props.token);

    try {
      Axios.defaults.headers.common['Authorization'] = this.props.token;
      await Axios.get('http://54.161.87.89:7000/myhire/logout');
      Axios.defaults.headers.common['Authorization'] = '0';
      await this.props.reduxLogin(false);
      await this.props.reduxCategory(0);
      await this.props.navigation.navigate('Login');
    } catch (error) {
      await this.props.navigation.navigate('Login');
      console.log(error);
    }
  };
  _setIdEngineer = async id => {
    await this.props.reduxEngineer(id);
    await console.log(this.props.id);
    this.props.navigation.navigate('Profile');
  };
  render() {
    const {items} = this.state
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          {items.map(product => (
            <Card key={product.id}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'Image URL'}} />
                  <Body>
                    <Text>{product.name}</Text>
                    <Text> {product.skill}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:'https://cdn2.tstatic.net/tribunnews/foto/bank/images/francesco-totti-sampdoriaaaa_20160912_192806.jpg'
                    
                    //  'http://54.161.87.89:7000/home/ubuntu/Backend/Image/' +
                      //product.photo,
                  }}
                  style={{height: 400, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button
                    transparent
                    onPress={() => {this._setIdEngineer(product.created_by)}}>
                   
                    <Text>View</Text>
                  </Button>
                </Left>

                <Right>
                  <Text>Hire</Text>
                </Right>
              </CardItem>
            </Card>
          ))}
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button
              active
              onPress={() => {
                this._sendLogout();
              }}>
              <Icon active name="navigate" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Projectlist')}>
              <Icon name="person" />
              <Text>Project</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
    token: state.tokenReducer.token,
    id: state.engineerReducer.id,
    category: state.categoryReducer.category,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () => dispatch(increaseCounter()),
    // Decrease Counter
    reduxDecreaseCounter: () => dispatch(decreaseCounter()),
    // Login
    reduxLogin: (trueFalse) => dispatch(login(trueFalse)),

    reduxToken: (token) => dispatch(jwt(token)),

    reduxEngineer: (id) => dispatch(getEngineer(id))
  };
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards);
