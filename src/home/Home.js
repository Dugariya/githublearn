import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Home = () => {
  let url = 'http://10.0.2.2:3000/users';
  const [userList, setUserList] = useState([]);

  const _getData = async () => {
    try {
      const res = await fetch(url, {
        method: 'get',
      });
      let result = await res.json();
      setUserList(result);
    } catch (error) {}
  };
  const _addUser = async () => {
    try {
      let dataObj = {
        name: 'pavan dugariya',
        age: 22,
        skill: 'react native developer',
      };
      let res = await fetch(url, {
        method: 'post',
        data: dataObj,
      });

      console.log(JSON.stringify(res));
      let result = await res.json();
      console.warn(result);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    _getData();
  }, [_addUser]);

  return (
    <View style={styles.container}>
      <Text style={styles.top_text_style}>API call json server in local</Text>
      <TouchableOpacity
        onPress={() => _addUser()}
        style={{
          alignSelf: 'flex-end',
          padding: 10,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: '#fff',
          backgroundColor: '#f0f0f038',
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}>
        <Text style={{color: '#000'}}>Add User</Text>
      </TouchableOpacity>
      <View>
        {userList.map((_item, _index) => {
          return (
            <View style={styles.card_container} key={_index}>
              <Text style={styles.text_style}>Name : {_item?.name}</Text>
              <Text style={styles.text_style}>Age : {_item?.age}</Text>
              <Text style={styles.text_style}>Skill : {_item?.skill}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abf7ffff',
    padding: 20,
  },
  top_text_style: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 2,
  },
  card_container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 10,
    shadowRadius: 10,
    shadowOffset: 1,
  },
  text_style: {
    color: '#000',
    paddingVertical: 5,
    fontSize: 16,
  },
});
