import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Example } from '../screens/';
import { useTranslation } from 'react-i18next';

const MapRoute = Example;

const MainNavigator = () => {
  const { t } = useTranslation(['common']);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'map',
      title: t('common:bar.map'),
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },

    // { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    // { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    // {
    //   key: 'notifications',
    //   title: 'Notifications',
    //   focusedIcon: 'bell',
    //   unfocusedIcon: 'bell-outline',
    // },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    map: MapRoute,
    map1: MapRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainNavigator;
