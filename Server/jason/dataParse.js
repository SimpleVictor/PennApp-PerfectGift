var amazon = require('amazon-product-api');
var fs = require('fs');
var jsonfile = require('jsonfile');
var myJson = require("./BeautifulObject.json");
var config = require("../config");



var DataParse = function(callback){


    var decisionPriorityList = ["basic_info","users_photo","newGrabPost"];


    /**
     *Methods dealing with building priority hash table for keywords
     */
        // Custom hash function
    var key = function(obj, index){
            // We will use index as hash key for now
            return index;
        };

    // Method for associating priority to the given keyword
    var addPriorityToKey = function(keyword, priority){
        return {"keyword" : keyword,
            "priority": priority}
    }

    // Method for building priority array based on input list
    var buildPriorityObj = function(priorityTextFile){
        var objDict = {};
        for (line in priorityTextFile){
            // Note that we are passing in both index and the object itself
            objDict[key(priorityTextFile[line], line)] = addPriorityToKey(priorityTextFile[line], priorityTextFile.length - line);
            //console.log(objDict[key(priorityTextFile[line], line)]);
        }
        return objDict;
    }

    // Recursive method that returns the string values
    var deepParse = function(currObject, arr){
        //console.log(index);
        Object.keys(currObject).forEach(function (key) {

            if((typeof currObject[key]) === 'object' && currObject[key] !== null){
                //console.log(currObject[key]);
                return deepParse(currObject[key], arr);
            } else if((typeof currObject) === 'object' && currObject !== null){
                //console.log(currObject[key]);
                return arr.push(currObject[key]);
            } else if((typeof currObject) === 'string'){
                //console.log(currObject);
                return arr.push(currObject);
            } else {
                //console.log(typeof currObject);
                return arr;
            }
        });
    }

    //  Helper method for removing noise words
    var removeNoiseWords = function(wordsArr){
        var noiseWords = fs.readFileSync(__dirname+'/noiseWords.txt').toString().split("\n");
        var retArr = [];
        for (key in wordsArr){
            var toAdd = true;
            for (word in noiseWords){
                if(wordsArr[key] === noiseWords[word]){
                    toAdd = false;
                    break;
                }
            }
            if(toAdd){
                retArr.push(wordsArr[key]);
            }
        }

        return retArr;
    }

    // Method for parsing data and returning object contingent for gift selection process
    var buildParseObj = function(priorityObj, fbObj){
        var arr = [];
        var resultArr = [];
        for (index in priorityObj){
            deepParse(fbObj[priorityObj[index]["keyword"]], arr);
        }
        for (phrase in arr){
            var currWords = arr[phrase].replace(/\n/g, " ").split(" ");
            for(word in currWords){
                resultArr.push(currWords[word]);
            }
        }
        //console.log(resultArr);

        return removeNoiseWords(resultArr);
    }

    /**
     * AMAZON PRODUCT API RELATED
     */
    var connectClient = function(){
        return amazon.createClient({
            awsId: config.awsid,
            awsSecret: config.awsSecret,
            awsTag:  config.awsTag
        });
    }

    var itemSearch = function(client, querykey){
        // Example method for querying amazon product api search
        console.log("Made it here");
        console.log(queryKey);
        return client.itemSearch({
            keywords: JSON.stringify(querykey),
            responseGroup: 'ItemAttributes,Offers,Images'
        }).then(function(results){
            console.log(results);
            callback(results);
            // return results
        }).catch(function(err){
            console.log("in here");
            console.log(err);
            console.log(JSON.stringify(err));
        });
    }

    var priorityObj = buildPriorityObj(decisionPriorityList);

    var parsedObj = buildParseObj(priorityObj, myJson);

    var client =  connectClient();

    /******************************
     *
     * This is how we will be searching by:
     *  currently using the top 2 keyword for search.
     *  To increase gift creativity, try appending on more keywords
     *
     *******************************/
    var queryKey = "" +
        parsedObj[0] + " " +
        parsedObj[1] ;


    itemSearch(client, queryKey);
};

module.exports = {DataParse: DataParse};