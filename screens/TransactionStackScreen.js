import 'react-native-gesture-handler';
import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

/* Redux */
import { Provider } from 'react-redux';
import store from './store';

/* Screens */
import TransactionScreen from './TransactionScreen';
import AddTransactionScreen from './AddTransactionScreen';

import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
// import LinearGradient from "react-native-linear-gradient";
// import {
//     Button,
//     Container, 
//     Content,
//     Form,
//     Item,
//     Input,
//     Checkbox,
//     Body,
//     Right,
// } from 'native-base';
// import Animated from "react-native-reanimated";

const Stack = createStackNavigator();

const TransactionStackScreen = ({navigation}) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Transactions" component={TransactionScreen}/>
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen}/>
    </Stack.Navigator>
);

export default TransactionStackScreen;

const styles =StyleSheet.create({
    Box: {
        width: '100%',
        height: 189,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 22,
    },
    item: {
        marginVertical: 20
    }
});