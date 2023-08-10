import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

const ItemsByCategory = () => {
  const [itemList, setItemList] = useState([]);
  const route = useRoute();
  const items = useSelector(state => state.post);
  useEffect(() => {
    let tempData = items.data;
    let temp = [];
    tempData.map(item => {
      if (item.category == route.params.category) {
        temp.push(item);
      }
    });
    setItemList(temp);
  }, []);
  return (
    <View style={style.container}>
      <FlatList
        data={itemList}
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

export default ItemsByCategory;
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
});
