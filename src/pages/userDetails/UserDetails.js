import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Triangle from 'react-native-triangle';
import axios from 'axios';
import { styles } from './UserDetailsStyle';
import Spinner from 'react-native-loading-spinner-overlay';

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountDetails: {
                firstName: '',
                lastName: '',
                email: '',
                msisdn: '',
                addressOne: '',
                addressTwo: '',
            },
            spinner: true
        }
        this.state.accountDetails = this.props.screenProps.details;
    }
    render() {
        return (
            <View>

                <View style={styles.detailsSectionStyle}>
                    <View style={styles.detailsSectionTitleStyle}>
                        <Text style={styles.detailsTitleTextStyle}>Tus datos personales</Text>
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={styles.textStyle}>Nombre del titular</Text>
                        <Text style={styles.secondTextStyle}>{this.state.accountDetails.firstName} {this.state.accountDetails.lastName}</Text>
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={styles.textStyle}>Teléfono de contacto</Text>
                        <Text style={styles.secondTextStyle}>{this.state.accountDetails.msisdn}</Text>
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={styles.textStyle}>Email de contacto</Text>
                        <Text style={styles.secondTextStyle}>{this.state.accountDetails.email}</Text>
                    </View>
                    <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('EditDetails') }}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>
                                    Editar informacion de contacto
                                        </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={styles.textStyle}>Número de Documento</Text>
                        <Text style={styles.secondTextStyle}>54100997-Y</Text>
                    </View>
                </View>
                <View style={styles.detailsSectionStyle}>
                    <View style={styles.detailsSectionTitleStyle}>
                        <Text style={styles.detailsTitleTextStyle}>Dirección de contacto</Text>
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={styles.textStyle}>Calle</Text>
                        <Text style={styles.secondTextStyle}>{this.state.accountDetails.addressOne}</Text>
                        <Text style={styles.secondTextStyle}>{this.state.accountDetails.addressTwo}</Text>
                    </View>
                    <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                        <TouchableWithoutFeedback onPress={() => { alert('hghghgh') }}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>
                                    Traslado de domicilio
                                        </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        )
    }
}