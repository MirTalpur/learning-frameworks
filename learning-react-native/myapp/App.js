/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class MyApp extends Component<Props> {
  renderScene(route, navigator) {
    switch(route.id){
      case 'component5':
        return(<Component5 navigator={navigator} title="component5" />)
      case 'component6':
        return(<Component6 user={route.user} title="component6" />)
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
      // <View>
      //   <Component1 message="Hello from myapp!"/>
      //   <Component2 />
      //   <Component3 />
      //   <Component5 />
      //   <Component6 />
      // </View>
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

AppRegistry.registerComponent('MyApp', () => MyApp);
