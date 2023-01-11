
// SPLIT VIEW HANDLING

  // Query the element
  const resizer = document.getElementById('dragMe');
  const leftSide = resizer.previousElementSibling;
  const rightSide = resizer.nextElementSibling;

  // The current position of mouse
  let x = 0;
  let y = 0;

  // Width of left side
  let leftWidth = 0;

  // Handle the mousedown event
  // that's triggered when user drags the resizer
  const mouseDownHandler = function (e) {
      // Get the current mouse position
      x = e.clientX;
      y = e.clientY;
      leftWidth = leftSide.getBoundingClientRect().width;

      // Attach the listeners to 'document'
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
  };

  // Attach the handler
  resizer.addEventListener('mousedown', mouseDownHandler);

  const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - x;
      const dy = e.clientY - y;

      const newLeftWidth = ((leftWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
      width = (newLeftWidth > 85) ? 85 : (newLeftWidth < 15) ? 15 : newLeftWidth;
      leftSide.style.width = width + '%';
      
      document.body.style.cursor = 'col-resize';
      // $("body").css("cursor", 'col-resize');
      leftSide.style.userSelect = 'none';
      leftSide.style.pointerEvents = 'none';
      $(leftSide).css("-webkit-user-select", 'none');

      rightSide.style.userSelect = 'none';
      rightSide.style.pointerEvents = 'none';
      $(rightSide).css("-webkit-user-select", 'none');
  };

  const mouseUpHandler = function () {
      resizer.style.removeProperty('cursor');
      document.body.style.removeProperty('cursor');

      leftSide.style.removeProperty('user-select');
      leftSide.style.removeProperty('-webkit-user-select');
      leftSide.style.removeProperty('pointer-events');

      rightSide.style.removeProperty('user-select');
      rightSide.style.removeProperty('-webkit-user-select');
      rightSide.style.removeProperty('pointer-events');

      // Remove the handlers of `mousemove` and `mouseup`
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
  };



// show/hide transcript
$("#show-transcript").click(function() {
  if ($(this).attr("value") == "off") {
    $(this).attr("value", "on");
    $(this).css("color", "#F3AE3D");
    $(".letter").css({height: "90vh", width: "50%"});
    $(".page-wrap").css("width", "100%");
    $("#dragMe").show();
    $(".transcript").show();
    $("#transcript-label").html("hide transcript");
  } else {
    $(this).attr("value", "off");
    $(this).css("color", "white");
    $(".letter").css({height: "100%", width: "100%"});
    $(".page-wrap").css("width", "50%");
    $("#dragMe").hide();
    $(".transcript").hide();
    $("#transcript-label").html("show transcript");
  }
});

// show button titles on hover
$("button").mouseover(function() {
  $(this).next().show();
});
$("button").mouseout(function() {
  $(this).next().hide();
});
