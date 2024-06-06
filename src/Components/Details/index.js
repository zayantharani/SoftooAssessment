import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Details = () => (
    <View style={styles.container}>
        <Text style={styles.text}>O/S Loans: 60 Loans</Text>
        <Text style={styles.text}>O/S Principle: 1,000,000 SAR</Text>
        <Text style={styles.text}>Exp. Profit: 100,000 SAR</Text>
    </View>
);

export default Details;
