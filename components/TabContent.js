/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const w = Dimensions.get('screen').width / 3.5;
const wx = Dimensions.get('screen').width;

const TabContent = ({onPress}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.foodContainer} onPress={onPress}>
        <Image
          style={styles.mainImage}
          source={require('../assets/images/all1.png')}
        />
        <View style={styles.textStar}>
          <Text style={styles.foodName}>Fish with Cous-Cous</Text>
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
          <View style={styles.textCon}>
            <View style={styles.timeContainer}>
              <Image
                style={{tintColor: 'white'}}
                source={require('../assets/images/clock.png')}
              />
              <Text style={styles.cookTime}>~35 mins</Text>
            </View>
            <Text style={styles.cookTime}>9 Ingredients</Text>
          </View>
          <TouchableOpacity style={styles.heartIcon}>
            <Image
              resizeMode="contain"
              source={require('../assets/images/heart.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.listContainer}>
      <FlatList renderItem={renderItem} data={[1, 2, 3, 4, 5]} />
    </View>
  );
};

export default TabContent;

const styles = StyleSheet.create({
  mainImage: {
    height: w,
    width: w,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#A1AF69',
  },
  foodName: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  star: {
    width: 15,
    height: 15,
    marginRight: 4,
  },
  foodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  textStar: {
    paddingHorizontal: 10,
    flex: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cookTime: {
    color: '#A1AF69',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: '500',
  },
  textCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heartIcon: {
    position: 'absolute',
    right: 15,
    top: -3,
    backgroundColor: '#1e1e1e',
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: wx,
  },
});
