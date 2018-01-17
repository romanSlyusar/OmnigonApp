import { StackNavigator } from "react-navigation";
import Screen1 from "../modules/screen1/";
import Settings from "../modules/settings/";

const navigator = StackNavigator({
    settings: {
        screen: Settings
    },
    screen1: {
        path: 'posts',
        screen: Screen1
    },
});

export default navigator;
