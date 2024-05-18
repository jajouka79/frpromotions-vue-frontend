import events from "../events"

import SingleImage from "../../components/SingleImage";
import {jsx} from "@emotion/core";

const fetchHome = () => {
    return ({
        seoParams: {
            title: "Home",
            description: ""
        },
        cover: {
            //recentProject: "/the-day",
            //image: image00001
        },
        sections: [
            {
                type: "PostList",
                params: {
                    posts: events,
                    mode: "MODE_FULL"
                }
            }
        ]
    })
};

export default fetchHome
