import HomeScreen from '../component/home'
import DetialScreen from '../component/detail'
import JiqiaoScreen from '../component/home/jiqiao'
import DiaodianScreen from '../component/home/diaodian'
import Diaodian_detailScreen from '../component/home/diaodian_detail'
import YujudianScreen from '../component/home/yujudian'
import Yujudian_detailScreen from '../component/home/yujudian_detail'
import ErshouScreen from '../component/home/ershou'
import Jiqiao_listScreen from '../component/home/jiqiaolist'
import Frome_PageScreen from '../component/common/frompage'

import { createStackNavigator, StatusBar } from "react-navigation";
import React, { Component } from 'react';
import { View, } from 'react-native';
export default HomeNav = createStackNavigator({
  Home: { //详细页面导航设置
    screen: HomeScreen,
    navigationOptions: {  //导航设置
      title: '首页',
      header: null,
      headerStyle: {
        backgroundColor: '#2673fd',
        elevation: 0,

      }
      ,
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
      },
    }
  },
  Detial: { //详细页面导航设置
    screen: DetialScreen,
    navigationOptions: {
      title: '详情',
      headerStyle: {
        backgroundColor: '#ffffff',
        elevation: 0,
        height: 50,
        // backgroundColor: 'transparent'//透明
      }, headerTintColor: '#333', //字体颜色
      headerTransparent: false,//导航浮动
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
      }, headerRight: <View />
    }
  },

  Jiqiao: {    //技巧页面导航设置
    screen: JiqiaoScreen,
    navigationOptions: {
      title: '技巧分类',
      headerStyle: {
        backgroundColor: '#ffffff',
        elevation: 0,
        height: 50,
        // backgroundColor: 'transparent'//透明
      }, headerTintColor: '#333', //字体颜色
      headerTransparent: false,//导航浮动
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
      }, headerRight: <View />
    }
  },
  Diaodian: {    //钓点页面导航设置
    screen: DiaodianScreen,
    navigationOptions: {
      title: '钓点',
      headerStyle: {
        backgroundColor: '#ffffff',
        elevation: 0,
        height: 50,
        // backgroundColor: 'transparent'//透明
      }, headerTintColor: '#333', //字体颜色
      headerTransparent: false,//导航浮动
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
      }, headerRight: <View />
    }
  },
  Diaodian_detail: {    //钓点页面导航设置
    screen: Diaodian_detailScreen,

  }
  ,
  Yujudian: {    //渔具店页面导航设置
    screen: YujudianScreen,
    navigationOptions: {
      title: '渔具店',
      headerStyle: {
        backgroundColor: '#ffffff',
        elevation: 0,
        height: 50,
        // backgroundColor: 'transparent'//透明
      }, headerTintColor: '#333', //字体颜色
      headerTransparent: false,//导航浮动
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
      }, headerRight: <View />
    }
  },
  Yujudian_detail: {    //渔具店页面导航设置
    screen: Yujudian_detailScreen,

  },
  Ershou: {    //二手页面导航设置
    screen: ErshouScreen,
    navigationOptions: {
      title: '二手渔具',
      headerStyle: {
        backgroundColor: '#ffffff',
        elevation: 0,
        height: 50,
        // backgroundColor: 'transparent'//透明
      }, headerTintColor: '#333', //字体颜色
      headerTransparent: false,//导航浮动
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
      }, headerRight: <View />
    }
  },
  Jiqiao_list: {    //技巧列表
    screen: Jiqiao_listScreen,

  }, Frome_Page: {    //技巧列表
    screen: Frome_PageScreen

  }

}, {
    initialRouteName: 'Home',

  });
HomeNav.navigationOptions = ({ navigation }) => {// 子页面隐藏底部标签栏 begin

  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;

  }
  return {
    tabBarVisible,
  };
};// 子页面隐藏底部标签栏 end


