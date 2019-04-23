let state = 2;

let s = sketch => {

  sketch.setup = () => {
    //document.body.style['userSelect'] = 'none';
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(sketch.windowWidth, h);
    c.position(0, 0);
    c.style('pointer-events', 'none');
    sketch.clear();
  }

  sketch.draw = () => {
    if (sketch.mouseIsPressed && state == 1) {
      sketch.stroke(0);
      sketch.strokeWeight(4);
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    } else if (state == 2) {
      let selectedText = window.getSelection();
      if (selectedText.toString().length > 0) {
        let highlight = selectedText.focusNode.parentNode;
        console.log(highlight.style);
      }
    }
  }

}

let myp5 = new p5(s);