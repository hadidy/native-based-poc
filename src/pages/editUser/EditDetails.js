import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import axios from 'axios';
import { styles } from '../userDetails/UserDetailsStyle';
import Triangle from 'react-native-triangle';
import Textbox from '../../components/textbox/Textbox';

export default class EditDetails extends Component {
    constructor(props) {
        super(props);
        this.details = this.props.screenProps.details;
        this.state = {
            name: this.details.firstName,
            firstLastName: this.details.lastName.split(' ')[0],
            SecondLastName: this.details.lastName.split(' ')[1],
            email: this.details.email,
            phoneNum: this.details.msisdn,
            forceShowError: false,
            emailError: false,
            phoneNumError: false,
            buttonStyle: {
                backgroundColor: '#666',
                paddingTop: 10,
                paddingBottom: 10
            }

        }
    }
    handelSubmit = () => {
        this.setState({ forceShowError: true });
        if (this.state.name === this.details.firstName && this.state.firstLastName === this.details.lastName.split(' ')[0] &&
            this.state.SecondLastName === this.details.lastName.split(' ')[1] &&
            this.state.email === this.details.email && this.state.phoneNum === this.details.msisdn) {
        }
        else if (this.state.email && this.state.firstLastName && this.state.name
            && this.state.SecondLastName && this.state.phoneNum &&
            !this.state.emailError && !this.state.phoneNumError) {
            axios.post('http://stubs-test.tsse.co/api/v2/customer/customerAccounts/' + this.props.screenProps.serviceId, {
                name: this.state.name,
                firstLastName: this.state.firstLastName,
                SecondLastName: this.state.SecondLastName,
                email: this.state.email,
                phoneNum: this.state.phoneNum
            })
                .then(response => {
                    alert('success');
                })
                .catch(error => {
                    alert(error);
                });

        }
        else {
        }
    }
    changeButtonColor = () => {

        if ((this.state.name && this.state.firstLastName && this.state.SecondLastName &&
            this.state.email && this.state.phoneNum) && (
                this.state.name !== this.details.firstName ||
                this.state.firstLastName !== this.details.lastName.split(' ')[0] ||
                this.state.SecondLastName !== this.details.lastName.split(' ')[1] ||
                this.state.email !== this.details.email ||
                this.state.phoneNum !== this.details.msisdn)) {
            this.setState({ buttonStyle: { ...this.state.buttonStyle, backgroundColor: 'red' } })
        }
        else {
            this.setState({ buttonStyle: { ...this.state.buttonStyle, backgroundColor: '#666' } })
        }
    }
    render() {
        return (
            <View style={styles.detailsSectionStyle}>
                <View style={styles.detailsSectionTitleStyle}>
                    <Text style={styles.detailsTitleTextStyle}>Editar datos personales</Text>
                </View>
                <View style={styles.detailsSectionStyle}>
                    <View>
                        <Textbox
                            label='Nombre del titular'
                            maxLength={30}
                            value={this.state.name}
                            onChangeText={(text) => {
                                button = this.state.buttonStyle;
                                this.setState({ name: text }, () => {
                                    this.changeButtonColor();

                                })
                            }}
                        />
                        <Textbox
                            label='Primer apellido'
                            maxLength={30}
                            value={this.state.firstLastName}
                            onChangeText={(text) => {
                                this.setState({ firstLastName: text }, () => { this.changeButtonColor(); })
                            }}
                        />
                        <Textbox
                            label='Segundo apellido'
                            maxLength={30}
                            value={this.state.SecondLastName}
                            onChangeText={(text) => {
                                this.setState({ SecondLastName: text }, () => { this.changeButtonColor(); })
                            }}
                        />
                        <Textbox
                            forceShowError={this.state.forceShowError}
                            showError={this.state.phoneNumError}
                            errorMessage='error'
                            label='Teléfono de contacto'
                            maxLength={9}
                            value={this.state.phoneNum}
                            onChangeText={(text) => {
                                this.setState({ phoneNum: text }, () => { this.changeButtonColor(); })
                                let reg = /^[9|6|7|8]{1}[0-9]{8}$/;
                                if (reg.test(text) === false && text) {
                                    this.setState({ phoneNumError: true });
                                    return false;
                                }
                                else {
                                    this.setState({ phoneNumError: false });
                                }
                            }}
                        />
                        <Textbox
                            forceShowError={this.state.forceShowError}
                            showError={this.state.emailError}
                            errorMessage='error'
                            label='Email de contacto'
                            value={this.state.email}
                            onChangeText={(text) => {
                                this.setState({ email: text }, () => { this.changeButtonColor(); })
                                let reg = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
                                if (reg.test(text) === false && text) {
                                    this.setState({ emailError: true });
                                    return false;
                                }
                                else {
                                    this.setState({ emailError: false });
                                }
                            }} />

                    </View>
                    <View style={{ padding: 5, marginTop: 15 }}>
                        <TouchableWithoutFeedback onPress={() => { this.handelSubmit() }}>
                            <View style={this.state.buttonStyle}>
                                <Text style={style.buttonTextStyle}>
                                    Guardar cambios
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

        );

    }
}
const style = {
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15
    }
}
