// TypeScript file
class GroupRect extends egret.Sprite
{
    public constructor()
    {
        super();
        this.createRects();
    }

    private _rects:Array<Rect>;
    private createRects()
    {
        this._rects = [];
        for( var i=0;i<4;i++ )
        {
            var rect:Rect = new Rect();
            this._rects.push( rect );
            rect.x = rect.width*i;
            this.addChild( rect );
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickRect,this);
        }
    }

    public _currentRow:number = 0;
    private onClickRect(evt:egret.TouchEvent)
    {
        evt.target.onRectClick();
        if( (evt.target.type == RectType.UNCLICKABLE)||(this._currentRow != (Data._rectRow-2)) )
        {
            this.dispatchEventWith("gameOver");
        }
        else
        {
            this.dispatchEventWith("clickRight");
        }
    }

    private _currentBlackIndex:number = 0;
    public createBlackRect()
    {
        this.init();
        var n:number = Math.random();
        if( n >= 0 && n < 0.25)
        {
            this._currentBlackIndex = 0;
        }
        else  if( n >= 0.25 && n < 0.5)
        {
            this._currentBlackIndex = 1;
        }
        else  if( n >= 0.5 && n < 0.75)
        {
            this._currentBlackIndex = 2;
        }
        else  if( n >= 0.75 && n < 1)
        {
            this._currentBlackIndex = 3;
        }
        this._rects[this._currentBlackIndex].type = RectType.CLICKABLE;
    }

    public init()
    {
        for ( var i=0;i<4;i++)
        {
            this._rects[i].type = RectType.UNCLICKABLE;
        }
    }

    public move()
    {
        this._currentRow++;
        if( this._currentRow == Data.getRectRow() )
        {
            this._currentRow = 0;
            this.createBlackRect();
        }
        this.y = this._currentRow*Data.getRectWidth();
    }
}