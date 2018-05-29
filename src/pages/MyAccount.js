import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback, ScrollView,Dimensions } from 'react-native';
import Triangle from 'react-native-triangle';
import axios from 'axios';
import { styles } from './userDetails/UserDetailsStyle';
import Spinner from 'react-native-loading-spinner-overlay';
import { createStackNavigator } from 'react-navigation';
import UserDetails from './userDetails/UserDetails';
import EditDetails from './editUser/EditDetails';
const spinnerImage = require('../../images/morning-default.jpg');
const background = require('../../images/mvaBg2NdLevelMorning.jpg');

const screenHeight = Dimensions.get('window').height


export default class MyAccount extends Component {
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
        this.serviceId;
    }
    componentWillMount() {
        console.log('background image :',background);
        const data = this.props.data;
        console.log(data)
        axios.get('http://stubs-test.tsse.co/api/v2/subscription/subscriptions/')
            .then(
            res => {
                this.serviceId=res.data.items[0].parts[0].customerAccounts[0].id;
                this.getCustomerData(res.data.items[0].parts[0].customerAccounts[0].id);
            }).catch(error => {
                alert(error)
                this.setState({ spinner: false });
            });
    }
    getCustomerData(siteId) {
        axios.get('http://stubs-test.tsse.co/api/v2/customer/customerAccounts/' + siteId)
            .then(res => {
                const customerData = res.data;
                const address = res.data.address;
                this.setState({
                    accountDetails: {
                        firstName: customerData.firstName,
                        lastName: customerData.familyName,
                        email: customerData.email,
                        msisdn: customerData.msisdn,
                        addressOne: address.street + ' ' + address.buildingNumber + ', ' + address.level,
                        addressTwo: address.postcode + ', ' + address.town
                    },
                    spinner: false
                });
                this.data = this.state.accountDetails
            }).catch(error => {
                alert(error)
                this.setState({ spinner: false });
            });
    }
    render() {
        console.log('screen hieght:',screenHeight);
        data = {details:this.state.accountDetails,serviceId:this.serviceId}
        return (
            this.state.spinner ? (
                <View>
                    <ImageBackground resizeMode='cover' source={spinnerImage} style={styles.backgroundImage} >
                        <Spinner visible={this.state.spinner} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                    </ImageBackground>
                </View>)
                : (<View style={{flex:1,height:screenHeight,backgroundColor:'black',width:360}}>
                    <ScrollView contentContainerStyle={{flexGrow:1,height:screenHeight+200}}>
                        <ImageBackground resizeMode='cover' source={background} style={styles.backgroundImage} >
                            <Text style={styles.firstTitleStyle}>Tus datos</Text>
                            <View style={styles.titleStyle}>
                                <Text style={styles.secondTitleStyle}>{this.state.accountDetails.firstName} {this.state.accountDetails.lastName}</Text>
                                <Text style={styles.secondTitleStyle}>54100997-Y</Text>
                            </View>
                            <View style={styles.bodyStyle}>
                                <Triangle
                                    style={{ alignSelf: 'center' }}
                                    width={25}
                                    height={15}
                                    color={'#000'}
                                    direction={'down'}
                                />
                                <NavigationStack screenProps={data} />
                            </View>
                        </ImageBackground>
                        </ScrollView>
                        </View>
                       )

        )
    }
}
const NavigationStack = createStackNavigator({
    UserDetails: {
        screen: UserDetails,
        path: '/UserDetails'
    },
    EditDetails: {
        screen: EditDetails,
        path: '/EditDetails'
    }
},
    {
        headerMode: 'none'
    })