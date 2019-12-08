import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'native-base';

import ItemCard from './ItemCard';
import actions from 'actions/users';

function SelectPage({ addNewUser, itemInfo, users }) {
  useEffect(() => {
    addNewUser()
  }, [addNewUser]);

  return (
    <View style={{ backgroundColor: 'rgb(245, 85, 77)' }}>
      <SafeAreaView>
        <ScrollView>
          <View style={{ marginTop: 24, marginLeft: 24, marginRight: 24 }}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput placeholder='input your name' />
            </View>
            <Button block style={{ backgroundColor: 'white', borderRadius: 10, marginBottom: 24 }}>
              <Text style={{ color: 'rgb(14, 45, 72)' }}>Select All</Text>
            </Button>
            {Object.keys(itemInfo).map((key) =>
              <ItemCard id={key} key={`item ${key}`} userId={users.length - 1} />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const mapStateToProps = ({ items, users }) => ({
  itemInfo: items,
  users
});

const mapDispatchToProps = dispatch => ({
  addNewUser: () => dispatch(actions.addNewUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPage);
