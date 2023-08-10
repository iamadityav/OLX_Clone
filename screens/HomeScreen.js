import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Wishlist from '../tabs/Wishlist';
import User from '../tabs/User';
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Add from '../tabs/Add';

const HomeScreen = () => {
  const [touch, setTouch] = useState(0);
  return (
    <View style={styles.container}>
      {touch == 0 ? (
        <Home />
      ) : touch == 1 ? (
        <Search />
      ) : touch == 2 ? (
            <Add onPost={() => {
              setTouch(0);
        }} />
      ) : touch == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View style={styles.bottomTab}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setTouch(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={[
              styles.icon,
              {tintColor: touch == 0 ? '#6cd8e4' : '#000000'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setTouch(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={[
              styles.icon,
              {tintColor: touch == 1 ? '#6cd8e4' : '#000000'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setTouch(2);
          }}>
          <Image
            source={require('../images/add.png')}
            style={[
              styles.icon,
              {tintColor: touch == 2 ? '#6cd8e4' : '#000000'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setTouch(3);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={[
              styles.icon,
              {tintColor: touch == 3 ? '#6cd8e4' : '#000000'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setTouch(4);
          }}>
          <Image
            source={require('../images/user.png')}
            style={[
              styles.icon,
              {tintColor: touch == 4 ? '#6cd8e4' : '#000000'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: '100%',
    height: 70,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
});
