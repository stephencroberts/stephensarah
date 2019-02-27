const ALL_FEATURES = {
  proposal: true,
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
  get proposal() {
    return this.currentFeatures.proposal;
  },
};

window.addEventListener('hashchange', () => {
  features.__update();
});

features.__update();

export default features;
