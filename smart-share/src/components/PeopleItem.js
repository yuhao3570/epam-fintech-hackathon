import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput} from 'react-native';
import { Text,ListItem, Content } from 'native-base';

import styles from '../styles';

const PeopleItem = ({ data , fn}) => {
  const colon = ':'

  const renderItems = items =>
    items.map(item => {
      return(
      <View key={item.index} style={styles.detailItem}>
        <ListItem>
          <Text style={styles.itemTitle}>name
          {colon}
          </Text>
          <TextInput style = {styles.itemData} onEndEditing = {(Text)=>{console.log(Text.nativeEvent.text)}
            // {array[item.index].name = (Text.nativeEvent.text);console.log(array)}
            //传值报错
            // {fn(item.index, Text.nativeEvent.text)}
            }/>
        </ListItem>
      </View>
    )}
    );

  return <View style={styles.detailSection}>{renderItems(data)}</View>;
};

PeopleItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      name: PropTypes.any
    })
  ).isRequired
};

export default PeopleItem;
