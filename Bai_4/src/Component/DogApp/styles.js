import { StyleSheet, Dimensions } from 'react-native';
const numColumns = 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: 8,
    borderWidth: 2,
  },
  item: {
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 8,
    height: Dimensions.get('window').width / numColumns,
  },
  viewdog: {
    marginTop: 2,
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
    width: Dimensions.get('window').width / numColumns - 50,
  },
  itemText1: {
    color: 'black',
    fontSize: 13,
    marginLeft: 10,
    width: Dimensions.get('window').width / numColumns - 50,
  },
  header: {
    marginTop: 60,
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textsearch: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
  },
  Flatlist: {
    height: '100%',
  },
  textstyles: {
    color: 'white',
    fontSize: 30,
    fontWeight: "bold",
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});

export default styles;