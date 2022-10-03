import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {PopularRecipe, RecipeTab} from '../components';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.navigate('Details');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.headerText}>Hey 👨‍🍳,</Text>
        <Text style={styles.welcomeText}>
          What would you like to cook today?
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchIconContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../assets/images/search.png')}
          />
        </View>

        <TextInput
          style={styles.searchBar}
          placeholder="Find a recipe..."
          placeholderTextColor={'white'}
        />
        <TouchableOpacity style={styles.filterContainer}>
          <Image
            style={styles.filterIcon}
            source={require('../assets/images/filter.png')}
          />
        </TouchableOpacity>
      </View>
      <PopularRecipe onPress={onPressItem} />
      <RecipeTab onPress={onPressItem} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  headContainer: {
    paddingLeft: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#414141',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 15,
  },
  searchIconContainer: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    color: 'white',
    flex: 1,
    padding: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#A1AF69',
  },
  filterContainer: {
    backgroundColor: '#A1AF69',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  filterIcon: {
    width: 15,
    height: 15,
  },
});
