global.React  = require("react")
RootComponent = require("./rootComponent")
const INFO = {
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
  React.render(<RootComponent {...INFO} />, document.body)
});
