import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput,Image } from "react-native";

const Plant = (props) => {
  const [needWater, setNeedWater] = useState(true);
  const [waterTime, setWaterTime] = useState(3000);

  return (
    <View>
      <Text style = {styles.nameStyle}>
        I am {props.name}, and I {needWater ? "need water" : "am watered"}!
      </Text>
      <Text style = {styles.TextStyle}>
        I am {props.description} !
      </Text>
      <Image source={{uri : props.imageLink}} style={styles.ImageBackground}/>
      <Button
        onPress={() => {
          setNeedWater(false); 
          setTimeout(
            () => {
              setNeedWater(true)
            }, waterTime
          );
        }}
        disabled={!needWater}
        title={needWater ? "Please water me!" : "Thank you!"}
      />
      <TextInput
        style = {{height: 40,borderBottomWidth:0.5}}
        placeholder = 'Enter watering time'
        onChangeText = { inputValue => setWaterTime(inputValue) }
        defaultValue = { waterTime }
      />
    </View>
  );
}

const plants = [
  {
    id:1,
    name:'Catcus',
    description:'Hi I\'m Cacti and watering once every ten to fourteen days should be adequate during the growing season.',
    imageLink: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id:2,
    name:'Bonsai',
    description:'Hi i am Bonsai, Water me when my whne my soil lookes dry',
    imageLink: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
];

const Plants = () => {
  return plants.map(
    (plant) => {
      return (
        <Plant key={plant.id} name={plant.name} description={plant.description} imageLink={plant.imageLink}/>
      );
    }
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      {Plants()}
    </View>
  );
}

// React Native Styles
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImageBackground: {
    height: 250,
    width: 300,
    margin: 10,
    borderRadius: 10
  },
  TextStyle:{
    width:300,
  },
  nameStyle:{
    fontSize: 20,
fontWeight: 'bold'
  }
});

export default App;