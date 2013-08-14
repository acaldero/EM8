
  /* 
   * Auxiliar functions 
   */

  function ensure_init_graph_visualization ( )
  {
      if (typeof ensure_is_init_graph === "undefined")
           ensure_is_init_graph = true;
      else return;

      // initialize graphs (for voice visualization)
      $("#container0").hide();
      $("#container1").hide();
      $("#container4").hide();
      $("#container5").hide();
      $("#container6").hide();
      $("#container7").hide();
      $("#container8").hide();
      $("#container9").hide();
      $("#containerA").hide();

      // build the charts
      var oh1 = stats_byhour_getDefinition();
      var ot1 = stats_bytarget_getDefinition();
      var obd = stats_basaldef_getDefinition();
      var oc3 = stats_measures_cloud_getDefinition(); 

      var bh1 = new Highcharts.Chart(oh1.b1);
      var ch1 = new Highcharts.Chart(oh1.c1);
      var mh1 = new Highcharts.Chart(oh1.m1);
      var bt1 = new Highcharts.Chart(ot1.b1);
      var ct1 = new Highcharts.Chart(ot1.c1);
      var mt1 = new Highcharts.Chart(ot1.m1);
      var bd1 = new Highcharts.Chart(obd);
      var cc3 = new Highcharts.Chart(oc3);
  }


  /* 
   * Main functions 
   */

  function ui_voice ( cmd )
  {
      // initialize form (for voice filling)
      document.form10x.elements['values_measure[id]'].value=-1;
      document.form10x.elements['values_measure[measure]'].value=0;
      document.form10x.elements['values_meal[id]'].value=-1;
      document.form10x.elements['values_meal[measure]'].value=0;
      document.form10x.elements['values_bolus[id]'].value=-1;
      document.form10x.elements['values_bolus[units]'].value=0;
      document.form11x.elements['values_other[id]'].value=-1;

      dt_now = XDate() ;
      dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
      dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

      // voice-over...
      var tokens = cmd.split(" ") ;
      var t = 0 ;

      while (typeof tokens[t] !== 'undefined' && tokens[t] !== null)
      {
	    if (tokens[t].match(/apunta.*/i))
	    {
                  t++ ;

		  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null)
		  {
		      if (tokens[t].match(/medida.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_measure[measure]'].value = parseInt(tokens[t], 10) ;
                              t++ ;
                          }

			  document.form10x.elements['values_measure[start]'].value = dt0 ;
			  document.form10x.elements['values_measure[stop]'].value  = dt0 ;

                          $('#p-qm-mmb').collapsible('expand');
			  $.mobile.changePage('#page-quickmenu');
		      }
		      else if (tokens[t].match(/bolo.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_bolus[type]'].value = tokens[t];
                              t++ ;
                          }

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_bolus[units]'].value = parseInt(tokens[t], 10);
                              t++ ;
                          }

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_bolus[percentage]'].value = parseInt(tokens[t], 10);
                              t++ ;
                          }

			  document.form10x.elements['values_bolus[start]'].value = dt0 ;
			  document.form10x.elements['values_bolus[stop]'].value  = dt0 ;

                          $("#page10md1").show();
                          $('#p-qm-mmb').collapsible('expand');
			  $.mobile.changePage('#page-quickmenu');
		      }
		      else if (tokens[t].match(/comida.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_meal[measure]'].value = parseInt(tokens[t], 10) ;
                              t++ ;
                          }

			  document.form10x.elements['values_meal[start]'].value = dt0 ;
			  document.form10x.elements['values_meal[stop]'].value  = dt0 ;

                          $("#page10md2").show();
                          $('#p-qm-mmb').collapsible('expand');
			  $.mobile.changePage('#page-quickmenu');
		      }
		      else if (tokens[t].match(/activar.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.formqba.elements['values_basal_activation[pattern]'].value = tokens[t] ;
                              t++ ;
                          }

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.formqba.elements['values_basal_activation[percentage]'].value = parseInt(tokens[t], 10) ;
                              t++ ;
                          }

			  document.formqba.elements['values_basal_activation[start]'].value = dt0 ;

                          $('#p-qm-ba').collapsible('expand');
			  $.mobile.changePage('#page-quickmenu');
		      }
		      else
		      {
                          t++ ;
		      }
		  }
	    }
	    else if (tokens[t].match(/ve.*/i))
	    {
                  t++ ;

		  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null)
		  {
		      if (tokens[t].match(/medida.*/i))
		      {
                          t++ ;

			  ensure_init_graph_visualization() ;
			  $("#container8").toggle();
			  $("#container9").toggle();
			  $("#containerA").toggle();

			  $.mobile.changePage('#page24');
		      }
		      else if (tokens[t].match(/bolo.*/i))
		      {
                          t++ ;

			  ensure_init_graph_visualization() ;
			  $("#container4").toggle();
			  $("#container5").toggle();

			  $.mobile.changePage('#page24');
		      }
		      else if (tokens[t].match(/comida.*/i))
		      {
                          t++ ;

			  ensure_init_graph_visualization() ;
			  $("#container6").toggle();
			  $("#container7").toggle();

			  $.mobile.changePage('#page24');
		      }
		      else if (tokens[t].match(/basal.*/i))
		      {
                          t++ ;

			  ensure_init_graph_visualization() ;
			  $("#container0").toggle();
			  $("#container1").toggle();

			  $.mobile.changePage('#page24');
		      }
		      else if (tokens[t].match(/tabla.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
		              if (tokens[t].match(/horizontal.*/i))
                                  $("#diary_div").html(daytag_table_horizontal(ls1.year, ls1.month, vector_details, target_names, target_tags, "page10")+"<br>").trigger("create"); 
		              else if (tokens[t].match(/vertical.*/i))
                                  $("#diary_div").html(daytag_table_vertical(ls1.year, ls1.month, vector_details, target_names, target_tags, "page10")+"<br>").trigger("create");
		              else
                                  $("#diary_div").html(daytag_table_compact(vector_details,target_names,target_tags,"page10")+"<br>").trigger("create");

                              t++ ;
                          }

			  $("#diary_div").show();

			  $.mobile.changePage('#page10');
		      }
		      else if (tokens[t].match(/diario.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
		              if (tokens[t].match(/mes.*/i))
                                  $("#diary_div").html(daytag_show_month(ls1.year, ls1.month, ls1.today, cal_head, vector_details,"page10")).trigger("create");
		              else if (tokens[t].match(/semana.*/i))
                                  $("#diary_div").html(daytag_show_days(ls1.year, ls1.month, ls1.today, 7, vector_details,"page10")).trigger("create");
		              else
                                  $("#diary_div").html(daytag_show_days(ls1.year, ls1.month, ls1.today, 1, vector_details,"page10")).trigger("create");

                              t++ ;
                          }

			  $("#diary_div").show();

			  $.mobile.changePage('#page10');
		      }
		      else
		      {
                          t++ ;
		      }
		  }
	    }
	    else if (tokens[t].match(/configur.*/i))
	    {
                  t++ ;

		  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null)
		  {
		      if (tokens[t].match(/idiom.*/i))
		      {
                          t++ ;

                          $('#idioma').collapsible('expand');
			  $.mobile.changePage('#page25');
		      }
		      else if (tokens[t].match(/con.*/i))
		      {
                          t++ ;

                          $('#conexion').collapsible('expand'); // better: $('#conexion').collapsible({ collapsed: false });
			  $.mobile.changePage('#page25');
		      }
		      else if (tokens[t].match(/ajus.*/i))
		      {
                          t++ ;

                          $('#ajustes').collapsible('expand');
			  $.mobile.changePage('#page25');
		      }
		      else
		      {
                          t++ ;
		      }
		  }
	    }
	    else
	    {
                  t++ ;
	    }
      }
  }

