function RepositoryCtrl($scope, $http) {
  $scope.init = function(owner, repoName) {
    $scope.owner = owner;
    $scope.repoURL = "/api/v1/repos/" + owner + "/"  + repoName;
    $http.get($scope.repoURL).success(function(data) {
      $scope.repository = data;
    });
  };

  $scope.updateKata = function() {
    $http.post($scope.repoURL, $scope.repository);
  }
}

function RepositoryCtrl($scope, $http) {
  $scope.init = function(owner, repoName) {
    $scope.owner = owner;
    $scope.repoURL = "/api/v1/repos/" + owner + "/"  + repoName;
    $http.get($scope.repoURL).success(function(data) {
      $scope.repository = data;
    });
  };

  $scope.updateKata = function() {
    $http.post($scope.repoURL, $scope.repository);
  }
}