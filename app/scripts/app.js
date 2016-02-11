angular.module('BaseAngular', ['ngRoute']);

function config($routeProvider) {

	$routeProvider
		.otherwise({ redirectTo: '/' });
}

 angular
	.module('BaseAngular')
	.config(['$routeProvider', config])
	.controller('mainCtrl', mainCtrl);

function mainCtrl(){

	var flag = true;
	var vm = this;
	
	vm.message =[
		{text:'Hello'},
		{text:'I'},
		{text:'am'},
		{text:'the'},
		{text:'directive!!!!'}
		];
	
	vm.changeBackground = function(){
		
		flag = !flag;
		
		if(flag){
			vm.myStyle={'background-color':'#CCDCDC'};
		}else{
			vm.myStyle={'background-color':'yellow'};
		}
		
	}

}//end mainCtrl
