angular.module('sugarcare')
    .controller('dietician_profile_coontroller',['$scope','utilities','$cookies',
        function($scope,utilities,$cookies)
            // $cookies,
            // $window
            {
            var PatientId = $cookies.get('userid');

            $scope.SubscribedDieticians={};

            utilities.getSubscribedDieticians(PatientId)
                .success(function(response){
                    if(response.success)
                    {
                        console.log("sub diet details fetched!");
                        console.log(response.message);
                        $scope.SubscribedDieticians = response.message;
                    }
                    else
                    {
                        console.log("Some error occured! Can't fetch");
                    }
                });



            }]);
