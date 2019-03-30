import { createAppContainer, createStackNavigator } from "react-navigation";
import { PermissionsAndroid } from "react-native";
import { init, connect } from "rongcloud-react-native-imlib";
import * as examples from "./examples";

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).catch(() => {});

init("n19jmcy59f1q9");
connect("FrdcuKklUMoGh+VkhUxezXxpRjANxKgfakOnYLFljI9gLUrCB690FgW7+nh1NhEYZUsv73YwHabXQU7yFrr8ow==");

export default createAppContainer(
  createStackNavigator(examples, {
    initialRouteName: "default"
  })
);
