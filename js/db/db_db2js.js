
  function db_db2js ( dbinfo, working_grid, login_id, ok_handler )
  {
        if ("" == dbinfo)
             return db_webdb2js(working_grid, login_id, ok_handler) ;
        else return db_mysql2js(dbinfo, working_grid, login_id, ok_handler) ;
  }

  function db_db2basalselect ( vector_details, select_name, pattern, login_id )
  {
           var o_options = "<OPTION value=\"\"></OPTION>";
           for(var i=0; i<vector_details['basaldef'].length; i++)
           {
                result_pattern = vector_details['basaldef'][i]['pattern'] ;
                if (result_pattern == pattern)
                     o_options += "<option value=\"" + result_pattern + "\" SELECTED>" + result_pattern + "</OPTION>";
                else o_options += "<option value=\"" + result_pattern + "\">"          + result_pattern + "</OPTION>";
           }

           $(select_name).html("").html(o_options).selectmenu().selectmenu("refresh");
  }

  function db_db2basaldatalist ( vector_details, select_name, pattern, login_id )
  {
	   var dataList = $(select_name);
	   dataList.empty();
           for(var i=0; i<vector_details['basaldef'].length; i++)
	   {         
                result_pattern = vector_details['basaldef'][i]['pattern'] ;
		var opt = $("<option></option>").attr("value", result_pattern);
		dataList.append(opt);
	   }
	   dataList.trigger("refresh");
  }

