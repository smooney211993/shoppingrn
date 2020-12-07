import React, { FC } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { colors } from '../../constants/Colors';
import { addToCart } from '../../reducers/cartReducer';
import { useDispatch } from 'react-redux';

interface ProductItemProps {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  ownerId: string;
  onViewPress: () => void;
}

const ProductItem: FC<ProductItemProps> = ({
  imageUrl,
  title,
  price,
  description,
  ownerId,
  id,
  onViewPress,
}) => {
  const dispatch = useDispatch();
  let TouchAbleCmp =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchAbleCmp onPress={onViewPress} useForground>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: imageUrl && imageUrl }}
              />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{title && title}</Text>
              <Text style={styles.price}>{price && price.toFixed(2)}</Text>
            </View>

            <View style={styles.actions}>
              <Button
                color={colors.primary}
                onPress={onViewPress}
                title='View Details'
              />
              <Button
                color={colors.accent}
                onPress={() =>
                  dispatch(
                    addToCart({
                      item: {
                        imageUrl,
                        id,
                        ownerId,
                        description,
                        price,
                        title,
                      },
                    })
                  )
                }
                title='Add To Card'
              />
            </View>
          </View>
        </TouchAbleCmp>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    height: '20%',
    paddingHorizontal: 20,
  },
  details: {
    alignItems: 'center',
    height: '20%',
    padding: 10,
  },
});

export default ProductItem;
