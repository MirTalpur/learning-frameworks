import React, {Component} from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

type Props = {};
export default class Component2 extends Component<Props> {
  constructor(){
    super();
    this.state = {
      textValue: "Hello",
      switchValue: false
    }
  }
  onChangeText(value) {
    this.setState({
      textValue: value
    });
  }

  onSubmit(){
    console.log('Input submitted');
  }

  onSwitchChange(value){
    this.setState({
      switchValue: value
    });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder = "Enter Text"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={(value) => this.onSwitchChange(value)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component2', () => Component2);
