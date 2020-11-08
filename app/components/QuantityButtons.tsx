import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface QuantityButtons {
  quantityChanged: Function;
}

function QuantityButtons({quantityChanged}: QuantityButtons) {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
    quantityChanged(count);
  };

  const increment = () => {
    setCount(count + 1);
    quantityChanged(count);
  };

  return (
    <>
      {count > 0 ? (
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#50cfbe',
            borderRadius: 50,
            height: 40,
            alignItems: 'center',
          }}>
          <Pressable onPress={decrement}>
            <Text
              style={{
                fontSize: 16,
                width: 40,
                textAlign: 'center',
              }}>
              -
            </Text>
          </Pressable>
          <Text
            style={{
              fontSize: 16,
              minWidth: 20,
              backgroundColor: 'white',
              textAlign: 'center',
              borderColor: '#50cfbe',
              borderWidth: 1,
              height: 40,
              textAlignVertical: 'center',
            }}>
            {count}
          </Text>
          <Pressable onPress={increment}>
            <Text
              style={{
                fontSize: 16,
                width: 40,
                textAlign: 'center',
              }}>
              +
            </Text>
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={increment}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#50cfbe',
              borderRadius: 50,
              height: 40,
              alignItems: 'center',
              width: 100,
              justifyContent: 'center',
              backgroundColor: '#50cfbe',
            }}>
            <Text>ADD</Text>
          </View>
        </Pressable>
      )}
    </>
  );
}

export {QuantityButtons};

const styles = StyleSheet.create({
  button: {
    width: 40,
  },
});
