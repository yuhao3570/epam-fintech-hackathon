import React from 'react';
import { View, Text, Input} from 'native-base';
import styles from 'styles/CreateBillScreenStyle';

export default function CreateBillScreen({ navigation }){
  return (
    <View style={styles.createBillView}>
      <Text >Add later</Text>
      <Input></Input>
    </View>
   
  )
}

const mapStateToProps = ({items}) => ({
  // items.;
})

const mapDispatchToProps = (dispatch) => ({

})