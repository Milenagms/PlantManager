import React from 'react';  
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave,} from '../pages/PlantSave';
import {MyPlants} from '../pages/MyPlants';
import authRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRouts: React.FC = () =>(
  <stackRoutes.Navigator headerMode="none" screenOptions={{ cardStyle: {backgroundColor: colors.white}}}>
    <stackRoutes.Screen name="Welcome" component = {Welcome}/>
    <stackRoutes.Screen name="UserIdentification" component = {UserIdentification}/>
    <stackRoutes.Screen name="Confirmation" component = {Confirmation}/>
    <stackRoutes.Screen name="PlantSelect" component = {authRoutes}/>
    <stackRoutes.Screen name="PlantSave" component = {PlantSave}/>
    <stackRoutes.Screen name="MyPlants" component = {authRoutes}/>

  


  </stackRoutes.Navigator>

)

export default AppRouts;
