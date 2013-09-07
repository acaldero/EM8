
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

