import events from "./events"

const eventList = () => {
    console.log("eventsList - events:", events);
    return events;//TODO - order by date
};

export default eventList
