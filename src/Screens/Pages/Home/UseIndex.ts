import axios from 'axios';
import {useEffect, useState} from 'react';
import {baseURL} from '../../../services/api';
import {Banner, Product} from '../../../types/Product';
import {Navigation} from '../../../types/Navigation';
import {useCart} from '../../../Context/CartContext';

export const useIndex = ({navigation, route}: Navigation) => {
  const [searchUser, setSearchUser] = useState('');
  const [banner, setBanner] = useState<Banner[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const {addToCart} = useCart();
  //   const filteredData = data.filter(item =>
  //     item.name.toLowerCase().includes(searchUser.toLowerCase()),
  //   );

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      getProductsBanner();
      getProducts();
    });

    return () => {
      focusListener();
    };
  }, [navigation]);
  const getProductsBanner = async () => {
    try {
      const response = await axios.get(`${baseURL}/products/banner`);

      const mappedData = response.data.map((item: Banner) => ({
        id: item.id,
        photo: item.photo,
        category: item.category,
      }));
      console.log('mappedData', mappedData);
      setBanner(mappedData);
      setIsLoading(false);
    } catch (err) {
      console.log('error', err);
      setShowAlert(true);
      setIsLoading(false);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/product`);

      const mappedData = response.data.map((item: Product) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        photos: item.photos,
        description: item.description,
        category: item.category,
      }));
      setData(mappedData);
    } catch (err) {
      console.log('error', err);
      setShowAlert(true);
    }
  };

  const navigateFromDetails = (id: number) => {
    navigation.navigate('ProductDetails', {id});
  };

  const handleAddToCart = (item: Product) => {
    addToCart({...item, quantity: 1});
  };

  const favoriteProduct = () => {};

  return {
    // data: filteredData,
    searchUser,
    setSearchUser,
    showAlert,
    setShowAlert,
    error,
    banner,
    isLoading,
    data,
    navigateFromDetails,
    handleAddToCart,
    favoriteProduct,
  };
};
