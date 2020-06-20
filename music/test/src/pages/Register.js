import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Register extends Component {
  username = '';
  password = '';
  confirmPassword = '';

  UsernameChanged = newUsername => {
    console.log(newUsername); //运行后可以在输入框随意输入内容并且查看log验证！
    this.username = newUsername;
  };

  PasswordChanged = newPassword => {
    console.log(newPassword); //运行后可以在输入框随意输入内容并且查看log验证！
    this.password = newPassword;
  };

  confirmPasswordChanged = newconfirmPassword => {
    console.log(newconfirmPassword);
    this.confirmPassword = newconfirmPassword;
  };

  Login = () => {
    if (this.username !== '' && this.password !== '') {
      if (this.username !== 'Admin') {
        if (this.password === this.confirmPassword) {
          const {goBack} = this.props.navigation; //获取navigation的goBack方法

          Alert.alert('注册成功', '返回登陆', [
            {
              onPress: () => {
                goBack();
              },
            },
          ]); //给弹出的提示框添加事件
        } else {
          Alert.alert('注册失败', '密码与确认密码不同');
        }
      } else {
        Alert.alert('注册失败', '此用户名已经被注册');
      }
    } else {
      Alert.alert('注册失败', '用户名或密码不能为空');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/*用户名*/}
        <TextInput
          onChangeText={this.UsernameChanged}
          style={styles.textInput1}
          placeholder={'请输入用户名'}
          //输入框下划线
          underlineColorAndroid={'transparent'}
        />
        {/*密码*/}
        <TextInput
          onChangeText={this.PasswordChanged}
          style={styles.textInput}
          placeholder={'请输入密码'}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
        />
        {/*确认密码 */}
        <TextInput
          onChangeText={this.confirmPasswordChanged}
          style={styles.textInput}
          placeholder={'请确认密码'}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
        />
        {/*注册 */}
        <TouchableOpacity style={styles.btnStyle} onPress={this.Login}>
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
  textInput1: {
    height: 40,
    width: 300,
    marginTop: 100,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  btnStyle: {
    height: 40,
    width: 250,
    borderRadius: 5,
    marginTop: 40,
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
