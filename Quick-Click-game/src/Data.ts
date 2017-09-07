// TypeScript file
class Data
{
    public static _rectWidth:number = 0;
    public static getRectWidth():number
    {
        if (Data._rectWidth == 0)
        {
            Data._rectWidth = egret.MainContext.instance.stage.stageWidth/4;
        }
        return Data._rectWidth;
    }

    public static score:number = 0;

    public static _rectRow: number =0;
    public static getRectRow():number
    {
        if (Data._rectRow == 0)
        {
            Data._rectRow = Math.ceil(egret.MainContext.instance.stage.stageHeight/Data.getRectWidth())*1;
        }
        return Data._rectRow;
    }
}