import axios from 'axios';
import {useEffect, useState} from 'react';
import {baseURL} from '../../../services/api';
import {BannerItem} from '../../../types/banner';

export const useIndex = () => {
  const [searchUser, setSearchUser] = useState('');
  const [banner, setBanner] = useState<BannerItem[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //   const filteredData = data.filter(item =>
  //     item.name.toLowerCase().includes(searchUser.toLowerCase()),
  //   );

  useEffect(() => {
    getProductsBanner();
  }, []);
  const getProductsBanner = async () => {
    try {
      const response = await axios.get<any>(`${baseURL}/products/banner`);
      console.log('response', response.data);

      const mappedData = response.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        photo: item.photo,
        description: item.description,
        category: item.category,
      }));

      setBanner(mappedData);
      setIsLoading(false);
    } catch (err) {
      setError(error);
      setShowAlert(true);
      setIsLoading(false);
    }
  };

  return {
    // data: filteredData,
    searchUser,
    setSearchUser,
    showAlert,
    setShowAlert,
    error,
    banner,
    isLoading,
  };
};
