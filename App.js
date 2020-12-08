import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Reddit } from './api/Reddit';
import { RedditItem } from './components/RedditItem';

StatusBar.setBarStyle('dark-content');

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetcReddit = async () => {
      const results = await Reddit.get("javascript");
      setItems(results);
    };
    fetcReddit();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={items} renderItem={({ item }) => <RedditItem item={item} />}></FlatList>
    </SafeAreaView>
  );

};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
