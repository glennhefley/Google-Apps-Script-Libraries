// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */

(function() {"use strict"})()

// Code review all files - TODO
// JSHint review (see files) - TODO
// Unit Tests - TODO
// System Test (Dev) - TODO
// System Test (Prod) - TODO

// Config.gs
// =========
//
// Dev: AndrewRoberts.net
//
// All the constants and configuration settings

// Configuration
// =============

var SCRIPT_NAME = "GAS Framework"
var SCRIPT_VERSION = "v0.dev"

var PRODUCTION_VERSION_ = false

// Log Library
// -----------

var DEBUG_LOG_LEVEL_ = PRODUCTION_VERSION_ ? BBLog.Level.INFO : BBLog.Level.FINER
var DEBUG_LOG_DISPLAY_FUNCTION_NAMES_ = PRODUCTION_VERSION_ ? BBLog.DisplayFunctionNames.NO : BBLog.DisplayFunctionNames.YES

// Assert library
// --------------

var SEND_ERROR_EMAIL_ = PRODUCTION_VERSION_ ? true : false
var HANDLE_ERROR_ = PRODUCTION_VERSION_ ? Assert.HandleError.DISPLAY_FULL : Assert.HandleError.THROW
var ADMIN_EMAIL_ADDRESS_ = ''

// Tests
// -----

var TEST_SHEET_ID_ = ''

// Constants/Enums
// ===============

// Column offsets for "Libraries" columns
var OFFSETS_ = {
  'Name'           : 0,	
  'Description'    : 1,	
  'ID'             : 2,	
  'More Info'      : 3,	
  'Examples'       : 4,	
  'Script Project' : 5,	
  'Source Control' : 6,	
  'Versions'       : 7,	
  'Created'        : 8,	
  'Modified'       : 9,	
  'Noticed'        : 10,
  'Added'          : 11
}

var SHEETS_ = [
//  {
//    name: 'Misc Libs 1', 
//    columns: [
//      {
//        name: 'Timestamp',
//        map: 'Added',
//        offset: 0
//      },
//      {
//        name: 'Name',
//        map: 'Name',
//        offset: 1
//      },
//      {
//        name: 'Desc',
//        map: 'Description',
//        offset: 2,  
//      },
//      {
//        name: 'Project key',
//        map: 'Key',
//        offset: 3,  
//      },
//      {
//        name: 'More Info',
//        map: 'More Info',
//        offset: 4,  
//      },
//      {
//        name: 'Versions',
//        map: 'Versions',
//        offset: 5,  
//      },
//      {
//        name: 'Source',
//        map: 'Source Control',
//        offset: 6,  
//      }
//    ],
//  },
  {
    name: 'Misc Libs 2', 
    columns: [
      {
        name: 'Name',
        map: 'Name',
        offset: 0
      },
      {
        name: 'Desc',
        map: 'Description',
        offset: 1,  
      },
      {
        name: 'Key',
        map: 'ID',
        offset: 2,  
      }
    ],
  },
  {
    name: 'andrewroberts.net', 
    columns: [
      {
        name: 'Name',
        map: 'Name',
        offset: 0
      },
      {
        name: 'Desc',
        map: 'Description',
        offset: 1,  
      },
      {
        name: 'Key',
        map: 'ID',
        offset: 2,  
      },
      {
        name: 'Test Sheet/Examples',
        map: 'Examples',
        offset: 3,  
      },
      {
        name: 'GitHub',
        map: 'Source Control',
        offset: 4,  
      }
    ],
  }
]

// Function Template
// -----------------

/**
 *
 *
 * @param {object} 
 *
 * @return {object}
 */
/* 
function functionTemplate() {
  
  

} // functionTemplate() 
*/