import { Text, View,Button,StyleSheet,ScrollView,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Chatlist = ({navigation}) => {
    
    return (
        
    <View style={styles.container}>
           
        <View style={styles.body}>
<ScrollView>

<TouchableOpacity style={styles.textconvo1} onPress={() => navigation.navigate('Chatbox')}>
       <View > 
       
       
        
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         
      </View>

      <Text style={styles.text}>Hadero Coffee</Text>
      <View style={styles.icon}>
      <Ionicons  name="checkmark-done-sharp" size={24} color="black" />
      </View>
      
      </TouchableOpacity>

      <TouchableOpacity style={styles.textconvo1} onPress={() => navigation.navigate('Chatbox')}>
       <View > 
       
       
        
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         
      </View>

      <Text style={styles.text}>Pragmatic Internatinal Trading Plc</Text>
     

      
      </TouchableOpacity>


       <View style={styles.textconvo1}> 
       
       <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chatbox')}>
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         </TouchableOpacity>
      </View>

      <Text style={styles.text}>Pragmatic Internatinal Trading Plc </Text>


      
       </View>

       <View style={styles.textconvo1}> 
       
       <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chatbox')}>
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         </TouchableOpacity>
      </View>

      <Text style={styles.text}>Pragmatic Internatinal Trading Plc</Text>
       </View>

       <View style={styles.textconvo1}> 
       
       <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chatbox')}>
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         </TouchableOpacity>
      </View>

      <Text style={styles.text}>Pragmatic Internatinal Trading Plc</Text>
       </View>

       <View style={styles.textconvo1}> 
       
       <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chatbox')}>
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         </TouchableOpacity>
      </View>

      <Text> fehrhg</Text>
       </View>

       <View style={styles.textconvo1}> 
       
       <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chatbox')}>
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         </TouchableOpacity>
      </View>

      <Text> fehrhg</Text>
       </View>

       <View style={styles.textconvo1}> 
       
       <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chatbox')}>
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         </TouchableOpacity>
      </View>

      <Text>Pragmatic Internatinal Trading Ltd</Text>
       </View>

       <View style={styles.textconvo1}> 
       
       <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chatbox')}>
           <ImageBackground 
               style={styles.image}
               source={require('../../../assets/coffee.png')} > 
           </ImageBackground>
         </TouchableOpacity>
      </View>

      <Text> fehrhg</Text>
       </View>
      

       

</ScrollView>
       </View>
    </View>
    );
    
    
}

export default Chatlist;

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    body:{

flex:1,
backgroundColor:'white',
    },
   
    image:{
       
      height:60,
      width:60,
      borderWidth:1,
      borderRadius:15,

   },
    
    textconvo1:{
      
margin:2,
      padding:20,
      paddingLeft:15,
      backgroundColor:'#d9f2e6',
      borderRadius:10,
      flexDirection:'row',


    },
    text:{
      
      margin:2,
            padding:20,
            paddingLeft:15,
            backgroundColor:'#d9f2e6',
            borderRadius:10,
            flexDirection:'row',
            fontFamily:'sans-serif-medium',
      
      
          },
          icon:{
      
            margin:2,
                  padding:15,
                  paddingLeft:15,
                  marginLeft:140,
                  flexDirection:'row',
                
            
            
                },
   

  }
  );

