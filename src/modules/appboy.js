class AppboyModule {
  constructor(analyticsObject) {
    this.analyticsObject = analyticsObject;
  }

  trackEvent(action, properties) {
    this.analyticsObject.logCustomEvent(action, properties);
  }

  identify(userId) {
    this.analyticsObject.changeUser(userId);
  }
}

export default AppboyModule
