/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const w = Dimensions.get('screen').width;

const PopularRecipe = ({onPress}) => {
  const renderItem = () => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <Image
          style={styles.mainImage}
          source={require('../assets/images/img1.png')}
        />
        <View style={styles.cardItem}>
          <Text style={styles.itemTitle}>Avocado Toast</Text>
          <View style={styles.starContainer}>
            {Array(5)
              .fill(0)
              .map(_ => (
                <Image
                  style={styles.star}
                  source={require('../assets/images/star.png')}
                />
              ))}
          </View>

          <View style={styles.timeContainer}>
            <Image
              style={{tintColor: 'white'}}
              source={require('../assets/images/clock.png')}
            />
            <Text style={styles.cookTime}>~5 mins</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.heartIcon}>
          <Image
            resizeMode="contain"
            source={require('../assets/images/heart.png')}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Most Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {[1, 2, 3, 4, 5].map(_ => renderItem())}
      </ScrollView>
    </View>
  );
};

export default PopularRecipe;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: w,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  seeMore: {
    color: '#A1AF69',
    fontSize: 12,
  },
  itemContainer: {
    backgroundColor: '#000',
    shadowColor: '#0f0f0f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 10,
    marginRight: 20,
  },
  cardItem: {
    padding: 8,
  },
  itemTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  mainImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingLeft: 2,
  },
  star: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 2,
  },
  cookTime: {
    color: '#A1AF69',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: '500',
  },
  scrollViewContent: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
  heartIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#1e1e1e',
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
