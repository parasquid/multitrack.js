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

  setSuperProperties(properties) {
    for (const [key, value] of Object.entries(properties)) {
      this.analyticsObject.getUser().setCustomUserAttribute(key, value);
    }
  }
}

export default AppboyModule
