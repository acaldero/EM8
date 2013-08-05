
  function db_mysql2js ( rmysql_url, working_grid, login_id, ok_handler )
  {
         // no var because it is global...
         vector_details = new Array();

         // remote request...
         var values = {
             "action" : "mysql2js",
             "userid" : login_id,
             "working_grid" : JSON.stringify(working_grid)
         };

         $.ajax({
             type: "POST",
             data: values,
             url: rmysql_url,
             success: function (data, status) {
                   try { 
                       eval(data) ;
		   }
                   catch (e) { 
                       console.log('db_mysql2js: ' + data + '|' + JSON.stringify(status));
		   }

                   ok_handler() ;
             },
             error: function (xhr, status, error) {
                   console.error('db_mysql2js: Error (' + JSON.stringify(error) + ')'); 
             },
         });

         return vector_details;
  }

