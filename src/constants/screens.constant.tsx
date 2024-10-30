import {
  IcHome,
  IcWork_space,
  IcContent,
  IcReports,
  IcProfile,
} from '@/assets/svg';
import Content from '@/screens/Content';
import Home from '@/screens/Home';
import Workspace from '@/screens/Workspace';
import Reports from '@/screens/Reports';
import Profile from '@/screens/Profile';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {ComponentType, ElementType} from 'react';

export const LAYOUT = 32;
export const LAYOUT_APP = 18;

const Tab = createMaterialBottomTabNavigator();

export type TabScreenConfig = {
  name: string;
  component: ComponentType<ElementType | any>;
  icon?: ComponentType<ElementType | any> | null;
};

const createTabNavigator = (
  screens: TabScreenConfig[],
  initialRouteName: string,
) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      barStyle={{display: 'none'}}>
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({color}) =>
              screen.icon && <screen.icon color={color} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export const homeScreens: TabScreenConfig[] = [
  {name: 'home', component: Home, icon: IcHome},
];

export const workspaceScreens: TabScreenConfig[] = [
  {name: 'workspace', component: Workspace, icon: IcWork_space},
];

export const contentScreens: TabScreenConfig[] = [
  {name: 'content', component: Content, icon: IcContent},
];

export const reportScreens: TabScreenConfig[] = [
  {name: 'report', component: Reports, icon: IcReports},
];

export const profileScreens: TabScreenConfig[] = [
  {name: 'profile', component: Profile, icon: IcProfile},
];

export const HomeTabs = () => createTabNavigator(homeScreens, 'home');
export const WorkspaceRoutes = () =>
  createTabNavigator(workspaceScreens, 'campaign');
export const ContentRoutes = () =>
  createTabNavigator(contentScreens, 'content');
export const ReportTabs = () => createTabNavigator(reportScreens, 'reports');
export const ProfileTabs = () => createTabNavigator(profileScreens, 'profile');

export const tabScreens = [
  {
    component: Home,
    label: 'Home',
    icon: IcHome,
  },
  {
    component: Workspace,
    label: 'Workspace',
    icon: IcWork_space,
  },
  {
    component: Content,
    label: 'Content',
    icon: IcContent,
  },
  {
    component: Reports,
    label: 'Report',
    icon: IcReports,
  },
  {
    component: Profile,
    label: 'Profile',
    icon: IcProfile,
  },
];
