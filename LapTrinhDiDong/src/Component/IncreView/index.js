import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
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
        <View style={styles.wrapper}>
          <ScrollView style={{height: 200, width: '100%', borderWidth: 2}}>
            {count.map((value, index) => (
              <TouchableOpacity
                key={value}
                style={styles.TextViewContainer}
                onLongPress={() => handleHold(value)}
                onPress={() => {
                  setValueText({text: value, index});
                  setIsShow(false);
                }}>
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity onPress={onPress} style={styles.TextViewContainer}>
            <Text style={{fontSize: 20}}>+</Text>
          </TouchableOpacity>
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
