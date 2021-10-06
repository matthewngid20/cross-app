import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect}from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const Item = (props) => {
    return (
      <View> 
        <Text> {props.text}</Text>
      </View>
    )
  }

  const AppData = [
    {id :1, name: "Apple"},
    {
      id : 2, name: "Orange"
    },
    {
      id : 3, name: "Avocado"
    },
    {
      id : 4, name: "Pineapple"
    },
    {
      id : 5, name: "Banana"
    }
  ]

  const Renderer = ({item}) => {
    return (
      <Item text = {item.name}/>
    )
  }
  return (
    <View style={styles.container}>
      <Text></Text>
      <FlatList
      data = {AppData}
      keyExtractor = { (item) => item.id.toString()}
      renderItem= {Renderer}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
