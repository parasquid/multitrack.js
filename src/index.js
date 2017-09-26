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
    this.moduleDefinitions = {
      mixpanel: MixpanelModule,
      appboy: AppboyModule
    }

    for (let key in modules) {
      if (key in this.moduleDefinitions) {
        this.modules.push({
          name: key,
          object: (new this.moduleDefinitions[key](modules[key])),
        });
      } else {
        console.log("unimplemented module or unknown key: " + key);
      }
    }
  }

  // e.g.
  // tracker.trackEvent("Homepage Click", { time: (new Date()) })
  trackEvent(action, properties = {}, excludedModules = []) {
    this.modules.forEach(module => {
      if(!(excludedModules.includes(module.name))) {
        (module.object).trackEvent(action, properties)
      }
    })
  }
}

export default MultiTrack
