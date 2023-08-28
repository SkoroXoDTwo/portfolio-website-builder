module.exports = {
  "name": "my-project",
  "version": "1.0.0",
  "loki": {
  "chromeSelector": "#my-decorator > *",
    "configurations": {
    "chrome.laptop": {
      "target": "chrome.app",
        "width": 1366,
        "height": 768
    },
    "chrome.iphone7": {
      "target": "chrome.docker",
        "preset": "iPhone 7"
    },
    "chrome.a4": {
      "target": "chrome.aws-lambda",
        "preset": "A4 Paper"
    },
    "ios": {
      "target": "ios.simulator"
    },
    "android": {
      "target": "android.emulator"
    }
  }
}
}
