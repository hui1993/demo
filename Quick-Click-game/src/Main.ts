class Main extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();
       
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
    }

    private addStage()
    {
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
        var game = new Game( this );
    }
}