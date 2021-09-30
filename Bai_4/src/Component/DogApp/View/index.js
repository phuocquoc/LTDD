import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View, Image, FlatList, Dimensions } from 'react-native';


const numColumns = 2;
const DogApp = () => {

  const [dogs, setDogs] = useState([])
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json?fbclid=IwAR27f0xuqWyG0HKcsjQoZqZRhuEW0gQUQKzfzwVkwH4If7HOZaaTJcCvPos');
      const users = await response.json();
      setDogs(users);
      //setMaterData(users);
    }
    catch (error) {
      console.error(error);
    }
  }
  useEffect(() => { fetchPosts() }, [])

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <View style = {styles.viewdog}>
        <Image source={{ uri: item.url }} style={{ width: Dimensions.get('window').width / numColumns -50 , height: Dimensions.get('window').width / numColumns -50 ,}}/>
        </View>
        <Text numberOfLines={1} style={styles.itemText}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.itemText1}>{item.bred_for}</Text>       
      </TouchableOpacity>
    );
  };
  return (
    <View>   
       <View style={styles.header}>
         <Text style={styles.textstyles}>DogApp</Text>
       </View> 
       <View>
          <FlatList
            data={dogs}
            style={styles.Flatlist}
            renderItem={renderItem}
            numColumns={numColumns}
          />
        </View>
    </View>
 
  );
}
export default DogApp;