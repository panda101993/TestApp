import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
    
      <Text
      style={{
          fontSize:40,
          color:"green"
      }}>Welcome!!!!</Text>
     
    </View>
  )
}
export default Home;
