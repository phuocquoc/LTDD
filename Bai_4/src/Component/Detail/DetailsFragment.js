import React, { useState } from 'react';
import { TextInput, Button, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import Back from '../../image/back.png';
import styles from './styles';

const numColumns = 2

const Detail = props => {

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.handleBack} style={styles.viewContainer}>
                    <Image source={Back} />
                </TouchableOpacity>
            </View>
            <View style={styles.viewdog}>
                <Image source={{ uri: props.value.url }} style={styles.image} />
            </View>
            <View style={styles.viewdog}>
                <Text style={styles.name}>
                    {props.value.name}
                </Text>
                <Text></Text>
                <Text></Text>
            </View>
            <View style={styles.body}>
                <View>
                    <Text style={styles.text}>Breed for   </Text>
                    <Text style={styles.text}>Breed group </Text>
                    <Text style={styles.text}>Life span   </Text>
                    <Text style={styles.text}>Origin      </Text>
                    <Text style={styles.text}>Height      </Text>
                    <Text style={styles.text}>Weight      </Text>
                    <Text style={styles.text}>Temperament</Text>
                </View>
                <View>
                    <Text style={styles.text}>: {props.value.bred_for}</Text>
                    <Text style={styles.text}>: {props.value.breed_group}</Text>
                    <Text style={styles.text}>: {props.value.life_span}</Text>
                    <Text style={styles.text}>: {props.value.origin}</Text>
                    <Text style={styles.text}>: {props.value.height.metric}</Text>
                    <Text style={styles.text}>: {props.value.weight.metric}</Text>
                    <Text style={styles.text}>: {props.value.temperament}</Text>
                </View>
            </View>
        </View>
    )
}

export default Detail;
