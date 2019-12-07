import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import ItemCard from './ItemCard';
import actions from 'actions/users';

function SelectPage({ addNewUser, itemInfo, users }) {
  useEffect(() => {
    addNewUser()
  }, [addNewUser]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginTop: 46 }}>
          {itemInfo.map(item => 
            <ItemCard id={item.id} title={item.title} key={`item ${item.id}`} userId={users.length - 1}/>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = ({items, users}) => ({
  itemInfo: items,
  users
});

const mapDispatchToProps = dispatch => ({
  addNewUser: () => dispatch(actions.addNewUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPage);
