import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text, Button} from 'react-native';

export default class FlatListDemo extends Component {
  _renderItem = item => {
    var txt = '用户昵称：' + item.item.name;
    return (
      <Text
        onPress={this.Users}
        style={[{flex: 1, height: 100, backgroundColor: 'white'}, styles.txt]}>
        {txt}
      </Text>
    );
  };

  Users = () => {
    const {navigate} = this.props.navigation;
    navigate('Users');
  };

  _separator = () => {
    return <View style={{height: 2, backgroundColor: 'black'}} />;
  };

  render() {
    var data = [];
    for (var i = 0; i < 100; i++) {
      data.push({key: i, name: i + ''});
    }

    return (
      <View style={{flex: 1}}>
        <Button
          title="滚动到指定位置"
          onPress={() => {
            this._flatList.scrollToOffset({animated: true, offset: 0});
          }}
        />
        <View style={{flex: 1}}>
          <FlatList
            ref={flatList => (this._flatList = flatList)}
            ItemSeparatorComponent={this._separator}
            renderItem={this._renderItem}
            data={data}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#4398ff',
    fontSize: 30,
  },
});
