import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
export default class StackedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name Project</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Require Skill</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Job Desk</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Payment</Label>
              <Input />
            </Item>
          </Form>
          <Button
            rounded
            dark
            onPress={() => this.props.navigation.navigate('Project')}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
