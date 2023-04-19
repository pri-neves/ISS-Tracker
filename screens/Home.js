import React, {Component} from 'react';
import {Text,View,StyleSheet,SafeAreaView,Platform,StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/bg_image.png')}
                    resizeMode="cover"
                    style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>
                          App Rastreador EEI
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=>this.props.navigation.navigate('IssLocation')}>
                        <Text style={styles.routeText}>
                            Localização da EEI
                        </Text>
                        <Image source={require('../assets/iss_icon.png')}
                        style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=>this.props.navigation.navigate('Meteor')}>
                        <Text style={styles.routeText}>
                            Meteoros
                        </Text>
                        <Image source={require('../assets/meteor_icon.png')}
                        style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=>this.props.navigation.navigate('Update')}>
                        <Text style={styles.routeText}>
                            Atualizações
                        </Text>
                        <Image source={require('../assets/rocket_icon.png')}
                        style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS === "android"?StatusBar.currentHeight:0
    },
    titleBar:{
        flex: 0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize: 40,
        fontWeight:"bold",
        color:"white"
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'white',
        alignItems:'center'
    },
    routeText:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:10,
        paddingTop:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    iconImage:{
        position:'absolute',
        height:100,
        width:100,
        resizeMode:'contain',
        right:100,
        top:5
    }
});