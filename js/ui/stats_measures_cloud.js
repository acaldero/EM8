
	function stats_measures_cloud_getDefinition () 
        {
                // 1.- new options
		var options = {
		    chart: {
			renderTo: 'containerA',
			type: 'scatter'
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
/*
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
*/
		    tooltip: {
			formatter: function() {
			    return '<b>'+ this.series.name +'</b><br/>'+
				   this.x + '~' + (parseInt(this.x,10)+1) + ': '+ this.y;
			}
		    },
		    plotOptions: {
			column: {
			    pointPadding: 0.2,
			    borderWidth: 0
                        },
                        series: {
                            animation: true
                        }
		    },
		};


                // 2.- get data
		options.series = new Array() ; 

		data_s1 = new Object() ; 
                data_s1.type = 'spline' ;
                data_s1.name = 'low' ;
                data_s1.data = new Array() ;
		for (j=0; j<24; j++)
                     data_s1.data[j] = 100 ;
                options.series.push(data_s1) ;

		data_s2 = new Object() ; 
                data_s2.type = 'spline' ;
                data_s2.name = 'high' ;
                data_s2.data = new Array() ;
		for (j=0; j<24; j++)
                     data_s2.data[j] = 200 ;
                options.series.push(data_s2) ;

                for (i in vector_details)
		{
                   if ("basaldef" == i) continue ;
                   if ("basalact" == i) continue ;

		   data_s3 = new Object() ; 
                   data_s3.name = i ;
                   data_s3.data = new Array() ;
		   for (k=0; k<24; k++)
                        data_s3.data[k] = null ;

                   var empty = 1;
                   for (j in vector_details[i])
		   {
		       k = parseInt(j.match(/(\d+)/g)[0]);
		       if (vector_details[i][j]['measure']) {
			    data_s3.data[k] = parseInt(vector_details[i][j]['measure']['measure']) ;
			    empty = 0;
                       }
		   }

                   if (0 == empty)
                       options.series.push(data_s3) ;
		}


                // 3.- return chart definition
                return options;
        }

