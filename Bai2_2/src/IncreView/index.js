import React, {useState} from 'react';
import { Button, View, SafeAreaView, Text, TextInput, ScrollView ,TouchableOpacity} from 'react-native';
import _ from 'lodash';

import styles from './style';

const IncreView = () => {
    const [value, onChangeText] = React.useState('');
    const [value1, onChangeText1] = React.useState('');
    const [count, setCount] = useState([]);
    const onPress = () => setCount([...count, value +'X'+value1+'='+value*value1]);
    const onPress1 = () => setCount([...count, value +'/'+value1+'='+value/value1]);
    var total = value - - value1;
    var brand = value - value1
    const onPress2 = () => setCount([...count, value +'+'+value1+'='+total]);
    const onPress3 = () => setCount([...count, value +'-'+value1+'='+brand]);
    return(
        <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
      </Text>
    </View>
    <View>
      <Text style={styles.title}>
        Hai Số
      </Text>
      <View>
      <Text>a:</Text>
      <TextInput style={styles.inputtext}
        onChangeText={text =>onChangeText(text)}
        value={value}
      />
      </View>
      <View>
      <Text>b:</Text>
      <TextInput style={styles.inputtext}
        onChangeText={text =>onChangeText1(text)}
        value={value1}
        />
      <Text>{""}</Text>
      </View>
      <View style={styles.fixToText}>
        <Button
          title="   X   "
          onPress={onPress}
        />
        <Button
          title="   /   "
          onPress={onPress1}
        />
        <Button
          title="   +   "
          onPress={onPress2}
        />
        <Button
          title="   -   "
          onPress={onPress3}
        />
      </View>
      <View>
      <Text>{""}</Text>
      <Text>{""}</Text>
      <ScrollView style={{height: "60%", width: '100%', borderWidth: 1}}>
              {count.map((value, index) => (    
                <TouchableOpacity>   
                key={value}
                <Text>{value}</Text>
                </TouchableOpacity>
            ))}
      </ScrollView>
      </View>
    </View>
  </SafeAreaView>
        );
};

export default IncreView;