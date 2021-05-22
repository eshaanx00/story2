import React, { Component } from 'react'
import {TextInput, View, Text ,TouchableOpacity, StyleSheet} from 'react-native';
import db from '../config'
import firebase from 'firebase';

export default class WriteStoryScreen extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }
    uploadStory=()=>{
    db.collection("Story").doc(this.state.title).set({
        title:this.state.title,
        author:this.state.author,
        story:this.state.story
    })
    }
    render() {
        return (
            <View>
                <TextInput style={styles.inputStyle} onChangeText={(value)=>{this.setState({title:value})}} placeholder="Story Title"></TextInput>
                <TextInput style={styles.inputStyle} onChangeText={(value)=>{this.setState({author:value})}} placeholder="Author"></TextInput>
                <TextInput multiline={true} onChangeText={(value)=>{this.setState({story:value})}} style={styles.bigInputStyle} placeholder="Write your story"></TextInput>
                <TouchableOpacity style={styles.opacityStyle} onPress={()=>{
                    this.uploadStory()
                }}><Text style={{alignSelf:'center',marginTop:5,marginLeft:2}}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputStyle:{
        marginTop:35,
        borderWidth:1,
        width:300,
        textAlign:'center',
        marginLeft:30
    },
    bigInputStyle:{
        marginTop:35,
        borderWidth:1,
        width:300,
        height:100,
        textAlign:'center',
        marginLeft:30
    },
    opacityStyle:{
        width:100,
        height:30,
        marginTop:50,
        backgroundColor:'pink',
        marginLeft:135,
        textAlignVertical:'center',
        borderRadius:5
    }
})
