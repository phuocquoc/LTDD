import React, {useState} from 'react';
import {TextInput,Button, Text, View, TouchableOpacity,Image} from 'react-native';
import styles from './Contacts/styles';
import Back from '../image/back.png';
import Contacts from '../image/contacts.png';
import name from '../image/name.png';
import phone from '../image/phone.png';
import email from '../image/email.png';

const EditView = props => {
  const [text, onChangeText] = React.useState("");
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  return (
    <View>
      <View style={styles.header}>
            <TouchableOpacity onPress={props.handleBack} style={styles.viewContainer}>
                <Image source={Back} />
            </TouchableOpacity>
            <Text style={styles.viewContainer1}>Create new contact</Text>
            <TouchableOpacity
              onPress = {()=>{
                props.handleSave(text,text1,text2)
              }}
            >
              <Text>SAVE</Text>
            </TouchableOpacity>
      </View>
    <View style={styles.wrapper}>
      <Image source={Contacts} />
    </View>
    <View style={styles.wrapper1}>
        <Image source={name} />
        <TextInput    
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginLeft:20,
          height: 50,
          width: '60%',
         }}
         onChangeText={onChangeText}
         value={text}
         placeholder="Name"
          />
    </View>
    <View style={styles.wrapper1}>
        <Image source={phone} />
        <TextInput    
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginLeft:20,
          height: 50,
          width: '60%',
          }}
          keyboardType = 'number-pad'
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Phone"
          />
          
    </View>
    <View style={styles.wrapper1}>
        <Image source={email} />
        <TextInput    
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginLeft:20,
          height: 50,
          width: '60%',
        }}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Email"
          />
    </View>
    </View>
  );
};

export default EditView;
