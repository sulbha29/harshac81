import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu'
import Settings from '../screens/settingscreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    Setting:{
        screen:Settings
    },
    },
    {contentComponent:CustomSideBarMenu},
    {initialRouteName:'Home'})