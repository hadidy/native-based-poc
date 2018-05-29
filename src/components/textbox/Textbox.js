
import React, { Component } from 'react';
import { View, Text, TextInput,Image} from 'react-native';
import Triangle from 'react-native-triangle';
import {styles} from './TextboxStyle';
export default class Textbox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(

        <View style={styles.textboxContainer}>
            <Text style={styles.lable}>
                {this.props.label}
            </Text>
            {this.props.showError && this.props.forceShowError ? (<View style={styles.errorMessagecontainer}>
                <View style={styles.errorText}>
                    <Text style={styles.textStyle} >
                        <Image source={require('../../../images/iconAlertCopia.png')}/> 
                        <Text>
                        {this.props.errorMessage}
                        </Text>
                    </Text>
                </View>
                <Triangle
                    style={styles.arrowStyle}
                    width={20}
                    height={10}
                    color={'#333'}
                    direction={'down'}
                />
            </View>) : <View></View>}

            <TextInput style={styles.textInputStyle}
                underlineColorAndroid='transparent'
                {...this.props}
                 />
        </View>
        )
    }
}