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
  textDiv.css({top: Math.floor(Math.random() * height - height/2)});
  textDiv.css({width: (20 + Math.random() * 80) + "%" });
  textDiv.css({'font-size': (0.25 + Math.random() * 3) + "em"});
  body.prepend(textDiv);
  textDiv.animate({right: "-100%"}, 20000 * Math.random() + 15000, "linear", function() {
    $(this).remove();
    renderText(index);
  });

}
