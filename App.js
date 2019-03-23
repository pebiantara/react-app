/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';
import { size, screenWidth } from './src/helpers/devices';
import { NotifyPeople, FbIcon } from './src/assets';

export default class App extends Component {
  static navigatorStyle = {
		navBarHidden: true,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
    console.disableYellowBox = true;
  }

  pushToScreen(screenName) {
    if(Platform.OS === 'ios') {
      this.props.navigator.push({screen: screenName})
    } else {
      this.props.navigator.showModal({screen: screenName ,animationType: 'slide-up'})
    }
  }

  renderSwipper(items){
    return (
      <View style={styles.box_swiper}>
        <Swiper 
          style={styles.wrapper} 
          autoplay={false}
          animated={true}
        >
           {this.renderSwipperItem(items)}
        </Swiper>
      </View>
    )
  }

  renderSwipperItem(items) {
    return items.map((item,i) => {
      return (
        <View key="swiper-item-{i}" style={styles.container_swiper} >
            <Image source={item.img} style={styles.icon}/>
            <Text style={styles.baseText}>
              { item.title } - {i}
            </Text>
            <Text style={styles.wrapper_desc}>
              { item.description }
            </Text>
        </View>
      )
    });
  }

  render() {
      const DATA=[
        {img: NotifyPeople, title: "Misdemeanor and Felony Friendly Job", description: '70Millions will connect you with great companies that after second chance jobs for people with criminal'},
        {img: NotifyPeople, title: "Misdemeanor and Felony Friendly Job", description: '70Millions will connect you with great companies that after second chance jobs for people with criminal'},
        {img: NotifyPeople, title: "Misdemeanor and Felony Friendly Job", description: '70Millions will connect you with great companies that after second chance jobs for people with criminal'},
        {img: NotifyPeople, title: "Misdemeanor and Felony Friendly Job", description: '70Millions will connect you with great companies that after second chance jobs for people with criminal'},
      ];            

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          { this.renderSwipper(DATA) }
          <View style={styles.boxButton}>
            <TouchableOpacity onPress={() => this.pushToScreen('TabView')} style={styles.button_login}>
              <Text style={styles.button_text}>Login Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pushToScreen('TabView')} style={styles.button_fb}>
              <Image source={FbIcon} style={styles.button_icon}/>
              <Text style={styles.button_text}>
                Continue with Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pushToScreen('TabView')}>
              <Text style={styles.anchor_text}>Sign up with email</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box_swiper: {
    height: size(430),
  },
  wrapper: {
  },
  icon: {
    width: size(150),
    height: size(150),
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  boxButton: {
    flex: 2,
    height: size(200),
    paddingLeft: size(10),
    paddingRight: size(10),
    width: screenWidth,
  },
  button_icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 20,
    top: 15,
  },
  button_login: {
    backgroundColor: '#fc6039',
    color: '#fff',
    borderRadius: size(5),
    paddingTop: size(20),
    paddingBottom: size(20),
    width: size(350),
    textAlign: 'center',
    marginTop: size(20),
  },
  anchor_text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: size(50),
    color: '#7f82a0',
  },
  button_text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  button_fb: {
    backgroundColor: '#505591',
    color: '#fff',
    borderRadius: size(5),
    paddingTop: size(20),
    paddingBottom: size(20),
    width: size(350),
    marginTop: size(20),
    flexDirection:'row',
    justifyContent: 'center', 
    // flexWrap:'wrap',
  },  
  container_swiper: {
    alignItems: 'center',
    padding: size(20),
    paddingTop: size(40)
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f8ff',
  },
  baseText: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  wrapper_desc: {
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
});
