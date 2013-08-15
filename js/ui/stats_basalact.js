
        function stats_basalact_toHuman ( hours )
        {
                if (hours < 24)
                    return hours + 'h' ;

                ndays = (parseFloat(hours) / 24.0).toFixed(0) ;
                nhours = (hours - ndays*24).toFixed(1) ;
                return ndays + 'd ' + nhours + 'h' ;
        }

	function stats_basalact_getDefinition () 
        {
                // 1.- get options
		var options1 = {
		    chart: {
                        renderTo: 'container1',
			type: 'bar'
		    },
		    title: {
			text: 'Basal Activations'
		    },
		    xAxis: {
			categories: ['Activation<br>hours']
		    },
		    yAxis: {
			title: {
			    text: ''
			},
			min: 0
		    },
		    legend: {
			backgroundColor: '#FFFFFF',
			reversed: true
		    },
                    tooltip: {
                        formatter: function() {
                            return '<b>'+ this.series.name +'</b><br/>' + stats_basalact_toHuman(this.y);
                        }
                    },
		    plotOptions: {
			series: {
			    stacking: 'normal'
			}
		    }
		};

                if (typeof vector_details['basalact'] === 'undefined')
                    return options1;


                // 2.- get data
                d_now = new XDate();
                d_end = new XDate(ls1.year, ls1.month, XDate.getDaysInMonth(ls1.year, ls1.month));
                if (d_now.getMonth() == ls1.month)
                     d_last = d_end;
                else d_last = d_now ;

		options1.series = new Array() ;
                for (i=0; i<vector_details['basalact'].length; i++)
		{
                    var data1 = new Object() ;
                    data1.name = vector_details['basalact'][i].pattern + ' ' + 
			         vector_details['basalact'][i].percentage + '%' ;
                    data1.data = new Array() ;

                    d1 = new XDate(vector_details['basalact'][i].start) ;
                    if ((i+1) == vector_details['basalact'].length)
                         d2 = d_last ;
                    else d2 = new XDate(vector_details['basalact'][i+1].start) ;

                    var h = Number(d1.diffHours(d2).toFixed(1)) ;
                    data1.data.push(h) ;

		    options1.series.push(data1) ;
		}


                // 3.- building the chart
                return options1 ;
        }

