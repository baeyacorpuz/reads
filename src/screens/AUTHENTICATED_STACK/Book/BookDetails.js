import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

const BookDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

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
