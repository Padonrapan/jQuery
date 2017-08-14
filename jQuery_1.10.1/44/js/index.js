$(function () {

	$('#search_button').button({
		icons : {
			primary : 'ui-icon-search',
		},
	});
	

	$('#reg').dialog({
		autoOpen : true,
		modal : true,
		resizable : false,
		width : 320,
		height : 340,
		buttons : {
			'提交' : function () {
				
			}
		}
	});
	
	$('#reg').buttonset();


	$('#date').datepicker({
		dateFormat:'yy-mm-dd',
        //dayNames : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        //dayNamesShort : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesMin:['日','一','二','三','四','五','六'],
		monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		//monthNamesShort: ['一','二','三','四','五','六','七','八','九','十','十一','十二'],
		altField:'#abc',
		altFormat:'yy/mm/dd',
		appendText:'日历',
		firstDay:1,
		showWeek:true,
		weekHeader:'周'
	});
	
	$('#reg input[title]').tooltip({
		show : false,
		hide : false,
		position : {
			my : 'left center',
			at : 'right+5 center'
		}
	});
	

	
	$('#email').autocomplete({
		delay:0,
		autoFocus:true,
		source : function(request,response){
			//alert(request.term);	//监听用户输入的内容
			//response(['aa', 'aaaa', 'aaaaaa', 'bb']);	//展示补全结果,这里的response 不会根据你搜索关键字而过滤无关结果
            var hosts = ['qq.com','163.com', '263.com', 'gmail.com', 'hotmail.com'],
            	term=request.term,	//获取用户输入的内容
				name=term,//邮箱的用户名
				host='',//邮箱的域名
				ix=term.indexOf('@'),//@的位置
				result=[];//最终呈现的邮箱列表
			result.push(term);

			if(ix>-1){//当有@的时候重新分配用户名和域名
				name=term.slice(0,ix);
				host=term.slice(ix+1);
			}
			if(name){
				//如果已经输入了@和后面的域名,那么就找到相关域名提示;如已输入asdf@h,就找到hotmail.com;
				//如果用户还没有输入域名,就找到所有域名
				var findedHosts=[];
				if(host){
					findedHosts=$.grep(hosts,function(value,index){
						return value.indexOf(host)>-1;
					});
				}else{
                    findedHosts=hosts;
				}
				var findedResult=$.map(findedHosts,function(value,index){
					return name + '@' + value;
				});
				result=result.concat(findedResult);
			}
            response(result);
		}

	});
	

});


























