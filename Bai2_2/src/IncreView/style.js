import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 20,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputtext: {
      borderWidth: 2,
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      height: 40,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    ,
  }

  });
export default styles;