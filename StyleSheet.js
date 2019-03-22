
const isPlainObject = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

class StyleSheetBase {
  constructor() {
    this.absoluteFill = {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  flatten(stylesArray) {
    const mainStyleObj = {};
    if (Array.isArray(stylesArray)) {
      for (const styleObj of stylesArray) {
        Object.assign(mainStyleObj, styleObj);
      }
    }
    return mainStyleObj;
  }

  create(styles = {}) {
    isPlainObject(styles) ? this.styles = styles : this.styles = {};
  }

  get(styleName, params = {}) {
    if (!this.styles.hasOwnProperty(styleName) || !styleName) {
      return {};
    }
    let currentStyle = this.styles[styleName];
    if (typeof currentStyle === "function") {
      return currentStyle(params);
    }
    return currentStyle;
  }
}

module.exports = new StyleSheetBase();

