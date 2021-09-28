import React, { useEffect } from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, TextInput, SafeAreaView, ScrollView } from 'react-native';
import AddView from '../AddView';
import styles from './styles';
import menu from '../../image/menu.png';
import Search from '../../image/search.png';

const Contacts = () => {

  const [data, setData] = useState([])
  const [masterData, setMaterData] = useState([])
  const [isShow, setIsShow] = useState(true)
  const [search, setSearch] = useState('')
//   const fetchData = async () => {
//     const response = await fetch('http://192.168.1.13:1348/contact');
//     const users = await response.json();
//     setData(users);
//     setMaterData(users);
//   }
//   useEffect(() => { fetchData() })
  const handleBack = () => {
    setIsShow(true)
  };
  const handlenext = () => {
    setIsShow(false)
  };
  const searchContacts = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ?
          item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setData(newData);
      setSearch(text);
    } else {
      setData(masterData);
      setSearch(text);
    }
  }


  return (
    <View>
      {isShow ? (
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
          <FlatList style={{ height: '80%', width: '100%' }}
            data={data.sort((a, b) => (a.name > b.name) ? 1 : -1)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <View style={styles.itemContainer}>
                <View style={styles.keyContainer}>
                  <Text>{item.name.slice(0, 1)}</Text>
                </View>
                <View style={styles.coverContainer}>
                  <Text>{item.name.slice(0, 1)}</Text>
                </View>
                <View>
                  <Text>{item.name}</Text>
                </View>
              </View>
            }
          />
          <TouchableOpacity onPress={handlenext} style={styles.coverContainer1}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>) :
        (<AddView
          // value={valueText}
          // handleSave={handleSave}
          handleBack={handleBack}
        />)}
    </View>
  );
};
export default Contacts;

