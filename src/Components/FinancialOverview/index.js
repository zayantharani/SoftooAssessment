import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FinancialOverview = () => (
    <View style={styles.financialOverview}>
        <Text style={styles.portfolioValue}>Portfolio Value: 1,100,000.00 SAR</Text>
        <Text style={styles.dateLabel}>Jun, 2023</Text>
        {/* Graph component can be added here */}
    </View>
);

export default FinancialOverview;
