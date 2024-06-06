import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.welcome}>Welcome back!</Text>
        <Text style={styles.username}>Sumayyah Basil</Text>
    </View>
);

export default Header;
