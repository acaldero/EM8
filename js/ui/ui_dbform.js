
  /*
   *  Fill next
   */

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

	function dbform_knobIt ( shadow, vnow, vmin, vmax, vstep )
	{
	      var obj = $("#x11a");

	      if ('true' != obj.attr('isKnob')) {
		  obj.knob();
		  obj.attr('isKnob','true') ;
	      }

	      obj.trigger("configure",{"min": vmin, "max": vmax, "step": vstep, "skin": "tron"});
	      obj.val(vnow).change();

	      fillback = shadow;
	      $("#popupx11a").popup("open");
	}

	function dbform_camera_success ( form_img_name, big_img_name, small_img_name, imageURI )
	{
		// console.log('imageURI: ' + imageURI);

                if ("" != form_img_name) {
		    var image = document.querySelector(form_img_name) ;
                    if (null != image)
		        image.value = imageURI;
                }

		var image = document.getElementById(big_img_name);
                if (null != image)
		    image.src = imageURI;

		var image = document.getElementById(small_img_name);
                if (null != image)
		    image.src = imageURI;
	}


  /*
   * Basal
   */

  function dbform_fill_segments ( segs, segments_short, segments_help )
  {
	var res = new Object() ;

	res.short_v = "" ;
	res.long_v = "" ;

	for (i=0; i<segs.length-1; i++) 
	{
	     res.short_v += segs[i].c + " | " ;
	     res.long_v  += "<tr>" + 
			  "<td align=left><font color=gray>" + (i+1) + "&nbsp;&nbsp;</font></td>" +
			  "<td>" + segs[i].h + "</td>" +
			  "<td>&#8592;</td>" + 
			  "<td>" + segs[i].c + "</td>" + 
			  "<td>&#8594;</td>" + 
			  "<td>" + segs[i+1].h + "</td>" + 
			  "</tr>";
	}

	res.long_v = "<table border=0>" + res.long_v + "</table>" ;

	return res;
  }

  function ui_basal_fillselect ( vector_details, select_name, pattern )
  {
           var o_options = "<OPTION value=\"\"></OPTION>";

           var last = 0;
           if (typeof vector_details['basaldef'] !== 'undefined')
               last = vector_details['basaldef'].length;

           for(var i=0; i<last; i++)
           {
                var result_pattern = vector_details['basaldef'][i]['pattern'] ;
                var result_id      = vector_details['basaldef'][i]['id'] ;
                if (result_pattern == pattern)
                     o_options += "<option value=\"" + result_id + "\" SELECTED>" + result_pattern + "</OPTION>";
                else o_options += "<option value=\"" + result_id + "\">"          + result_pattern + "</OPTION>";
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
	     "<td align=center width=50%><small><b>" + T['END']   + "</b></small></td>" +
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

