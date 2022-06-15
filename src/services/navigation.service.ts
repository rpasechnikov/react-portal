import NavigationModel from '../models/navigation.model';

const NavigationService = {
  getNavigation(): NavigationModel {
    return {
      title: 'Portal',
      items: [
        {
          title: 'Home',
          route: '/'
        },
        {
          title: 'Map',
          route: '/map'
        }
      ]
    };
  }
};

export default NavigationService;
