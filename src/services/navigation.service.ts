import NavigationModel from '../models/navigation.model';

const NavigationService = {
  getNavigation(): NavigationModel {
    return {
      title: 'Some Title',
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
