import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View, Image, FlatList, Dimensions, TextInput } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { SearchBar } from 'react-native-elements';
import DetailsFragment from '../Detail/DetailsFragment'

const numColumns = 2;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const DogApp = () => {

  const [dogs, setDogs] = useState([])
  const [dog, setDog] = useState([])
  const [materdongs, setMaterDogs] = useState([])
  const [search, setSearch] = useState('')
  const [isShow, setIsShow] = useState(true)

  const handleDetail = () => {
    setIsShow(false)
  };

  const handleBack = () => {
    setIsShow(true)
  };
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json?fbclid=IwAR27f0xuqWyG0HKcsjQoZqZRhuEW0gQUQKzfzwVkwH4If7HOZaaTJcCvPos');
      const users = await response.json();
      setDogs(users);
      setMaterDogs(users);
    }
    catch (error) {
    }
  }
  useEffect(() => { fetchPosts() }, [])

  const searchContacts = (text) => {
    if (text) {
      const newData = materdongs.filter((item) => {
        const itemData = item.name ?
          item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return (itemData.indexOf(textData) > -1);
      })
      setDogs(newData);
      setSearch(text);
    } else {
      setDogs(materdongs);
      setSearch(text);
    }
  }

  const handleSendData = (item) => {
    setDog(item)
    setIsShow(false)
  };

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity style={styles.item}
        onPress={() => handleSendData(item)}
      >
        <View style={styles.viewdog}>
          <Image source={{ uri: item.url }} style={{ width: Dimensions.get('window').width / numColumns - 50, height: Dimensions.get('window').width / numColumns - 50, }} />
        </View>
        <Text numberOfLines={1} style={styles.itemText}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.itemText1}>{item.bred_for}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {isShow == true ? (<View>
        <View style={styles.header}>
          <Text style={styles.textstyles}>DogApp</Text>
        </View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(text) => { searchContacts(text) }}
          value={search}
        />
        <View>
          <SwipeListView
            data={formatData(dogs, numColumns)}
            style={styles.Flatlist}
            renderItem={renderItem}
            numColumns={numColumns}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        </View>
      </View>) :
        <DetailsFragment
          value={dog}
          handleBack={handleBack}
        />
      }
    </View>
  );
}
export default DogApp;