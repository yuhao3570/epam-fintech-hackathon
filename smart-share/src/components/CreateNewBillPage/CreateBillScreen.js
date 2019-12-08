import React from 'react';
import { View, Text, Input, Button} from 'native-base';
import styles from 'styles/CreateBillScreenStyle';

export default function CreateBillScreen({ navigation }){
  return (
    <View style={styles.createBillView}>
      <Text >Add later</Text>
      <Input></Input>
      <Button
        onPress={()=>{navigation.navigate('SelectPage')}}><Text>走</Text></Button>
    </View>
   
  )
}

const mapStateToProps = ({items}) => ({
  // items.;
})

const mapDispatchToProps = (dispatch) => ({

})