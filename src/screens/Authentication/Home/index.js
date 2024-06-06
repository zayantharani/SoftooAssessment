import React, { useEffect, useState } from 'react'
import { ScrollView, Dimensions } from 'react-native'
import styles from './styles';
import Header from '../../../Components/Header';
import FinancialOverview from '../../../Components/FinancialOverview';
import Details from '../../../Components/Details';
import Features from '../../../Components/Features';


const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <FinancialOverview />
      <Details />
      <Features />
    </ScrollView>
  );
};

export default Home;

