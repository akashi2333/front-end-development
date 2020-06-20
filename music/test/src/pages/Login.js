import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Login extends Component {
  username = '';
  password = '';

  usernameChanged = newusername => {
    console.log(newusername);
    this.username = newusername;
  };

  passwordChanged = newpassword => {
    console.log(newpassword);
    this.password = newpassword;
  };

  Home = () => {
    if (this.username === 'Admin' && this.password === '123') {
      const {navigate} = this.props.navigation;
      navigate('Home');
    } else {
      Alert.alert('登录失败', '用户名或密码错误');
    }
  };
  register = () => {
    const {navigate} = this.props.navigation;
    navigate('Register');
  };
  render() {
    return (
      <View style={styles.container}>
        {/*为头像设置一个样式，和图片资源*/}
        <Image
          style={styles.circleImage}
          source={require('../images/logo.jpg')}
        />
        {/*用户名*/}
        <TextInput
          onChangeText={this.usernameChanged}
          style={styles.textInput}
          placeholder={'请输入用户名'}
          //输入框下划线
          underlineColorAndroid={'transparent'}
        />
        {/*密码*/}
        <TextInput
          onChangeText={this.passwordChanged}
          style={styles.textInput}
          placeholder={'请输入密码'}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
        />
        {/*登录*/}
        <TouchableOpacity style={styles.btnStyle} onPress={this.Home}>
          <Text style={styles.mText}>登录</Text>
        </TouchableOpacity>
        {/*注册 */}
        <TouchableOpacity style={styles.btnStyle} onPress={this.register}>
          <Text style={styles.mText}>注册</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //相当于android布局的weight 充满容器
    flexDirection: 'column',
    backgroundColor: '#dddddd',
    //设置次轴的对齐方式
    alignItems: 'center',
  },
  circleImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 100,
    marginBottom: 25,
  },
  textInput: {
    height: 40,
    width: 300,
    marginBottom: 15,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  btnStyle: {
    height: 40,
    width: 250,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#4398ff',
    //沿主轴方向居中
    justifyContent: 'center',
  },
  mText: {
    //指定文本的对齐方式
    textAlign: 'center',
    color: 'white',
    //设置文本垂直方向居中
    textAlignVertical: 'center',
  },
});
