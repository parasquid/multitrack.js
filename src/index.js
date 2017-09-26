"use strict"
import AppboyModule from "./modules/appboy"
import MixpanelModule from "./modules/mixpanel"

class MultiTrack {

  // pass in the actual (already initialized) analytics objects
  // e.g.
  // let tracker = new MultiTrack({
  //   appboy: appboy,
  //   mixpanel: mixpanel
  // });
  constructor(modules = {}) {
    this.modules = [];
    for (let key in modules) {
      switch (key) {
        case "mixpanel":
          this.modules.push(new MixpanelModule(modules[key]))
          break;

        case "appboy":
          this.modules.push(new AppboyModule(modules[key]))
          break;

        default:
          console.log("unimplemented module or unknown key: " + key)
      }
    }
  }

  // e.g.
  // tracker.trackEvent("Homepage Click", {})
  trackEvent(action, properties = {}, excludedModules = []) {
    this.modules.forEach(module => {
      module.trackEvent(action, properties)
    })
  }
}

export default MultiTrack
