// TypeScript file
class Rect extends egret.Sprite
{
    public constructor()
    {
        super();
        this.touchEnabled = true;
        this.darw();
    }

    private _color:Array<number> = [0x0000000,0xfffffff,0xff00000,0x00000ff];
    private _currentColor:number = 1;

    private darw()
    {
        this.width = Data.getRectWidth();
        this.height = Data.getRectWidth();
        this.graphics.lineStyle(2,0x000000);//规定边框宽度，背景色
        this.graphics.beginFill(this._color[this._currentColor]);//规定背景颜色
        this.graphics.drawRect(0,0,Data.getRectWidth(),Data.getRectWidth());//绘制矩形
        this.graphics.endFill();//完成绘制
    }

    public _type:string = RectType.UNCLICKABLE;
    public get type():string
    {
        return this._type;
    }
    public set type(val:string)
    {
        this._type = val;
        if( this._type == RectType.CLICKABLE)
        {
            this._currentColor = 0;
        }
        else
        {
            this._currentColor = 1;
        }
        this.darw();
    }
    public onRectClick()
    {
        if( this._type == RectType.CLICKABLE)
        {
            this._currentColor = 3;
        }
        else
        {
            this._currentColor = 2;
        }
        this.darw();   
    }
}

