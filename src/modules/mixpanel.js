class MixpanelModule {
  constructor(analyticsObject) {
    this.analyticsObject = analyticsObject;
  }

  trackEvent(action, properties) {
    // Mixpanel alters the properties object with its own properties. To avoid that, we
    // need to clone the object
    // https://github.com/mixpanel/mixpanel-js/blob/master/src/mixpanel-core.js#L1066
    const mixpanelProperties = Object.assign({}, properties)
    this.analyticsObject.track(action, mixpanelProperties);
    console.log("mixpanel tracked!");
  }
}

export default MixpanelModule
