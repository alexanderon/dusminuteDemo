import {FlatList, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import Productlistitem from './ProductListItem';

const ProductList = () => {
  const renderItem = ({item}: {item: any}) => {
    return <Productlistitem item={item} />;
  };

  return (
    <>
      <SafeAreaView>
        <StatusBar />
        <FlatList
          contentContainerStyle={{backgroundColor: '#d1d1d1'}}
          data={require('./products.json')}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export {ProductList};
