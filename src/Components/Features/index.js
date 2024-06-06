import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Features = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Auto Invest</Text>
        <Text style={styles.text}>Referral</Text>
        <Text style={styles.text}>Deal Room</Text>
    </View>
);

export default Features;
