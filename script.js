// Function: 
function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'Oh thanks! <3';
    document.body.appendChild(para);
  } 
    
    var buttons = document.querySelectorAll('button');
    
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
     var test = document.getElementById("test");
  
  
//js two
  test.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  
  
  // js two second color
  test.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "green";
    }, 500);
  }, false);