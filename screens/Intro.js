import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height / 3;

const Intro = () => {
  const navigation = useNavigation();
  const onPressMain = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/flipp.png')}
        resizeMode="contain"
        style={styles.bannerImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>The Art of Cooking</Text>
        <Text style={styles.quoteText}>
          "only cooking guide you'll ever need" - Sun Tzu
        </Text>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.indicatorMoved]} />
      </View>
      <View style={styles.nextContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={onPressMain}>
          <Image
            source={require('../assets/images/right_arrow.png')}
            style={styles.nextImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: w,
    height: h,
  },
  textContainer: {
    marginVertical: '15%',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  },
  quoteText: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '200',
    paddingTop: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: '#CBDE99',
    borderRadius: 8,
    marginHorizontal: 3,
  },
  indicatorMoved: {
    width: 12,
    backgroundColor: '#A1AF69',
  },
  nextContainer: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#A1AF69',
    borderRadius: 50,
  },
  nextButton: {
    width: 80,
    height: 80,
    backgroundColor: '#A1AF69',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#111111',
  },
  nextImage: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});
