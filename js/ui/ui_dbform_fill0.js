
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

