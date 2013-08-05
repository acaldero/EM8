
	function stats_byhour_draw () 
        {
	        var chart1;
	        var chart2;
	        var chart3;

                var data1;
                var data2;
                var data3;

                // 1.- get options
		options1 = {
		    chart: {
			renderTo: 'container5',
			type: 'column'
		    },
		    title: {
			text: 'Bolus'
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
			renderTo: 'container7',
			type: 'column'
		    },
		    title: {
			text: 'Comida'
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
			renderTo: 'container9',
			type: 'column'
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
		data1 = "[ " ;
		data2 = "[ " ;
		data3 = "[ " ;
                for (i in vector_details)
		{
                   dat1 = Array() ;
                   dat2 = Array() ;
                   dat3 = Array() ;
		   for (k=0; k<24; k++) {
                        dat1[k] = 0 ;
                        dat2[k] = 0 ;
                        dat3[k] = 0 ;
                   }

                   for (j in vector_details[i])
		   {
		       k = parseInt(j.match(/(\d+)/g)[0]); 
		       if (vector_details[i][j]['bolus'])
			    dat1[k] += parseInt(vector_details[i][j]['bolus']['units']) ;
		       if (vector_details[i][j]['meal'])
			    dat2[k] += parseInt(vector_details[i][j]['meal']['measure']) ;
		       if (vector_details[i][j]['measure'])
			    dat3[k]  = parseInt(vector_details[i][j]['measure']['measure']) ;
		   }

		   data1 += "{ name: '" + i + "', data: [ " ;
		   data2 += "{ name: '" + i + "', data: [ " ;
		   data3 += "{ name: '" + i + "', data: [ " ;
		   for (k=0; k<24; k++)
		   {
			data1 += dat1[k] ;
			data2 += dat2[k] ;
			data3 += dat3[k] ;

			if (j != 23) {
                            data1 += ", " ;
			    data2 += ", " ;
			    data3 += ", " ;
                        }
		   }
		   data1 += "] }, \n" ;
		   data2 += "] }, \n" ;
		   data3 += "] }, \n" ;
		}
		data1 += " ];" ;
		data2 += " ];" ;
		data3 += " ];" ;


                // 3.- building the chart
                options1.series = eval(data1) ;
		chart1 = new Highcharts.Chart(options1);

                options2.series = eval(data2) ;
		chart2 = new Highcharts.Chart(options2);

                options3.series = eval(data3) ;
		chart3 = new Highcharts.Chart(options3);
        }

