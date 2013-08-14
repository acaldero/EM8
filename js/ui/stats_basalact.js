
	function stats_basalact_getDefinition () 
        {
                // 1.- get options
		var options1 = {
		    chart: {
                        renderTo: 'container1',
			type: 'bar'
		    },
		    title: {
			text: 'Basals act.'
		    },
		    xAxis: {
			categories: ['Month']
		    },
		    yAxis: {
			title: {
			    text: 'Basal'
			},
			min: 0
		    },
		    legend: {
			backgroundColor: '#FFFFFF',
			reversed: true
		    },
		    plotOptions: {
			series: {
			    stacking: 'normal'
			}
		    }
		};


                // 2.- get data
		options1.series = new Array() ;
                for (i=0; i<vector_details['basalact'].length; i++)
		{
                    var data1 = new Object() ;
                    data1.name = vector_details['basalact'][i].pattern ;
                    data1.data = new Array() ;

                    d1 = new XDate(vector_details['basalact'][i].start) ;
                    if ((i+1) == vector_details['basalact'].length)
                         d2 = new XDate() ;
                    else d2 = new XDate(vector_details['basalact'][i+1].start) ;

                    var h = Number(d1.diffHours(d2).toFixed(1)) ;
                    data1.data.push(h) ;

		    options1.series.push(data1) ;
		}


                // 3.- building the chart
                return options1 ;
        }

