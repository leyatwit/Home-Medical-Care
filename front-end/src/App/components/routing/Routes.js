import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../../../HMC/Home';
import Profile from '../Profile';
import Calendar from '../../../HMC/Appointment/Calendar';
import Measurement from '../../../HMC/HomeHealthTesting/Measurement';
import Visualization from '../../../HMC/HomeHealthTesting/Visualization/Visualization';
import Medication from '../../../HMC/Medication/Prescription';
import ReportSymptom from '../../../HMC/HealthMonitor/ReportSymptom';
import Pulse from '../../../HMC/HealthMonitor/Pulse';
import MedicalTest from '../../../HMC/HomeHealthTesting/MedicalTest';

const Routes = (props) => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
      <PrivateRoute exact path='/home' component={Home} />
      <PrivateRoute exact path='/profile' component={Profile} />
      <PrivateRoute exact path='/appointment' component={Calendar} />
      <PrivateRoute exact path='/body-measurement' component={Measurement} />
      <PrivateRoute exact path='/visualization' component={Visualization} />
      <PrivateRoute exact path='/home-medical-test' component={MedicalTest} />
      <PrivateRoute exact path='/medication' component={Medication} />
      <PrivateRoute exact path='/health-monitor/pulse' component={Pulse} />
      <PrivateRoute exact path='/report-symptoms' component={ReportSymptom} />
    </Switch>
  );
};

export default Routes;
