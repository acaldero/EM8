
        /* asocArray 2 SQL */

        function db_asocArray2insert ( tabla, values, pk ) 
        {
		  insertar = " INSERT INTO " + tabla + " " ;
		  insertar_nombres = "(" ;
		  insertar_valores = " VALUES (" ;

                  last = 0 ;
                  var key_arr = [] ;
                  for (key in values)
                  {
                       if (pk.indexOf(key) == -1) {
                           key_arr.push(key) ;
                           last++ ;
                       }
                  }

                  for (var i=0; i<last; i++)
                  {
                       key   = key_arr[i] ;  
                       value = values[key] ;  

		       insertar_nombres += key ;
		       insertar_valores += "'" + value + "'" ;
		       if (i != (last-1)) {
			   insertar_nombres += ", " ;
			   insertar_valores += ", ";
		       }
                  }

		  insertar_nombres += ")" ;
		  insertar_valores += ")" ;
		  insertar += insertar_nombres + insertar_valores ;

                  return insertar ;
        }

        function db_asocArray2update ( tabla, values, pk ) 
        {
		  actualizar = " UPDATE " + tabla + " SET " ;

                  last = 0 ;
                  var key_arr = [] ;
                  for (key in values)
                  {
                       if (pk.indexOf(key) == -1) {
                           key_arr.push(key) ;
                           last++ ;
                       }
                  }

                  for (var i=0; i<last; i++)
		  {
                       key   = key_arr[i] ;  
                       value = values[key] ;  

		       actualizar += " " + key + "='" + value + "'" ;  
		       if (i != (last-1)) 
			   actualizar += ", " ;
		  }

                  for (var j=0; j<pk.length; j++)
                  {
                       if (0 == j) 
		            actualizar += " WHERE " + pk[j] + "='" + values[pk[j]] + "'" ;
		       else actualizar += " AND   " + pk[j] + "='" + values[pk[j]] + "'" ;
		  }

                  return actualizar ;
        }

        function db_asocArray2insertorreplace ( tabla, values, pk ) 
        {
		  insertar = " INSERT OR REPLACE INTO " + tabla + " " ;
		  insertar_nombres = "(" ;
		  insertar_valores = " VALUES (" ;

                  last = 0 ;
                  var key_arr = [] ;
                  for (key in values)
                  {
                       if (pk.indexOf(key) == -1) {
                               key_arr.push(key) ;
                               last++ ;
                       } 
                       else if (values[key] != -1) {
                               key_arr.push(key) ;
                               last++ ;
                       }
                  }

                  for (var i=0; i<last; i++)
                  {
                       key   = key_arr[i] ;  
                       value = values[key] ;  

		       insertar_nombres += key ;
		       insertar_valores += "'" + value + "'" ;
		       if (i != (last-1)) {
			   insertar_nombres += ", " ;
			   insertar_valores += ", ";
		       }
                  }

		  insertar_nombres += ")" ;
		  insertar_valores += ")" ;
		  insertar += insertar_nombres + insertar_valores ;

                  return insertar ;
        }

        function db_asocArray2replace ( tabla, values, pk ) 
        {
		  insertar = " REPLACE INTO " + tabla + " " ;
		  insertar_nombres = "(" ;
		  insertar_valores = " VALUES (" ;

                  last = 0 ;
                  var key_arr = [] ;
                  for (key in values)
                  {
                       if (pk.indexOf(key) == -1) {
                           key_arr.push(key) ;
                           last++ ;
                       }
                  }

                  for (var i=0; i<last; i++)
                  {
                       key   = key_arr[i] ;  
                       value = values[key] ;  

		       insertar_nombres += key ;
		       insertar_valores += "'" + value + "'" ;
		       if (i != (last-1)) {
			   insertar_nombres += ", " ;
			   insertar_valores += ", ";
		       }
                  }

		  insertar_nombres += ")" ;
		  insertar_valores += ")" ;
		  insertar += insertar_nombres + insertar_valores ;

                  return insertar ;
        }

        function db_asocArray2delete ( tabla, values, pk ) 
        {
	          borrar = "DELETE FROM " + tabla ;

                  for (var j=0; j<pk.length; j++)
                  {
                       if (0 == j) 
		            borrar += " WHERE " + pk[j] + "='" + values[pk[j]] + "'" ;
		       else borrar += " AND   " + pk[j] + "='" + values[pk[j]] + "'" ;
		  }

                  return borrar ;
        }

        function db_asocArray2list  ( tabla, values ) 
        {
	          listar = "SELECT * FROM " + tabla ;
                  return listar ;
        }


        /* SQL 2 any */

        function db_execute ( dbinfo, sql, ok_handler, ko_handler ) 
        {
            if ("" == dbinfo)
                 webdb_execute(dbinfo,sql,ok_handler,ko_handler) ; 
            else mysql_execute(dbinfo,sql,ok_handler,ko_handler) ; 
        }

	function db_importFromFile ( dbinfo, filename, ok_handler, ko_handler ) 
        {
	    $.get(filename, function(sql) {
                    db_execute(dbinfo, sql, ok_handler, ko_handler ) ;
	    });
	}

        function db_select2asocArray_2 ( dbinfo, table, id )
        {
            if ("" == dbinfo)
                 webdb_select2asocArray_2(dbinfo,table,id) ;
            else mysql_select2asocArray_2(dbinfo,table,id) ;
        }

        function db_select2asocArray_3 ( dbinfo, table, id, addValues )
        {
            if ("" == dbinfo)
                 webdb_select2asocArray_3(dbinfo,table,id,addValues) ;
            else mysql_select2asocArray_3(dbinfo,table,id,addValues) ;
        }

        function db_asocArray2insertorupdate ( dbinfo, table, values, pk )
        {
            if ("" == dbinfo)
                 return db_asocArray2insertorreplace(table, values, pk);
            else return db_asocArray2replace(table, values, pk);
        }

