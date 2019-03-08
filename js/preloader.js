var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
    	progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'white', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 37,  this.game.world.centerY - 150, "Loading...", {
            font: '18px', fill: 'lightgrey', fontWeight: 'normal', align: 'center'
        });

        this.game.load.image('button', "assets/images/large_orange_button.png");
        this.game.load.image('drag', "assets/images/drag.png");
        
        this.game.load.image('swipe_r', "assets/images/swipe_r.png");
        this.game.load.image('swipe_l', "assets/images/swipe_l.png");
        
        this.game.load.image('redImg', "assets/images/red.png");
        this.game.load.image('greenImg', "assets/images/green.png");
    },
    
    create: function(){
        this.game.state.start("Game");
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};