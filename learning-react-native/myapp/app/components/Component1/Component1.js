import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

type Props = {};

export default class Component1 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Brad',
      showName: true,
      message: this.props.message
    }
  }
  render() {
    let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View>
        <Text style={styles.welcome}> {this.state.message} </Text>
        <Text style={styles.instructions}> {this.state.name} </Text>
      </View>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to my app!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

AppRegistry.registerComponent('Component1', () => Component1);
