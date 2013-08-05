
	var em = {};
	em.dbsize = 0;
	em.db     = null;

	em.open = function () 
        {
	    em.dbsize = 4 * 1024 * 1024; // 4MB
	    em.db     = html5sql.openDatabase("em", "Event Monitor", em.dbsize);
	}

	em.close = function () 
        {
	    em.dbsize = 0 ;
	    em.db     = null ;
	}

        
        function webdb_execute ( dbinfo, sql, ok_handler, ko_handler ) 
        {
	    var startTime = new Date();

            if (typeof ok_handler === 'undefined') 
            {
		ok_handler = function() { //Success
				    var endTime = new Date();
				    em.executiontime = (endTime - startTime) / 1000;
				    console.log('Done. (' + em.executiontime + ' seconds)');
			     } ;
            }

            if (typeof ko_handler === 'undefined') 
            {
		ko_handler = function(error, failingQuery) { //Failure
				    var endTime = new Date();
				    em.executiontime = (endTime - startTime) / 1000;
				    console.error('Error: ' + error.message + '. (' + em.executiontime + ' seconds)');
			     } ;
            }

            em.open() ;
	    html5sql.process(sql, ok_handler, ko_handler) ;
	    //console.log('sql: ' + JSON.stringify(sql));
        }

        function webdb_select2asocArray_2 ( table, id )
        {
                  em.open() ;

                  var newValues = new Array() ;
                  html5sql.process(
                      "SELECT * FROM " + table + " WHERE id=" + id,
                      function(transaction, results, rowsArray) {
                         for(var i = 0; i < rowsArray.length; i++) {
                             for (attr in rowArray[i]) {
                                  newValues[attr] = rowsArray[i][attr] ;
                             }
                        }
                      },
                      function(error, statement) { }
                  );

                  em.close() ;

                  return newValues ;
        }

        function webdb_select2asocArray_3 ( table, id, addValues )
        {
                  em.open() ;

                  html5sql.process(
                      "SELECT * FROM " + table + " WHERE id=" + id,
                      function(transaction, results, rowsArray) {
                         for(var i = 0; i < rowsArray.length; i++) {
                             for (attr in rowArray[i]) {
                                  addValues[attr] = rowsArray[i][attr] ;
                             }
                        }
                      },
                      function(error, statement) { }
                  );

                  em.close() ;

                  return addValues ;
        }

