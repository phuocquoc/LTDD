import React, {useState} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
const EditView = props => {
  const [text, setText] = useState(props.value.text);
  return (
    <View>
      <TextInput
        style={{borderWidth: 1}}
        onChangeText={setText}
        value={text}
        defaultValue={props.value.text.toString()}
      />
      <TouchableOpacity
        onPress={() => {
          props.handleSave(text, props.value.index);
        }}>
        <Text>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.handleBack}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditView;
