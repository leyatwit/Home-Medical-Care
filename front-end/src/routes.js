import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

//Home
const Home = React.lazy(() => import('./HMC/Home/Home'));

//Appointment
const Calendar = React.lazy(() => import('./HMC/Appointment/Calendar'));

//Medical Instruction
//Home Health Testing
const Measurement = React.lazy(() =>
  import('./HMC/HomeHealthTesting/Measurement')
);
const MedicalTest = React.lazy(() =>
  import('./HMC/HomeHealthTesting/MedicalTest')
);
const Visualization = React.lazy(() =>
  import('./HMC/HomeHealthTesting/Visualization/Visualization')
);
//Medication
const Medication = React.lazy(() => import('./HMC/Medication/Prescription'));
// const Reminder = React.lazy(() => import('./HMC/Medication/Reminder'));

//HealthMonitor
const Pulse = React.lazy(() => import('./HMC/HealthMonitor/Pulse'));
const ReportSymptom = React.lazy(() =>
  import('./HMC/HealthMonitor/ReportSymptom')
);

//Profile
const Profile = React.lazy(() => import('./App/components/Profile'));
// const Profile = React.lazy(() => import('./HMC/Profile/PersonalInfo'));

const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  {
    path: '/appointment',
    exact: true,
    name: 'Appointment Calendar',
    component: Calendar
  },
  {
    path: '/body-measurement',
    exact: true,
    name: 'Measurement',
    component: Measurement
  },
  {
    path: '/visualization',
    exact: true,
    name: 'Visualization',
    component: Visualization
  },
  {
    path: '/home-medical-test',
    exact: true,
    name: 'Medical Test',
    component: MedicalTest
  },
  {
    path: '/medication',
    exact: true,
    name: 'Prescription',
    component: Medication
  },
  {
    path: '/health-monitor/pulse',
    exact: true,
    name: 'Pulse Monitor',
    component: Pulse
  },
  {
    path: '/report-symptoms',
    exact: true,
    name: 'Report Symptoms',
    component: ReportSymptom
  }
];

export default routes;
