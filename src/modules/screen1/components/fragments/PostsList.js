import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const PostsList = ({ posts }) => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={posts}
                    renderItem={({item}) => {
                        return (
                            <View style={{paddingBottom: 25,paddingTop: 10, borderBottomColor: '#47315a',
                                borderBottomWidth: 1 }}>
                                <Text>{item.user.name}</Text>
                                <Text style={styles.item}>{item.text}</Text>
                                <Text style={{justifyContent: "flex-end"}}>{item.created_at}</Text>
                            </View>
                        )}}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default PostsList;

// skip this line if using Create React Native App
