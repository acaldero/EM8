
  function db_js2csv ( vector_details, user_login, user_id )
  {
        o = "" ;

        for (k_day in vector_details)
        {
                // non-timestamped events
		if ('basaldef' == k_day)
		{
		      for (var key in vector_details[k_day]) 
		      {
			      segments_esc = vector_details[k_day][key]['segments'].replace(/"/g, "'") ;

			      o += "\"" + user_login                               + "\"" + ";" +
				   "\"" + user_id                                  + "\"" + ";" +
				   "\"" + "2011-11-11"                             + "\"" + ";" +
				   "\"" + "00:00"                                  + "\"" + ";" +
				   "\"" + "basaldef"                               + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['pattern']    + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['neltos']     + "\"" + ";" +
				   "\"" + segments_esc                             + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['id']         + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['sync']       + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['device']     + "\"" + "\n" ;
		      }

		      continue;
		}
		if ('basalact' == k_day)
		{
		      continue;
		}

		// order members of a object (remember there is not associative arrays in javascript)...
		var details_order = [];
		for (var key in vector_details[k_day]) 
		{
		     keyh = key.slice(0,2);
		     keym = key.slice(3,5);

		     key_order = keyh*60 + parseInt(keym) ;
		     details_order.push([key_order, key]);
		}
		details_order.sort(function(a, b) { a = a[0]; b = b[0]; return a < b ? -1 : (a > b ? 1 : 0); });

		// print summary...
		for (var i=0; i<details_order.length; i++) 
		{
			k_hour = details_order[i][1] ;

			for (k_type in vector_details[k_day][k_hour])
			{
			   switch (k_type)
			   {
// "acaldero";"1";"2013-04-01";"07:15";"meal";"A0";"2013-04-01 07:15:00";"2013-04-01 07:15:00";"2";"actimel + cuajada sin";"";"121";...
			       case 'meal':
			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['name']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['stop']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['measure']    + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['tag']        + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['image']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;

// "acaldero";"1";"2013-04-01";"07:15";"measure";"A0";"2013-04-01 07:15:00";"2013-04-01 07:15:00";"147";"219";...
			       case 'measure':
			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['name']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['stop']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['measure']    + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;

// "acaldero";"1";"2013-04-01";"07:15";"bolus";"A0";"2013-04-01 07:15:00";"2013-04-01 09:15:00";"2.5";"normal";"100";"144";...
			       case 'bolus':
			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['name']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['stop']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['units']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['type']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['percentage'] + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;

// "acaldero";"1";"2013-04-08";"21:11";"event";"A3";"2013-04-08 21:11:00";"2013-04-08 23:41:00";"ill";"medicamentar";"paracetamol";...
			       case 'event':
			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['name']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['stop']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['measure']    + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['event']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['type']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['image']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;

			       case 'basalact':
			            segments_esc = vector_details[k_day][k_hour][k_type]['segments'].replace(/"/g, "'") ;

			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['pattern']    + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['neltos']     + "\"" + ";" +
			                 "\"" + segments_esc                                        + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['percentage'] + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;
			   }
			}
		}
        }

        return o ;
  }

