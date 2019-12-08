import React, { useEffect, useState } from 'react';
import { Container, Text, Content, Button, View} from 'native-base';
import { connect } from 'react-redux';

function ResultScreen({ navigation, users, items }){
  const [ itemPerPrice, setPrices ] = useState({});

  useEffect(()=> {
    const tempPrices = {};
    Object.keys(items).map(key => tempPrices[key] = items[key].price / (items[key].count || 1));
    setPrices(tempPrices);
  }, []);

  const calcShare = (selected)=> {
    let result = 0;
    selected.map((item) => result += itemPerPrice[item]);
    return result;
  }

  return (
    <Container>
      <Content>
        { Object.keys(itemPerPrice).length <=0
          ? <Text>Loading</Text>
          : users.map(user => (
            <View key={user.name}>
              <Text>{user.name}</Text>
              <Text>{calcShare(user.selected)}</Text>            
            </View>
          ))}
      </Content>
      <Button onPress={()=> navigation.navigate('Home')}>
        <Text>Share another bill</Text>
      </Button>
    </Container>
  )
}

const mapStateToProps = ({ items, users}) => ({
  items,
  users
})

export default connect(mapStateToProps)(ResultScreen);
