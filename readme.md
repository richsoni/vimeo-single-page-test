# Getting Started

## Install The Proper IO.JS version

The engine in the `package.json` file is 'iojs'.
npm does not enforce iojs at the moment.
To make sure you have the right version, install it with [n](https://www.npmjs.com/package/n).

Follow these steps to get a successful install.

```
$ cd src
$ cat package.json| grep iojs
    "iojs": "2.1.x"
$ npm install -g n
$ n io 2.1
$ rm -rf node_modules
$ npm install
```

## Locally Serving

The `bin` directory has two scripts for use during development:

*  `build`
*  `serve`

All javascript is compiled into a single app.js via the `bin/build` script (e.g. browserify).
Running `bin/serve` will start a simple python server on port 8000.

The site can then be accessed via `localhost:8000`

# Improvements

*  Replace hash bang url's with proper push state.  This requires a more robust server architecture to be implemented
*  Harden error handling around pagination of videos
*  Add css animations
*  Properly get vendor assets from cdn's while maintaining npm as version control
*  auto advance videos upon completion

# Video Endpoints

## Videos (by channel id)
```
$ curl https://vimeo.com/api/v2/channel/332146/videos.json | json_reformat
[
    {
        "id": 15956330,
        "title": "Bob Dylan - \"The Witmark Demos: 1962-1964\"",
        "description": "Revisit Bob Dylan's earliest days in New York City and the recording sessions that first made him famous on \"The Witmark Demos: 1962-1964,\" the latest installment of The Bootleg Series. For more information, visit http://www.bobdylan.com and order the album at http://bit.ly/bobdylanstore",
        "url": "https://vimeo.com/15956330",
        "upload_date": "2010-10-18 12:49:23",
        "mobile_url": "https://vimeo.com/15956330",
        "thumbnail_small": "https://i.vimeocdn.com/video/96945104_100x75.jpg",
        "thumbnail_medium": "https://i.vimeocdn.com/video/96945104_200x150.jpg",
        "thumbnail_large": "https://i.vimeocdn.com/video/96945104_640.jpg",
        "user_id": 3712455,
        "user_name": "Columbia Records",
        "user_url": "https://vimeo.com/columbiarecords",
        "user_portrait_small": "https://i.vimeocdn.com/portrait/778835_30x30.jpg",
        "user_portrait_medium": "https://i.vimeocdn.com/portrait/778835_75x75.jpg",
        "user_portrait_large": "https://i.vimeocdn.com/portrait/778835_100x100.jpg",
        "user_portrait_huge": "https://i.vimeocdn.com/portrait/778835_300x300.jpg",
        "stats_number_of_likes": 176,
        "stats_number_of_plays": 43173,
        "stats_number_of_comments": 12,
        "duration": 336,
        "width": 640,
        "height": 360,
        "tags": "Bob Dylan, The Witmark Demos, Bootleg Series",
        "embed_privacy": "anywhere"
    }
]
```

## Info (by Channel ID)

```
$ curl https://vimeo.com/api/v2/channel/staffpicks/info.json | json_reformat
{
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

$ curl https://vimeo.com/api/v2/channel/staffpicks/info.json | json_reformat
{
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
```

## Embed

```
<iframe
  src="//player.vimeo.com/video/VIDEO_ID?portrait=0&color=333"
  width="WIDTH"
  height="HEIGHT"
  frameborder="0"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen
>
</iframe>
```
