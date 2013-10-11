
	function stats_basaldef_getDefinition () 
        {
                // 1.- get options
		var options1 = {
		    chart: {
                        renderTo: 'container0',
			type: 'spline'
		    },
		    title: {
			text: 'Defined Basals'
		    },
		    xAxis: {
			type: 'datetime'
		    },
		    yAxis: {
			title: {
			    text: 'Insulin (U/hour)'
			},
			min: 0
		    },
		    tooltip: {
			formatter: function() {
				return '<b>'+ this.series.name +'</b><br/>'+
				Highcharts.dateFormat('%H:%M', this.x) +': '+ this.y +' U/h';
			}
		    },
		    plotOptions: {
                        series: {
                            animation: true
                        }
		    }
		};

                // 2.- get data
		options1.series = new Array() ;
                for (i in vector_details['basaldef'])
		{
                    var wbasal = vector_details['basaldef'][i];

                    var data1 = new Object() ;
                    data1.name = wbasal.pattern ;
                    data1.data = new Array() ;

                    var wsegs = JSON.parse(wbasal.segments);
                    for (j=0; j<wsegs.length-1; j++)
                    {
                         var wh = parseInt(wsegs[j].h.slice(0,2), 10);
                         var wm = parseInt(wsegs[j].h.slice(3,5), 10);
 			 var wc = parseFloat(wsegs[j].c);
                         var data_seg = new Array(Date.UTC(ls1.year, ls1.month-1, 1, wh, wm), wc) ;
                         data1.data.push(data_seg) ;

                         if (j+1 < wsegs.length) 
                         {
                             var wh = parseInt(wsegs[j+1].h.slice(0,2), 10);
                             var wm = parseInt(wsegs[j+1].h.slice(3,5), 10);
 			     var wc = parseFloat(wsegs[j].c);
                             var data_seg = new Array(Date.UTC(ls1.year, ls1.month-1, 1, wh, wm), wc) ;
                             data1.data.push(data_seg) ;
                         }
		    }

		    options1.series.push(data1) ;
		}

                // 3.- building the chart
                return options1 ;
        }

