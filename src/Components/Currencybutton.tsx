import React from "react";
import { PropsWithChildren } from "react";

import { View, StyleSheet, Text } from 'react-native';


type CurrencybuttonProps = PropsWithChildren<{
    name: string
    flag: string
}>

const CurrencyButton = (props: CurrencybuttonProps): JSX.Element => {

    return (
        <View style={styles.btnContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )


}

const styles = StyleSheet.create(
    {
        btnContainer: {
            alignItems: 'center'
        },
        flag: {
            fontSize: 12,
            color: "#ffffff",
            marginBottom: 4
        },
        name: {
            fontSize: 14,
            color: "#E84342",
        }
    }
)
export default CurrencyButton