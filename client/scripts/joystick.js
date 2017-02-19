
  
  var joystick  = new VirtualJoystick({
    container : document.getElementById('zone_joystick'),
    mouseSupport : true
  });

  function motion() {
    if( joystick.up() ) {
      socket.emit('forward');
      console.log("forward")
    }
    if( joystick.down() ) {
      socket.emit('reverse');
      console.log("reverse");
    }
    if( joystick.right() ) {
      socket.emit('right');
      console.log("right");
    } 
    if( joystick.left() ) {
      socket.emit('left');
      console.log("left");
    }
    if( joystick.deltaX() === 0 && joystick.deltaY() === 0 ) {
      //socket.emit('stop');
     // console.log("stop")
    }
    requestAnimationFrame(motion);
  }
  requestAnimationFrame(motion);