import request from 'superagent'

const CALENDAR_ID = '883132090743-lqpu346tg6c1dq429ckmt00tr6u351ir.apps.googleusercontent.com';
const API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;


class DataService {

    getEvents(callback){
        request
            .get(url)
            .end((err, resp) => {
                if (!err) {
                    const events = []
                    // eslint-disable-next-line
                    JSON.parse(resp.text).items.map((event) => {
                        events.push({
                            start: event.start.date || event.start.dateTime,
                            end: event.end.date || event.end.dateTime,
                            title: event.summary,
                        })
                    });
                    callback(events)
                }
            })
    }
};

export default DataService;