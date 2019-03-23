import { Navigation } from 'react-native-navigation';
import { View } from 'react-native';
import App from '../../App';
import {
  Home,
  Profile,
  Chat,
  Settings,
  Edit,
  ChatDetail,
  TabView,
} from '../views';

export const ROUTES = {
	App: {
		component: () => App,
  },
  Home: {
    component: () => Home,
  },
  Chat: {
    component: () => Chat,
  },
  Profile: {
    component: () => Profile,
  },
  Settings: {
    component: () => Settings,
  },
  Edit: {
    component: () => Edit,
  },
  ChatDetail: {
    component: () => ChatDetail,
  },
  TabView: {
    component: () => TabView,
  },
};

Object.keys(ROUTES).forEach((routeName) => {
	Navigation.registerComponent(routeName, ROUTES[routeName].component);
  console.log(`Registered route: ${routeName}`);
});
