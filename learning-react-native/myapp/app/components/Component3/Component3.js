import React, {Component} from 'react';
import {AppRegistry, View, ListView, Text, StyleSheet} from 'react-native';


type Props = {};
const users = [
    {name: 'John Doe'},
    {name: 'Brad Traversy'},
    {name: 'Janet Williams'}
]
export default class Component3 extends Component<Props> {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    }
  }

  renderRow(user, sectionId, rowId, highlightRow){
    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
  }
  render() {
    return (
      <ListView
        dataSource = {this.state.userDataSource}
        renderRow = {this.renderRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});
AppRegistry.registerComponent('Component3', () => Component3);
