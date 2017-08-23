/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {



var  Gotop = __webpack_require__(1);
    new Gotop($('body'));

var  Carousel = __webpack_require__(2);

    new Carousel($('.hole'));

var  getNews = __webpack_require__(3);

    new getNews($('.protfoliolist'));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

		


	/*gotop组件*/
module.exports = function Gotop($ct){
       this.ct = $ct;
       this.bindEvent = function(){
       	$(thisNode).on('click',function(){
       		$(window).scrollTop(0)
       	})
       }
       this.createNode = function(){
       	thisNode = $('<div class="gotop">GO Top</div>');
       	thisNode.css({
       		'position': 'fixed',
			    'bottom': '20px',
			    'right': '80px',
			    'display': 'inline-block',
			    'height':'20px',
			    'padding':'10px',
			    'background-color': '#999',
			    'border-radius':'50%',
			    'color': 'white',
			    'opacity': '0.7',
			    'font-weight':'bolder',
			    'cursor': 'pointer'
       	})
       	 return thisNode;
        }
       this.target = this.createNode

       this.createNode();
       this.ct.append(this.target);
       this.bindEvent();
    }






/***/ }),
/* 2 */
/***/ (function(module, exports) {



function Carousel($ct) {
        this.$ct = $ct;
        this.init();
        this.bind();
    }

	Carousel.prototype.init = function(){
		var $btnleft = this.$btnleft =this.$ct.find('#leftSlide'),
			$btnright = this.$btnright =this.$ct.find('#rightSlide'),
			$imgct = this.$imgct =this.$ct.find('.img-ct'),
			$imgli = this.$imgli =this.$ct.find('.img-ct>li'),
			$tag = this.$tag =this.$ct.find('.tag'),
			$tagli = this.$tagli =this.$ct.find('.tag>li');

	}

	Carousel.prototype.bind = function(){
		var _this = this

		this.$btnright.on('click', function(){
			_this.slideRight(500);
		})

		this.$btnleft.on('click', function(){
			_this.slideLeft(500);
		})

		this.$tag.on('click','li',function(){
			var $a = $(this).attr('id')
			var $b = $('.active').attr('id')
			if(($a - $b)>0){
				for (var i = 0; i < Math.abs($a - $b); i++) {
					_this.slideRight(500)
					console.log("1")
				}	
			}else{
				for (var i = 0; i < Math.abs($a - $b); i++) {
					_this.slideLeft(500)
					console.log("2")
				}
			}
		})
	}
	Carousel.prototype.slideRight=function(duration){
		var _this = this,
			$imgli = this.$imgli =this.$ct.find('.img-ct>li');
		this.$imgct.animate(
			{'margin-left':'-=1350px'},
			{duration: duration,
			complete: function() {
				_this.$imgli.first().appendTo(_this.$imgct);
				_this.$imgct.css('margin-left','+=1350px');
				_this.setBullet();	
			}
		})		
	}
	Carousel.prototype.slideLeft=function(duration){	
		var _this = this,
			$imgli = this.$imgli =this.$ct.find('.img-ct>li')
		this.$imgct.animate(
			{'margin-left':'+=1350px'},
			{duration: duration,
			complete: function(){
				_this.$imgli.last().prependTo(_this.$imgct);
				_this.$imgct.css('margin-left','-=1350px');
				_this.setBullet();
			}
		})
	}

    Carousel.prototype.setBullet = function() {
		var $id = this.$imgli.eq(1).attr('id')
		this.$tagli.removeClass('active');
		this.$tagli.eq($id).addClass('active')
    }


module.exports = Carousel;





/***/ }),
/* 3 */
/***/ (function(module, exports) {




module.exports = function getNews($ct){
		this.$ct = $ct;
		this.isLoading = false;
		this.arr = [0,0,0];

		this.init = function(){
			var _this = this;
			console.log("初始化");
			for (var i = 0; i <this.$ct.children('li').length; i++) {
				!function(i){
					console.log("开始初始化");
					if(_this.$ct.children('li').eq(i).find('img').height() == 0){
						console.log("图片加载后执行")
						_this.$ct.children('li').eq(i).find('img').load(function(){
							console.log(_this.$ct.children('li').eq(i))
							_this.render(_this.$ct.children('li').eq(i));
							_this.$ct.css('height',_this.arr[1]+"px")	
							console.log("done")	;	
						})						
					}else{
						console.log("立即执行")
						_this.render(_this.$ct.children('li').eq(i));
						_this.$ct.css('height',_this.arr[1]+"px");
						console.log("done")	;
					}
					
				}(i)
			}	
		}


		this.bind = function(){
			var _this = this
			console.log("点击事件")
			this.$ct.next('.loadmore').on('click',function(e){
				console.log("进入点击事件")
				e.preventDefault();
				if (_this.isLoading) {
		         	return ;
		        }
		        _thisisLoading = true;
				$.ajax({
					url:'http://localhost:8080/getNews?',
					method:'get',
					data:{
						length:3,
						index:_this.$ct.children('li').last().index()
					}
					}).done(function(data){
						_this.append(data)
						_this.isLoading = false;
					}).fail(function(jqXHR, textStatus){
						console.log(textStatus);
					})
			})		
		}
	
		this.append = function(arr){
			var _this = this;
			console.log(arr);
			for (var k = 0; k < arr.length; k++) {
				var $li = this.$ct.children('li').last().clone()
				$li.find('img').attr('src',arr[k])
				$li.appendTo(this.$ct)
				if($li.find('img').height() === 0){
					!function(i){
						console.log(k+"图片加载后执行");
						console.log($li.find('img'))
						$li.find('img').load(function(){
							console.log(i)
							_this.render($li);
							_this.$ct.css('height',_this.arr[1]+"px")
							console.log(_this.arr)			
						})					
					}(k)					
				}else{
					console.log("立即执行");
					_this.render($li);
					_this.$ct.css('height',_this.arr[1]+"px")
					console.log(_this.arr)
				}

			}
		}

		this.render = function($node){
				var min = Math.min.apply(null,this.arr)
				for (var j = 0; j < this.arr.length; j++) {
					if(this.arr[j] == min){
						var minIndex = j;
					}
				}
				var $Height = $node.outerHeight(true)
				console.log('它的高度是'+$Height)
				$node.css({
					top:min+"px",
					left:minIndex*400+"px"
				}).removeClass().addClass("item-"+minIndex)
				this.arr[minIndex] += $Height
				console.log("done")
		}

		this.init();
		this.bind();
	}







		
/*
*/

/***/ })
/******/ ]);