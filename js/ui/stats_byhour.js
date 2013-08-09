
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
			    '00',
			    '01',
			    '02',
			    '03',
			    '04',
			    '05',
			    '06',
			    '07',
			    '08',
			    '09',
			    '10',
			    '11',
			    '12',
			    '13',
			    '14',
			    '15',
			    '16',
			    '17',
			    '18',
			    '19',
			    '20',
			    '21',
			    '22',
			    '23'
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
			    '00',
			    '01',
			    '02',
			    '03',
			    '04',
			    '05',
			    '06',
			    '07',
			    '08',
			    '09',
			    '10',
			    '11',
			    '12',
			    '13',
			    '14',
			    '15',
			    '16',
			    '17',
			    '18',
			    '19',
			    '20',
			    '21',
			    '22',
			    '23'
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
			    '00',
			    '01',
			    '02',
			    '03',
			    '04',
			    '05',
			    '06',
			    '07',
			    '08',
			    '09',
			    '10',
			    '11',
			    '12',
			    '13',
			    '14',
			    '15',
			    '16',
			    '17',
			    '18',
			    '19',
			    '20',
			    '21',
			    '22',
			    '23'
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
		options1.series = new Array() ;
		options2.series = new Array() ;
		options3.series = new Array() ;

                for (i in vector_details)
		{
                   if ("basaldef" == i) continue;
                   if ("basalact" == i) continue;

                   data1 = new Array() ;
                   data2 = new Array() ;
                   data3 = new Array() ;

                   data1.name = data2.name = data3.name = i ;

                   data1.data = new Array() ;
                   data2.data = new Array() ;
                   data3.data = new Array() ;

		   for (k=0; k<24; k++) {
                        data1.data[k] = data2.data[k] = data3.data[k] = 0 ;
                   }

                   for (j in vector_details[i])
		   {
		       k = parseInt(j.match(/(\d+)/g)[0]); 
		       if (vector_details[i][j]['bolus'])
			    data1.data[k] += parseInt(vector_details[i][j]['bolus']['units']) ;
		       if (vector_details[i][j]['meal'])
			    data2.data[k] += parseInt(vector_details[i][j]['meal']['measure']) ;
		       if (vector_details[i][j]['measure'])
			    data3.data[k]  = parseInt(vector_details[i][j]['measure']['measure']) ;
		   }

		   options1.series.push(data1) ;
		   options2.series.push(data2) ;
		   options3.series.push(data3) ;
		}


                // 3.- building the chart
		chart1 = new Highcharts.Chart(options1);
		chart2 = new Highcharts.Chart(options2);
		chart3 = new Highcharts.Chart(options3);
        }

