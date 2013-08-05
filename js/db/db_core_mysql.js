

        function mysql_execute ( rmysql_url, sql, ok_handler, ko_handler ) 
        {
	    var startTime = new Date();

            if (typeof ok_handler === 'undefined') 
            {
		ok_handler = function(data, status) { //Success
				    var endTime = new Date();
				    em.executiontime = (endTime - startTime) / 1000;
				    console.log('Done. (' + em.executiontime + ' seconds)');
			     } ;
            }

            if (typeof ko_handler === 'undefined') 
            {
		ko_handler = function (xhr, status, error) {
				    var endTime = new Date();
				    em.executiontime = (endTime - startTime) / 1000;
				    console.error('Error: status -> ' + status + ' error -> ' + error);
				    console.error('Error: ' + JSON.stringify(xhr)   + '. (' + em.executiontime + ' seconds)');
                             } ;
            }

	    var values = {
	          "action" : "query",
	          "q"      : JSON.stringify(sql)
	    };

	    var jqxhr = $.ajax({
		     type: "POST",
		     data: values,
		     url:  rmysql_url,
		     success: ok_handler,
		     error: ko_handler
	    });
        }

        function mysql_select2asocArray_2 ( rmysql_url, table, id )
        {
                  var newValues = new Array() ;

                  mysql_execute(rmysql_url, 
                                user, 
                                pass, 
                                new Array("SELECT * FROM " + table + " WHERE id=" + id),
                                function(data, status) {
                                   rowsArray = JSON.parse(data) ;
                                   for(var i = 0; i < rowsArray.length; i++) {
                                       for (attr in rowArray[i]) {
                                            newValues[attr] = rowsArray[i][attr] ;
                                       }
                                  }
                                },
		                function(xhr, status, error) { }) ;

                  return newValues ;
        }

        function mysql_select2asocArray_3 ( rmysql_url, table, id, addValues )
        {
                  mysql_execute(rmysql_url, 
                                user, 
                                pass, 
                                new Array("SELECT * FROM " + table + " WHERE id=" + id),
                                function(data, status) {
                                   rowsArray = JSON.parse(data) ;
				   for(var i = 0; i < rowsArray.length; i++) {
				       for (attr in rowArray[i]) {
					  addValues[attr] = rowsArray[i][attr] ;
				       }
				   }
                                },
		                function(xhr, status, error) { }) ;

                  return addValues ;
        }

