import React from 'react';
import { View, Button, Text} from 'native-base';
import styles from 'styles/HomeScreenStyle';

export default function HomeScreen({ navigation }){
  const handelResource = (targetPage) => {
    navigation.navigate(targetPage);
  }
  return (
    <View style={styles.homeView}>
      <Button 
        style={styles.resourceButton}
        onPress={() => navigation.navigate('CreateBillScreen')}>
        <Text style={styles.resourceButtonText}>Enter bill manually</Text>
      </Button>
      <Button 
        style={styles.resourceButton}
        onPress={() => handelResource('CreateBillScreen')}>
        <Text  style={styles.resourceButtonText}>Extract bill from photo</Text>
      </Button>
    </View>
  )
}