/**
 * GPL licenses
 * A module for Webpagelogger
 * @module Webpagelogger
 */
"use strict";

module.exports = class Webpagelogger {
  constructor(obj) {
    this.f = require("./fp.umd.min.js");
    this.prefix = "prefix";
    this.logger = "logger";
    this.log_method = "POST";
    this.log_api = false;
    this.log_data = "json";
    this.page = window.location.pathname;

    if (obj.hasOwnProperty("log_api")) {
      this.log_api = obj.log_api;
    }
    if (obj.hasOwnProperty("log_api")) {
      this.log_data = obj.log_data;
    }
    if (obj.hasOwnProperty("log_method")) {
      this.log_method = obj.log_method;
    }
    if (obj.hasOwnProperty("prefix")) {
      this.prefix = obj.prefix;
    }
    if (obj.hasOwnProperty("logger")) {
      this.logger = obj.logger;
    }
    if (obj.hasOwnProperty("page")) {
      this.page = obj.page;
    }
  }

  /**
@alias module:Webpagelogger
@param {str} - url
@param {object} - data
*/
  async post_json(url, _data) {
    const data = JSON.stringify(_data);
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/json");

      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = function (e) {
        console.log("Error fetching - Network");
        console.log(e);
      };
      xhr.send(data);
    });
  }

  /**
@alias module:Webpagelogger
@param {str} - url
@param {object} - doc
*/
  async post_x_www_form_urlencoded(url, doc) {
    let pairs = [];
    for (var k in doc) {
      pairs.push(encodeURIComponent(k) + "=" + encodeURIComponent(doc[k]));
    }
    let data = pairs.join("&");

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(data);
    });
  }

  /**
@alias module:Webpagelogger
@param {str} - number
@return {str} - number
*/
  pad(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

  /**
@alias module:Webpagelogger
*/
  async help() {
    console.log("...help");
  }

  /**
@alias module:Webpagelogger
*/
  async logit() {
    if (this.log_api === false) {
      //console.info("... no log_api asigne for webpagelogger");
      return;
    }

    const _date = new Date();
    const unixtime = Math.floor(_date / 1000);
    const date112 =
      _date.getUTCFullYear() +
      "" +
      this.pad(_date.getMonth() + 1) +
      "" +
      this.pad(_date.getDate()) +
      "" +
      this.pad(_date.getHours()) +
      "" +
      this.pad(_date.getMinutes()) +
      "";

    let info = {
      _id: unixtime,
      log_api: this.log_api,
      timeOpened: _date,
      timezone: _date.getTimezoneOffset() / 60,

      pageon: this.page,
      referrer: document.referrer,
      previous_sites: history.length,

      browserName: navigator.appName,
      browserEngine: navigator.product,
      browserVersion1a: navigator.appVersion,
      browserVersion1b: navigator.userAgent,
      browserLanguage: navigator.language,
      browserOnline: navigator.onLine,
      browserPlatform: navigator.platform,
      javaEnabled: navigator.javaEnabled(),
      dataCookiesEnabled: navigator.cookieEnabled,
      dataCookies1: document.cookie,
      dataCookies2: decodeURIComponent(document.cookie.split(";")),
      dataStorage: localStorage,

      sizeScreenW: screen.width,
      sizeScreenH: screen.height,
      sizeDocW: document.width,
      sizeDocH: document.height,
      sizeInW: screen.innerWidth,
      sizeInH: screen.innerHeight,
      sizeAvailW: screen.availWidth,
      sizeAvailH: screen.availHeight,
      scrColorDepth: screen.colorDepth,
      scrPixelDepth: screen.pixelDepth,

      latitude: "",
      longitude: "",
      accuracy: "",
      altitude: "",
      altitudeAccuracy: "",
      heading: "",
      speed: "",
      timestamp: "",
      page: String(location),
      fingerprint: "",
      unixtime: unixtime,
      date: date112,
      logger: this.logger,
    };

    if (typeof position !== "undefined") {
      info.latitude = position.coords.latitude;
      info.longitude = position.coords.longitude;
      info.accuracy = position.coords.accuracy;
      info.altitude = position.coords.altitude;
      info.altitudeAccuracy = position.coords.altitudeAccuracy;
      info.heading = position.coords.heading;
      info.speed = position.coords.speed;
      info.timestamp = position.timestamp;
    }
    const fp = await this.f.load();
    const r = await fp.get();
    info.fingerprint = r.visitorId; //get the fingerprint
    info._id =
      this.prefix + "_" + info._id + "_" + info.fingerprint.substr(0, 4);

    if (this.log_data === "json") {
      const ret = await this.post_json(this.log_api, info);
    } else if (this.log_data === "x-www-form-urlencoded") {
      const ret = await this.post_x_www_form_urlencoded(this.log_api, info);
    } else {
      console.info("...no log_data format asigned for webagelogger");
    }
  }
};
