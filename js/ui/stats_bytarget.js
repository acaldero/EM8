
	function stats_bytarget_draw () 
        {
	        var chart1;
	        var chart2;
	        var chart3;

                var dat_bbyt;
                var dat_mbyt;
                var dat_gbyt;

                // 1.- get options
		options1 = {
		    chart: {
			renderTo: 'container4',
			type: 'column'
		    },
		    title: {
			text: 'Bolus'
		    },
		    xAxis: {
			categories: [
			    'ADE',
			    'DDE',
			    'ACO',
			    'DCO',
			    'AME',
			    'DME',
			    'ACE',
			    'DCE',
			    'MN'
			]
		    },
		    yAxis: {
			min: 0,
			title: {
			    text: 'Insulina (unidades)'
			}
		    },
		    legend: {
			layout: 'vertical',
			backgroundColor: '#FFFFFF',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 25,
			floating: true,
			shadow: true
		    },
		    tooltip: {
			formatter: function() {
			    return ''+
				this.x +': '+ this.y +' (mg/dL)';
			}
		    },
		    plotOptions: {
			column: {
			    pointPadding: 0.2,
			    borderWidth: 0
			}
		    },
		};

		options2 = {
		    chart: {
			renderTo: 'container6',
			type: 'column'
		    },
		    title: {
			text: 'Comidas'
		    },
		    xAxis: {
			categories: [
			    'ADE',
			    'DDE',
			    'ACO',
			    'DCO',
			    'AME',
			    'DME',
			    'ACE',
			    'DCE',
			    'MN'
			]
		    },
		    yAxis: {
			min: 0,
			title: {
			    text: 'Raciones (10 gr ch.)'
			}
		    },
		    legend: {
			layout: 'vertical',
			backgroundColor: '#FFFFFF',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 25,
			floating: true,
			shadow: true
		    },
		    tooltip: {
			formatter: function() {
			    return ''+
				this.x +': '+ this.y +' (mg/dL)';
			}
		    },
		    plotOptions: {
			column: {
			    pointPadding: 0.2,
			    borderWidth: 0
			}
		    },
		};

		options3 = {
		    chart: {
			renderTo: 'container8',
			type: 'column'
		    },
		    title: {
			text: 'Mediciones'
		    },
		    xAxis: {
			categories: [
			    'ADE',
			    'DDE',
			    'ACO',
			    'DCO',
			    'AME',
			    'DME',
			    'ACE',
			    'DCE',
			    'MN'
			]
		    },
		    yAxis: {
			min: 0,
			title: {
			    text: 'Glucosa en sangre (mg/dL)'
			}
		    },
		    legend: {
			layout: 'vertical',
			backgroundColor: '#FFFFFF',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 25,
			floating: true,
			shadow: true
		    },
		    tooltip: {
			formatter: function() {
			    return ''+
				this.x +': '+ this.y +' (mg/dL)';
			}
		    },
		    plotOptions: {
			column: {
			    pointPadding: 0.2,
			    borderWidth: 0
			}
		    },
		};


                // 2.- get data
		dat_bbyt = "[ " ;
		dat_mbyt = "[ " ;
		dat_gbyt = "[ " ;
                for (i in vector_details)
                {
                   dt = new XDate(i) ;
                   dt.addDays(1) ;
                   ii = dt.toString("yyyy-MM-dd") ;

		   dat_bbyt += "{ name: '" + dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate() + "', data: [ " ;
		   dat_mbyt += "{ name: '" + dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate() + "', data: [ " ;
		   dat_gbyt += "{ name: '" + dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate() + "', data: [ " ;
		   for (j=0; j<target_tags.length; j++)
		   {
			k = daytag_details_name(vector_details[i],target_tags[j],ls1.newday_hour,24) ;
			if (k.empty == 1) 
			    if (vector_details[ii])
				k = daytag_details_name(vector_details[ii],target_tags[j],0,ls1.newday_hour) ;

		       if (k.BU > 0)
			    dat_bbyt += k.BU ;
		       else dat_bbyt += "0" ;

		       if (k.MU > 0)
			    dat_mbyt += k.MU ;
		       else dat_mbyt += "0" ;

		       if (k.GU > 0)
			    dat_gbyt += k.GU ;
		       else dat_gbyt += "0" ;

		       if (j != (target_tags.length-1)) {
			   dat_bbyt += ", " ;
			   dat_mbyt += ", " ;
			   dat_gbyt += ", " ;
                       }
		   }
		   dat_bbyt += "] }" ;
		   dat_mbyt += "] }" ;
		   dat_gbyt += "] }" ;

		   dat_bbyt += ",\n " ;
		   dat_mbyt += ",\n " ;
		   dat_gbyt += ",\n " ;
		}
		dat_bbyt += " ];" ;
		dat_mbyt += " ];" ;
		dat_gbyt += " ];" ;


                // 3.- building the chart
                options1.series = eval(dat_bbyt) ;
		chart1 = new Highcharts.Chart(options1);

                options2.series = eval(dat_mbyt) ;
		chart2 = new Highcharts.Chart(options2);

                options3.series = eval(dat_gbyt) ;
		chart3 = new Highcharts.Chart(options3);
        }

