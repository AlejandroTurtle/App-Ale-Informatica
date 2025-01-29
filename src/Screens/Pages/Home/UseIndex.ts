import axios from 'axios';
import {useEffect, useState} from 'react';
import {baseURL} from '../../../services/api';
import {Banner, Product} from '../../../types/Product';
import {Navigation} from '../../../types/Navigation';
import {useCart} from '../../../Context/CartContext';

export const useIndex = ({navigation, route}: Navigation) => {
  const [searchProducts, setSearchProducts] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [banner, setBanner] = useState<Banner[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);
  const {addToCart} = useCart();

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      getProductsBanner();
      cheaperProducts();
    });

    return () => {
      focusListener();
    };
  }, [navigation]);

  useEffect(() => {
    findProducts();
  }, []);

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

  const cheaperProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/products/cheaper`);

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

  const findProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/products`);

      const mappedData = response.data.map((item: Product) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        photos: item.photos,
        description: item.description,
        category: item.category,
      }));
      setAllProducts(mappedData);
      setFilteredProducts(mappedData);
    } catch (err) {
      console.log('ero', err);
      setShowAlert(true);
    }
  };

  useEffect(() => {
    if (searchProducts) {
      const filtered = allProducts.filter((product: Product) =>
        product.name.toLowerCase().includes(searchProducts.toLowerCase()),
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchProducts, allProducts]);

  console.log('produtos', searchProducts);

  const navigateFromDetails = (id: number) => {
    navigation.navigate('ProductDetails', {id});
  };

  const handleAddToCart = (item: Product) => {
    addToCart({...item, quantity: 1});
  };

  const favoriteProduct = () => {};

  return {
    showAlert,
    setShowAlert,
    error,
    banner,
    isLoading,
    data,
    navigateFromDetails,
    handleAddToCart,
    favoriteProduct,
    searchProducts,
    setSearchProducts,
    filteredProducts,
  };
};
