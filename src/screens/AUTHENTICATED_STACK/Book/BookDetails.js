import React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import BookHeader from '../../../components/BookComponents/BookHeader';

const BookDetails = ({ route, navigation }) => {
  let { featuredBook, cover } = route.params;
  console.log(featuredBook);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BookHeader cover={featuredBook.cover} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  scrollView: {},
});

export default BookDetails;
