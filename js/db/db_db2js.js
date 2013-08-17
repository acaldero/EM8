
  function db_db2js ( dbinfo, working_grid, login_id, ok_handler )
  {
        if ("" == dbinfo)
             return db_webdb2js(working_grid, login_id, ok_handler) ;
        else return db_mysql2js(dbinfo, working_grid, login_id, ok_handler) ;
  }

