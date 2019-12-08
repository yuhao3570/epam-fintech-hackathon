import React, { useState,useEffect } from 'react';
import { View, ScrollView} from 'react-native';
import { Content, Container, Card, CardItem, Text } from 'native-base';
import PeopleItem from './PeopleItem';
import styles from '../styles';


const dataFromRedux = 3

const PeopleCard = ({addUser}) => {
  const [array, setArray] = useState([])

  for(let num = 0;num<dataFromRedux;num++){
    array.push({index: num, name: null})
  }

  // changeArr = (index, name) => {
  //   setArray(...array, array[index].name = name)
  // }

  return (
    <Content  padder style={styles.secondCard}>
      <Card transparent>
        <Text style={styles.title}>People</Text>
      </Card>

      <Card>
        <View style={styles.detail}>
          <PeopleItem data={array} />
        </View>
        <CardItem button onPress={() => {addUser(array)}}>
          <Text>Submit</Text>
        </CardItem>
      </Card>
    </Content>
  );
};

export default PeopleCard
