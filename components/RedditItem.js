import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const RedditItem = ({item}) => (
    <View style={styles.item}>
        <Text>{item.data.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#ECF0F1",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    }
});