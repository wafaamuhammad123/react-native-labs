import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={{backgroundColor:"aqua",marginTop:30 ,fontSize:15,textAlign:"left",textAlignVertical:"center",padding:20}}>nav</Text>
        <View style={styles.container}>
          <ScrollView  horizontal>
              <Image source={require('./assets/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.webp')} style={{width:395,height:200,resizeMode:"contain"}}></Image>
              <Image source={require('./assets/0b25f6b3-f215-4938-ac81-581eb3929047.webp')} style={{width:395,height:200,resizeMode:"contain"}}></Image>
              <Image source={require('./assets/5e249106-66d9-4638-99aa-6b8fc38f3203.webp')} style={{width:395,height:200,resizeMode:"contain"}}></Image>
              <Image source={require('./assets/9833de62-35b7-41f2-8a24-0d9354150ea7.webp')} style={{width:395,height:200,resizeMode:"contain"}}></Image>
          </ScrollView>
        </View>
    </View>  
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems: "flex-start",
    justifyContent: 'center',
  },
});
