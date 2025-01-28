import {useEffect, useState} from 'react';
import {baseURL} from '../../../../services/api';
import axios from 'axios';
import {Navigation} from '../../../../types/Navigation';
import {Product} from '../../../../types/Product';
import {useCart} from '../../../../Context/CartContext';

export const useIndex = ({navigation, route}: Navigation) => {
  const [showAlert, setShowAlert] = useState(false);
  const params = route.params;
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const {addToCart} = useCart();

  useEffect(() => {
    getProductById(params.id);
  }, [params.id]);

  const getProductById = async (id: number) => {
    try {
      const response = await axios.get(`${baseURL}/product/${id}`);
      console.log('response', response.data);

      const mappedData = {
        id: response.data.id,
        name: response.data.name,
        price: response.data.price,
        photos: response.data.photos,
        description: response.data.description,
        category: response.data.category,
      };

      setProduct(mappedData);
    } catch (err) {
      console.log('error', err);
      setShowAlert(true);
    }
  };

  const handleAddToCart = (item: Product) => {
    addToCart({...item, quantity: 1});
  };

  return {product, showAlert, setShowAlert, handleAddToCart};
};
