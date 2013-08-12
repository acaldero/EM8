
  function db_webdb2js_aux ( day_arr, qs, qs_index, vector_details, ok_handler )
  {
        html5sql.process(
             qs[qs_index],
	     function(transaction, results, v)
	     {
                if (qs_index < (qs.length-1))
                    db_webdb2js_aux(day_arr,qs,qs_index+1,vector_details,ok_handler);

		for (var i=0; i<results.rows.length; i++)
		{
                   // non-timestamp event
                   if (results.rows.item(i).rt == 'basaldef')
                   {
		       if (typeof vector_details['basaldef'] === 'undefined') 
		           vector_details['basaldef'] = new Array() ;

		       vector_details["basaldef"].push({"id":         results.rows.item(i).id,
						        "pattern":    results.rows.item(i).pattern,
						        "neltos":     results.rows.item(i).neltos,
						        "segments":   results.rows.item(i).segments,
						        "user":       results.rows.item(i).user,
						        "sync":       results.rows.item(i).sync,
						        "device":     results.rows.item(i).device });
		       continue;
                   }

                   if (results.rows.item(i).rt == 'last_basalact')
                   { // TODO: check this part is what we expected of it
		       js_record = { "id":         results.rows.item(i).id,
				     "pattern":    results.rows.item(i).pattern,
				     "neltos":     results.rows.item(i).neltos,
				     "segments":   results.rows.item(i).segments,
				     "percentage": results.rows.item(i).percentage,
				     "start":      results.rows.item(i).start,
				     "user":       results.rows.item(i).user,
				     "sync":       results.rows.item(i).sync,
				     "device":     results.rows.item(i).device };

		       if (typeof vector_details['basalact'] === 'undefined') 
		           vector_details['basalact'] = new Array() ;
		       vector_details["basalact"][results.rows.item(i).start] = js_record ;

		       continue;
                   }

                   // timestamp event
		   dt = new XDate(results.rows.item(i).start);

		   if ($.inArray(dt.getDate(), day_arr) == -1)
		       continue ;

		   i_h = dt.toUTCString('HH:mm') ; 
		   i_d = dt.toUTCString('yyyy-MM-dd') ; 

		   if (typeof vector_details[i_d] === 'undefined') 
		       vector_details[i_d] = new Array() ;
		   if (typeof vector_details[i_d][i_h] === 'undefined') 
		       vector_details[i_d][i_h] = new Array() ;

                   if (results.rows.item(i).rt == 'bolus')
                   {
		       vector_details[i_d][i_h]["bolus"]    = { "id":         results.rows.item(i).id,
							        "name":       results.rows.item(i).name,
						    	        "type":       results.rows.item(i).type,
							        "units":      results.rows.item(i).units,
							        "percentage": results.rows.item(i).percentage,
							        "start":      results.rows.item(i).start,
							        "stop":       results.rows.item(i).stop,
							        "user":       results.rows.item(i).user,
							        "sync":       results.rows.item(i).sync,
							        "device":     results.rows.item(i).device };
		       continue;
                   }

                   if (results.rows.item(i).rt == 'meal')
                   {
		       vector_details[i_d][i_h]["meal"]    =  { "id":         results.rows.item(i).id,
							        "name":       results.rows.item(i).name,
						        	"tag":        results.rows.item(i).tag,
						        	"image":      results.rows.item(i).image,
							        "measure":    results.rows.item(i).measure,
							        "start":      results.rows.item(i).start,
							        "stop":       results.rows.item(i).stop,
							        "user":       results.rows.item(i).user,
							        "sync":       results.rows.item(i).sync,
							        "device":     results.rows.item(i).device };
		       continue;
                   }

                   if (results.rows.item(i).rt == 'measure')
                   {
		       vector_details[i_d][i_h]["measure"]  = { "id":         results.rows.item(i).id,
							        "name":       results.rows.item(i).name,
							        "measure":    results.rows.item(i).measure,
							        "start":      results.rows.item(i).start,
							        "stop":       results.rows.item(i).stop,
							        "user":       results.rows.item(i).user,
							        "sync":       results.rows.item(i).sync,
							        "device":     results.rows.item(i).device };
		       continue;
                   }

                   if (results.rows.item(i).rt == 'event')
                   {
		       vector_details[i_d][i_h]["event"]    = { "id":         results.rows.item(i).id,
							        "name":       results.rows.item(i).name,
							        "event":      results.rows.item(i).event,
							        "type":       results.rows.item(i).type,
							        "measure":    results.rows.item(i).measure,
							        "start":      results.rows.item(i).start,
							        "stop":       results.rows.item(i).stop,
							        "user":       results.rows.item(i).user,
							        "image":      results.rows.item(i).image,
							        "sync":       results.rows.item(i).sync,
							        "device":     results.rows.item(i).device };
		       continue;
                   }

                   if (results.rows.item(i).rt == 'basalact')
                   {
		       js_record = { "id":         results.rows.item(i).id,
				     "pattern":    results.rows.item(i).pattern,
				     "neltos":     results.rows.item(i).neltos,
				     "segments":   results.rows.item(i).segments,
				     "percentage": results.rows.item(i).percentage,
				     "start":      results.rows.item(i).start,
				     "user":       results.rows.item(i).user,
				     "sync":       results.rows.item(i).sync,
				     "device":     results.rows.item(i).device };

		       vector_details[i_d][i_h]["basalact"] = js_record ;

		       if (typeof vector_details['basalact'] === 'undefined') 
		           vector_details['basalact'] = new Array() ;
		       vector_details["basalact"][results.rows.item(i).start] = js_record ;
                   }
		}

                if (qs_index == (qs.length-1))
	            ok_handler();
	     },
	     function(error, statement)
	     {
		   console.error('Error: ' + error.message + '.');
	     }
	);
  }

  function db_webdb2js ( working_grid, login_id, ok_handler )
  {
          // no var because it is global...
          vector_details = new Array();

          html5sql.openDatabase("em", "Event Monitor", 4*1024*1024) ;

          for (year in working_grid)
          {
               for (month in working_grid[year])
               {
                   var day_arr = new Array() ;
		   for (day in working_grid[year][month])
                        day_arr.push(parseInt(day), 10) ;

		   var qs = new Array(" SELECT 'bolus' as 'rt',* FROM bolus " + 
				      " WHERE strftime('%Y',start)='" + year + "' " +
				      " AND   strftime('%m',start)='" + ("0" + month).slice(-2) + "' " +
				      " AND   user='" + login_id + "' " +
				      " AND   units!=0" +
				      " ORDER BY start;",
				      " SELECT 'meal' as 'rt',* FROM meals " + 
				      " WHERE strftime('%Y',start)='" + year + "' " +
				      " AND   strftime('%m',start)='" + ("0" + month).slice(-2) + "' " +
				      " AND   user='" + login_id + "' " +
				      " AND   measure!=0" +
				      " ORDER BY start;",
				      " SELECT 'measure' as 'rt',* FROM measures " + 
				      " WHERE strftime('%Y',start)='" + year + "' " +
				      " AND   strftime('%m',start)='" + ("0" + month).slice(-2) + "' " +
				      " AND   user='" + login_id + "' " +
				      " AND   measure!=0" +
				      " ORDER BY start;",
				      " SELECT 'event' as 'rt',* FROM events " + 
				      " WHERE strftime('%Y',start)='" + year + "' " +
				      " AND   strftime('%m',start)='" + ("0" + month).slice(-2) + "' " +
				      " AND   user='" + login_id + "' " +
				      " AND   event!=''" +
				      " ORDER BY start;",
				      " SELECT 'basaldef' as 'rt',* FROM basal_definitions " + 
				      " WHERE user='" + login_id + "' " +
				      " AND   pattern!=''" +
				      " ORDER BY sync;",
				      " SELECT 'basalact' as 'rt',* FROM basal_activations " + 
				      " WHERE strftime('%Y',start)='" + year + "' " +
				      " AND   strftime('%m',start)='" + ("0" + month).slice(-2) + "' " +
				      " AND   user='" + login_id + "' " +
				      " AND   percentage!=0" +
				      " ORDER BY start;",
                                      " SELECT 'last_basalact' as 'rt',* FROM basal_activations " +
		                      " WHERE strftime('%Y',start)<='" + year + "' " +
		                      " AND   strftime('%m',start)<='" + ("0" + month).slice(-2) + "' " +
		                      " AND   user='" + login_id + "' " +
                                      " AND   percentage!=0 " +
                                      " ORDER BY start DESC " +
                                      " LIMIT 1 ") ;

                   db_webdb2js_aux(day_arr,qs,0,vector_details,ok_handler) ;
               } 
          } 

          return vector_details;
  }

