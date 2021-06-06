import React from 'react';
import {SafeAreaView} from 'react-native';
import { StyleSheet, Text, View, Image, FlatList, Platform, StatusBar } from 'react-native';
import { Container, Header, Content, ListItem, Left, Body } from 'native-base';
import {Auth} from 'aws-amplify';
import Button from '../../components/Button';
import MyIcon from '../../components/MyIcon';

const MenuScreen = () => {
  const onLogout = () => {
    Auth.signOut();
  };

  return (
    <SafeAreaView>
        <View style={[{ height: 40, backgroundColor: '#820fd4', justifyContent: 'center' }, styles.androidHeader]} >
          <ListItem noBorder style={{ justifyContent: 'space-between' }} >
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
              <Text style={{ fontSize: 8, color: '#fff', fontWeight: 'bold', justifyContent: 'center' }} >
                Kisaan Mandi
              </Text>
            </View>
          </ListItem>
        </View>
        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: '#f0f0f0'}}
          data={[
            { key: 'Vegetables' }, 
            { key: 'Fruits' }, 
          ]}
          renderItem={({item}) => (
            <ListItem noBorder style={{ alignItems: 'baseline' }} >
              <Text style={{ color: '#9E9E9E',}} >{item.key}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: '#f0f0f0'}}
          data={[
            { key: 'Offer Zone' }, 
            { key: 'Notifications' }, 
          ]}
          renderItem={({item}) => (
            <ListItem noBorder style={{ alignItems: 'baseline' }} >
              <Text style={{ color: '#9E9E9E' }} >{item.key}</Text>
            </ListItem>
          )}
        />
        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: '#f0f0f0'}}
          data={[
            { key: 'My Cart' }, 
            { key: 'My Wishlist' }, 
            { key: 'My Orders' }, 
            { key: 'My Account' }, 
          ]}
          renderItem={({item}) => (
            <ListItem noBorder style={{ alignItems: 'baseline' }} >
              <Text style={{ color: '#9E9E9E' }} >{item.key}</Text>
            </ListItem>
          )}
        />
        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: '#f0f0f0'}}
          data={[
            { key: 'Register as a Seller' },
            { key: 'Stores' },
            { key: 'My Chats' },
            { key: 'Help' },
          ]}
          renderItem={({item}) => (
            <ListItem noBorder style={{ alignItems: 'baseline' }} >
              <Text style={{ color: '#9E9E9E' }} >{item.key}</Text>
            </ListItem>
          )}
        />
     
      <Button text="Sign out" onPress={onLogout} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navbar: { 
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 10,
      backgroundColor: '#2874f0', 
      elevation: 3,
  },
  navbarTop: { 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      
      padding: 15,
  },
  logo: {
      width: 80,
      height: 27,
  },
  icons: {
      color: '#ecf0f1',
      fontSize: 18,
      padding: 5,
      marginRight: 15,
      alignItems: 'center',
  },
  input: {
      height: 40,
      flexDirection: 'row', 
      borderRadius: 3,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
  }
});
export default MenuScreen;
