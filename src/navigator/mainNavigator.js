import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings174881Navigator from '../features/Settings174881/navigator';
import BlankScreen1174876Navigator from '../features/BlankScreen1174876/navigator';
import BlankScreen0174875Navigator from '../features/BlankScreen0174875/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings174881: { screen: Settings174881Navigator },
BlankScreen1174876: { screen: BlankScreen1174876Navigator },
BlankScreen0174875: { screen: BlankScreen0174875Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
