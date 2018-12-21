'use strict';
class FileController {
  constructor(fileSystemService) {
    this.path = '.';
    this.fileSystemService = fileSystemService;
    this.showFiles(path);
  }
  showFiles(path) {
    this.files = this.fileSystemService.getFiles(this.path);
  }
}

class FileSystemService {
  constructor() {
    this.files = [];
  }
  getFiles(path) {
    const fs = require('fs');
    this.files = fs.readdirSync(path);
    return this.files;
  }
}

(function(){
  angular.module('filereader', [])
    .controller('fileController', FileController)
    .service('fileSystemService', FileSystemService);
})();
