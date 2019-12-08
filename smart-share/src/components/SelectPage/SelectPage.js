import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'native-base';

import ItemCard from './ItemCard';
import actions from 'actions/users';
import itemActions from 'actions/items';

function SelectPage({ addNewUser, itemInfo, users, peopleCount, updateItemCount, navigation }) {
  const [refresh, setRefresh] = useState(false);
  
  useEffect(() => {
    addNewUser()
  }, [addNewUser]);

  function handleVerify() {
    console.log(users.length, peopleCount);
    if (users.length === peopleCount) {
      updateItemCount(users);
      navigation.navigate('ResultScreen');
    } else {
      setRefresh(true);
    }

  }

  return (
    <View style={{ backgroundColor: 'rgb(245, 85, 77)' }}>
      <SafeAreaView>
        <ScrollView>
          <View style={{ marginTop: 24, marginLeft: 24, marginRight: 24 }}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput placeholder='input your name' />
            </View>
            <Button block style={{ backgroundColor: 'rgb(14, 45, 72)', borderRadius: 10, marginBottom: 24 }}>
              <Text style={{ color: 'white' }}>Select All</Text>
            </Button>
            {Object.keys(itemInfo).map((key) =>
              <ItemCard id={key} key={`item ${key}`} userId={users.length - 1} />
            )}
            <Button block style={{ backgroundColor: 'rgb(14, 45, 72)', borderRadius: 10, marginBottom: 24 }} onPress={handleVerify}>
              <TouchableOpacity >
                <Text style={{ color: 'white' }}>Verify</Text>
              </TouchableOpacity>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const mapStateToProps = ({ items, users, peopleCount }) => ({
  itemInfo: items,
  users,
  peopleCount
});

const mapDispatchToProps = dispatch => ({
  addNewUser: () => dispatch(actions.addNewUser),
  updateItemCount: (users) => dispatch(itemActions.updateItemCount(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPage);
