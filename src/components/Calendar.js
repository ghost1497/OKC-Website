import React from 'react';
import moment from 'moment';
import DataService from '../services/data/DataService';
import '../styles/Calendar.css'

import BigCalendar from 'react-big-calendar'
const localizer = BigCalendar.momentLocalizer(moment);
let dataService = new DataService();
require('react-big-calendar/lib/css/react-big-calendar.css')


class Calendar extends React.Component {
    constructor () {
        super()
        this.state = {
            events: []
        }
    }
    componentDidMount () {
        dataService.getEvents((events) => {
            this.setState({events})
        })
    }
    render () {

        return (
            // React Components in JSX look like HTML tags
            <div className="calendar">
                <BigCalendar
                    style={{height: '420px'}}
                    events={[this.state.events]}
                    selectable
                    localizer = {localizer}
                    defaultDate={new Date()}

                />
            </div>
        );
    };
};

export default Calendar;