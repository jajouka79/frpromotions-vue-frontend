
import {orderPostsByDate} from "../helpers/formatters/date"

import event1 from "./event1"
import event2 from "./event2"
import event3 from "./event3"
import event4 from "./event4"
import event5 from "./event5"
import event6 from "./event6"
import event7 from "./event7"
import event8 from "./event8"
import event9 from "./event9"
import event10 from "./event10"
import event11 from "./event11"
import event12 from "./event12"
import event13 from "./event13"
//import event14 from "./event14"
//import event15 from "./event15"
import event16 from "./event16"
import event17 from "./event17"
import event18 from "./event18"
import event19 from "./event19"
import event20 from "./event20"
import event21 from "./event21"
import event23 from "./event23"

import event22 from "./event22"
import event24 from "./event24"
import event25 from "./event25"
import event26 from "./event26"
import event27 from "./event27"
// import event28 from "./event28"
// import event29 from "./event29"

import event30 from "./event30"

const events = [
    event3,
    event2,
    event1,
    event4,
    event5,
    event6,
    event7,
    event8,
    event9,
    event10,
    event11,
    event12,
    event13,
    //event14,
    //event15,
    event16,
    event17,
    event18,
    event19,
    event20,
    event21,
    event23,
    event22,
    event25,
    event24,
    event26,
    event27,
    //event28,
    //event29,
    event30,
];

//console.log("events!!!");

let formattedEvents = orderPostsByDate('date', events, 'desc');

//console.log("formattedEvents:", formattedEvents);

export default formattedEvents;
