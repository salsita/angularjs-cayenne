basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'examples/simple-login/lib/angular/angular.js',
  'examples/simple-login/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'src/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
