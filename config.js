// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// Hierarchical node.js configuration with command-line arguments, environment
// variables, and files.
const nconf = (module.exports = require('nconf'));
const path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env(['CLOUD_BUCKET', 'NODE_ENV', 'PORT'])
  // 3. Config file
  .file({file: path.join(__dirname, 'config.json')})
  // 4. Defaults
  .defaults({
    // Typically you will create a bucket with the same name as your project ID.
    CLOUD_BUCKET: 'reviewmyresume',

    PORT: 8080,
  });

// Check for required settings
checkConfig('CLOUD_BUCKET');

function checkConfig(setting) {
  if (!nconf.get(setting)) {
    throw new Error(
      `You must set ${setting} as an environment variable or in config.json!`
    );
  }
}
