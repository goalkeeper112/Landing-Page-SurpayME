if (Meteor.isClient) {
	GAnalytics.pageview();  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
