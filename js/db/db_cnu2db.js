
  function db_cnu2db_convert ( line )
  {
        // Fecha,Hora,Glucemia (mg/dL),Método de referencia,En ayunas,Antes de comer,Después de comer,Registro,Eliminada,Control,Manual,A1c %,A1c mmol/mol,Insulina,Tipo de insulina,Gramos de hidratos de carbono,Raciones de hidratos de carbono,Intercambios de hidratos de carbono,comentario
        // 04/02/2013,10:06:00,123.0,plasma,0,0,0,0,0,0,0,,,,,,,,"

            var lino = new Object() ;

	    hour_line = parseInt(line[1].slice(0,2));
	    min_line  = parseInt(line[1].slice(3,5));

            dt = new XDate(line[0]) ;
            dt.setHours(hour_line) ;
            dt.setMinutes(min_line) ;

            lino['date']  = dt.toString("yyyy-MM-dd") ;
            lino['time']  = dt.toString("HH:mm") ; 
            lino['start'] = dt.toString("yyyy-MM-dd HH:mm:ss") ; 
            lino['start'] = lino['start'].substr(0,10) + 'T' + lino['start'].substr(11) + 'Z' ; 

	    lino['measure'] = parseInt("0" + line[2]) ;
	    lino['units']   = parseInt("0" + line[13]) ;

	    racion_gr = parseInt("0" + line[15]) ;
	    racion_r  = parseInt("0" + line[16]) ;
	    racion_i  = parseInt("0" + line[17]) ;

            lino['ration'] = racion_r ;
	    if (racion_gr != 0)
	        lino['ration'] = racion_gr / 10 ;
	    if (racion_i != 0)
	        lino['ration'] = racion_i ;

            lino['name'] = "" ;
	    if (line[6] != "0")
                lino['name'] = "D"
	    if (line[5] != "0")
                lino['name'] = "A"
	    if ((line[6] != "0") || (line[5] != "0"))
                lino['name'] = lino['name'] + Math.floor(hour_line / 6) ;
	    if (line[4] != "0")
                lino['name'] = "A0"

            return lino ;
  }

  function db_cnu2db ( dbinfo, csv, user_id, device_id, ok_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

        Q = new Array() ;

        try       { fields = $.csv.toArrays(csv, { delimiter:',' }) ; } 
        catch (e) { return -1; }

        for (i=1; i<fields.length; i++)
        {
           if (fields[i].length != 19)
               continue;

           var lino = db_cnu2db_convert(fields[i]) ;

	   if (lino['units'] != 0)
           {
			values_bolus = new Array();
			values_bolus['id']         = 0 ;
			values_bolus['name']       = lino['name'] ;
			values_bolus['type']       = "normal" ;
			values_bolus['units']      = lino['units'] ;
			values_bolus['percentage'] = 100 ;
			values_bolus['start']      = lino['start'] ;
			values_bolus['stop']       = lino['start'] ;
			values_bolus['user']       = user_id ;
			values_bolus['sync']       = dt0 ;
			values_bolus['device']     = device_id ;

		        Q.push(db_asocArray2insertorupdate(dbinfo,"bolus",values_bolus,Array('id','device'))) ;
            }

	    if (lino['ration'] != 0)
            {
			values_meal = new Array();
			values_meal['id']          = 0 ;
			values_meal['name']        = lino['name'] ;
			values_meal['tag']         = "" ;
			values_meal['measure']     = lino['ration'] ;
			values_meal['start']       = lino['start'] ;
			values_meal['stop']        = lino['start'] ;
			values_meal['user']        = user_id ;
			values_meal['image']       = "" ;
			values_meal['sync']        = dt0 ;
			values_meal['device']      = device_id ;

		        Q.push(db_asocArray2insertorupdate(dbinfo,"meals",values_meal,Array('id','device'))) ;
            }

	    if (lino['measure'] != 0)
            {
			values_measure = new Array();
			values_measure['id']       = 0 ;
			values_measure['name']     = lino['name'] ;
			values_measure['measure']  = lino['measure'] ;
			values_measure['start']    = lino['start'] ;
			values_measure['stop']     = lino['start'] ;
			values_measure['user']     = user_id ;
			values_measure['sync']     = dt0 ;
			values_measure['device']   = device_id ;

		        Q.push(db_asocArray2insertorupdate(dbinfo,"measures",values_measure,Array('id','device'))) ;
            }
        }

	if (Q.length != 0)
	    db_execute(dbinfo, Q, ok_handler) ;
  }

