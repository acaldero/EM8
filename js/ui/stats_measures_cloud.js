
	function stats_measures_cloud_draw () 
        {
	        var chart;
                var dat_bbyh;

                // 1.- get options
		options = {
		    chart: {
			renderTo: 'containerA',
			type: 'scatter'
		    },
		    title: {
			text: 'Mediciones'
		    },
		    xAxis: {
			categories: [
			    '0-1',
			    '1-2',
			    '2-3',
			    '3-4',
			    '4-5',
			    '5-6',
			    '6-7',
			    '7-8',
			    '8-9',
			    '9-10',
			    '10-11',
			    '11-12',
			    '12-13',
			    '13-14',
			    '14-15',
			    '15-16',
			    '16-17',
			    '17-18',
			    '18-19',
			    '19-20',
			    '20-21',
			    '21-22',
			    '22-23',
			    '23-24'
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
		s1 = "{ \n\t\t\t type: 'spline', \n\t\t\t name: 'low',\n\t\t\t data: [ " ;
		for (j=0; j<23; j++)
		     s1 += "100, " ;
		s1 += "100 ] \n\t\t\t}," ;

		s2 = "{ \n\t\t\t type: 'spline', \n\t\t\t name: 'high',\n\t\t\t data: [ " ;
		for (j=0; j<23; j++)
		     s2 += "200, " ;
		s2 += "200 ] \n\t\t\t}," ;

	        s10 = "" ;
                for (i in vector_details)
		{
                   dat2 = Array() ;
		   for (k=0; k<24; k++)
                        dat2[k] = 0 ;

                   for (j in vector_details[i])
		   {
		       k = parseInt(j.match(/(\d+)/g)[0]);
		       if (vector_details[i][j]['measure'])
			    dat2[k] = parseInt(vector_details[i][j]['measure']['measure']) ;
		   }

		   s10 += "{ name: '" + i + "', data: [ " ;
		   for (k=0; k<24; k++)
		   {
			s10 += dat2[k] ;
			if (j != 23) s10 += ", " ;
		   }
		   s10 += "] }, \n" ;
		}

		dat_bbyh = "[ " + s1 + s2 + s10 + " ];" ;

                // 3.- building the chart
                options.series = eval(dat_bbyh) ;
		chart = new Highcharts.Chart(options);
        }

