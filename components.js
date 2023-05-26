AFRAME.registerComponent('thumbstick-logging-right',{
  init: function () {
    this.el.addEventListener('thumbstickmoved', this.logThumbstick);
  },
  
  logThumbstick: function (evt) {

      let deltaTheta = evt.detail.x/20.0;
      
      player.rotation.y -= deltaTheta;
        
    }
  });