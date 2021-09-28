import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  TextViewContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonView: {
    width: 30, 
    borderRadius: 10,
    alignSelf : 'flex-end',
    backgroundColor: "red" 
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  item: {
    marginTop: 24,
    
    backgroundColor: 'green',
    fontSize: 12
  },
});

export default styles;
