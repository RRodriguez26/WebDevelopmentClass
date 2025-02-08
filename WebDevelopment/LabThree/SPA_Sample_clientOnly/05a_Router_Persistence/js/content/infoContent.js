function infoContent () {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
      <h2>Info</h2>
      <p>
        This is my info content 
        This is my super secret password: *****
      </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele; 
}