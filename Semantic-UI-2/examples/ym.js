http://taylorrose.github.io/Semantic-UI-2/examples/homepage.html


//Background
$("#home .masthead").css("background-image","url(images/bg2.jpg)");


//H1
$("#home > div.ui.inverted.masthead.segment > div > div > div.ui.transition.information.visible > h1").html("Sign Up Your Cat For Classes Today");
//$(".transition > p").css({"display":"none", "visibility":""});

//Button CTAs
$("#home > div.ui.inverted.masthead.segment > div > div > div.ui.transition.information.visible > div > div.visible.content").html("Sign Up Today!");
$("#home > div.ui.inverted.masthead.segment > div > div > div.ui.transition.information.visible > div > div.hidden.content").html("Yeah, Do It!");
$("#home > div.ui.inverted.masthead.segment > div > div > div.ui.transition.information.visible > div").attr("class","large orange animated fade ui button");

//Cat Image
$("#home > div.ui.inverted.masthead.segment > div > div > img").attr('src','images/cat2.png');


 