import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, Platform,Alert } from 'react-native';
import axios from 'axios';
import MapView, {Marker } from 'react-native-maps';
import IssInfo from "./IssInfo";

export default class IssLocationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {}
        };
    }
    componentDidMount() {
        //queremos exibir o mapa assim que a tela carregar
        this.getIssLocation();
    }
    getIssLocation = () => {
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
            .then((response) => {
                this.setState({
                    location: response.data
                })
                console.log(response.data);
            })
            .catch(error => {
                Alert.alert(error.message)
            });
    }
    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground
                        source={require('../assets/iss_bg.jpg')}
                        style={styles.backgroundImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Localização da EEI</Text>
                        </View>
                        <View style={styles.mapContainer}>
                            <MapView style={styles.map}
                                initialRegion={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100
                                }}>
                                <Marker coordinate={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude
                                }}>
                                    <Image source={require('../assets/iss_icon.png')}
                                        style={{ height: 50, width: 50 }} />
                                </Marker>
                            </MapView>
                        </View>
                        <IssInfo />
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    mapContainer: {
        flex: 0.6
    },
    map: {
        width: '100%',
        height: '100%'
    }
});