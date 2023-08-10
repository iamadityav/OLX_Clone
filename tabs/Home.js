import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addToWishlist } from '../src/redux/WishlistSlice';

const Home = () => {
  const items = useSelector(state => state.post);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={style.container}>
      <Text style={style.logo}>OLX</Text>
      <View style={style.searchBox}>
        <TextInput placeholder="Search Items here..." style={style.input} />
        <Image source={require('../images/search.png')} style={style.icon} />
      </View>
      <Text style={style.text}>What are u Looking For?</Text>
      <View style={{marginTop: 0, marginRight: 10, marginLeft: 5}}>
        <FlatList
          numColumns={3}
          data={[
            {title: 'Cars', icon: require('../images/Car.png')},
            {title: 'Bikes', icon: require('../images/bike2.png')},
            {title: 'Laptops', icon: require('../images/laptop2.png')},
            {title: 'Mobiles', icon: require('../images/mobile2.png')},
            {title: 'Furnitures', icon: require('../images/furniture2.png')},
            {title: 'Houses', icon: require('../images/house2.png')},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={style.card} onPress={() => {
                navigation.navigate('ItemsByCategory', {
                  category:item.title
                })
              }}>
                <Image source={item.icon} style={style.imageicon} />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={style.text}>Posted Items</Text>
      <FlatList
        data={items.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={style.item}>
              <Image
                source={{uri:item.image}}
                style={style.itemImage}
              />
              <View style={style.cardText}>
                <Text style={style.name}>{item.name}</Text>
                <Text style={style.name2}>{item.desc}</Text>
                <Text style={style.name3}>${ item.price}</Text>
              </View>
              <TouchableOpacity style={style.wishlist} onPress={() => {
                dispatch(addToWishlist(item));
              }}>
                <Image source={require('../images/heart.png')} style={style.imagewishlist}  />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#6cd8e4',
    marginTop: 20,
    marginLeft: 20,
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
  text: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 20,
    color: '#000',
  },
  imageicon: {
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
  card: {
    width: 100,
    height: 120 ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b4b1b1',
    margin: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
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
        color:'black',
    },
    name2: {
        fontSize: 18,
      marginLeft: 10,
      color:'black',
    },
    name3: {
        fontSize: 18,
        fontWeight: '600',
      marginLeft: 10,
      color:'black',
  },
  wishlist: {
    position: 'absolute',
    right: 10,
    top: 10,

  },
  imagewishlist: {
    height: 20,
    width:20,
  }
});
