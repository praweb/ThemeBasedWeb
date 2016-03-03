
var app = angular.module('PersonProfile',['routes','services','directives']);

app.controller('GetPersonDetails',["BasicInformation","$routeParams",function(BasicInformation, $routeParams){
	//var personsData = this;
	var self= this;

	self.personsData = BasicInformation.data;
	/*possible values: under-construction, profile, portfolio, templates, contact*/
	self.pageName = $routeParams.pageName || 'home';
	self.getData = function(){
		return 'prasanna virigineni';

	};

	self.theme={
		"colors":['#52A0BA','#798c66','#8C4A34','#76348C']
	}

	self.alterTheme = function(color){
		/*798C66,*/
		less.modifyVars({
			'@base-color' : color
		});
		
	}

	
	console.debug(self.pageView);
	return self;
	
}]);