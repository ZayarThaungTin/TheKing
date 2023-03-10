import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {
    Button,
    Container,
    Checkbox,
    Body,
    Right,
    ListView

} from 'native-base';
import Animated from "react-native-reanimated";
import { useSelector } from "react-redux";

function Item({title, price, id}){

    return (
        <View style={{
            marginVertical: 3,
            paddingHorizontal: 30,
            paddingVertical: 15,
        }}>
            <ListView>
                <Checkbox />

                <Body>
                    <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 10}}>
                        {title}
                    </Text>
                </Body>

                <Right>
                    <Text style={{fontFamily: 'Roboto-bold', fontSize: 14, fontWeight: '400', color: true ? '#009BFC' : '#FF4500'}}>
                        {price > 0 ? `${price}Ks` : `${price}Ks`}
                    </Text>
                </Right>
            </ListView>
        </View>
    )
}

const TransactionScreen = ({navigation}) => {
    const {transactions} = useSelector((state) => state.transactions);
    return (
        <Container>
        <Animated.View style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20
        }}>
            <LinearGradient 
                colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
                style={{...styles.Box}}
            >
                <View style={{width: '100%', alignItems: 'flex-start'}}>
                    <Text 
                        style={{
                            fontSize: 15, 
                            color: '#fff', 
                            fontFamily: 'Roboto-Regular', 
                            fontWeight: '600'
                        }}
                    >
                        Current Balance
                    </Text>
                    <Text style= {{
                        fontFamily: 'Roboto-Bold',
                        fontSize: 32,
                        color: '#fff',
                        fontWeight: '700'
                    }}>
                        5,477.85Ks
                    </Text>
                    <Text style={{
                        marginTop: 67,
                        color: '#fff',
                        fontFamily: 'Roboto-Regular',
                        fontSize: 18,
                        fontWeight: '700'
                    }}>4234 **** **** 6533</Text>
                </View>

                <View style={{
                    alignItems: 'flex-end',
                    width: '30%',
                }}>
                    <Text style={{fontSize: 18, color: '#fff', fontFamily: 'Roboto-Bold', fontWeight: '600'}}>
                        KYAT
                    </Text>
                    <View style={{flex: 1}}>
                    <Button
                        rounded
                        light
                        style={{
                            padding: 10,
                            marginTop: 32,
                            borderWidth: 3,
                            borderColor: '#fff',
                            backgroundColor: '#E10C62',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress = {() => {navigation.navigate('AddTransaction')}}
                    >
                        <Text style={{color: '#fff', fontWeight: '700', fontFamily: 'Roboto-Medium', fontSize: 20}}>
                            Add
                        </Text>
                    </Button>
                    <Text style={{
                        marginTop: 17,
                        color: '#fff',
                        fontSize: 10,
                        fontWeight: '700',
                    }}>
                        Expense
                    </Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: '700',
                    }}>
                        200000Ks
                    </Text>
                    </View>
                </View>
            </LinearGradient>
            {/* <Text>Transaction Screen</Text> */}
        </Animated.View>
        <View style={{flex: 1, marginTop: -170}}>
                    {/* <View style={{alignItems: 'center', marginTop: 30}}>
                        <Text style={{color: '#ff4500', fontWeight: '700', fontSize: 20}}>
                            No transactions yet
                        </Text>
                    </View> */}

                    <FlatList 
                    data={transactions} 
                    renderItem={({item}) => (
                        <Item title={item.title} price={item.price} id={item.id} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    />
        </View>
        </Container>  
    );
};

const styles =StyleSheet.create({
    Box: {
        width: '100%',
        height: 189,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 22,
    }
})

export default TransactionScreen;