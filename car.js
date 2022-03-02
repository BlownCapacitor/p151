AFRAME.registerComponent("car", {
    schema: {
        modelRef: { type: "string", default: "car.glb" }
      },
      init: function() {
        this.el.setAttribute("gltf-model", this.data.modelRef);
      }
})