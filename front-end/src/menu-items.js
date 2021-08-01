// eslint-disable-next-line import/no-anonymous-default-export
export default {
  items: [
    // {
    //   id: 'auth-test',
    //   title: 'Authentication Testing',
    //   type: 'group',
    //   icon: 'icon-navigation',
    //   children: [
    //     {
    //       id: 'sign-in',
    //       title: 'Sign In',
    //       type: 'item',
    //       url: '/auth/signin',
    //       icon: 'feather icon-log-in',
    //       target: true,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'sign-up',
    //       title: 'Sign Up',
    //       type: 'item',
    //       url: '/auth/signup',
    //       icon: 'feather icon-user-plus',
    //       target: true,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'logout',
    //       title: 'Sign out',
    //       type: 'item',
    //       url: '/auth/sign-in',
    //       icon: 'feather icon-log-out'
    //     }
    //   ]
    // },
    {
      id: 'profile',
      title: 'Dashboard',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'home',
          title: 'Home',
          type: 'item',
          url: '/home',
          icon: 'feather icon-home'
        }
      ]
    },
    {
      id: 'appointment',
      title: 'Appointment',
      type: 'group',
      icon: 'icon-charts',
      children: [
        {
          id: 'calendar',
          title: 'Calendar',
          type: 'item',
          icon: 'feather icon-calendar',
          url: '/appointment'
        }
      ]
    },
    {
      id: 'medical-instruction',
      title: 'Medical Instruction',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'prescription',
          title: 'Manage Prescriptions',
          type: 'item',
          icon: 'feather icon-command',
          url: '/medication'
        },
        {
          id: 'report-symptoms',
          title: 'Report Symptoms',
          type: 'item',
          url: '/report-symptoms',
          icon: 'feather icon-file-text'
        },
        {
          id: 'add-test',
          title: 'Medical Test',
          type: 'item',
          icon: 'feather icon-star',
          url: '/home-medical-test'
        },        
        {
          id: 'add-measurement',
          title: 'Body Measurement',
          type: 'item',
          icon: 'feather icon-film',
          url: '/body-measurement'
        },
      ]
    },
    {
      id: 'health-monitor',
      title: 'Health Monitor',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'bootstrap',
          title: 'Pulse Monitor',
          type: 'item',
          icon: 'feather icon-activity',
          url: '/maintenance/coming-soon',
          badge: {
            title: 'Upcoming',
            type: 'label-success'
          }
        },
        ,
        {
          id: 'visualization',
          title: 'Visualization',
          type: 'item',
          icon: 'feather icon-slack',
          url: '/visualization',
          badge: {
            title: 'Upcoming',
            type: 'label-success'
          }
        }
      ]
    }
  ]
};
