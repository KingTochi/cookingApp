/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

const h = Dimensions.get('screen').width;

const Details = () => {
  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.goBack();
  };
  const renderIngredientsList = () => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.ingImg}
          resizeMode="contain"
          source={require('../assets/images/ing1.png')}
        />
        <Text style={styles.ingName}>Avocado</Text>
        <Text style={styles.ingDir}> 1/2 Slices</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        resizeMode="contain"
        source={require('../assets/images/img1.png')}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={onPressItem}>
          <Image source={require('../assets/images/back.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          paddingTop: (h * 121) / 195 - 70,
          flex: 1,
          padding: 10,
        }}>
        <View>
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
          </View>
        </View>
        <Text style={styles.head}>Ingredients</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(_ => renderIngredientsList())}
        </ScrollView>
        <Text style={styles.head}>Step 1</Text>
        <Text style={styles.directions}>
          In a small bowl, throw in your 1/2 slice of avocado pear (fresh is
          best). Add in lemon juice, salt, pepper and gently mash it to a paste
          with the back of a fork
        </Text>
        <Text style={styles.head}>Step 2</Text>
        <Text style={styles.directions}>
          In a small bowl, throw in your 1/2 slice of avocado pear (fresh is
          best). Add in lemon juice, salt, pepper and gently mash it to a paste
          with the back of a fork
        </Text>
        <Text style={styles.head}>Step 3</Text>
        <Text style={styles.directions}>
          In a small bowl, throw in your 1/2 slice of avocado pear (fresh is
          best). Add in lemon juice, salt, pepper and gently mash it to a paste
          with the back of a fork
        </Text>
        <Text style={styles.head}>Step 4</Text>
        <Text style={styles.directions}>
          In a small bowl, throw in your 1/2 slice of avocado pear (fresh is
          best). Add in lemon juice, salt, pepper and gently mash it to a paste
          with the back of a fork
        </Text>
      </ScrollView>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  mainImage: {
    width: h,
    height: (h * 121) / 195,
    position: 'absolute',
    top: 0,
  },
  head: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    marginVertical: 5,
  },
  ingImg: {
    width: h / 3,
    height: h / 3,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#A1AF69',
  },
  ingName: {
    color: '#fff',
    fontSize: 15,
    marginVertical: 5,
  },
  ingDir: {
    color: '#A1AF69',
    fontSize: 12,
  },
  item: {
    paddingRight: 20,
    paddingVertical: 10,
  },
  directions: {
    paddingVertical: 6,
    color: '#A1AF69',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19,
  },
  foodName: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: 6,
  },
  starContainer: {
    flexDirection: 'row',
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
    padding: 15,
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 20,
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
    marginTop: 12,
  },
  header: {
    position: 'absolute',
    top: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
    flexDirection: 'row',
    flex: 1,
    zIndex: 99,
  },
});
