
  function db_db2js ( dbinfo, working_grid, login_id, ok_handler )
  {
        if ("" == dbinfo)
             return db_webdb2js(working_grid, login_id, ok_handler) ;
        else return db_mysql2js(dbinfo, working_grid, login_id, ok_handler) ;
  }

  function db_db2basalselect ( vector_details, select_name, pattern, login_id )
  {
           var o_options = "<OPTION value=\"\"></OPTION>";

           var last = 0;
           if (typeof vector_details['basaldef'] !== 'undefined')
               last = vector_details['basaldef'].length;

           for(var i=0; i<last; i++)
           {
                result_pattern = vector_details['basaldef'][i]['pattern'] ;
                if (result_pattern == pattern)
                     o_options += "<option value=\"" + result_pattern + "\" SELECTED>" + result_pattern + "</OPTION>";
                else o_options += "<option value=\"" + result_pattern + "\">"          + result_pattern + "</OPTION>";
           }

           $(select_name).html("").html(o_options).selectmenu().selectmenu("refresh");
  }


