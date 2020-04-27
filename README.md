# Rabbit Hole Radio

I built this app specifically to be used for my future radio show/streaming app. The radio show will stream audio files that are uploaded to the API using this app.

[Back End Github](https://github.com/ShaquilleClarke/Rabbit-Hole-Radio-BackEnd)

[Demo](https://youtu.be/li_6t6gbwV4)

## Features

* User Register/Login - Creation of profile allows for user data to persist even when page is refreshed. Current user is logged out upon the creation of a new account or when another user logs in. 

* Episode Creation/Curation - Administrators of radio show can create instances of new episodes, as well as provide information such as an episode title and air date.

* Episode Curation - Songs, advertisements, and interviews can be added to an episode simply uploading local audio files. Play of audio files are also provided by clicking on a created segment.


## Dev Tools

* Front End:
  * `React` - Framework used for front end functionality

* Back End:
  * `Ruby On Rails` - Framework provides back end logic for this app
  * `Cloudinary`- Cloud media manager which allows audio to be sent to the back end
  * `PostgresSQL` - Provides management for back end data
