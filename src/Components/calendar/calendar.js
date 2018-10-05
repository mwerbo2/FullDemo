import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const Calendar = props => (
  <Container>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      className="calendar"
    />
  </Container>
)
  
export default Calendar;
  