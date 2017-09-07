// TypeScript file
class GameOverPanel extends egret.Sprite
{
    public constructor()
    {
        super();
        this.draw();
        this.addEventListener(egret.Event.ADDED,this.showText,this);
    }

    private txt:egret.TextField;
    private draw()
    {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;

        this.graphics.beginFill(0x111111,0.8);
        this.graphics.drawRoundRect(0,0,w,h,4);
        this.graphics.endFill();

        this.txt = new egret.TextField();
        this.txt.width = w;
        this.txt.y = 300;
        this.txt.textColor = 0xFFCC33;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild( this.txt );

        var btn = new egret.Sprite();
        btn.graphics.beginFill(0xFFCC33);
        btn.graphics.drawCircle(0,0,100);
        btn.graphics.endFill();
        btn.width = 200;
        btn.height = 200;
        btn.x = w/2;
        btn.y = h/2+100;
        this.addChild( btn );
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
    }

    private startGame()
    {
        this.parent.removeChild( this );
        this.dispatchEventWith("startGame");
    }

    private showText()
    {
        this.txt.text = "我努力走了" + Data.score + "步";
    }
}