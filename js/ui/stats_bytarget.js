
	function stats_bytarget_getDefinition () 
        {
                // 1.- get options
		var options1 = {
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
			    return ''+
				this.x +': '+ this.y +' (mg/dL)';
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

		var options2 = {
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
			    return ''+
				this.x +': '+ this.y +' (mg/dL)';
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

		var options3 = {
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
			    return ''+
				this.x +': '+ this.y +' (mg/dL)';
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
		options1.series = new Array() ;
		options2.series = new Array() ;
		options3.series = new Array() ;

                for (i in vector_details)
                {
                   if ("basaldef" == i) continue;
                   if ("basalact" == i) continue;

                   dt = new XDate(i) ;
                   dt.addDays(1) ;
                   ii = dt.toString("yyyy-MM-dd") ;

                   data1 = new Array() ;
                   data2 = new Array() ;
                   data3 = new Array() ;

		   dat_name = dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate();
		   data1.name = data2.name = data3.name = dat_name ;

		   data1.data = new Array() ;
		   data2.data = new Array() ;
		   data3.data = new Array() ;

		   for (j=0; j<target_tags.length; j++)
		   {
                        var kBU = 0 ;
                        var kMU = 0 ;
                        var kGU = 0 ;

			    k1 = daytag_details_name(vector_details[i],target_tags[j],ls1.newday_hour,24) ;
			if (vector_details[ii])
			    k2 = daytag_details_name(vector_details[ii],target_tags[j],0,ls1.newday_hour) ;

		       if (k1.BU > 0) kBU += parseInt(k1.BU) ;
		       if (k2.BU > 0) kBU += parseInt(k2.BU) ;

		       if (k1.MU > 0) kMU += parseInt(k1.MU) ;
		       if (k2.MU > 0) kMU += parseInt(k2.MU) ;

		       if (k1.GU > 0) kGU += parseInt(k1.GU) ;
		       if (k2.GU > 0) kGU += parseInt(k2.GU) ;

		       data1.data.push(kBU) ;
		       data2.data.push(kMU) ;
		       data3.data.push(kGU) ;
		   }

		   options1.series.push(data1) ;
		   options2.series.push(data2) ;
		   options3.series.push(data3) ;
		}


                // 3.- return chart definitions
                var ot1 = new Array();
                ot1.b1 = options1 ;
                ot1.c1 = options2 ;
                ot1.m1 = options3 ;
                return ot1 ;
        }

