import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {FlatList, TextInput} from 'react-native-gesture-handler';

const Wishlist = () => {
  const items = useSelector(state => state.wishlist);

  return (
    <View style={style.container}>
      <FlatList
        data={items.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={style.item}>
              <Image source={{uri: item.image}} style={style.itemImage} />
              <View style={style.cardText}>
                <Text style={style.name}>{item.name}</Text>
                <Text style={style.name2}>{item.desc}</Text>
                <Text style={style.name3}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: 'black',
  },
  name2: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
  name3: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: 'black',
  },
  searchBox: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 50,
      flexDirection: 'row',
    alignItems:'center',
  },
  input: {
    width: '86%',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
