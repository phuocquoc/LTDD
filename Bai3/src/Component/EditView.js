import React, { useEffect } from 'react';
import { useState } from 'react';
import { TextInput, Button, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './Contacts/styles';
import Back from '../image/back.png';
import Contacts from '../image/contacts.png';
import name from '../image/name.png';
import phone from '../image/phone.png';
import email from '../image/email.png';
import camera from '../image/Camera.png';

import * as ImagePicker from 'expo-image-picker';

const EditView = (props) => {

    const [text, onChangeText] = React.useState(props.value.name);
    const [text1, onChangeText1] = React.useState(props.value.phone.toString());
    const [text2, onChangeText2] = React.useState(props.value.email);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    return (
        <View>
            {/* <Text>ok</Text> */}
            <View style={styles.header}>
                <TouchableOpacity onPress={props.handleBack} style={styles.viewContainer}>
                    <Image source={Back} />
                </TouchableOpacity>
                <Text style={styles.viewContainer1}>Create new contact</Text>
                <TouchableOpacity
                    onPress={() => {
                        { props.handleEditView(props.value.id, text, text1, text2, image ) }
                    }}
                >
                    <Text>SAVE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
            {image ? <Image source={{ uri: image }} style={{ width: 300, height: '100%' }}
            />:(<Image source={{ uri:props.value.image}} style={{ width: 300, height: '100%' }} />)
        }
            </View>
            <View style={styles.wrapper2}>
                <TouchableOpacity onPress={pickImage}>
                        <Image source = {camera}/>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper1}>
                <Image source={name} />
                <TextInput
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginLeft: 20,
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
                        marginLeft: 20,
                        height: 50,
                        width: '60%',
                    }}
                    keyboardType='number-pad'
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
                        marginLeft: 20,
                        height: 50,
                        width: '60%',
                    }}
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder="Email"
                />
            </View>
        </View>
    )
};

export default EditView;