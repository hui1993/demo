var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super.call(this) || this;
        _this._color = [0x0000000, 0xfffffff, 0xff00000, 0x00000ff];
        _this._currentColor = 1;
        _this._type = RectType.UNCLICKABLE;
        _this.touchEnabled = true;
        _this.darw();
        return _this;
    }
    Rect.prototype.darw = function () {
        this.width = Data.getRectWidth();
        this.height = Data.getRectWidth();
        this.graphics.lineStyle(2, 0x000000); //规定边框宽度，背景色
        this.graphics.beginFill(this._color[this._currentColor]); //规定背景颜色
        this.graphics.drawRect(0, 0, Data.getRectWidth(), Data.getRectWidth()); //绘制矩形
        this.graphics.endFill(); //完成绘制
    };
    Object.defineProperty(Rect.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            if (this._type == RectType.CLICKABLE) {
                this._currentColor = 0;
            }
            else {
                this._currentColor = 1;
            }
            this.darw();
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.onRectClick = function () {
        if (this._type == RectType.CLICKABLE) {
            this._currentColor = 3;
        }
        else {
            this._currentColor = 2;
        }
        this.darw();
    };
    return Rect;
}(egret.Sprite));
__reflect(Rect.prototype, "Rect");
//# sourceMappingURL=Rect.js.map