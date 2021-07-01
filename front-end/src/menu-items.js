export default {
    items: [
        // {
        //     id: 'auth-test',
        //     title: 'Authentication Testing',
        //     type: 'group',
        //     icon: 'icon-navigation',
        //     children: [
        //         {
        //             id: 'sign-in',
        //             title: 'Sign In',
        //             type: 'item',
        //             url: '/auth/signin',
        //             icon: 'feather icon-log-in',
        //             target: true,
        //              breadcrumbs: false
        //         },
        //         {
        //             id: 'sign-up',
        //             title: 'Sign Up',
        //             type: 'item',
        //             url: '/auth/signup',
        //             icon: 'feather icon-user-plus',
        //             target: true,
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'logout',
        //             title: 'Sign out',
        //             type: 'item',
        //             url: '/auth/sign-in',
        //             icon: 'feather icon-log-out',
        //         }
        //     ]
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
                    icon: 'feather icon-home',
                },
                
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
                    url: '/appointment/calendar'
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
                    id: 'home-test',
                    title: 'Home Health Testing',
                    type: 'collapse',
                    icon: 'feather icon-file-text',
                    children: [
                        {
                            id: 'add-measurement',
                            title: 'Measurement',
                            type: 'item',
                            url: '/home-test/add-measurement'
                        },
                        {
                            id: 'add-test',
                            title: 'Medical Test',
                            type: 'item',
                            url: '/home-test/add-test'
                        },
                        {
                            id: 'visualization',
                            title: 'Visualization',
                            type: 'item',
                            url: '/home-test/visualization'
                        }
                    ]
                },
                {
                    id: 'medication',
                    title: 'Medication',
                    type: 'collapse',
                    icon: 'feather icon-command',
                    children: [
                        {
                            id: 'prescription',
                            title: 'Manage Prescriptions',
                            type: 'item',
                            url: '/medication/prescription'
                        },
                        {
                            id: 'reminder',
                            title: 'Pill Reminder',
                            type: 'item',
                            url: '/medication/reminder'
                        }
                    ]
                }
            ]
        },
        {
            id: 'health-monitor',
            title: 'Health Monitor',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'report-symptoms',
                    title: 'Report Symptoms',
                    type: 'item',
                    url: '/health-monitor/report-symptoms',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'Pulse Monitor',
                    type: 'item',
                    icon: 'feather icon-activity',
                    url: '/health-monitor/pulse',
                    badge: {
                        title: 'Upcoming',
                        type: 'label-success'
                    }
                }
            ]
        }
       
    ]
}