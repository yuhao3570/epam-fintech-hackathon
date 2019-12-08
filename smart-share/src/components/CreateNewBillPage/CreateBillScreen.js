import React, {useState} from 'react';
import { View, Text, Input, Button, Content, Container} from 'native-base';
import styles from 'styles/CreateBillScreenStyle';
import { connect } from 'react-redux';

function CreateBillScreen({ navigation, updatePeopleCount, updateItems, itemInfo }){
  const [numberOfPeople, setNumberOfPeopel] = useState('');
  const [inputedItems, setInputItems] = useState(itemInfo);

  const handlePeopelChange = ({nativeEvent}) => {
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
    navigation.navigate('ResultScreen');
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

      <Text >Items</Text>
      <Content style={styles.itemContent}>
        {Object.keys(inputedItems).map(key => 
          <Input
            key={key}
            value={key}
            onChange={(event) => resetItemKey(event, key)}
            style={styles.itemInput}
          />
        )}
      </Content>
      <Button onPress={navToNextPage}><Text>Create</Text></Button>
    </Container>
  );
}

const mapStateToProps = ({items}) => ({
  itemInfo: items,
})

const mapDispatchToProps = (dispatch) => ({
  updatePeopleCount: (number) => {dispatch({type: 'SET_PEOPLE_COUNT', payload: {number}})},
  updateItems: (items) => {dispatch({type: 'SET_ITEMS', payload: {items}})}
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBillScreen)