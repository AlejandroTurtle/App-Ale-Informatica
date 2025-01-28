import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, dynamicSize} from '../../Config';
import monitor from '../../assets/icons/monitor.png';
import gabinete from '../../assets/icons/gabinete.png';
import mouse from '../../assets/icons/mouse.png';
import processador from '../../assets/icons/processador.png';
import grid from '../../assets/icons/grid.png';
import {useNavigation} from '@react-navigation/native';

export const CustomIconMenu = () => {
  const navigation = useNavigation();

  const handleNavigation = (category: string) => {
    navigation.navigate('ListProducts', {
      category,
    });
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.containerIcons}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => handleNavigation('Monitor')}>
          <Image source={monitor} style={styles.iconMenu} />
          <Text style={styles.textIcon}>Monitores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => handleNavigation('Gabinete')}>
          <Image source={gabinete} style={styles.iconMenu} />
          <Text style={styles.textIcon}>Gabinetes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => handleNavigation('Processador')}>
          <Image source={processador} style={styles.iconMenu} />
          <Text style={styles.textIcon}>Processadores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => handleNavigation('Mouse')}>
          <Image source={mouse} style={styles.iconMenu} />
          <Text style={styles.textIcon}>Mouse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => handleNavigation('Tudo')}>
          <Image source={grid} style={styles.iconMenu} />
          <Text style={styles.textIcon}>Tudo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerIcons: {
    flexDirection: 'row',
  },
  iconWrapper: {
    alignItems: 'center',
    marginHorizontal: dynamicSize(10),
    marginBottom: dynamicSize(10),
  },
  iconMenu: {
    width: dynamicSize(40),
    height: dynamicSize(40),
  },
  textIcon: {
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: dynamicSize(12),
    marginTop: dynamicSize(5),
  },
});
