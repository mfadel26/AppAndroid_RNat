import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screens/Pages/Login/Index';
import Signup from '../Screens/Pages/Signup/Index';
import Form from '../Screens/Pages/Signup/Form';
import Card from '../Screens/Card/Card';
import Project from '../Screens/Pages/Company/Project';
import Projectlist from '../Screens/Pages/Company/Projectlist';
import Profile from '../Screens/Pages/Engineer/Profile';
import Detpro from '../Screens/Pages/Company/Detpro';
const HomeNavigation = createStackNavigator(
  {
    Home,
    Signup,
    Card,
    Form,
    Project,
    Projectlist,
    Profile,
    Detpro,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(HomeNavigation);
