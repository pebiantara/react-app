import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import Deck from '../components/deck';
import TinderCard from '../components/tinder_card';
import NoMoreCard from '../components/no_more_card';

const DATA = [
  { id: 2, text: 'Card #1', url: 'https://pbs.twimg.com/profile_images/710880096735858689/fqR1sCg__400x400.jpg', name: 'Pebiantara', age: '25', school: 'Institute Of Bandung' },
  { id: 1, text: 'Card #2', url: 'https://pbs.twimg.com/profile_images/681369932207013888/CHESpTzF.jpg', name: 'NurdyMuny', age: '25', school: 'Bahçeşehir Üniversitesi' },
  { id: 3, text: 'Card #3', url: 'https://c1.staticflickr.com/6/5252/5403292396_0804de9bcf_b.jpg', name: 'Özge', age: '29', school: 'Kocaeli Üniversitesi' },
  { id: 4, text: 'Card #4', url: 'https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg', name: 'Özlem', age: '33', school: 'Yıldız Teknik Üniversitesi' },
  { id: 5, text: 'Card #5', url: 'https://c1.staticflickr.com/8/7175/6698567177_fc5df89f18_b.jpg', name: 'Eren', age: '31', school: 'Bahçeşehir Üniversitesi' },
  { id: 6, text: 'Card #6', url: 'https://i1.wp.com/visboo.com/img/29042010/66120.jpg', name: 'Alper', age: '25', school: 'Bahçeşehir Üniversitesi' },
  { id: 7, text: 'Card #7', url: 'https://www.rd.com/wp-content/uploads/2017/03/02-People-Share-the-Random-Act-of-Kindness-That-Changed-Their-Life-Fatima-M-Woods-380x254.jpg', name: 'Kağan', age: '25', school: 'Alman Üniversitesi' },
  { id: 8, text: 'Card #8', url: 'https://image.yenisafak.com/resim/imagecrop/2017/07/06/04/46/resized_6d734-9adcf410maxresdefault.jpg', name: 'Ozan', age: '26', school: 'Alman Üniversitesi' },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  renderCard(item) {
    return (
      <TinderCard
        key={item.id}
        url={item.url}
        name={item.name}
        age={item.age}
        school={item.school}
      />
    );
  }

  renderEmptyState() {
    return (
      <NoMoreCard />
    )
  }
  
  pushToScreen(screenName) {
    if(Platform.OS === 'ios') {
      this.props.navigator.push({screen: screenName})
    } else {
      this.props.navigator.showModal({screen: screenName ,animationType: 'slide-up'})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.pushToScreen('App')}>Launch Screen</Text>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          onSwipeLeft={(item) => console.log('left', item)}
          onSwipeRight={(item) => console.log('right', item)}
          renderNoMoreCards={() => this.renderEmptyState()}
          navGator={this.props.navigator}
          isStack
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(244,246,251)',
    justifyContent: 'center',
  },
});