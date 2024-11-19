/**
 * @format
 */
import {AppRegistry} from "react-native";
import "react-native-get-random-values";

import "@/locales/i18n";

import App from "./App";
import {name as appName} from "./app.json";
import "./gesture-handler";

AppRegistry.registerComponent(appName, () => App);
