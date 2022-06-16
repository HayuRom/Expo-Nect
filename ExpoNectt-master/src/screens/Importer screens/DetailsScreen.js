import React from 'react';
import {View, SafeAreaView, Image, Text, ImageBackground,HyperLink,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import ViewMoreText from 'react-native-view-more-text';
import ReadMore from 'react-native-read-more-text';  
 

const DetailsScreen = ({ navigation }) => {
  _handleTextReady = () => {
    console.log('ready!');
  }
  
  return (
    
    <SafeAreaView>
      <View>
      
      <View>
      <View>
        <Pressable onPress={() => console.log("pressed")}>
      <ImageBackground
            source={require('../../../assets/coffee.png')}
            style={{ height: 250, width: 200, alignItems: 'center', alignSelf: 'center',marginTop:10 }}
          />
          </Pressable>
      </View>
  <Text  style={{fontSize:20, fontWeight:'bold', alignItems: 'center', alignSelf: 'center',marginTop:10 }}>Hadero Roasted and Packed Coffee </Text>
  </View>
  <View>
 <Pressable onPress={() => navigation.navigate('ExporterProfile')}>
 <Text style={{fontSize:16, fontWeight:'bold'}}>From</Text>
  <Text  style={{textDecorationLine:'underline',fontSize:18 , fontWeight:'bold', color:'green'}}> Hadero Coffee PLC </Text>
  </Pressable>
  <View>
    <Text>Description......  readmore</Text>
  </View>
  <Text>Price $4</Text>
  <Text>Availabel Amount ....</Text>
  </View>
  <View >
        <View >
          <ReadMore
            numberOfLines={2}
            onReady={this._handleTextReady}>
            <Text >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </ReadMore>
        </View>
      </View>
  </View>
  
   </SafeAreaView>
  )
  
  };
  

export default DetailsScreen;  