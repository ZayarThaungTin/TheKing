import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {
    Container, 
    Content,
    Form,
    Item,
    Input
} from 'native-base';

const AddTransactionScreen = ({navigation}) => {
    return (
        <Container>
            <Content>
                <Form>
                    <Item style={{...styles.item}}>
                        <Input placeholder="Expense Title" />
                    </Item>
                    <Item style={{...styles.item}}>
                        <Input placeholder="Expense Price" keyboardType="number-pad" />
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 20
    }
})

export default AddTransactionScreen;