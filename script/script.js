
var text = [ 'WE ARE <span>SOCIALMEDIA.</span>','WE ARE <span> WEB</span> DESIGN.','WE ARE <span>MOBILE</span> DEVELOPMENT.','WE ARE<span> JOKER</span> MEDIA','WE ARE <span> DIGITAL </span>MARKETING.']; 
var counter = 0;
var elem =document.getElementById('changingtext');
var f = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;

  }
 
}
$(document).ready(function(){
  $('.single-item').slick();
  var $jq = jQuery.noConflict();
$jq(document).ready(function() { 
  $jq('.single-item').click( function(event) {
    $jq(this).hide();
    event.preventDefault();
    
  });
});
});