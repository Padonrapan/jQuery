$(function () {

/*
 一．使用validate.js 插件
 官网下载：http://bassistance.de/jquery-plugins/jquery-plugin-validation
 最重要的文件是validate.js，还有两个可选的辅助文件：additional-methods.js（控件class
 方式）和message_zh.js（提示汉化）文件（实际使用，请使用min 压缩版）。
 第一步：引入validate.js
 <script type="text/javascript" src="js/jquery.validate.js"></script>
 第二步：在JS 文件中执行
 $('#reg').validate();
 */

$('#reg').validate({
	rules:{
		user:{
			required:true,
			minlength:2
		},
		email:{
			email:true
		},
		url:{
			url:true
		},
		date:{
			date:true
		},
		number:{
			number:true
		},
		notpass:{
			equalTo:'#pass'
		},
		min:{
			min:5
		},
		range:{
			range:[5,10]
		},
		rangelength:{
			rangelength:[5,10]
		}
	},
	messages:{
		user:{
			required:'账号不得为空!',
			minlength:'账号不得少于2位!'
		}
	}
});
	

});


























