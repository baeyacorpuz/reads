/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card } from 'react-native-elements';
import HeaderBar from '../../../components/Header';

import Cover from '../../../assets/images/cover.jpg';
import Feature from '../../../components/Feature/Feature';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderBar
          title="Hi, Yoona Lim"
          subtitle="Whick book suits your current mood?"
        />
        <Feature />
        <View style={styles.content}>
          <Card
            style={{
              flex: 0.5,
            }}>
            <Card.Title>Hello world</Card.Title>
            <Card.Divider />
            <Text>
              Donec elementum sem vitae augue ultricies viverra. Pellentesque
              orci elit, gravida eget diam id, finibus viverra magna. Nulla ac
              metus suscipit, volutpat quam non, pellentesque odio.
            </Text>
          </Card>
          <Card
            style={{
              flex: 1,
            }}>
            <Card.Title>Hello world</Card.Title>
            <Card.Divider />
            <Text>
              Donec elementum sem vitae augue ultricies viverra. Pellentesque
              orci elit, gravida eget diam id, finibus viverra magna. Nulla ac
              metus suscipit, volutpat quam non, pellentesque odio.
            </Text>
          </Card>
          <Card
            style={{
              flex: 1,
            }}>
            <Card.Title>Hello world</Card.Title>
            <Card.Divider />
            <Text>
              Donec elementum sem vitae augue ultricies viverra. Pellentesque
              orci elit, gravida eget diam id, finibus viverra magna. Nulla ac
              metus suscipit, volutpat quam non, pellentesque odio.
            </Text>
          </Card>
          <Card
            style={{
              flex: 1,
            }}>
            <Card.Title>Hello world</Card.Title>
            <Card.Divider />
            <Text>
              Donec elementum sem vitae augue ultricies viverra. Pellentesque
              orci elit, gravida eget diam id, finibus viverra magna. Nulla ac
              metus suscipit, volutpat quam non, pellentesque odio.
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingBottom: 80,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  section: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: '#14463e',
    paddingVertical: 20,
    // height: 150,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#d120de',
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  cardStyle: {
    borderWidth: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
});

export default Home;
