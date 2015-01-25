
module.exports = function(folderPath, ext, callback){
    var fs = require("fs");

    fs.readdir( folderPath, function( err, data ){

        if ( err ){
            return callback( err );
        }

        var returnArr = [];

        for ( var i = 0; i < data.length; i++ ){
            if (data[i].indexOf( "." + ext ) > -1){
                returnArr.push( data[i] );
            }
        }

        return callback(null, returnArr );

    });


}
