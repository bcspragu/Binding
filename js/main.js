var body, height;

$(function() {
  body = $('body');
  height = body.height();

  for (var i = 0; i < texts.length; i++) {
    renderText(i);
  }
});

function renderText(index) {
  var textDiv = $('<div class="text"></div>');
  textDiv.text(texts[index]);
  textDiv.css({opacity: 0.1 + Math.random() * 0.9});
  textDiv.css({width: (20 + Math.random() * 55) + "%" });
  textDiv.css({'font-size': (1 + Math.random() * 3) + "em"});
  body.prepend(textDiv);
  var textHeight = textDiv.height();
  textDiv.css({top: Math.floor(Math.random() * height - textHeight/2)});
  textDiv.animate({right: "-75%"}, 20000 * Math.random() + 15000, "linear", function() {
    $(this).remove();
    renderText(index);
  });

}
