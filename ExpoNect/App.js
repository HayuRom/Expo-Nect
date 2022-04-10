import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,TouchableHighlight, Image, Button,} from 'react-native';
//import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.icons}>icon</Text>
       <TouchableHighlight style={styles.image} onPress={() =>console.log("On press image")}>
       <Image style={styles.image} source={require('./assets/h.jpg')}/>

       </TouchableHighlight>
      

      <Text style={styles.text}>Pragmatic International Trading PLC</Text>
      <Button style={styles.button}
       title='Send'
       //color='Black'
       //backgroundColor='black'
       onPress={() => console.log("button pressed")}
      />
    <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop:Platform.OS === "android"? StatusBar.currentHeight :0,
    paddingTop: 32,
  },
  image:{
    width: 90,
    height: 90,
    resizeMode: 'stretch',
    borderRadius:400/2,
  },
  text:{
    paddingTop:5,
    fontWeight:'bold',
  },
  icons:{
    backgroundColor:'grey',
    paddingTop:30,
  },
  button:{
    paddingTop:200,
    backgroundColor:'red',
    bottom:0,
    position:'absolute',

  },
})
