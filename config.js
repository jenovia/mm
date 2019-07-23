
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			timeFormat: "12",
		},
		{
			module: "MMM-MyCalendar",
			header: "Calendar",
			position: "top_left",
			config: {
				maxWidth: "10%",
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/jenovia%40gmail.com/private-98402963af747ceede5accd360c90252/basic.ics",
						maximumEntries: "4",
					}
				]
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_left",
			header: "Weather Forecast",
			config: {
				tableClass: "medium",
				location: "New York",
				locationID: "5391997",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "56a3b45fe7473039478833e4a7925963",
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}

		},
		{
 			 module: "MMM-NowPlayingOnSpotify",
 			 position: "bottom_right",
 			 config: {
   				 clientID: "fe7eb68ed89c462a8a736589e5041a1a",
   				 clientSecret: "daba1f7221d84c4ebfe231fed254e415",
   				 accessToken: "BQCykx8a4rGsMVx_7arbhB_77TQD6nGUc_R-vaKRiuHwxCDievSiNobDlc6y0px2eHgp92IFeJq13V8zkTYDDfh6izYpiXdqzEo3TJ6kDAFOnuAGMvDa8qidtn2zUVwjVX4sheaZ7uw5P5i5ROICEJL12w",
   				 refreshToken: "AQDob27DTydBJxN2XDGVeP4yic4CFOEQZpsVWK7OKP9TmJ4wss3sKkjgg9xatB4_55KIPHFUDM8TBW53CychQrnr_FSEEXIxry8aYHTc9XARiyVvk2DFqa6YypAv-usGt1df4Q"
 				 }
		},
		
	]


};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
