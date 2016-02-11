/**
 * Form directive definition
 */

angular
	.module('BaseAngular')
	.directive('formMain', formMain);

function formMain() {

	function formMainController(){

	}//end formMainController

	return {
		restrict: 'E',
		templateUrl: 'common/directives/form-main/form-main.tpl.html',
		scope: {
			formMessage: '=',
			changeBackground: '&',
			secondMessage: '@'
		},
		bindToController: true,
		controllerAs: 'formMainCtrl',
		controller: formMainController
	};

}//end formMain