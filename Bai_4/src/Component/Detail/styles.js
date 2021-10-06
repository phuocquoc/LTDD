import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        height: 60,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewContainer: {
        width: 100,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    image: {
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').width - 150,
        alignItems: 'center',
    },
    viewdog: {
        marginTop: 2,
        alignItems: 'center',
    },
    name: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        fontSize: 18,
    },
    body: {
        marginLeft: 10,
        marginRight: 10,
        width: Dimensions.get('window').width - 120,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

});

export default styles;