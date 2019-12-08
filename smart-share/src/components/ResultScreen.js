import React, { useEffect, useState } from 'react';
import { Container, Text, Content } from 'native-base';
import { connect } from 'react-redux';

function ResultScreen({ navigation, users, items }){
  const [ priceItems, setItems ] = useState({});
  console.log(priceItems['Beef']);
  useEffect(()=> {
    const tempItems = items;
    Object.keys(tempItems).forEach(key => tempItems[key].perPrice = tempItems[key].price / (tempItems[key].count || 1));
    setItems(tempItems);
  }, []);

  const calcShare = (selected)=> 
    (selected.reduce((a, b) => priceItems[a].perPrice + priceItems[b].perPrice));

  return (
    <Container>
      <Content>
        { ! Object.keys(priceItems).length <=0
          ? <Text>Loading</Text>
          : users.map(user => (
            <>
              <Text>{user.name}</Text>
              <Text>{calcShare(user.selected)}</Text>            
            </>
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
