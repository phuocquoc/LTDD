import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  wrapper1: {
    flexDirection: 'row',
    marginTop : 30,
    marginLeft : 20,
    width: '100%',
  },
  header: {
    marginTop : 30,
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  viewContainer: {
    width: 100,
    color: 'white',
    fontWeight: 'bold',
    fontSize : 20,
  },
  viewContainer1: {
    width: 250,
    color: 'white',
    fontWeight: 'bold',
    fontSize : 20,
  },
  viewSearch: {
    width: 100,
    color: 'white',
    fontWeight: 'bold',
  },

  itemContainer: {
    backgroundColor:'white',
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  keyContainer: {
    width: 60,
    marginRight: 30,
    marginLeft: 20,
  },

  coverContainer: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor:'green',
  },

  coverContainer1:{
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    marginLeft: '85%',
    backgroundColor:'red',
  },
  TextViewContainer: {
    height: 50,
    width: '100%',
    
  }
});

export default styles;