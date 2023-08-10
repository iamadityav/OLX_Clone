import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {addPost} from '../src/redux/PostSlice';
import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

const Add = ({onPost}) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);

  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 75704,
        height: 1856,
        type: 'image/jpeg',
        uri: '',
        width: 1392,
      },
    ],
  });
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        OpenCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const OpenCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setPhoto(result);
    }
    console.log(result);
  };

  const addItem = () => {
    dispatch(
      addPost({
        name: name,
        price: price,
        desc: desc,
        image: photo.assets[0].uri,
        category:
          selectedCategory == 0
            ? 'Cars'
            : selectedCategory == 1
            ? 'Bike'
            : selectedCategory == 2
            ? 'Mobile'
            : selectedCategory == 3
            ? 'Laptop'
            : selectedCategory == 4
            ? 'House'
            : 'Furnitures',
      }),
    );
    onPost();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Add Post</Text>
        </View>
        <TouchableOpacity
          style={styles.imageView}
          onPress={() => {
            requestCameraPermission();
          }}>
          {photo.assets[0].uri == '' ? (
            <Image
              source={require('../images/placeholder.webp')}
              style={styles.imageView}
            />
          ) : (
            <Image
              source={{uri: photo.assets[0].uri}}
              style={styles.imageView}
            />
          )}
        </TouchableOpacity>
        <TextInput
          placeholder="Enter Item name"
          style={styles.input}
          value={name}
          onChangeText={txt => setName(txt)}
        />
        <TextInput
          placeholder="Enter Item Description"
          style={[styles.input, {marginTop: 10}]}
          value={desc}
          onChangeText={txt => setDesc(txt)}
        />
        <TextInput
          placeholder="Enter Item Price"
          style={[styles.input, {marginTop: 10}]}
          keyboardType="number-pad"
          value={price}
          onChangeText={txt => setPrice(txt)}
        />
        <Text style={[styles.title, {marginLeft: 20, marginTop: 20}]}>
          Category
        </Text>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: 5,
              borderColor: selectedCategory == 1 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCategory(1);
          }}>
          <Text>CAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: 5,
              borderColor: selectedCategory == 2 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCategory(2);
          }}>
          <Text>BIKE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: 5,
              borderColor: selectedCategory == 3 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCategory(3);
          }}>
          <Text>MOBILE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: 5,
              borderColor: selectedCategory == 4 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCategory(4);
          }}>
          <Text>LAPTOPS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: 5,
              borderColor: selectedCategory == 5 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCategory(5);
          }}>
          <Text>FURNITURES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: 5,
              borderColor: selectedCategory == 6 ? 'blue' : 'black',
            },
          ]}
          onPress={() => {
            setSelectedCategory(6);
          }}>
          <Text>HOUSES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            addItem();
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Post My Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#00000',
  },
  imageView: {
    width: '90%',
    height: 130,
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    paddingLeft: 20,
  },
  btn: {
    width: '90%',
    height: 55,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
});
