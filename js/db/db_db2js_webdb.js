
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

		       if (typeof vector_details['basalact'] === 'undefined') 
		           vector_details['basalact'] = new Array() ;

		       vector_details['basalact'].push(js_record) ;
		       continue;
                   }

                   // timestamp event
		   dt = new XDate(results.rows.item(i).start);

		   var bid_month = ("0" + (dt.getMonth()+1)).slice(-2) ;
		   var bid_day   = ("0" + dt.getDate()).slice(-2) ;
                   var bid_code  = parseInt('1' + bid_month + '1' + bid_day, 10) ;

		   if ($.inArray(bid_code, day_arr) == -1)
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

		       vector_details["basalact"].push(js_record) ;
		       continue;
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
		   qs = new Array() ;
          var day_arr = new Array() ;

          var first_period = 1;
          for (year in working_grid)
          {
               for (month in working_grid[year])
               {
                   var min_day = 32 ;
		   for (day in working_grid[year][month]) 
		   {
                        var nday = parseInt(day) ;
                        if (nday < min_day)
                            min_day = nday ;

		        var bid_month = ("0" + month).slice(-2) ;
		        var bid_day   = ("0" + day).slice(-2) ;
                        var bid_code  = parseInt('1' + bid_month + '1' + bid_day, 10) ;
                        day_arr.push(bid_code) ;
                   }

		   var twodigits_month = ("0" + month).slice(-2) ;
		   var twodigits_mday  = ("0" + min_day).slice(-2) ;

		   qs.push("SELECT 'bolus' as 'rt',* FROM bolus " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   units!=0" +
			   " ORDER BY start;") ;
		   qs.push("SELECT 'meal' as 'rt',* FROM meals " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   measure!=0" +
			   " ORDER BY start;") ;
	           qs.push("SELECT 'measure' as 'rt',* FROM measures " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   measure!=0" +
			   " ORDER BY start;") ;
	           qs.push("SELECT 'event' as 'rt',* FROM events " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   event!=''" +
			   " ORDER BY start;") ;
	           qs.push("SELECT 'basalact' as 'rt',* FROM basal_activations " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   pattern!=''" +
			   " ORDER BY start;") ;

                   if (1 == first_period) 
		      {
		         qs.push("SELECT 'last_basalact' as 'rt',* FROM basal_activations " +
		                 " WHERE strftime('%Y-%m-%d',start)<='" + year + "-" + twodigits_month + "-" + twodigits_mday + "' " +
		                 " AND   user='" + login_id + "' " +
                                 " AND   pattern!='' " +
                                 " ORDER BY start DESC " +
                                 " LIMIT 1;");
			 qs.push("SELECT 'basaldef' as 'rt',* FROM basal_definitions " + 
				 " WHERE user='" + login_id + "' " +
				 " AND   neltos!=0" +
				 " ORDER BY sync;") ;
                         first_period = 0;
                      }
               } 
          }

          db_webdb2js_aux(day_arr, qs, 0, vector_details, ok_handler) ;

          return vector_details;
  }

