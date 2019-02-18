const ALL_FEATURES = {
  engagement: false,
};

const features = {
  currentFeatures: ALL_FEATURES,
  __update: function __update() {
    const params = new URLSearchParams(window.location.search);
    for (const [feature, _] of params) {
      if (this.currentFeatures[feature] !== undefined) {
        this.currentFeatures[feature] = true;
      }
    }
  },
  get engagement() {
    return this.currentFeatures.engagement;
  },
};

window.addEventListener('hashchange', () => {
  features.__update();
});

features.__update();

export default features;
