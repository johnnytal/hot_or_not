var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        this.game.load.image('bg', "assets/images/bg.png");
        this.game.load.image('button', "assets/images/large_orange_button.png");
        this.game.load.image('drag', "assets/images/drag.png");
        this.game.load.image('swipe_r', "assets/images/swipe_r.png");
        this.game.load.image('swipe_l', "assets/images/swipe_l.png");
        this.game.load.image('red', "assets/images/red.png");
        this.game.load.image('blue', "assets/images/blue.png");
    },
    
    create: function(){
        this.game.state.start("Game");
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};