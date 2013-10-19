
  function dbform_fill2_quick ( form, values_meal, values_measure, values_bolus )
  {
	  var name_index_tr = { "": 0, "A0": 1, "D0": 2, "A1": 3, "D1": 4, "A2": 5, "D2": 6, "A3": 7, "D3": 8, "A4": 9 } ;

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

              dbform_camera_success('#qimage', 'qimage2', 'qimage3', image_src);
          }
  }

  function dbform_fill2_other ( form, values_other )
  {
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

              dbform_camera_success('#oimage', 'oimage2', 'oimage3', values_other['image']);
          }
  }

  function dbform_fill2_basalactivation ( form, values_basal_activation )
  {
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

              $("#ba_segments1").val(res.short_v) ;
              $("#ba_segments2").html(res.long_v) ;

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

