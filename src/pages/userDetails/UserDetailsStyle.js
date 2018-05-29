import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    titleStyle: {
        backgroundColor: '#000',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        opacity: 0.7,
        justifyContent: "center",
        //flex: 0.0,
        padding: 25,
        marginTop: 30
    },
    firstTitleStyle: {
        color: '#fff',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 30
    },
    bodyStyle: {
        flex: 1,
        backgroundColor: '#EBEBEB'
    },
    secondTitleStyle: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18
    },
    detailsSectionStyle: {
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
        paddingBottom: 10,
        shadowOffset: { width: 50, height: 50, },
        shadowColor: '#000',
        shadowOpacity: 0.8,
    },
    detailsSectionTitleStyle: {
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10
    },
    detailsTitleTextStyle: {
        color: '#333',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textStyle: {
        color: '#333',
        fontSize: 15,
        marginBottom: 5
    },
    secondTextStyle: {
        color: '#333',
        fontSize: 17
    },
    buttonStyle: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#999',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonTextStyle: {
        color: '#333',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15
    }

});