import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,TouchableHighlight, Image, Button, View,TextInput} from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <SafeAreaView >
      
       <View style={styles.icons}> 

       <TouchableHighlight style={styles.menu} onPress={() =>console.log("On press image")}>
       <View >
       <Image source={require('./assets/menu_vertical_24px.png')}/>
       </View>
       </TouchableHighlight>

       <TouchableHighlight onPress={() =>console.log("On press image")}>
<View style={styles.search} >
       <Image source={require('./assets/search_24px.png')}/>
</View>
</TouchableHighlight>

<TouchableHighlight style={styles.arrow} onPress={() =>console.log("On press image")}>
<View style={styles.arrow}>
<Image source={require('./assets/arrow_pointing_left_24px.png')}/> 
</View>
</TouchableHighlight>
       
</View>

<View style={styles.st}>
       <View style={styles.container} > 
       <TouchableHighlight style={styles.image} onPress={() =>console.log("On press image")}>
       <Image style={styles.image} source={require('./assets/h.jpg')}/>

       </TouchableHighlight>
       <Text style={styles.text}>Pragmatic International Trading PLC</Text>
       </View>
       
       </View>


<View style={styles.bottom}>

 <TextInput
 //alignItems='flex-start'
maxLength={40}
 //position='absolute'
 placeholder="enter text here"
 
 />


       <View style={styles.button}>
     <Button 
       title='Send'
       color='green'
       borderRadius='40'
       marginTop={200}
       onPress={() => console.log("button pressed")}
      />
       
       </View>
       </View>
       
       
    <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
   // flex: 1,
    //backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-20,
    //paddingTop:Platform.OS === "android"? StatusBar.currentHeight :0,
    //paddingTop: 32,
  },
  image:{
   // flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    borderRadius:400/2,
    borderColor:'#acecac',
    borderLeftWidth:10,
    borderRightWidth:10,
    borderEndWidth:8,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    paddingTop:5,
    fontWeight:'bold',
    marginTop:1,
  },
  icons:{
    backgroundColor:'#eafaea',
    paddingTop:70,
    //marginTop:30,
    height:100,
    //alignItems:'flex-end',
    flexDirection:'row-reverse',

  },
  button:{
    //paddingTop:200,
    //backgroundColor:'red',
    //bottom:0,
    alignItems:'flex-end',
    //marginTop:400,
    marginRight:10,
    marginLeft:320,
    position:'absolute',
  },
  st:{
   // backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search:{
    marginLeft:10,
    //alignItems:'flex-end',
    //color:'green',
    },
    arrow:{
      paddingRight:145,
     // alignItems:'flex-end',
    },
    menu:{
      borderRadius:900/2,
      paddingLeft:25,
      paddingRight:15,
      //resizeMode: 'stretch',
      backgroundColor:'#eafaea',
      //paddingLeft:370,
      //height:25,
      
    },
    bottom:{
      flexDirection:'row',
      paddingTop:200,
    bottom:0,
    alignItems:'flex-end',
    marginTop:400,
   // position:'absolute',
    }
})
