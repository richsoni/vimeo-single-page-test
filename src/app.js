global.React  = require("react")
RootComponent = require("./rootComponent")
const STAFF_INFO = {
    "id": 927,
    "name": "Vimeo Staff Picks",
    "description": "We really love videos, and these are the videos we really, really love. All of these videos have been hand picked by the real humans who work at Vimeo. We hope you enjoy them!",
    "logo": "https://i.vimeocdn.com/channel/289181_980?mh=250",
    "badge": "",
    "url": "https://vimeo.com/channels/staffpicks",
    "rss": "https://vimeo.com/channels/staffpicks/videos/rss",
    "created_on": "2007-10-23 13:00:43",
    "creator_id": 152184,
    "creator_display_name": "Vimeo Staff",
    "creator_url": "https://vimeo.com/staff",
    "total_videos": 9290,
    "total_subscribers": 177680
}

const BD_INFO = {
    "id": 332146,
    "name": "Bob Dylan",
    "description": "",
    "logo": "",
    "badge": "",
    "url": "https://vimeo.com/channels/332146",
    "rss": "https://vimeo.com/channels/332146/videos/rss",
    "created_on": "2012-05-15 14:27:04",
    "creator_id": 6153775,
    "creator_display_name": "Fabio Ramelli",
    "creator_url": "https://vimeo.com/user6153775",
    "total_videos": 19,
    "total_subscribers": 12
}

document.addEventListener("DOMContentLoaded", function(event) { 
  React.render(<RootComponent {...STAFF_INFO} />, document.body)
});
