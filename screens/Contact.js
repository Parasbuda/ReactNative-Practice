import React from 'react'
import {View,Text,Platform,StyleSheet, StatusBar} from "react-native"
const Contact = () => {
    return (
      <View style={styles.container}>
          <Text style={{color:"green"}}>Hello from Contact Component</Text>
      </View>
    )
}
const styles=StyleSheet.create({
container:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0,

}
})

export default Contact
