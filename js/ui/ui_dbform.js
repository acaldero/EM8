
  /* Auxiliar functions */

  function dbform_action_db_quick ( Qs, values_measure, values_meal, values_bolus )
  {
	// action - measures
	if (-1 == values_measure['id']) // no existe
	     if (values_measure['measure'] != 0)
		  Q = db_asocArray2insert("measures",values_measure,Array('id'));
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("measures",values_measure,Array('id'));

        if (Q != "")
            Qs.push(Q);


	// action - meals
	if (-1 == values_meal['id']) // no existe
	     if (values_meal['measure'] != 0)
		  Q = db_asocArray2insert("meals",values_meal,Array('id')) ;
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("meals",values_meal,Array('id')) ;

        if (Q != "")
            Qs.push(Q);


	// action - bolus
	if (-1 == values_bolus['id']) // no existe
	     if (values_bolus['units'] != 0)
		  Q = db_asocArray2insert("bolus",values_bolus,Array('id')); 
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("bolus",values_bolus,Array('id')); 

        if (Q != "")
            Qs.push(Q);
  }

  function dbform_action_db_other ( dbinfo, values_other, ok_handler, ko_handler )
  {
        var Qs = new Array() ;

	// action - other
	if (-1 == values_other['id']) // no existe
	     if ("" != values_other['event'])
		  Q = db_asocArray2insert("events",values_other,Array('id'));
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("events",values_other,Array('id'));

        if (Q != "") {
            Qs.push(Q);
            db_execute(dbinfo, Qs, ok_handler, ko_handler) ;
        }
  }

  function dbform_action_db_basal_act ( dbinfo, values_basal_activation, ok_handler, ko_handler )
  {
        var Qs = new Array() ;

	if (-1 == values_basal_activation['id']) // no existe
	     if ("" != values_basal_activation['pattern'])
		  Q = db_asocArray2insert("basal_activations",values_basal_activation,Array('id'));
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("basal_activations",values_basal_activation,Array('id'));

        if (Q != "") {
            Qs.push(Q);
            db_execute(dbinfo, Qs, ok_handler, ko_handler) ;
        }
  }

  function dbform_action_db_basal_def ( dbinfo, values_basal_definition, ok_handler, ko_handler )
  {
        var Qs = new Array() ;

	if (-1 == values_basal_definition['id']) // no existe
	     if (0 != values_basal_definition['neltos'])
		  Q = db_asocArray2insert("basal_definitions",values_basal_definition,Array('id'));
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("basal_definitions",values_basal_definition,Array('id'));

        if (Q != "") {
            Qs.push(Q);
            db_execute(dbinfo, Qs, ok_handler, ko_handler) ;
        }
  }

  function dbform_action_db_user ( dbinfo, new_id, old_id )
  {
        Q = new Array();

        Q.push("UPDATE meals    SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE bolus    SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE measures SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE events   SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE basals            SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE basal_activations SET user=" + new_id + " WHERE user=" + old_id) ;

	db_execute(dbinfo,Q) ;
  }


  /* Main functions */

  function dbform_action_quick ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

	values_measure = new Array();
	values_measure['id']       = form.elements['values_measure[id]'].value ;
	values_measure['name']     = form.elements['values_measure[name]'].value ;
	values_measure['measure']  = form.elements['values_measure[measure]'].value ;
	values_measure['start']    = form.elements['values_measure[start]'].value ;
	values_measure['stop']     = form.elements['values_measure[stop]'].value ;
	values_measure['user']     = form.elements['values_measure[user]'].value ;
	values_measure['device']   = form.elements['values_measure[device]'].value ;
	values_measure['sync']     = dt0 ;

	values_meal = new Array();
	values_meal['id']          = form.elements['values_meal[id]'].value ;
	values_meal['name']        = form.elements['values_meal[name]'].value ;
	values_meal['tag']         = form.elements['values_meal[tag]'].value ;
	values_meal['measure']     = form.elements['values_meal[measure]'].value ;
	values_meal['start']       = form.elements['values_meal[start]'].value ;
	values_meal['stop']        = form.elements['values_meal[stop]'].value ;
	values_meal['user']        = form.elements['values_meal[user]'].value ;
	values_meal['image']       = form.elements['values_meal[image]'].value ;
	values_meal['device']      = form.elements['values_meal[device]'].value ;
	values_meal['sync']        = dt0 ;

	values_bolus = new Array();
	values_bolus['id']         = form.elements['values_bolus[id]'].value ;
	values_bolus['name']       = form.elements['values_bolus[name]'].value ;
	values_bolus['type']       = form.elements['values_bolus[type]'].value ;
	values_bolus['units']      = form.elements['values_bolus[units]'].value ;
	values_bolus['percentage'] = form.elements['values_bolus[percentage]'].value ;
	values_bolus['start']      = form.elements['values_bolus[start]'].value ;
	values_bolus['stop']       = form.elements['values_bolus[stop]'].value ;
	values_bolus['user']       = form.elements['values_bolus[user]'].value ;
	values_bolus['device']     = form.elements['values_bolus[device]'].value ;
	values_bolus['sync']       = dt0 ;

		if (values_bolus['start'] != values_bolus['stop'])
		    values_bolus['type'] = 'square' ;
		if (100 != values_bolus['percentage'])
		    values_bolus['type'] = 'dual' ;

        var Qs = new Array();
        dbform_action_db_quick(Qs, values_measure, values_meal, values_bolus) ;
        if (Qs.length != 0)
            db_execute(rmysql_url, Qs, ok_handler, ko_handler) ;
  }

  function dbform_action_other ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

	values_other = new Array();
	values_other['id']         = form.elements['values_other[id]'].value ;
	values_other['name']       = form.elements['values_other[name]'].value ;
	values_other['event']      = form.elements['values_other[event]'].value ;
	values_other['type']       = form.elements['values_other[type]'].value ;
	values_other['measure']    = form.elements['values_other[measure]'].value ;
	values_other['start']      = form.elements['values_other[start]'].value ;
	values_other['stop']       = form.elements['values_other[stop]'].value ;
	values_other['user']       = form.elements['values_other[user]'].value ;
	values_other['device']     = form.elements['values_other[device]'].value ;
	values_other['image']      = form.elements['values_other[image]'].value ;
	values_other['sync']       = dt0 ;

        dbform_action_db_other(rmysql_url, values_other, ok_handler, ko_handler) ;
  }

  function dbform_action_basal_act ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

	values_basal_activation = new Array();
	values_basal_activation['id']         = form.elements['values_basal_activation[id]'].value ;
	values_basal_activation['pattern']    = form.elements['values_basal_activation[pattern]'].value ;
	values_basal_activation['neltos']     = form.elements['values_basal_activation[neltos]'].value ;
	values_basal_activation['segments']   = form.elements['values_basal_activation[segments]'].value;
	values_basal_activation['percentage'] = form.elements['values_basal_activation[percentage]'].value ;
	values_basal_activation['start']      = form.elements['values_basal_activation[start]'].value ;
	values_basal_activation['user']       = form.elements['values_basal_activation[user]'].value ;
	values_basal_activation['device']     = form.elements['values_basal_activation[device]'].value ;
	values_basal_activation['sync']       = dt0 ;

        dbform_action_db_basal_act(rmysql_url, values_basal_activation, ok_handler, ko_handler) ;
  }

  function dbform_action_basal_def ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

        var values_basal = ui_basal_form2def(form);
	values_basal['sync'] = dt0 ;

        dbform_action_db_basal_def(rmysql_url, values_basal, ok_handler, ko_handler) ;
  }

  function dbform_action_user ( rmysql_url, form )
  {
	new_id = form.elements['values_user[newid]'].value ;
	old_id = form.elements['values_user[oldid]'].value ;

	form.elements['values_user[oldid]'].value    = form.elements['values_user[newid]'].value ;
	form.elements['values_user[oldlogin]'].value = form.elements['values_user[newlogin]'].value ;

        dbform_action_db_user(rmysql_url, new_id, old_id) ;
  }

  function dbform_action_quick_2 ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

        /* 1 */
	values_measure = new Array();
	values_measure['id']       = form.elements['values_measure[id][before]'].value ;
	values_measure['name']     = form.elements['values_measure[name][before]'].value ;
	values_measure['measure']  = form.elements['values_measure[measure][before]'].value ;
	values_measure['start']    = form.elements['values_measure[start][before]'].value ;
	values_measure['stop']     = form.elements['values_measure[stop][before]'].value ;
	values_measure['user']     = form.elements['values_measure[user][before]'].value ;
	values_measure['device']   = form.elements['values_measure[device][before]'].value ;
	values_measure['sync']     = dt0 ;

	values_meal = new Array();
	values_meal['id']          = form.elements['values_meal[id][before]'].value ;
	values_meal['name']        = form.elements['values_meal[name][before]'].value ;
	values_meal['tag']         = form.elements['values_meal[tag][before]'].value ;
	values_meal['measure']     = form.elements['values_meal[measure][before]'].value ;
	values_meal['start']       = form.elements['values_meal[start][before]'].value ;
	values_meal['stop']        = form.elements['values_meal[stop][before]'].value ;
	values_meal['user']        = form.elements['values_meal[user][before]'].value ;
	values_meal['image']       = form.elements['values_meal[image][before]'].value ;
	values_meal['device']      = form.elements['values_meal[device][before]'].value ;
	values_meal['sync']        = dt0 ;

	values_bolus = new Array();
	values_bolus['id']         = form.elements['values_bolus[id][before]'].value ;
	values_bolus['name']       = form.elements['values_bolus[name][before]'].value ;
	values_bolus['type']       = form.elements['values_bolus[type][before]'].value ;
	values_bolus['units']      = form.elements['values_bolus[units][before]'].value ;
	values_bolus['percentage'] = form.elements['values_bolus[percentage][before]'].value ;
	values_bolus['start']      = form.elements['values_bolus[start][before]'].value ;
	values_bolus['stop']       = form.elements['values_bolus[stop][before]'].value ;
	values_bolus['user']       = form.elements['values_bolus[user][before]'].value ;
	values_bolus['device']     = form.elements['values_bolus[device][before]'].value ;
	values_bolus['sync']       = dt0 ;

		if (values_bolus['start'] != values_bolus['stop'])
		    values_bolus['type'] = 'square' ;
		if (100 != values_bolus['percentage'])
		    values_bolus['type'] = 'dual' ;

        var Qs = new Array();
        dbform_action_db_quick(Qs, values_measure, values_meal, values_bolus) ;

        /* 2 */
	values_measure['id']       = form.elements['values_measure[id][after]'].value ;
	values_measure['name']     = form.elements['values_measure[name][after]'].value ;
	values_measure['measure']  = form.elements['values_measure[measure][after]'].value ;
	values_measure['start']    = form.elements['values_measure[start][after]'].value ;
	values_measure['stop']     = form.elements['values_measure[stop][after]'].value ;
	values_measure['user']     = form.elements['values_measure[user][after]'].value ;
	values_measure['device']   = form.elements['values_measure[device][after]'].value ;
	values_measure['sync']     = dt0 ;

	values_meal['id']          = form.elements['values_meal[id][after]'].value ;
	values_meal['name']        = form.elements['values_meal[name][after]'].value ;
	values_meal['tag']         = form.elements['values_meal[tag][after]'].value ;
	values_meal['measure']     = form.elements['values_meal[measure][after]'].value ;
	values_meal['start']       = form.elements['values_meal[start][after]'].value ;
	values_meal['stop']        = form.elements['values_meal[stop][after]'].value ;
	values_meal['user']        = form.elements['values_meal[user][after]'].value ;
	values_meal['image']       = form.elements['values_meal[image][after]'].value ;
	values_meal['device']      = form.elements['values_meal[device][after]'].value ;
	values_meal['sync']        = dt0 ;

	values_bolus['id']         = form.elements['values_bolus[id][after]'].value ;
	values_bolus['name']       = form.elements['values_bolus[name][after]'].value ;
	values_bolus['type']       = form.elements['values_bolus[type][after]'].value ;
	values_bolus['units']      = form.elements['values_bolus[units][after]'].value ;
	values_bolus['percentage'] = form.elements['values_bolus[percentage][after]'].value ;
	values_bolus['start']      = form.elements['values_bolus[start][after]'].value ;
	values_bolus['stop']       = form.elements['values_bolus[stop][after]'].value ;
	values_bolus['user']       = form.elements['values_bolus[user][after]'].value ;
	values_bolus['device']     = form.elements['values_bolus[device][after]'].value ;
	values_bolus['sync']       = dt0 ;

		if (values_bolus['start'] != values_bolus['stop'])
		    values_bolus['type'] = 'square' ;
		if (100 != values_bolus['percentage'])
		    values_bolus['type'] = 'dual' ;

        dbform_action_db_quick(Qs, values_measure, values_meal, values_bolus) ;
        if (Qs.length != 0)
            db_execute(rmysql_url, Qs, ok_handler, ko_handler) ;
  }


  /*
   *  Fill
   */

  function dbform_fill0_quick ( form, now, value_name )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }
          if (typeof value_name === 'undefined') {
	      value_name = "" ;
          }

	  var name_index_tr = { "": 0, "A0": 1, "D0": 2, "A1": 3, "D1": 4, "A2": 5, "D2": 6, "A3": 7, "D3": 8, "A4": 9 } ;

	  form.elements['values_measure[id]'].value           = -1;
	  form.elements['values_measure[user]'].value         = ls1.user_id;
	  form.elements['values_measure[device]'].value       = ls1.device_id;
	  form.elements['values_measure[start]'].value        = now ;
	  form.elements['values_measure[stop]'].value         = now ;
	  form.elements['values_measure[measure]'].value      = 0 ;
	  form.elements['values_measure[name]'].value         = value_name ;
	  form.elements['values_measure[name]'].selectedIndex = name_index_tr[value_name];

              var select2 = $("#page10gn") ;
              var option4 = $($("option", select2).get(name_index_tr[value_name]));
              option4.attr('selected', true);
              select2.selectmenu() ;
              select2.selectmenu("refresh", true) ;

	  form.elements['values_bolus[id]'].value          = -1;
	  form.elements['values_bolus[user]'].value        = ls1.user_id;
	  form.elements['values_bolus[device]'].value      = ls1.device_id;
	  form.elements['values_bolus[type]'].value        = 'normal';
	  form.elements['values_bolus[units]'].value       = 0 ;
	  form.elements['values_bolus[percentage]'].value  = 100;
	  form.elements['values_bolus[start]'].value       = now ;
	  form.elements['values_bolus[stop]'].value        = now ;
	  form.elements['values_bolus[name]'].value        = value_name ;

              $("#page10md1").hide();

	  form.elements['values_meal[id]'].value         = -1;
	  form.elements['values_meal[user]'].value       = ls1.user_id;
	  form.elements['values_meal[device]'].value     = ls1.device_id;
	  form.elements['values_meal[start]'].value      = now ;
	  form.elements['values_meal[stop]'].value       = now ;
	  form.elements['values_meal[name]'].value       = value_name ;
	  form.elements['values_meal[tag]'].value        = '' ;
	  form.elements['values_meal[measure]'].value    = 0 ;
	  form.elements['values_meal[image]'].value      = '' ;

              $("#page10md2").hide();
  }

  function dbform_fill0_other ( form, now, value_name )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }
          if (typeof value_name === 'undefined') {
	      value_name = "" ;
          }

	  form.elements['values_other[id]'].value      = -1;
	  form.elements['values_other[name]'].value    = value_name ;
	  form.elements['values_other[event]'].value   = "" ;
	  form.elements['values_other[type]'].value    = "" ;
	  form.elements['values_other[measure]'].value = "" ;
	  form.elements['values_other[start]'].value   = now ;
	  form.elements['values_other[stop]'].value    = now ;
	  form.elements['values_other[user]'].value    = ls1.user_id;
	  form.elements['values_other[device]'].value  = ls1.device_id;
  }

  function dbform_fill0_basalactivation ( form, now )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }

	  form.elements['values_basal_activation[id]'].value           = -1;
	  form.elements['values_basal_activation[user]'].value         = ls1.user_id;
	  form.elements['values_basal_activation[device]'].value       = ls1.device_id;
	  form.elements['values_basal_activation[start]'].value        = now ;
	  form.elements['values_basal_activation[percentage]'].value   = 100 ;
	  form.elements['values_basal_activation[neltos]'].value       = 0 ;
	  form.elements['values_basal_activation[segments]'].value     = '' ;

	  $("#ba_segments1").val('') ;

          ui_basal_fillselect(vector_details, "#ba_pattern", "standard");
  }

  function dbform_fill0_basaldefinition ( form, now )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }

	  form.elements['values_basaldef,id'].value      = -1;
	  form.elements['values_basaldef,user'].value    = ls1.user_id;
	  form.elements['values_basaldef,device'].value  = ls1.device_id;
	  form.elements['values_basaldef,pattern'].value = '';

	  form.elements['total_area'].value = 0;
	  form.elements['neltos'].value     = 0;
          var select2 = $("#neltos").selectmenu().selectmenu("refresh", true) ;

          $("#basal_sections").html("").trigger("refresh");

          ui_basal_fillselect(vector_details, "#bd_pattern_list", "") ;
  }

  function dbform_fill0_quick_2 ( form, now, value_name )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }
          if (typeof value_name === 'undefined') {
	      value_name = "" ;
          }

	  var name_index_tr = { "": 0, "A0": 1, "D0": 2, "A1": 3, "D1": 4, "A2": 5, "D2": 6, "A3": 7, "D3": 8, "A4": 9 } ;

	  form.elements['values_measure[id][before]'].value           = -1;
	  form.elements['values_measure[user][before]'].value         = ls1.user_id;
	  form.elements['values_measure[device][before]'].value       = ls1.device_id;
	  form.elements['values_measure[start][before]'].value        = now ;
	  form.elements['values_measure[stop][before]'].value         = now ;
	  form.elements['values_measure[measure][before]'].value      = 0 ;
	  form.elements['values_measure[name][before]'].value         = value_name ;
	  form.elements['values_measure[name][before]'].selectedIndex = name_index_tr[value_name];

		  form.elements['values_measure[id][after]'].value           = -1;
		  form.elements['values_measure[user][after]'].value         = ls1.user_id;
		  form.elements['values_measure[device][after]'].value       = ls1.device_id;
		  form.elements['values_measure[start][after]'].value        = now ;
		  form.elements['values_measure[stop][after]'].value         = now ;
		  form.elements['values_measure[measure][after]'].value      = 0 ;
		  form.elements['values_measure[name][after]'].value         = value_name ;
		  form.elements['values_measure[name][after]'].selectedIndex = name_index_tr[value_name];

	  form.elements['values_bolus[id][before]'].value          = -1;
	  form.elements['values_bolus[user][before]'].value        = ls1.user_id;
	  form.elements['values_bolus[device][before]'].value      = ls1.device_id;
	  form.elements['values_bolus[type][before]'].value        = 'normal';
	  form.elements['values_bolus[units][before]'].value       = 0 ;
	  form.elements['values_bolus[percentage][before]'].value  = 100;
	  form.elements['values_bolus[start][before]'].value       = now ;
	  form.elements['values_bolus[stop][before]'].value        = now ;
	  form.elements['values_bolus[name][before]'].value        = value_name ;

		  form.elements['values_bolus[id][after]'].value          = -1;
		  form.elements['values_bolus[user][after]'].value        = ls1.user_id;
		  form.elements['values_bolus[device][after]'].value      = ls1.device_id;
		  form.elements['values_bolus[type][after]'].value        = 'normal';
		  form.elements['values_bolus[units][after]'].value       = 0 ;
		  form.elements['values_bolus[percentage][after]'].value  = 100;
		  form.elements['values_bolus[start][after]'].value       = now ;
		  form.elements['values_bolus[stop][after]'].value        = now ;
		  form.elements['values_bolus[name][after]'].value        = value_name ;

	  form.elements['values_meal[id][before]'].value         = -1;
	  form.elements['values_meal[user][before]'].value       = ls1.user_id;
	  form.elements['values_meal[device][before]'].value     = ls1.device_id;
	  form.elements['values_meal[start][before]'].value      = now ;
	  form.elements['values_meal[stop][before]'].value       = now ;
	  form.elements['values_meal[name][before]'].value       = value_name ;
	  form.elements['values_meal[tag][before]'].value        = '' ;
	  form.elements['values_meal[measure][before]'].value    = 0 ;
	  form.elements['values_meal[image][before]'].value      = '' ;

		  form.elements['values_meal[id][after]'].value          = -1;
		  form.elements['values_meal[user][after]'].value        = ls1.user_id;
		  form.elements['values_meal[device][after]'].value      = ls1.device_id;
		  form.elements['values_meal[start][after]'].value       = now ;
		  form.elements['values_meal[stop][after]'].value        = now ;
		  form.elements['values_meal[name][after]'].value        = value_name ;
		  form.elements['values_meal[tag][after]'].value         = '' ;
		  form.elements['values_meal[measure][after]'].value     = 0 ;
		  form.elements['values_meal[image][after]'].value       = '' ;
  }


  function dbform_fill2_quick ( form, json_meal, json_measure, json_bolus )
  {
	  var name_index_tr = { "": 0, "A0": 1, "D0": 2, "A1": 3, "D1": 4, "A2": 5, "D2": 6, "A3": 7, "D3": 8, "A4": 9 } ;

          values_meal    = JSON.parse(unescape(json_meal)) ;
          values_measure = JSON.parse(unescape(json_measure)) ;
          values_bolus   = JSON.parse(unescape(json_bolus)) ;

          // fill the default date & name
          if (-1 == values_bolus['id'])
              if (-1 == values_measure['id']) {
                   values_bolus['name']  = values_meal['name'] ;
                   values_bolus['start'] = values_meal['start'] ;
                   values_bolus['stop']  = values_meal['stop'] ;
              } else { 
                   values_bolus['name']  = values_measure['name'] ;
                   values_bolus['start'] = values_measure['start'] ;
                   values_bolus['stop']  = values_measure['stop'] ;
              }
          if (-1 == values_meal['id'])
              if (-1 == values_measure['id']) {
                   values_meal['name']  = values_bolus['name'] ;
                   values_meal['start'] = values_bolus['start'] ;
                   values_meal['stop']  = values_bolus['stop'] ;
              } else { 
                   values_meal['name']  = values_measure['name'] ;
                   values_meal['start'] = values_measure['start'] ;
                   values_meal['stop']  = values_measure['stop'] ;
              }
          if (-1 == values_measure['id'])
              if (-1 == values_meal['id']) {
                   values_measure['name']  = values_bolus['name'] ;
                   values_measure['start'] = values_bolus['start'] ;
                   values_measure['stop']  = values_bolus['stop'] ;
              } else { 
                   values_measure['name']  = values_meal['name'] ;
                   values_measure['start'] = values_meal['start'] ;
                   values_measure['stop']  = values_meal['stop'] ;
              }

          dbform_fill0_quick(form, values_measure['start'], values_measure['name']) ;

	  form.elements['values_measure[stop]'].value  = values_measure['stop'] ;
	  form.elements['values_bolus[stop]'].value    = values_bolus['stop'] ;
	  form.elements['values_meal[stop]'].value     = values_meal['stop'] ;

	  if (values_measure['id'] != -1) 
          {
	      form.elements['values_measure[id]'].value           = values_measure['id'] ;
	      form.elements['values_measure[user]'].value         = values_measure['user'] ;
	      form.elements['values_measure[device]'].value       = values_measure['device'] ;
	      form.elements['values_measure[measure]'].value      = values_measure['measure'] ;
	      form.elements['values_measure[name]'].value         = values_measure['name'] ;
	      form.elements['values_measure[name]'].selectedIndex = name_index_tr[values_measure['name']];

		      var select2 = $("#page10gn") ;
		      var option4 = $($("option", select2).get(name_index_tr[values_measure['name']]));
		      option4.attr('selected', true);
		      select2.selectmenu() ;
		      select2.selectmenu("refresh", true) ;
          }
  
	  if (values_bolus['id'] != -1) 
          {
	      form.elements['values_bolus[id]'].value          = values_bolus['id'] ;
	      form.elements['values_bolus[user]'].value        = values_bolus['user'] ;
	      form.elements['values_bolus[device]'].value      = values_bolus['device'] ;
	      form.elements['values_bolus[type]'].value        = values_bolus['type'] ;
	      form.elements['values_bolus[units]'].value       = values_bolus['units'] ;
	      form.elements['values_bolus[percentage]'].value  = values_bolus['percentage'] ;
	      form.elements['values_bolus[name]'].value        = values_bolus['name'] ;

                      if (parseInt(values_bolus['units'], 10) != 0)
                           $("#page10md1").show();
                      else $("#page10md1").hide();

                      $("#page10bap1").slider("refresh");
          }

	  if (values_meal['id'] != -1) 
          {
	      form.elements['values_meal[id]'].value         = values_meal['id'] ;
	      form.elements['values_meal[user]'].value       = values_meal['user'] ;
	      form.elements['values_meal[device]'].value     = values_meal['device'] ;
	      form.elements['values_meal[name]'].value       = values_meal['name'] ;
	      form.elements['values_meal[tag]'].value        = values_meal['tag'] ;
	      form.elements['values_meal[measure]'].value    = values_meal['measure'] ;
	      form.elements['values_meal[image]'].value      = values_meal['image'] ;

                      if (parseInt(values_meal['measure'], 10) != 0)
                           $("#page10md2").show();
                      else $("#page10md2").hide();

              var image_src = "" ;
	      if (values_meal['image'] != "")
	           image_src = values_meal['image'] ;
	      else image_src = "icons/meal2.png" ;

	      var image = document.getElementById('qimage2');
	      if (image != null)
	          image.src = image_src ;

	      var image = document.getElementById('qimage3');
	      if (image != null)
	          image.src = image_src ;
          }
  }

  function dbform_fill2_other ( form, json_other )
  {
          values_other = JSON.parse(unescape(json_other)) ;

          dbform_fill0_other(form, values_other['start'], values_other['name']) ;

	  form.elements['values_other[stop]'].value    = values_other['stop'] ;

	  if (values_other['id'] != -1) 
          {
	      form.elements['values_other[id]'].value      = values_other['id'] ;
	      form.elements['values_other[name]'].value    = values_other['name'] ;
	      form.elements['values_other[event]'].value   = values_other['event'] ;
	      form.elements['values_other[type]'].value    = values_other['type'] ;
	      form.elements['values_other[measure]'].value = values_other['measure'] ;
	      form.elements['values_other[user]'].value    = values_other['user'] ;
	      form.elements['values_other[device]'].value  = values_other['device'] ;

	      var image = document.getElementById('oimage2');
	      if (image != null)
	          image.src = values_other['image'] ;

	      var image = document.getElementById('oimage3');
	      if (image != null)
	          image.src = values_other['image'] ;
          }
  }

	  function dbform_fill_segments ( segs, segments_short, segments_help )
	  {
                var res = new Object() ;

		res.short = "" ;
		res.long = "" ;

		for (i=0; i<segs.length-1; i++) 
                {
		     res.short += segs[i].c + " | " ;
		     res.long  += "<tr>" + 
			          "<td align=left><font color=gray>" + (i+1) + "&nbsp;&nbsp;</font></td>" +
			          "<td>" + segs[i].h + "</td>" +
			          "<td>&#8592;</td>" + 
			          "<td>" + segs[i].c + "</td>" + 
			          "<td>&#8594;</td>" + 
			          "<td>" + segs[i+1].h + "</td>" + 
			          "</tr>";
		}

		res.long = "<table border=0>" + res.long + "</table>" ;

                return res;
	  }

  function dbform_fill2_basalactivation ( form, json_ba )
  {
          values_basal_activation = JSON.parse(unescape(json_ba)) ;

          dbform_fill0_basalactivation(form, values_basal_activation['start']) ;

	  if (values_basal_activation['id'] != -1) 
          {
	      form.elements['values_basal_activation[id]'].value         = values_basal_activation['id'] ;
	      form.elements['values_basal_activation[user]'].value       = values_basal_activation['user'] ;
	      form.elements['values_basal_activation[device]'].value     = values_basal_activation['device'] ;
	      form.elements['values_basal_activation[pattern]'].value    = values_basal_activation['pattern'] ;
	      form.elements['values_basal_activation[neltos]'].value     = values_basal_activation['neltos'] ;
	      form.elements['values_basal_activation[segments]'].value   = values_basal_activation['segments'] ;
	      form.elements['values_basal_activation[percentage]'].value = values_basal_activation['percentage'] ;

	      var segs = JSON.parse(values_basal_activation['segments']) ;
              var res  = dbform_fill_segments(segs) ;

              $("#ba_segments1").val(res.short) ;
              $("#ba_segments2").html(res.long) ;

              $("#bap1").slider("refresh");

              var select2  = $("#ba_pattern") ;
                var bpattern = values_basal_activation['pattern'] ;
                var options2 = $("option", select2) ;
                var refopt4  = options2.get(bpattern) ;
	        if (typeof refopt4 === 'undefined') {
                    refopt4 = $("<option>").attr('selected',true).attr('value',bpattern).text(bpattern) ;
                    select2.append(refopt4) ;
                }
	 	else $(refopt4).attr('selected', true);
              select2.selectmenu() ;
              select2.selectmenu("refresh", true) ;
          }
  }

	  function dbform_addtwohours ( str_time )
	  {
		dt = new XDate(str_time) ;
		dt.addHours(ls1.aftermeal_hours) ;
		now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
		now = now.substr(0,10) + 'T' + now.substr(11);
		return now ;
	  }

	  function dbform_nextname ( str_name )
	  {
		target_tags_next = { 'A0': 'D0', 'D0': 'A1',  
				     'A1': 'D1', 'D1': 'A2',  
				     'A2': 'D2', 'D2': 'A3',  
				     'A3': 'D3', 'D3': 'A4', 
				     'A4': 'A0' } ;

		return target_tags_next[str_name] ;
	  }

  function dbform_fill_nextquick ( form )
  {
	form.elements['values_measure[name]'].value = dbform_nextname(form.elements['values_measure[name]'].value) ;
	form.elements['values_measure[measure]'].value = "0" ;
	form.elements['values_measure[start]'].value = dbform_addtwohours(form.elements['values_measure[start]'].value) ;
	form.elements['values_measure[stop]'].value = form.elements['values_measure[start]'].value ;

        var select2 = $("#page10gn") ;
        var option4 = $($("option", select2).get(form.elements['values_measure[name]'].selectedIndex - 1));
        option4.attr('selected', false);
        var option4 = $($("option", select2).get(((form.elements['values_measure[name]'].selectedIndex)) % 9));
        option4.attr('selected', true);
        select2.selectmenu() ;
        select2.selectmenu("refresh", true) ;

	form.elements['values_meal[name]'].value = dbform_nextname(form.elements['values_meal[name]'].value) ;
	form.elements['values_meal[tag]'].value = "" ;
	form.elements['values_meal[measure]'].value = "0" ;
	form.elements['values_meal[start]'].value = dbform_addtwohours(form.elements['values_meal[start]'].value) ;
	form.elements['values_meal[stop]'].value = form.elements['values_meal[start]'].value ;
	form.elements['values_meal[image]'].value = "" ;

	form.elements['values_bolus[name]'].value = dbform_nextname(form.elements['values_bolus[name]'].value) ;
	form.elements['values_bolus[type]'].value = "normal" ;
	form.elements['values_bolus[units]'].value = "0" ;
	form.elements['values_bolus[percentage]'].value = "100" ;
	form.elements['values_bolus[start]'].value = dbform_addtwohours(form.elements['values_bolus[start]'].value) ;
	form.elements['values_bolus[stop]'].value = form.elements['values_bolus[start]'].value ;
  }

  function dbform_fill_nextother ( form )
  {
        form.elements['values_other[name]'].selectedIndex = ((form.elements['values_other[name]'].selectedIndex) + 1) % 9 ; 
	form.elements['values_other[name]'].value = dbform_nextname(form.elements['values_other[name]'].value) ;
	form.elements['values_other[event]'].value = "" ;
	form.elements['values_other[type]'].value = "" ;
	form.elements['values_other[measure]'].value = "" ;
	form.elements['values_other[start]'].value = dbform_addtwohours(form.elements['values_other[start]'].value) ;
	form.elements['values_other[stop]'].value = form.elements['values_other[start]'].value ;
  }


  /*
   * Basal
   */

  function ui_basal_fillselect ( vector_details, select_name, pattern )
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

  function ui_basal_form2def ( basal_form )
  {
         var values_basal = new Array(); 
         var basal_segs = new Object(); 
         var length = 0;

         for (k_elto in basal_form.elements)
         {
              var k_name = basal_form.elements[k_elto].name;
              if ( (typeof k_name === 'undefined') || (k_name == "") ) {
                  continue;
              }

              var pair = k_name.split(",");
              if ( (pair[0] != "values_basaldef") && (pair[0] != "neltos") ) {
                  continue;
              }

              if (3 == pair.length)
              {
		  var p_f = pair[2] ;
		  var p_i = parseInt(pair[1], 10) ;

		  if (typeof basal_segs[p_i] === 'undefined') {
                          basal_segs[p_i] = new Object();
                          length++;
                  }

		  if (p_f == "h")
		       basal_segs[p_i].h = basal_form.elements[k_elto].value;
		  else basal_segs[p_i].c = basal_form.elements[k_elto].value;
              }
              else if (2 == pair.length)
              {
                  values_basal[pair[1]] = basal_form.elements[k_elto].value;
              }
              else {
                  values_basal[k_name] = basal_form.elements[k_elto].value;
              }
         }

         basal_segs['length'] = length;
         values_basal['segments'] = JSON.stringify(basal_segs) ;
         return values_basal ; 
  }

  function ui_basal_sections ( neltos, basal_segs_json )
  {
         neltos = parseInt(neltos, 10) ;
         if (neltos == 0) 
             return "" ;

         basal_segs = JSON.parse(basal_segs_json) ;

	 o = "<center>" +
	     "<table border=0 class=\"none\" cellpadding=2>" +
	     "<tr>" +
	     "<td align=center width=50%><small><b>" + T['BEGIN'] + "</b></small></td>" +
	     "<td align=center width=50%><small><b>" + T['UNI']   + "</b></small></td>" +
	     "</tr>" ;

	 for (i=0; i<neltos; i++)
	 {
		   if (i < basal_segs.length) {
		       bd_i_c = basal_segs[i].c ;
		       bd_i_h = basal_segs[i].h ;
		   } else {
		       bd_i_c = "0" ;
		       if (0 == i) 
		            bd_i_h = "00:00" ;
		       else bd_i_h = "23:59" ;
		   }

		   o += "<tr>" +
			"   <td width=50% height=50% align=center>" +
			"	<input id=s" + i + "t1 name=\"values_basaldef," + i + ",h\" " + 
                        "              onchange=\"var values_basal = ui_basal_form2def(document.formbd); " + 
                        "                       document.formbd.total_area.value = ui_basal_area(values_basal['segments'],'00:00','23:59');" + 
		        "		        return false;\" " +
			"              type=text size=7 data-mini=\"true\" value=\"" + bd_i_h + "\">" +
			"	<script>" +
			"	 $(function(){ $(\"#s" + i + "t1\").scroller({ lang: '" + ls1.lang + "', " + 
			"                                                      preset: 'time', timeFormat : \"HH:ii\" }); });" +
			"	</script> " +
			"   </td> " +
			"   <td>&nbsp;</td> " +
			"</tr>" +
			"<tr>" +
			"    <td height=50% align=center>" +
			"	<div style=\"border-right:1px solid #000; height:55px; width:5%\"></div>" +
			"    </td>" +
			"   <td width=50% valign=middle>" +
			"	<input name=\"values_basaldef," + i + ",c\" " + 
			"              type=number min=0 max=99 step=.01 size=3 data-mini=true data-inline=true" +
                        "              onchange=\"var values_basal = ui_basal_form2def(document.formbd); " + 
                        "                     document.formbd.total_area.value = ui_basal_area(values_basal['segments'],'00:00','23:59');"+ 
		        "		          return false;\" " +
			"              value=\"" + bd_i_c + "\">" +
			"    </td>" +
			"</tr>" ;
	 }

	 o += "<tr>" +
	      "    <td align=center>" + 
	      "	      <input id=s" + i + "t1 name=\"values_basaldef," + i + ",h\" " + 
              "              type=time size=7 readonly value=\"23:59\">" + 
              "    </td>" +
	      "    <td><br></td>" +
	      "</tr>" +
	      "</table>" + 
	      "</center>" ;

	 return o ;
  }

  function ui_basal_area ( basal_segs_json, begin, end )
  {
      var r = 0;

      basal_segs = JSON.parse(basal_segs_json) ;
      if (0 == basal_segs.length)
          return 0;

      var xd_begin = XDate("2011-11-11T" + begin);
      var xd_end   = XDate("2011-11-11T" + end);

      // lookup start and end segments...
      for (m=0; m<basal_segs.length-1; m++) 
      {
           var xd_m   = XDate("2011-11-11T" + basal_segs[m].h);
           var xd_m_1 = XDate("2011-11-11T" + basal_segs[m+1].h);

           if ( (begin >= basal_segs[m].h) && (begin < basal_segs[m+1].h) ) {
                 var i = m ;
                 var xd_i   = xd_m ;
                 var xd_i_1 = xd_m_1 ;
                 var c_i = parseFloat((basal_segs[m].c).replace(",", "."));
           }

           if ( (end >  basal_segs[m].h) && (end <= basal_segs[m+1].h) ) { // TODO <= ó < solo...
                 var j = m ;
                 var xd_j   = xd_m ;
                 var xd_j_1 = xd_m_1 ;
                 var c_j = parseFloat((basal_segs[m].c).replace(",", "."));
           }
      }

      // check the two kinds of solutions...
      if (i==j) 
      {   // type1...
          // r = (end - begin) * basal_segs[i].c;
             r = xd_begin.diffHours(xd_end) * c_i ;
      }
      else
      {   // type2...
          for (var x=i+1; x<j; x++) 
          {
               // r = r + (basal_segs[x+1].h - basal_segs[x].h) * basal_segs[x].c; 
                  var xd_x   = XDate("2011-11-11T" + basal_segs[x].h);
                  var xd_x_1 = XDate("2011-11-11T" + basal_segs[x+1].h);
                  r = r + xd_x.diffHours(xd_x_1) * parseFloat((basal_segs[x].c).replace(",", "."));
          }

          // r = r + (basal_segs[i+1].h - begin) * basal_segs[i].c ;
             r = r + xd_begin.diffHours(xd_i_1) * c_i ;

          // r = r + (end     - basal_segs[j].h) * basal_segs[j].c ;
             r = r + xd_j.diffHours(xd_end) * c_j ;
      }

      return (r - 0.005).toFixed(2) ;  // return r;
  }

