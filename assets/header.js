import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native'

export default class Header extends React.Component{
render(){
    return(
    <View style={{backgroundColor:'pink',width:window.innerWidth,height:50}}>
    <Text style={styles.textStyle}>Story Hub</Text>
    </View>
    )
}
}

const styles=StyleSheet.create({
textStyle:{
    fontSize:25,
    alignSelf:"center",
    color:'black'
}
})