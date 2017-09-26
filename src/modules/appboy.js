class AppboyModule {
  constructor(analyticsObject) {
    this.analyticsObject = analyticsObject;
  }

  trackEvent(action, properties) {
    this.analyticsObject.logCustomEvent(action, properties);
    console.log("appboy tracked!");
  }
}

export default AppboyModule
