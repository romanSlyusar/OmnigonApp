import React, { Component } from "react";
import { View } from "react-native";
import PostsList  from './fragments/PostsList'

class Screen1View extends Component {
    static navigationOptions = {
        title: "Posts List"
    };

    componentDidMount(){

        // TODO: handle this in saga
        const {settings} = this.props;

        this.props.getPosts(settings.numberOfPosts, settings.feedURL);

        this.setState({
            interval: setInterval(() =>{
                this.props.getPosts(settings.numberOfPosts, settings.feedURL);
            }, +settings.updateInterval)
        });

    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const { posts } = this.props;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "yellowgreen",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <PostsList
                    posts={posts.list}
                />
            </View>
        );
    }
}

export default Screen1View;
