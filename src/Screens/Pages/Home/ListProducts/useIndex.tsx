import axios from 'axios';
import {baseURL} from '../../../../services/api';
import {useEffect, useState} from 'react';
import {Product} from '../../../../types/Product';
import {Navigation} from '../../../../types/Navigation';

export const useIndex = ({navigation, route}: Navigation) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [searchUser, setSearchUser] = useState('');
  const params = route.params;

  useEffect(() => {
    if (params.category) {
      getProductsByCategory();
    }
  }, [params.category]);

  const getProductsByCategory = async () => {
    const category = params.category;
    try {
      const response = await axios.post(`${baseURL}/product/category`, {
        category,
      });
      console.log(response.data);
      if (response.data.length > 0) {
        const mappedData = response.data.map((item: Product) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          photos: item.photos,
          description: item.description,
          category: item.category,
        }));
        setProduct(mappedData);
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  const favoriteProduct = () => {};

  const navigateFromDetails = (id: number) => {
    navigation.navigate('ProductDetails', {id});
  };

  return {
    product,
    favoriteProduct,
    navigateFromDetails,
    searchUser,
    setSearchUser,
  };
};
