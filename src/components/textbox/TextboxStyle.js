import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textboxContainer:{
        marginTop: 10, 
        backgroundColor: '#fff'
    },
    lable:{
        marginLeft: 5, 
        color: '#000', 
        fontSize: 15
    },
    errorMessagecontainer: {
        margin: 5
    },
    errorText:{
        backgroundColor: '#333', 
        borderRadius: 5 
    },
    textStyle:{ 
        color: '#fff', 
        padding: 10, 
        fontSize: 15 
    },
    textInputStyle:{ 
        borderColor: '#ccc', 
        borderRadius: 5, 
        borderWidth: 1, 
        fontSize: 18, 
        color: '#00B0CA', 
        margin: 5,
        padding: 7 
    },
    arrowStyle:{
        alignSelf: 'flex-start', 
        marginLeft: 15 
    }
})