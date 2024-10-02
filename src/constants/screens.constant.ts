import {
  icHome,
  icWork_space,
  icContent,
  icReports,
  icProfile,
} from '@/assets/svg';
import Brand from '@/screens/Brand';
import Home from '@/screens/Home';
import Jobs from '@/screens/Jobs';
import Message from '@/screens/Message';
import Profile from '@/screens/Profile';

export const screens = [
  {
    component: Home,
    label: 'Home',
    icon: icHome,
  },
  {
    component: Jobs,
    label: 'Workspace',
    icon: icWork_space,
  },
  {
    component: Brand,
    label: 'Content',
    icon: icContent,
  },
  {
    component: Message,
    label: 'Report',
    icon: icReports,
  },
  {
    component: Profile,
    label: 'Profile',
    icon: icProfile,
  },
];
