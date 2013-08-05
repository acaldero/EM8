
  function daytag_details_name ( details, name_k, hour_begin, hour_end )
  {
        k = new Object() ;
        k.GU = "" ;
        k.MU = "" ;
        k.BU = "" ;

        hour_begin = parseInt(hour_begin);
        hour_end   = parseInt(hour_end);

        for (k_hour in details) 
        {
                keyh = parseInt(k_hour.slice(0,2),10);
                keym = parseInt(k_hour.slice(3,5),10);

                if (keyh <  hour_begin) continue ;
                if (keyh >= hour_end)   continue ;

	        if (details[k_hour]['meal'])
		    if (details[k_hour]['meal']['name'] == name_k) 
			  k.MU = details[k_hour]['meal']['measure'] ;

	        if (details[k_hour]['measure'])
		    if (details[k_hour]['measure']['name'] == name_k) 
			  k.GU = details[k_hour]['measure']['measure'] ;

	        if (details[k_hour]['bolus'])
		    if (details[k_hour]['bolus']['name'] == name_k) 
			  k.BU = details[k_hour]['bolus']['units'] ;
        }

        k.empty = 0 ;
	if ( (k.GU == "") && (k.MU == "") && (k.BU == "") )
              k.empty = 1 ;

        return k ;
  }

  function daytag_details ( month, year, details, name_k, defdate, hour_begin, hour_end, back_url )
  {
        values_meal    = new Object() ;
        values_measure = new Object() ;
        values_bolus   = new Object() ;
        values_other   = new Object() ;

	values_meal['id']    = values_measure['id']    = values_bolus['id']    = values_other['id']    = "-1";
	values_meal['start'] = values_measure['start'] = values_bolus['start'] = values_other['start'] = defdate;
	values_meal['stop']  = values_measure['stop']  = values_bolus['stop']  = values_other['stop']  = defdate;

        GT = MT = BT = OT = "" ;
        GM = MM = BM = OM = "&nbsp;" ;

        hour_begin = parseInt(hour_begin);
        hour_end   = parseInt(hour_end);

        for (k_hour in details) 
        {
                keyh = parseInt(k_hour.slice(0,2),10);
                keym = parseInt(k_hour.slice(3,5),10);

                if (keyh <  hour_begin) continue ;
                if (keyh >= hour_end)   continue ;

	        if (details[k_hour]['meal'])
		    if (details[k_hour]['meal']['name'] == name_k) {
                          values_meal = details[k_hour]['meal'] ;
			  MT = k_hour ;
                          MM = values_meal['measure'] ;
		    }

	        if (details[k_hour]['measure'])
		    if (details[k_hour]['measure']['name'] == name_k) {
                          values_measure = details[k_hour]['measure'] ;
			  GT = k_hour ;
                          GM = values_measure['measure'] ;
		    }

	        if (details[k_hour]['bolus'])
		    if (details[k_hour]['bolus']['name'] == name_k) {
                          values_bolus = details[k_hour]['bolus'] ;
			  BT = k_hour ;
                          BM = values_bolus['units'] ;
		    }

	        if (details[k_hour]['other'])
		    if (details[k_hour]['other']['name'] == name_k) {
                          values_other = details[k_hour]['other'] ;
			  OT = k_hour ;
                          OM = values_other['measure'] ;
		    }

		if ( (GT != "") || (MT != "") || (BT != "") ) 
                      break ;
        }

        o = new Object() ;
        o.empty = 0 ;
	if ( (GT == "") && (MT == "") && (BT == "") )
              o.empty = 1 ;

	// comprimir las horas -> si se repite se pone en su lugar =
	if (GT != "") 
	{
	    if (GT == MT) MT="<font size=+0>=</font>";
	    if (GT == BT) BT="<font size=+0>=</font>";
	}
	else if (BT != "") 
	{
	    if (BT == MT) MT="<font size=+0>=</font>";
	}

        // generate the details
	o.str = "" +
	    "  <table border=0 width=100% bgcolor=white>\n" +
	    "  <tr height=60%>\n" +
	    "    <td align=left width=20%>\n" + 
	    "      <div type=submit class=square_button3 data-role=\"none\">\n" +
	    "        <font color=blue><b>" + MM + "</b></font>" + "&nbsp;" + "\n" +
	    "      </div>\n" +
	    "    </td>\n" +
	    "    <td align=center width=60%>\n" +
	    "      <div type=submit class=square_button2 data-role=\"none\">\n" +
	    "        <font color=black><b>" + GM + "</b></font>" + "&nbsp;" + "\n" +
	    "      </div>\n" +
	    "    </td>\n" +
	    "    <td align=right width=20%>\n" +
	    "      <div type=submit class=square_button1 data-role=\"none\">\n" +
	    "        <font color=red><b>" + BM + "</b></font>" + "&nbsp;" + "\n" +
	    "      </div>\n" +
	    "    </td>\n" +
	    "  </tr>\n" +
	    "  <tr height=40%>\n" +
	    "    <td colspan=3 align=center>\n" + 
	    "      <div type=submit class=square_button2 data-role=\"none\" " + 
            "              onclick=\"" + 
                            " $.mobile.changePage('#page-quickmenu');" + 
                            " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                            " $('form#form10x').attr('action','#" + back_url + "');" +
                            " $('form#form11x').attr('action','#" + back_url + "');" +
                            " dbform_fill2_quick("   + "document.form10x"             + ", " + 
                                                 "'" + escape(JSON.stringify(values_meal))    + "'," + 
                                                 "'" + escape(JSON.stringify(values_measure)) + "'," + 
                                                 "'" + escape(JSON.stringify(values_bolus))   + "'); " + 
                            " dbform_fill2_other("   + "document.form11x"             + ", " + 
                                                 "'" + escape(JSON.stringify(values_other))   + "'); " + 
                           "\">\n" +
	    "      [ <b><font color=blue>" + MT + "</font>" + GT + " " + "<font color=red>" + BT + "</font></b> ]" +
	    "    </div>\n" +
	    "    </td>\n" +
	    "  </tr>\n" +
	    "  </table>\n" ;

        return o ;
  }

	function daytag_errorHandler(e) 
	{
	   var msg = '';
	   switch (e.code) 
	   {
	     case FileError.QUOTA_EXCEEDED_ERR:
		msg = 'QUOTA_EXCEEDED_ERR';
		break;
	     case FileError.NOT_FOUND_ERR:
		msg = 'NOT_FOUND_ERR';
		break;
	     case FileError.SECURITY_ERR:
		msg = 'SECURITY_ERR';
		break;
	     case FileError.INVALID_MODIFICATION_ERR:
		msg = 'INVALID_MODIFICATION_ERR';
		break;
	     case FileError.INVALID_STATE_ERR:
		msg = 'INVALID_STATE_ERR';
		break;
	     default:
		msg = 'Unknown Error';
		break;
	   };
	   console.log('Error: ' + msg);
	}

  function daytag_target_translation ( name )
  {
        if ('A4' == name)
            return '<img height=22 src=\"icons/at-night.jpg\">' ;
        if ('A' == name[0])
            return '<img height=20 src=\"icons/before-meal-4.gif\">' ;
        if ('D' == name[0])
            return '<img height=20 src=\"icons/after-meal.jpg\">' ;

        return '' ;
  }

  function daytag_summary ( details, defdate, hour_begin, hour_end, back_url )
  {
        o = "<table border=0 width=100%>" ;

        hour_begin = parseInt(hour_begin);
        hour_end   = parseInt(hour_end);

        // order members of a object (remember there is not associative arrays in javascript)...
        var details_order = [];
        for (var key in details) 
        {
             keyh = parseInt(key.slice(0,2),10);
             keym = parseInt(key.slice(3,5),10);
//console.error('day*_summary: ' + hour_begin + ' <= ' + keyh + '/' + key.slice(0,2) + ' < ' + hour_end + ' (' + defdate + '/' + key + ')'); // DEBUG

             if (keyh <  hour_begin) continue ;
             if (keyh >= hour_end)   continue ;
//console.error('day*_summary:     added ' + keyh + ':' + keym + ' to ' + defdate + ' ! '); // DEBUG

             key_order = keyh*60 + keym ;
             details_order.push([key_order, key]);
        }
	details_order.sort(function(a, b) { a = a[0]; b = b[0]; return a < b ? -1 : (a > b ? 1 : 0); });

        // print summary...
        //console.log('ui_daytag.daytag_summary.details_order.length: ' + details_order.length);
        for (var i=0; i<details_order.length; i++) 
        {
		k_hour = details_order[i][1] ;

	        values_meal    = new Object() ; values_meal['id']    = -1; values_meal['start']    = defdate;
	        values_measure = new Object() ; values_measure['id'] = -1; values_measure['start'] = defdate;
	        values_bolus   = new Object() ; values_bolus['id']   = -1; values_bolus['start']   = defdate;
	        values_other   = new Object() ; values_other['id']   = -1; values_other['start']   = defdate;

		for (k_type in details[k_hour])
		{
		   if (details[k_hour][k_type]['name'] != "")
			s_type = "tag"   + "_" + k_type ;
		   else s_type = "untag" + "_" + k_type ;

                   //console.log('ui_daytag.daytag_summary.details[k_hour][k_type]s_type: ' + JSON.stringify(details[k_hour][k_type]));
		   switch (s_type)
		   {
		       case 'tag_meal':
		       case 'untag_meal':

                            values_meal = details[k_hour]['meal'] ;

			    tag = "" ;
			    if (s_type == "tag_meal")
				tag = "<br><c>" + daytag_target_translation(details[k_hour][k_type]['name']) + "</c>" ; 

			    associated_measure_m  = "&nbsp;";
			    if (details[k_hour]['measure'])
				if (details[k_hour]['measure']['name'] == details[k_hour][k_type]['name']) {
				    associated_measure_m = details[k_hour]['measure']['measure'] ;
                                    values_measure       = details[k_hour]['measure'] ;
                                }

			    associated_bolus_u  = "&nbsp;";
			    if (details[k_hour]['bolus'])
				if (details[k_hour]['bolus']['name'] == details[k_hour][k_type]['name']) {
				    associated_bolus_u  = details[k_hour]['bolus']['units'] + "u" ;
                                    values_bolus        = details[k_hour]['bolus'] ;
                                }

			    if ( (associated_measure_m != "&nbsp;") && (associated_bolus_u == "&nbsp;") )
                                 default_img = "icons/empty_ta-5.png" ;
                            else default_img = "icons/empty_dish.jpg" ;

                            img_id1 = "mi" + values_meal['id'] + "a" ;
                            img_id2 = "mi" + values_meal['id'] + "b" ;
                            meal_image1 = "<img id=" + img_id1 + " height=80 class=popphoto src=\"" + default_img + "\" style=\"max-height:512px;\">" ;
                            meal_image2 = "<img id=" + img_id2 + " height=80 class=popphoto src=\"" + default_img + "\" style=\"max-height:512px;\">" ;
                            if ( ("" != values_meal['image']) && (null != values_meal['image']) )
                            {
			         if ( /^file:\/{3}[^\/]/i.test(window.location.href) && 
                                      /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent) ) 
                                      srcimage = values_meal['image'] ;
                                 else srcimage = "https://127.000.000.01/em.8/php/sync/" +
                                                 values_meal['user'] + "/" +  
                                                 values_meal['image'].replace(/\\/g,'/').replace( /.*\//, '' ) ;

                                 meal_image1 = "<img id=" + img_id1 + 
                                             " height=80 class=popphoto style=\"max-height:512px;\" src=\"" + srcimage + "\">";
                                 meal_image2 = "<img id=" + img_id2 + 
				             "           class=popphoto style=\"max-height:512px;\" src=\"" + srcimage + "\">";
                            }

                            // console.log('ui_daytag.daytag_summary.*_meal: update o');
			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + tag + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:35px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:35px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "   <table border=1 class=\"em_table\" width=100%>\n" +
				    "   <tr>\n" +
				    "   <td align=center width=15%>\n" +
				    "     <font size=2><b>" +
				    "     <div class=square_button4 data-role=\"none\"\n" +
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
                                                    " $('#p-qm-mmb').collapsible('expand');" +
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form10x').attr('action','#" + back_url + "');" +
						    " dbform_fill2_quick("   + "document.form10x"             + ", " + 
								         "'" + escape(JSON.stringify(values_meal))    + "'," + 
								         "'" + escape(JSON.stringify(values_measure)) + "'," + 
								         "'" + escape(JSON.stringify(values_bolus))   + "'); " + 
						   "\">\n" +
				              details[k_hour][k_type]['measure'] + "r" +
				    "     </div>\n" +
				    "     </b></font>" +
				    "   </td>\n" +
				    "   <td align=center rowspan=3 width=85%>\n" +
				    "    <a href=#i" + details[k_hour][k_type]['id'] + " data-rel=popup " + 
				    "       data-position-to=window data-theme=a " + 
				    "       data-inline=true data-transition=fade>" + meal_image1 + "</a>" +
				    "    <div data-role=popup id=i" + details[k_hour][k_type]['id'] + 
				    "         data-overlay-theme=b " + 
				    "         data-corners=false data-tolerance=\"30,15\">" +
				    "	      <a href=# data-rel=back data-role=button data-theme=a data-icon=delete " + 
				    "            data-iconpos=notext class=ui-btn-right>Close</a>" + 
				    "         " + meal_image2 +
				    "    </div>" +
				    "     <br><font size=2><b>" + details[k_hour][k_type]['tag'] + "</b></font>" +
				    "   </td>\n" +
				    "   </tr>\n" +
				    "   <tr>\n" +
				    "   <td align=center width=15%><font size=2><b>" + associated_measure_m + "</b></font></td>\n" +
				    "   </tr>\n" +
				    "   <tr>\n" +
				    "   <td align=center width=15%><font size=2><b>" + associated_bolus_u   + "</b></font></td>\n" +
				    "   </tr>\n" +
				    "   </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;

		       case 'tag_bolus':
		       case 'untag_bolus':

                            values_bolus = details[k_hour]['bolus'] ;

			    if (details[k_hour][k_type]['type'] == "normal")
				 associated_stop = "&nbsp;" ;
			    else associated_stop = details[k_hour][k_type]['stop'] ;

			    tag = "" ;
			    if (s_type == "tag_bolus")
				tag = "<br><c>" + daytag_target_translation(details[k_hour][k_type]['name']) + "</c>" ; 

			    associated_measure_m     = "&nbsp;";
			    if (details[k_hour]['measure'])
				if (details[k_hour]['measure']['name'] == details[k_hour][k_type]['name']) {
				    associated_measure_m  = details[k_hour]['measure']['measure'] ;
                                    values_measure        = details[k_hour]['measure'] ;
                                }

			    associated_meal_r     = "&nbsp;";
			    if (details[k_hour]['meal'])
				if (details[k_hour]['meal']['name'] == details[k_hour][k_type]['name']) {
				    associated_meal_r = details[k_hour]['meal']['measure'] ;
                                    values_meal       = details[k_hour]['meal'] ;
                                }

			    if (associated_meal_r == "&nbsp;")
			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + tag + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "  <table border=1 class=\"em_table\" width=100%>\n" +
				    "  <tr>\n" +
				    "  <td align=center width=15%>\n" +
				    "   <font size=2><b>" +
				    "    <div class=square_button4 data-role=none" + 
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
                                                    " $('#p-qm-mmb').collapsible('expand');" +
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form10x').attr('action','#" + back_url + "');" +
						    " dbform_fill2_quick("   + "document.form10x"             + ", " + 
								         "'" + escape(JSON.stringify(values_meal))    + "'," + 
								         "'" + escape(JSON.stringify(values_measure)) + "'," + 
								         "'" + escape(JSON.stringify(values_bolus))   + "'); " + 
						   "\">\n" + 
                                            details[k_hour][k_type]['units'] + "u</div>\n" +
				    "   </b></font>" +
				    "  </td>\n" +
				    "  <td align=center rowspan=2 width=85%>\n" +
				    "    <font size=2><b>" + details[k_hour][k_type]['type'] + " &nbsp; " + details[k_hour][k_type]['percentage'] + "% &nbsp; " + 
					 associated_stop + "</b></font>" +
				    "  </td>\n" +
				    "  </tr>\n" +
				    "   <tr>\n" +
				    "   <td align=center width=15%><font size=2><b>" + associated_measure_m + "</b></font></td>\n" +
				    "   </tr>\n" +
				    "  </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;

		       case 'tag_measure':
		       case 'untag_measure':

                            values_measure = details[k_hour]['measure'] ;

			    tag = "" ;
			    if (s_type == "tag_measure")
				tag = "<br><c>" + daytag_target_translation(details[k_hour][k_type]['name']) + "</c>" ; 

			    associated_meal_r  = "&nbsp;";
			    if (details[k_hour]['meal'])
				if (details[k_hour]['meal']['name'] == details[k_hour][k_type]['name']) {
				    associated_meal_r = details[k_hour]['meal']['measure'] ;
                                    values_meal       = details[k_hour]['meal'] ;
                                }

			    associated_bolus_u  = "&nbsp;";
			    if (details[k_hour]['bolus'])
				if (details[k_hour]['bolus']['name'] == details[k_hour][k_type]['name']) {
				    associated_bolus_u = details[k_hour]['bolus']['units'] + "u" ;
                                    values_bolus       = details[k_hour]['bolus'] ;
                                }

			    if ((associated_meal_r == "&nbsp;") && (associated_bolus_u == "&nbsp;"))
			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + tag + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "  <table border=1 class=\"em_table\" width=100%>\n" +
				    "  <tr>\n" +
				    "  <td align=center width=15%>\n" +
				    "   <font size=2><b>" +
				    "    <div class=square_button4 data-role=none" + 
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
                                                    " $('#p-qm-mmb').collapsible('expand');" +
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form10x').attr('action','#" + back_url + "');" +
						    " dbform_fill2_quick("   + "document.form10x"             + ", " + 
								         "'" + escape(JSON.stringify(values_meal))    + "'," + 
								         "'" + escape(JSON.stringify(values_measure)) + "'," + 
								         "'" + escape(JSON.stringify(values_bolus))   + "'); " + 
						   "\">\n" + 
                                           details[k_hour][k_type]['measure'] + "</div>\n" +
				    "   </b></font>" +
				    "  </td>\n" +
				    "  <td align=center width=120>\n" +
				    "    &nbsp;" +
				    "  </td>\n" +
				    "  </tr>\n" +
				    "  </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;

		       case 'tag_event':
		       case 'untag_event':

                            values_other = details[k_hour][k_type] ;

			    tag = "" ;
			    if (s_type == "tag_event")
				tag = "<br><c>" + daytag_target_translation(details[k_hour][k_type]['name']) + "</c>" ; 

                            other_image = "&nbsp;" ;
                            if ( ("" != values_other['image']) && (null != values_other['image']) )
                            {
			         if ( /^file:\/{3}[^\/]/i.test(window.location.href) && 
                                      /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent) ) 
                                      srcimage = values_other['image'] ;
                                 else srcimage = "https://127.000.000.01/em.8/php/sync/" +
                                                 values_other['user'] + "/" +  
                                                 values_other['image'].replace(/\\/g,'/').replace( /.*\//, '' ) ;

                                 img_id1 = "oi" + values_other['id'] + "a" ;
                                 img_id2 = "oi" + values_other['id'] + "b" ;
                                 other_image1 = "<img id=" + img_id1 + " height=80 src=\"" + srcimage + "\">" ;
                                 other_image2 = "<img id=" + img_id2 + " height=80 src=\"" + srcimage + "\">" ;

                                 other_image = 
				    "<a href=#i" + details[k_hour][k_type]['id'] + " data-rel=popup " + 
				    "   data-position-to=window data-theme=d " + 
				    "   data-inline=true data-transition=fade>" + other_image1 + "</a>" +
				    "    <div data-role=popup id=i" + details[k_hour][k_type]['id'] + 
				    "         data-overlay-theme=b " + 
				    "         data-corners=false data-tolerance=\"30,15\">" +
				    "	      <a href=# data-rel=back data-role=button data-theme=a data-icon=delete " + 
				    "            data-iconpos=notext class=ui-btn-right>Close</a>" + other_image2 +
				    "    </div>" + "<br>" ;
                            }

			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + tag + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "  <table border=1 class=\"em_table\" width=100%>\n" +
				    "  <tr>\n" +
				    "  <td align=center width=15%>\n" +
				    "    <font size=2><b>" +
				    "      <div type=submit class=square_button4 data-role=none" + 
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form11x').attr('action','#" + back_url + "');" +
						    " dbform_fill2_other("   + "document.form11x"             + ", " + 
								         "'" + escape(JSON.stringify(values_other)) + "'); " + 
                                                    " $('#p-qm-o').collapsible('expand');" +
						   "\">\n" + 
                                           details[k_hour][k_type]['event'] + "</div>\n" +
				    "    </b></font>" +
				    "  </td>\n" +
				    "  <td align=center rowspan=1 width=85%>\n" + other_image + 
				    "    <font size=2><b>" + details[k_hour][k_type]['type'] + " &nbsp; " + 
                                                             details[k_hour][k_type]['measure'] + "</b></font>" +
				    "  </td>\n" +
				    "  </tr>\n" +
				    "  </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;

		       case 'tag_basalact':
		       case 'untag_basalact':

                            values_ba = details[k_hour][k_type] ;

                            var segs_txt = "" ;
                            var segs = JSON.parse(values_ba['segments']) ;
                            for (j=0; j<segs.length-1; j++) 
                                 segs_txt += segs[j].h + " <- " + segs[j].c + " -> " + segs[j+1].h + "<br>";

			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "  <table border=1 class=\"em_table\" width=100%>\n" +
				    "  <tr>\n" +
				    "  <td align=center width=15%>\n" +
				    "    <font size=2><b>" +
				    "      <div type=submit class=square_button4 data-role=none" + 
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
                                                    " $('#p-qm-ba').collapsible('expand');" +
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form-qba').attr('action','#" + back_url + "');" +
						    " dbform_fill2_basalactivation(" + "document.formqba" + ", " + 
								                 "'" + escape(JSON.stringify(values_ba)) + "'); " + 
						   "\">\n" + 
                                           "basal<br>act." + "</div>\n" +
				    "    </b></font>" +
				    "  </td>\n" +
				    "  <td align=center rowspan=1 width=85%>\n" + 
                                    "    <img src=icons/faucet-2.png height=25><br>" + 
				    "    <font size=2><b>" + details[k_hour][k_type]['pattern'] + " &nbsp; " + 
                                                             details[k_hour][k_type]['percentage'] + "%<br>" + 
                                                             "<font color=gray>" + segs_txt + "</font>" +
                                    "    </b></font>" +
				    "  </td>\n" +
				    "  </tr>\n" +
				    "  </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;
		   }
		}
        }

        o += "</table>" ;

        return o ;
  }

  function daytag_summary_measures ( details, hour_begin, hour_end )
  {
        m  = 0 ;
        nm = 0;

        hour_begin = parseInt(hour_begin);
        hour_end   = parseInt(hour_end);

        for (k_hour in details)
        {
		hour_now = parseInt(k_hour.slice(0,2));
                if (hour_now < hour_begin) continue ;
                if (hour_now > hour_end)   continue ;

		for (k_type in details[k_hour])
		{
		   if (details[k_hour][k_type]['name'] != "")
			s_type = "tag"   + "_" + k_type ;
		   else s_type = "untag" + "_" + k_type ;

		   switch (s_type)
		   {
		       case 'tag_measure':
			    m = m + parseInt(details[k_hour][k_type]['measure']) ;
			    nm++ ;
			    break ;
		       case 'untag_measure':
			    m = m + parseInt(details[k_hour][k_type]['measure']) ;
			    nm++ ;
			    break ;
		   }
		}
        }

        if (0 == nm)
            return 0;

        return (m / nm) ;
  }

  // auxiliar function
  function daytag_showhide(id)
  {
         if (document.getElementById) 
         {
               obj = document.getElementById(id);
               if (obj.style.display == "none") {
                   obj.style.display = "";
               } else {
                   obj.style.display = "none";
               }
         }
  }

  function daytag_summary_color ( measures )
  {
        if (0 == measures) return "#f1f1f1" ;

        o = "#CCFF33" ; // green
        if      ( (measures > 150) && (measures < 200) )
               o = "#FFFF99" ;  // yellow
        else if ( (measures > 200) && (measures < 300) )
               o = "#FFDD11" ;  // orange
        else if ( (measures > 300) )
               o = "red" ;

        return o ;
  }

  function daytag_show_month ( year, month, day, cal_head, vector_details, back_url )
  {
	// http://davidwalsh.name/php-calendar

	/* draw table */
	u  = "<table cellpadding=2 cellspacing=2 border=1 style=\"border-collapse: collapse; width:300px;\">" ;
	moreinfo = "" ;

	u += "<tr class=calendar-row>" ;
	for (i=0; i<cal_head.length; i++) {
	     u += "<td class=calendar-day-head align=center><c>" ;
	     u += "<font color=gray>" + cal_head[i] + "</font>" ;
	     u += "</c></td>" ;
	}
	u += "</tr>" ;

	/* days and weeks vars now ... */
	dt1 = new Date(year,month-1,1) ;
	running_day = dt1.getDay();
	if (0 == running_day) running_day = 7 ;

	dt2 = new Date(year,month,0) ;
	days_in_month = dt2.getDate() ;

	days_in_this_week = 1;
	day_counter = 0;
	dates_array = new Array();

	/* row for week one */
	u += "<tr class=calendar-row>" ;

	/* print "blank" days until the first of the current week */
	for(x = 1; x < running_day; x++) {
		u += "<td class=calendar-day-np>&nbsp;</td>" ;
		days_in_this_week++;
	}

	/* keep going with days.... */
	for (list_day = 1; list_day <= days_in_month; list_day++) 
	{
		k  = year + "-" + ('0' + month).slice(-2) + "-" + ('0' + list_day).slice(-2) ;
		k2 = year + "-" + ('0' + month).slice(-2) + "-" + ('0' + (list_day+1)).slice(-2) ;

                currday = XDate(year,month-1,list_day,14,00,00) ;
                k0 = currday.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
                k0 = k0.substr(0,10) + 'T' + k0.substr(11);

		measures = 0 ;
		day_info = "&nbsp;" ;
		if (! ((typeof vector_details[k] === "undefined") || (Object.keys(vector_details[k]).length == 0)) )
		{
		    measures = daytag_summary_measures(vector_details[k],ls1.newday_hour,24);
		    day_info = daytag_summary(vector_details[k],k,ls1.newday_hour,24,back_url) ;
		}
		if (! ((typeof vector_details[k2] === "undefined") || (Object.keys(vector_details[k2]).length == 0)) )
		{
		    measures += daytag_summary_measures(vector_details[k2],0,ls1.newday_hour);
		    day_info += daytag_summary(vector_details[k2],k,0,ls1.newday_hour,back_url) ;
		}

		c = daytag_summary_color(measures / 2);
		u += "<td class=calendar-day valign=middle bgcolor=" + c + "><center>" ;
		u += "<div class=day-number " + 
				 "     onclick=\"daytag_showhide('m" + list_day + "');\">" + list_day + "</div>\n" ;

		moreinfo +=  "<div id=\"m" + list_day + "\" align=left " + // " class=shadow1 " +
			     "     style=\"display: none; position:relative; z-index:1; width: 100%; " +
			     "                               line-height: 18px;\">\n" +
			     "<div style=\"background-color:" + c + "\">" + 
			     "<table border=0 width=100%>" +
			     "<tr>" +
			     "<td>" +
			     "<c>" + list_day + " / " + month + " / " + year + "</c>" + 
			     "</td>" +
			     "<td align=center>" +
	         "    <div data-role=none align=center style='width: 50%; text-decoration: none; border-bottom:1px dashed;'" +
                 "         onclick=\"" + 
                            "      $('a#pageqmclose').attr('href','#" + back_url + "');" +
                            "      $('form#form10x').attr('action','#" + back_url + "');" +
                            "      dbform_fill0_quick(document.form10x,'" + k0 + "');" +
                            "      dbform_fill0_other(document.form11x,'" + k0 + "');" +
                            "      $.mobile.changePage('#page-quickmenu');" + "\"><c>+</c></div>\n" +
			     "</td>" +
			     "</tr>" +
			     "</table>" +
			     "</div>\n" + 
			     day_info + 
			     "</div>\n" ;
		u += "</center></td>" ;

		if (running_day == 7) {
			u += "</tr>" ;
			if ((day_counter+1) != days_in_month)
				u += "<tr class=calendar-row>" ;
			running_day = 0;
			days_in_this_week = 0;
		}

		days_in_this_week++; 
		running_day++; 
		day_counter++;
	}

	/* finish the rest of the days in the week */
	if ( (days_in_this_week < 8) && (days_in_this_week > 1) )
	{
		for(x = 1; x <= (8 - days_in_this_week); x++) {
			u += "<td class=calendar-day-np>&nbsp;</td>" ;
		}
	}

	u += '</tr>' ;
	u +=  '<tr><td colspan=7>' + moreinfo + '</td></tr>' ;
	u +=  '</table>' ;

        return u ;
  }

  function daytag_show_days ( year, month, day, ndays, vector_details, back_url )
  {
      firstday = XDate(year,month-1,day,14,00,00) ;

      u = "<table cellpadding=0 cellspacing=0 border=1 " +
          "       style=\"border-collapse: collapse; border-style:solid; border-color:#a0a0a0; line-height: 18px;\"><tr>\n" ;

      for (currentday=0; currentday < ndays; currentday++)
      {
         k0 = firstday.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
         k0 = k0.substr(0,10) + 'T' + k0.substr(11);

         k  = firstday.toString("yyyy-MM-dd") ;
         firstday.addDays(1) ;
         k2 = firstday.toString("yyyy-MM-dd") ;

	 measures = 0 ;
	 day_info = "&nbsp;" ;
	 if (! ((typeof vector_details[k] === "undefined") || (Object.keys(vector_details[k]).length == 0)) )
	 {
	    measures = daytag_summary_measures(vector_details[k],ls1.newday_hour,24);
	    day_info = daytag_summary(vector_details[k],k,ls1.newday_hour,24,back_url) ;
	 }
	 if (! ((typeof vector_details[k2] === "undefined") || (Object.keys(vector_details[k2]).length == 0)) )
	 {
	    measures += daytag_summary_measures(vector_details[k2],0,ls1.newday_hour);
	    day_info += daytag_summary(vector_details[k2],k,0,ls1.newday_hour,back_url) ;
	 }

	 c = daytag_summary_color(measures / 2);
	 u += "<td valign=top><table border=0 width=250><tr>" + 
              "<td style=\"border-color:#a0a0a0;\" bgcolor=" + c + " valign=middle align=left>" + 
              "  <table border=0 width=100%>" + 
              "  <tr>" + 
              "   <td width=10%>&nbsp;</td>" + 
              "   <td width=80% align=center onclick=\'$(\"#h" + k + "\").toggle();\'><c>" + k + "</c></td>" + 
              "   <td width=10% align=right>" + 
	      "    <div data-role=none align=center style='width: 50%; text-decoration: none; border-bottom:1px dashed;'" +
              "            onclick=\"" + 
                            " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                            " $('form#form10x').attr('action','#" + back_url + "');" +
                            " dbform_fill0_quick(document.form10x,'" + k0 + "');" +
                            " dbform_fill0_other(document.form11x,'" + k0 + "');" +
                            " $.mobile.changePage('#page-quickmenu');" + 
                           "\"><c>+</c></div>\n" +
              "  </td>" + 
              " </tr>" + 
              " </table>\n" +
              "</td>\n" +
              "</tr>\n" +
	      "<tr>" + 
              "<td style=\"border-color:#a0a0a0;\" valign=top colspan=2>" + 
              "<div id=h" + k + ">" +
              day_info + 
              "</div>" +
              "</td>" + 
              "</tr></table></td>\n" ;

         firstday.addDays(-2) ;
      }
      u += "</tr></table>\n" ;

      return u ;
  }

  function daytag_table_horizontal ( year, month, vector_details, target_names, target_tags, back_url )
  {
	v  = "<center>" ;
	v += "<table cellpadding=0 cellspacing=0 border=1 style='border-collapse: collapse; line-height: 18px;'>" ;

	// header
	v += "<tr>" ;
	v += "<td>&nbsp;</td>" ;
	for (i in vector_details) 
        {
             if ("basaldef" == i) continue ;

	     dt = new XDate(i) ;
	     dc = " <div data-role=popup  id=dc" + dt.getDate() + " data-corners=false >" + 
		  daytag_show_days(year, month, dt.getDate(), 1, vector_details, back_url) +
		  "  <a href=# data-rel=back data-role=button data-theme=a data-icon=delete " + 
		  "            data-iconpos=notext class=ui-btn-left>Close</a>" +
		  " </div>" ;
	     v += "<td align=center style=\"line-height: 24px;\">" + 
			      "<a href=#dc" + dt.getDate() + " data-rel=popup style='text-decoration: none'>" + 
			      "<font color=gray>" + dt.getDate() + "</font>" +
			      "</a>" + dc + "</td>" ;
	}
	v += "</tr>" ;

	// data
	for (j=0; j<target_names.length; j++) 
	{
	     v += "<tr>" ;
	     v += "<td align=center><c><font color=gray>" + target_names[j] + "</font></c></td>" ;
	     for (i in vector_details)
	     {
                  if ("basaldef" == i) continue ;

		  o = daytag_details(month, year, vector_details[i], target_tags[j], i, ls1.newday_hour, 24, back_url) ;
		  if (o.empty == 1) 
		  {
		      dt = new XDate(i) ;
		      dt.addDays(1) ;
		      ii = dt.toString("yyyy-MM-dd") ;

		      if (vector_details[ii])
			  o = daytag_details(month, year, vector_details[ii], target_tags[j], i, 0,ls1.newday_hour, back_url);
		  }

		  v += "<td>" ;
		  v += o.str ;
		  v += "</td>" ;
	     }
	     v += "</tr>" ;
	}

	v += "</table>" ;
	v += "</center>" ;

        return v ;
  }

  function daytag_table_vertical ( year, month, vector_details, target_names, target_tags, back_url )
  {
	v  = "<center>" ;
	v += "<table cellpadding=0 cellspacing=0 border=1 style='border-collapse: collapse; line-height: 18px;'>" ;

	// header
	v += "<tr>" ;
	v += "<td>&nbsp;</td>" ;
	for (j=0; j<target_names.length; j++) {
	     v += "<td align=center><c><font color=gray>" + target_names[j] + "</font></c></td>" ;
	}
	v += "</tr>" ;

	// data
	for (i in vector_details)
	{
             if ("basaldef" == i) continue ;

	     dt = new XDate(i) ;
	     dc = " <div data-role=popup  id=dc" + dt.getDate() + ">" + 
		  daytag_show_days(year, month, dt.getDate(), 1, vector_details, back_url) +
		  "  <a href=# data-rel=back data-role=button data-theme=a data-icon=delete " + 
		  "            data-iconpos=notext class=ui-btn-left>Close</a>" +
		  " </div>" ;

	     v += "<tr>" ;
	     v += "<td align=center style=\"line-height: 24px;\">" + 
			      "<a href=#dc" + dt.getDate() + " data-rel=popup style='text-decoration: none'>" + 
			      "<font color=gray>" + dt.getDate() + "</font>" +
			      "</a>" + dc + "</td>" ;
	     for (j=0; j<target_names.length; j++) 
	     {
		  o = daytag_details(month, year, vector_details[i], target_tags[j], i, ls1.newday_hour,24, back_url) ;
		  if (o.empty == 1) 
		  {
		      dt = new XDate(i) ;
		      dt.addDays(1) ;
		      ii = dt.toString("yyyy-MM-dd") ;

		      if (vector_details[ii])
			  o = daytag_details(month, year, vector_details[ii], target_tags[j], i, 0,ls1.newday_hour, back_url);
		  }

		  v += "<td>" ;
		  v += o.str ;
		  v += "</td>" ;
	     }
	     v += "</tr>" ;
	}

	v += "</table>" ;
	v += "</center>" ;

        return v ;
  }

  function daytag_table_compact ( vector_details, target_names, target_tags, back_url )
  {
	o = "<table cellpadding=2 cellspacing=2 border=1 style='border-collapse: collapse; line-height: 22px;'>" ;

	o += "<tr><td rowspan=2>&nbsp;</td>" ;
	for (j=0; j<target_names.length; j++) 
	     o += "<td align=center colspan=3><c>" + target_names[j] + "</c></td>" ;
	o += "</tr>" ;

	o += "<tr>" ;
	for (j=0; j<target_names.length; j++) 
	     o += "<td align=center><c>Gluc.</c></td>" + 
		  "<td align=center><c>Rac.</c></td>" + 
		  "<td align=center><c>Bolo</c></td>" ;
	o += "</tr>" ;

        color = "white";
	for (i in vector_details)
	{
                if ("basaldef" == i) continue ;

		dt = new XDate(i) ;
		ih = dt.getDate() ;
		dt.addDays(1) ;
		ii = dt.toString("yyyy-MM-dd") ;

                if ("#F0F0F0" == color)
                     color = "white";
                else color = "#F0F0F0";

		o += "<tr bgcolor=" + color + "><td align=center>" + ih + "</td>" ;
		for (j=0; j<target_tags.length; j++) 
		{
		     k = daytag_details_name(vector_details[i],target_tags[j],ls1.newday_hour,24,back_url) ;
		     if (k.empty == 1) 
			 if (vector_details[ii])
			     k = daytag_details_name(vector_details[ii],target_tags[j],0,ls1.newday_hour,back_url) ;

		     o += "<td align=center>" + k.GU + "</td>" +
			  "<td align=center>" + k.MU + "</td>" +
			  "<td align=center>" + k.BU + "</td>" ;
		}
		o += "</tr>" ;
	}
	o += "</table>" ;

	return o ;
  }


