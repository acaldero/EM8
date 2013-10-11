
	function stats_avg_getinfo ( ndays ) 
        {
                var avgs;

                // 1.- initial values
		avgs = new Array() ;

                avgs['bolus']    = new Array() ;
                avgs['meals']    = new Array() ;
                avgs['measures'] = new Array() ;
                for (j=0; j<target_tags.length; j++)
                {
		     avgs['bolus'][j] = new Array() ;
		     avgs['bolus'][j]['acc']    = 0 ;
		     avgs['bolus'][j]['n']    = 0 ;

		     avgs['meals'][j] = new Array() ;
		     avgs['meals'][j]['acc']    = 0 ;
		     avgs['meals'][j]['n']    = 0 ;

		     avgs['measures'][j] = new Array() ;
		     avgs['measures'][j]['acc'] = 0 ;
		     avgs['measures'][j]['n'] = 0 ;
                }

                // 2.- get data
                nt = new XDate() ;
                dt = new XDate(ls1.year, ls1.month-1, ls1.today) ;
                if (ls1.month != (nt.getMonth()+1))
                    dt = new XDate(ls1.year, ls1.month-1, XDate.getDaysInMonth(ls1.year, ls1.month-1)) ;

                s2 = dt.toString("yyyy-MM-dd") ;
                for (i=0; i<ndays; i++)
                {
                   dt.addDays(-1) ;
                   s1 = dt.toString("yyyy-MM-dd") ;

                   for (j=0; j<target_tags.length; j++)
                   {
			k = daytag_details_name(vector_details[s1],target_tags[j],ls1.newday_hour,24) ;
			if (k.empty == 1) 
			    if (vector_details[s2])
				k = daytag_details_name(vector_details[s2],target_tags[j],0,ls1.newday_hour) ;

		        if (k.BU > 0) {
			     avgs['bolus'][j]['acc'] += parseInt(k.BU) ;
			     avgs['bolus'][j]['n'] += parseInt(1) ;
                        }

		        if (k.MU > 0) {
			     avgs['meals'][j]['acc'] += parseInt(k.MU) ;
			     avgs['meals'][j]['n'] += parseInt(1) ;
                        }

		        if (k.GU > 0) {
			     avgs['measures'][j]['acc'] += parseInt(k.GU) ;
			     avgs['measures'][j]['n'] += parseInt(1) ;
                        }
                   }

                   s2 = s1 ;
                }

                // 3.- get data
                return avgs ;
        }

	function stats_avg_get ( ndays ) 
        {
            var avgs;
            var htmlo;

	    avgs  = stats_avg_getinfo(ndays) ;
            td_style = " style='border-width: 1px; padding: 4px; border-style: inset; border-color: lightgray; -moz-border-radius:;' ";

            htmlo = "<font size=+0>" + 
         "<table style='border-width: 1px; border-spacing: 2px; border-style: hidden; border-color: gray; border-collapse: collapse;'>" ;


                htmlo += "<tr>" ;
                htmlo += "<td align=center><font color=navy><b>" + ndays + "</b><br><font size=-1><b>days</b></font></font></td>" ;
                htmlo += "<td align=center " + td_style + "><img height=40 src='icons/injection2.png'></td>" ;
                htmlo += "<td align=center " + td_style + "><img height=35 src='icons/meals2.jpg'></td>" ;
                htmlo += "<td align=center " + td_style + "><img height=40 src='icons/measurement2.png'></td>" ;
                htmlo += "</tr>" ;

                for (j=0; j<target_tags.length; j=j+2) 
                {
			htmlo += "<tr>" ;

                        // target's name
                        htmlo += "<td align=center " + td_style + ">" ;
                        if (j+1 < target_tags.length)
                             htmlo += target_names[j] + "/" + target_names[j+1] ;
                        else htmlo += target_names[j] ;
                        htmlo += "</td>" ;

                        // bolus
			htmlo += "<td align=center " + td_style + ">" ;
			     if (avgs['bolus'][j]['n'] != 0) 
				  htmlo += Math.floor(avgs['bolus'][j]['acc'] / avgs['bolus'][j]['n']) ;
			     else htmlo += "<font color=lightgray>&nbsp;.&nbsp;.&nbsp;.</font>" ; 
			     if (j+1 < target_tags.length) {
				  htmlo += "&nbsp;/&nbsp;" ;
				  if (avgs['bolus'][j+1]['n'] != 0)
				       htmlo += Math.floor(avgs['bolus'][j+1]['acc'] / avgs['bolus'][j+1]['n']) ;
			          else htmlo += "<font color=lightgray>.&nbsp;.&nbsp;.</font>" ; 
			     }
			htmlo += "</td>" ;

                        // meals
			htmlo += "<td align=center " + td_style + ">" ;
			     if (avgs['meals'][j]['n'] != 0)
				  htmlo += Math.floor(avgs['meals'][j]['acc'] / avgs['meals'][j]['n']) ;
			     else htmlo += "<font color=lightgray>&nbsp;.&nbsp;.&nbsp;.</font>" ; 
			     if (j+1 < target_tags.length) {
				  htmlo += "&nbsp;/&nbsp;" ;
				  if (avgs['meals'][j+1]['n'] != 0)
				       htmlo += Math.floor(avgs['meals'][j+1]['acc'] / avgs['meals'][j+1]['n']) ;
			          else htmlo += "<font color=lightgray>.&nbsp;.&nbsp;.</font>" ; 
			     }
			htmlo += "</td>" ;

                        // measures
			htmlo += "<td align=center " + td_style + ">" ;
			     if (avgs['measures'][j]['n'] != 0)
				  htmlo += Math.floor(avgs['measures'][j]['acc'] / avgs['measures'][j]['n']) ;
			     else htmlo += "<font color=lightgray>&nbsp;.&nbsp;.&nbsp;.</font>" ; 
			     if (j+1 < target_tags.length) {
				  htmlo += "&nbsp;/&nbsp;" ;
				  if (avgs['measures'][j+1]['n'] != 0)
				       htmlo += Math.floor(avgs['measures'][j+1]['acc'] / avgs['measures'][j+1]['n']) ;
			          else htmlo += "<font color=lightgray>.&nbsp;.&nbsp;.</font>" ; 
			     }
			htmlo += "</td>" ;

			htmlo += "</tr>" ;
                }


                htmlo += "</table></font>" ;

                return htmlo ;
        }

