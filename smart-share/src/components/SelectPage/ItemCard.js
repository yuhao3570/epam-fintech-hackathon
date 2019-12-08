import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import { connect } from 'react-redux';

import styles from './styles/itemCard';
import actions from 'actions/users';

function ItemCard({ id, addOneItem, userId }) {
	const [selected, setSelected] = useState(false);

	return (
		<TouchableOpacity activeOpacity={1} onPress={() => {setSelected(!selected); addOneItem(userId, id)}}>
			<Card style={[styles.card, selected && styles.selectedCard]}>
				<Text style={[styles.contentText, selected && styles.selectedText]}>{id}</Text>
			</Card>
		</TouchableOpacity>
	);
}

const mapDispatchToProps = dispatch => ({
  updatecount: (key)=> {},
	addOneItem: (userId, itemId) => dispatch(actions.addOneItem(userId, itemId)) 
});

export default connect(null, mapDispatchToProps)(ItemCard);
