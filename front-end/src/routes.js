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
const Measurement = React.lazy(() => import('./HMC/HomeHealthTesting/Measurement'));
const MedicalTest = React.lazy(() => import('./HMC/HomeHealthTesting/MedicalTest'));
const Visualization = React.lazy(() => import('./HMC/HomeHealthTesting/Visualization/Visualization'));
    //Medication
const Prescription = React.lazy(() => import('./HMC/Medication/Prescription'));
const Reminder = React.lazy(() => import('./HMC/Medication/Reminder'));

//HealthMonitor
const Pulse = React.lazy(() => import('./HMC/HealthMonitor/Pulse'));
const ReportSymptom = React.lazy(() => import('./HMC/HealthMonitor/ReportSymptom'));

//Profile
const Profile = React.lazy(() => import('./HMC/Profile/Profile'));
// const Profile = React.lazy(() => import('./HMC/Profile/PersonalInfo'));


const routes = [
    { path: '/home', exact: true, name: 'Home', component: Home },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/appointment/calendar', exact: true, name: 'Appointment Calendar', component: Calendar },
    { path: '/home-test/add-measurement', exact: true, name: 'Measurement', component: Measurement },
    { path: '/home-test/visualization', exact: true, name: 'Visualization', component: Visualization },
    { path: '/home-test/add-test', exact: true, name: 'Medical Test', component: MedicalTest },
    { path: '/medication/prescription', exact: true, name: 'Prescription', component: Prescription },
    { path: '/medication/reminder', exact: true, name: 'Reminder', component: Reminder },
    { path: '/health-monitor/pulse', exact: true, name: 'Pulse Monitor', component: Pulse },
    { path: '/health-monitor/report-symptoms', exact: true, name: 'Report Symptoms', component: ReportSymptom },

];

export default routes;