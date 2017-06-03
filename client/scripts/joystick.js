var joystick = new VirtualJoystick({
  container: document.getElementById('zone_joystick'),
  mouseSupport: true
});

function motion() {
  if (joystick.up()) {
    socket.emit('forward');
  }
  if (joystick.down()) {
    socket.emit('reverse');
  }
  if (joystick.right()) {
    socket.emit('right');
  }
  if (joystick.left()) {
    socket.emit('left');
  }
  if (joystick.deltaX() === 0 && joystick.deltaY() === 0) {
    socket.emit('stop');
  }
  requestAnimationFrame(motion);
}
requestAnimationFrame(motion);