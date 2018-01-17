import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Field } from 'redux-form';

const renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
};

class Settings extends Component {
    static navigationOptions = {
        title: "Settings"
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <View style={styles.container}>
                <Text>Feed URL:</Text>
                <Field name="feedURL" component={renderInput} />
                <Text>Number of Posts</Text>
                <Field name="numberOfPosts" component={renderInput} />
                <Text>Update Interval</Text>
                <Field name="updateInterval" component={renderInput} />
                <TouchableOpacity onPress={handleSubmit(this.props.onSubmit)}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250
    },
    container: {
        flex: 1,
        backgroundColor: "yellowgreen",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250
    }
})

export default Settings
