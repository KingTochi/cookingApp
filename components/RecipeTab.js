/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import TabContent from './TabContent';

const w = Dimensions.get('screen').width;

const tabs = ['All Recipes', 'Meat 🥩', 'Salads 🥗', 'Soups 🍲'];

const RecipeTab = ({onPress}) => {
  const [selected, setSelected] = React.useState(0);
  const onScroll = ({nativeEvent}) => {
    const index = Math.round(nativeEvent.contentOffset.x / w);
    setSelected(index);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.header}>
        {tabs.map((e, i) => (
          <TouchableOpacity onPress={() => setSelected(i)}>
            <Text
              style={[
                styles.tabHead,
                selected === i && {
                  color: '#A1AF69',
                  fontWeight: '600',
                  fontSize: 16,
                },
              ]}>
              {e}
            </Text>
            {selected === i && <View style={styles.underLine} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView
        horizontal
        pagingEnabled
        snapToAlignment="center"
        onScroll={onScroll}
        decelerationRate="fast">
        <TabContent onPress={onPress} />
        <TabContent onPress={onPress} />
        <TabContent onPress={onPress} />
        <TabContent onPress={onPress} />
      </ScrollView>
    </View>
  );
};

export default RecipeTab;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  tabHead: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  underLine: {
    width: 30,
    height: 2,
    backgroundColor: '#A1AF69',
    alignSelf: 'center',
    marginTop: 3,
    borderRadius: 10,
  },
});
