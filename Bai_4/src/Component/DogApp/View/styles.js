import {StyleSheet, Dimensions } from 'react-native';
const numColumns = 2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        paddingHorizontal: 8,
        borderWidth: 2,
      },
      item: {       
        flex: 1,
        margin: 5,
        borderWidth: 0.5,
        height: Dimensions.get('window').width / numColumns, // approximate a square
      },
      viewdog: {
        alignItems: 'center',
      },
      itemInvisible: {
        backgroundColor: 'transparent',
      },
      itemText: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
        width: Dimensions.get('window').width / numColumns -50,
      },
      itemText1: {
        color: 'black',
        fontSize: 13,
        marginLeft: 10,
        width: Dimensions.get('window').width / numColumns -50,
      },
      header: {
        marginTop : 30,
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      
      Flatlist:{
        height: '100%', 
        width: '100%'
      },
      textstyles:{
        color: 'white',
        fontSize: 30,
        fontWeight: "bold",
      }
});

export default styles;