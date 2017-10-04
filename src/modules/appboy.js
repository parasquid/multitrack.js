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
      let methodLut = {
        email(userObject, email) {
          userObject.setEmail(email);
        },
        firstName(userObject, firstName) {
          userObject.setFirstName(firstName);
        }
      }

      if (key in methodLut) {
        methodLut[key](this.analyticsObject.getUser(), value);
      } else {
        this.analyticsObject.getUser().setCustomUserAttribute(key, value);
      }
    }
  }
}

export default AppboyModule
