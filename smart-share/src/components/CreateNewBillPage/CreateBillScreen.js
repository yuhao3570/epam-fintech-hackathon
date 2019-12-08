import React, { useState } from 'react';
import { View, Text, Input, Button, Content, Container } from 'native-base';
import styles from 'styles/CreateBillScreenStyle';
import { connect } from 'react-redux';

function CreateBillScreen({ navigation, updatePeopleCount, updateItems, itemInfo }) {
  const [numberOfPeople, setNumberOfPeopel] = useState('');
  const [inputedItems, setInputItems] = useState(itemInfo);

  const handlePeopelChange = ({ nativeEvent }) => {
    setNumberOfPeopel(nativeEvent.text);
  }

  const resetItemKey = (event, key) => {
    const tempItems = inputedItems;
    tempItems[event.nativeEvent.text] = tempItems[key];
    delete tempItems[key];
    setInputItems(tempItems);
  }

  const navToNextPage = () => {
    updatePeopleCount(parseInt(numberOfPeople));
    updateItems(inputedItems);
    navigation.navigate('SelectPage');
  }

  return (
    <Container style={styles.createBillContainer}>
      <View style={styles.peopleView}>
        <Text >Enter the number of people to share:</Text>
        <Input
          placeholder='hello'
          value={numberOfPeople}
          onChange={handlePeopelChange}
        />
      </View>

      <View style={{backgroundColor: 'white', marginLeft: 24, marginRight: 24, height: '76%', borderRadius: 10, padding: 10, marginBottom: 24}}>
        <Text >Items</Text>
        <Content style={styles.itemContent}>
          {Object.keys(inputedItems).map(key =>
            <View key={key} style={{ backgroundColor: '' }}>
              <Input
                value={key}
                onChange={(event) => resetItemKey(event, key)}
                style={styles.itemInput}
              />
            </View>
          )}
        </Content>
      </View>
      <Button onPress={navToNextPage}><Text>CREATE!</Text></Button>
    </Container>
  );
}

const mapStateToProps = ({ items }) => ({
  itemInfo: items,
})

const mapDispatchToProps = (dispatch) => ({
  updatePeopleCount: (number) => { dispatch({ type: 'SET_PEOPLE_COUNT', payload: { number } }) },
  updateItems: (items) => { dispatch({ type: 'SET_ITEMS', payload: { items } }) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBillScreen)