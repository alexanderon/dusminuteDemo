import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Image, Pressable, Text, View} from 'react-native';
import {QuantityButtons} from './QuantityButtons';

interface Product {
  name: string;
  menufacturor: string;
  price: string;
  unit: string;
  image: string;
}

interface Props {
  item: Product;
}

function Productlistitem({item}: Props) {
  const [count, setCount] = useState(0);

  const quantityChanges = (quantityCount: number) => {
    console.log(quantityCount);
    setCount(quantityCount);
    console.log('count' + count);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          margin: 4,
          backgroundColor: 'white',
        }}>
        <Image
          style={{height: 100, width: 100, margin: 10, borderRadius: 1}}
          height={100}
          width={100}
          source={{
            uri:
              'https://cdn.shopify.com/s/files/1/0173/7644/4470/products/B01GCDVOTE.Main_5ce4e796-1a81-420f-b1b0-de39f97bc2d8_1024x1024.jpg?v=1592492722',
          }}
        />
        <View style={{flex: 1, paddingTop: 8}}>
          <Text style={{}}>{item.name}</Text>
          <Text style={{}}>{item.menufacturor}</Text>
          <Text>{item.unit}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <Text>Price : ₹ {item.price}</Text>
            <QuantityButtons quantityChanged={quantityChanges} />
          </View>
        </View>
      </View>
    </>
  );
}

Productlistitem.propTypes = {};

export default Productlistitem;
