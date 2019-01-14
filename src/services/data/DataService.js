import request from 'superagent'

const CALENDAR_ID = 'rfrankie04@gmail.com';
const API_KEY = 'AIzaSyCEL0GitQCjK_ys3A3_SRk7Voz4lZJARg0';
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