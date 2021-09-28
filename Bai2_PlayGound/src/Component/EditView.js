import React, {useState} from 'react';
import {TextInput,Button, Text, View, TouchableOpacity} from 'react-native';
const EditView = props => {
  const [text, setText] = useState(props.value.text);
  return (
    <View>
      <TextInput 
        style={{}}
        value={""}
      />
      <View style={{
        width: 30, 
        margin: 10,
        borderRadius: 10,}}>
      <Button 
        onPress={props.handleBack}
        title = "⬅"
        type="solid"
        color="#ff5c5c"
        buttonStyle={{borderRadius: 30}}
      />
      </View>
      <TextInput 
        style={{borderWidth: 2,
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop:100,
          textAlign: 'center',
          height: 50,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}
        onChangeText={setText}
        value={text}
        defaultValue={props.value.text.toString()}
      />
      <Button
          onPress={() => {
          props.handleSave(text, props.value.index);
                  }}
        title ="Save"
      />
      
    </View>
  );
};

export default EditView;
