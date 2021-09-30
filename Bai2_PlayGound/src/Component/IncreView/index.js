import React, {useState} from 'react';
import {Text,Button, TouchableOpacity, View, ScrollView, SafeAreaView} from 'react-native';
import _ from 'lodash';

import styles from '../IncreView/style';
import EditView from '../EditView';

const IncreView = () => {
  const [count, setCount] = useState([1, 2, 3, 4]);
  const onPress = () => setCount([...count, count.length + 1]);
  const [isShow, setIsShow] = useState(true);
  const [valueText, setValueText] = useState({text: '2', index: 0});

  const handleHold = value => {
    const customArr = _.remove(count, function (n) {
      return n !== value;
    });
    setCount(customArr);
  };

  const handleSave = (text, indexArr) => {
    const custom = count.map((value, index) => {
      if (index == indexArr) {
        return text;
      }
      return value;
    });
    // console.log(custom);

    setCount(custom);
    setIsShow(true);
  };

  const handleBack = () => {
    setIsShow(true);
  };


  return (
    <View>
      {isShow ? (
        <View >
          <ScrollView style={{height: "95%", width: '100%', borderWidth: 2}}>
            {count.map((value, index) => (
              <TouchableOpacity 
                key={value}
                style={styles.TextViewContainer}
                onLongPress={() => handleHold(value)}
                onPress={() => {
                  setValueText({text: value, index});
                  setIsShow(false);
                }}>
                <Text style ={styles.item }>{value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.ButtonView}>
          <Button onPress={onPress}
            title="+"
            type="solid"
            buttonStyle={{borderRadius: 30}}
          />
          </View>
        </View>
      ) : (
        <EditView
          value={valueText}
          handleSave={handleSave}
          handleBack={handleBack}
        />
      )}
    </View>

    // }
  );
};

export default IncreView;
