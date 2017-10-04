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
        avatarImageUrl(userObject, url) {
          userObject.setAvatarImageUrl(url);
        },
        country(userObject, country) {
          userObject.setCountry(country);
        },
        dateOfBirth(userObject, args) {
          // year, month, day
          userObject.setDateOfBirth.apply(this, args);
        },
        email(userObject, email) {
          userObject.setEmail(email);
        },
        firstName(userObject, firstName) {
          userObject.setFirstName(firstName);
        },
        gender(userObject, gender) {
          userObject.setGender(gender);
        },
        homeCity(userObject, city) {
          userObject.setHomeCity(city);
        },
        lastKnownLocation(userObject, args) {
          // latitude, longitude, accuracy, altitude, altitudeAccuracy
          userObject.setLastKnownLocation.apply(this, args);
        },
        lastName(userObject, lastName) {
          userObject.setLastName(lastName);
        },
        phoneNumber(userObject, number) {
          userObject.setPhoneNumber(number);
        },
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
