import React, { useEffect } from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, TextInput, SafeAreaView, ScrollView, Alert } from 'react-native';
import AddView from '../AddView';
import EditView from '../EditView';
import styles from './styles';
import menu from '../../image/menu.png';
import Search from '../../image/search.png';



const Contacts = () => {

  const [data, setData] = useState([])
  const [idx, incr] = useState(5);
  const [masterData, setMaterData] = useState([])
  const [isShow, setIsShow] = useState(1)
  const [user, setUser] = useState([])
  const [search, setSearch] = useState('')
  


  const fetchPosts = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json?fbclid=IwAR27f0xuqWyG0HKcsjQoZqZRhuEW0gQUQKzfzwVkwH4If7HOZaaTJcCvPos');
      const users = await response.json();
      setData(users);
      setMaterData(users);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => { fetchPosts() }, [])

  const handleBack = () => {
    setIsShow(1)
  };

  const handlenext = () => {
    setIsShow(0)
  };

  const handleEdit = (item) => {
    setUser(item)
    setIsShow(2)
  };

  const handleEditView = (id, name, phone, email, image) => {
    for (var userObject of data) {
      if (id == userObject.id) {
        userObject.name = name;
        userObject.phone = phone;
        userObject.email = email;
        if(image)
          userObject.image = image;
      }
    }
    setIsShow(1)
  }


  const searchContacts = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ?
          item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return (itemData.indexOf(textData) > -1);
      })
      setData(newData);
      setSearch(text);
    } else {
      setData(masterData);
      setSearch(text);
    }
  }

  const sortData = () => {
    data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return data
  }

  const arryCheck = []

  const compare = (data) => {
    const find = arryCheck?.find(element => element === data)
    if (find)
      return " "
    arryCheck.push(data)
    return data
  }

  const handleSave = (text, text1, text2) => {
    var newData = [...data, { id: idx, name: text, phone: text1, email: text2, image: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.1.20-Bai3/ImagePicker/af0ca60e-f6a0-4298-a7a4-65877dfb8df6.png' }];
    incr(idx + 1);
    setData(newData)
    setMaterData(newData)
    setIsShow(1);
  };

  return (
    <View>
      {isShow == 1 ? (
        <View>
          <View style={styles.header}>
            <TouchableOpacity style={styles.viewContainer}>
              <Image source={menu} />
            </TouchableOpacity>
            <Text style={styles.viewContainer}>Contact</Text>
            <TextInput
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginLeft: 20,
                height: 50,
                width: 170,
              }}
              placeholder='Search Hear'
              onChangeText={(text) => { searchContacts(text) }}
              value={search}
            />
            <TouchableOpacity style={styles.viewSearch}>
              <Image source={Search} />
            </TouchableOpacity>
          </View>
          {/* <ScrollView style={{height: '80%', width: '100%'}}> */}
          <FlatList
            style={{ height: '80%', width: '100%' }}
            //)
            data={sortData()}
            keyExtractor={(item, index) => { index.toString() }}
            renderItem={({ item }) =>
              <TouchableOpacity style={styles.itemContainer}
                onPress={() => { handleEdit(item); }}
              >
                <View style={styles.keyContainer}>
                  <Text>{compare(item.name[0])}</Text>
                </View>
                <View style={styles.coverContainer}>
                  {/* <Text>{item.name[0]}</Text> */}
                  <Image source={{ uri: item.image  }} style={styles.coverContainer}
            />
                </View>
                <View style={{marginLeft : 20}}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            }
          />
          {/* </ScrollView> */}
          <TouchableOpacity onPress={handlenext} style={styles.coverContainer1}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>) :
        isShow == 0 ?
          (<AddView
            // value={valueText}
            handleSave={handleSave}
            handleBack={handleBack}
          />) :
          (
            <EditView
              value={user}
              handleBack={handleBack}
              handleEditView={handleEditView}
            />
          )
      }
    </View>
  );
};
export default Contacts;

