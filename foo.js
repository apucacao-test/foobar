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

function foo(x) { return x + 1; }

function RepositoriesCtrl($scope, RepoService) {
  $scope.init = function(login) {
    $scope.login = login;
    $scope.reviewStyles = [{"key": "cs", 
                            "display" : "Changesets"}, 
                            {"key": "pr", 
                             "display": "Pull requests"}];

    $scope.repositories = RepoService.query();

    $scope.repoFilters = [
      {
        'name': 'All',
        'fn': function(repo) { 
          return true; 
        }
      },
      {
        'name': 'Public',
        'fn': function(repo) {
            return repo.priv === false;
        }
      },
      {
        'name': 'Private',
        'fn': function(repo) {
            return repo.priv === true;
        }
      },
      {
        'name': 'Source',
        'fn': function(repo) {
            return repo.fork === false;
        }
      },
      {
        'name': 'Fork',
        'fn': function(repo) {
            return repo.fork === true;
        }
      } 
    ];
    $scope.selectedFilter = $scope.repoFilters[0];

  };

  $scope.selectFilter = function(item) {
    $scope.selectedFilter = item;
  };

  $scope.updateRepo = function(repo) {
    RepoService.save({repoOwner: repo.owner, repoId: repo.name}, repo);
  };
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

function FeedbackCtrl($scope, $http) {
  $scope.init = function(token, helpful) {
    $http.post("/api/v1/feedback/" + token, {"helpful": helpful});
  };
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

function foo(x) { return x + 1; }

function RepositoriesCtrl($scope, RepoService) {
  $scope.init = function(login) {
    $scope.login = login;
    $scope.reviewStyles = [{"key": "cs", 
                            "display" : "Changesets"}, 
                            {"key": "pr", 
                             "display": "Pull requests"}];

    $scope.repositories = RepoService.query();

    $scope.repoFilters = [
      {
        'name': 'All',
        'fn': function(repo) { 
          return true; 
        }
      },
      {
        'name': 'Public',
        'fn': function(repo) {
            return repo.priv === false;
        }
      },
      {
        'name': 'Private',
        'fn': function(repo) {
            return repo.priv === true;
        }
      },
      {
        'name': 'Source',
        'fn': function(repo) {
            return repo.fork === false;
        }
      },
      {
        'name': 'Fork',
        'fn': function(repo) {
            return repo.fork === true;
        }
      } 
    ];
    $scope.selectedFilter = $scope.repoFilters[0];

  };

  $scope.selectFilter = function(item) {
    $scope.selectedFilter = item;
  };

  $scope.updateRepo = function(repo) {
    RepoService.save({repoOwner: repo.owner, repoId: repo.name}, repo);
  };
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

function FeedbackCtrl($scope, $http) {
  $scope.init = function(token, helpful) {
    $http.post("/api/v1/feedback/" + token, {"helpful": helpful});
  };
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

function foobar() {
  return function(){ return function(){ return function(){ return function(){ return function(){ return 1; }(); }(); }(); }(); }
}