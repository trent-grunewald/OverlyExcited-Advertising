const card = document.querySelectorAll('.card');
  //For each card
  for (var i = 0; i < card.length; i++) {
    let target = card[i]
    // adds click event to the selected card
      target.addEventListener('click', function clickFlip(){
      //toggle the class "Flipped" on the selected card
      this.classList.toggle('flipped');
      })
    };