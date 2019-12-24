//author @MayukhC99

$(function(){
	let buysell_btn = $('#buysell_button');
	let buy= $('#buy');
	let sell= $('#sell');
	
	buy.click(function(){
		if(buysell_btn.hasClass('btn-danger')===true){
			buysell_btn.removeClass('btn-danger');
			buysell_btn.addClass('btn-success');
			buysell_btn.text('Buy');
		}
	})
	
	sell.click(function(){
		if(buysell_btn.hasClass('btn-success')===true){
			buysell_btn.removeClass('btn-success');
			buysell_btn.addClass('btn-danger');
			buysell_btn.text('Sell');
		}
	})
	
	
})