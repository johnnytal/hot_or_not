var gameEnd = function(game){};

gameEnd.prototype = {
    create: function(){
    	game.stage.backgroundColor = '#00ffff';
    	
  		endText = game.add.text(0, 0, 'Thanks for the vote!\n\nPress button to vote again', 
  		{font: '48px', fill: 'black', stroke:'white', strokeThickness: 1, align:'center', fontWeight:'bold'});
		endText.x = game.world.centerX - endText.width / 2;
		endText.y = endText.height;
		endText.alpha = 0;
		
		tweenText = game.add.tween(endText).to( { alpha: 1 }, 1000, "Linear", true);
		
        buttonRst = this.add.sprite(0, 0, 'button');
        buttonRst.x = WIDTH / 2 - buttonRst.width / 2;
        buttonRst.y = HEIGHT / 2;
        buttonRst.tint = 0xf04422;
        
        tweenBtn = game.add.tween(buttonRst).to( { alpha: 1 }, 1000, "Linear", true);

	    buttonRst.inputEnabled = true;
	    buttonRst.events.onInputDown.add(function(){
	    	notChosen = true;
	    	this.game.state.start("Game");
	    }, this);  
    }
};