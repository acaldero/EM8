
  function db_csv2db ( dbinfo, csv, ok_handler )
  {
        Q = new Array() ;

        try       { fields = $.csv.toArrays(csv, { delimiter:'"', separator:';' }) ; } 
        catch (e) { return -1; }

        for (i=0; i<fields.length; i++)
        {
           switch (fields[i][4])
           {
              case "bolus":
			values_bolus = new Array();
			values_bolus['id']         = fields[i][11] ;
			values_bolus['name']       = fields[i][5] ;
			values_bolus['type']       = fields[i][9] ;
			values_bolus['units']      = fields[i][8] ;
			values_bolus['percentage'] = fields[i][10] ;
			values_bolus['start']      = fields[i][6] ;
			values_bolus['stop']       = fields[i][7] ;
			values_bolus['user']       = fields[i][1] ;
			values_bolus['sync']       = fields[i][12] ;
			values_bolus['device']     = fields[i][13] ;

                        if (0 == values_bolus['units'])
                             Q.push(db_asocArray2delete("bolus",values_bolus,Array('id','device','user'))) ;
                        else Q.push(db_asocArray2insertorupdate(dbinfo,"bolus",values_bolus,Array('id'))) ;
                   break;

              case "meal":
			values_meal = new Array();
			values_meal['id']          = fields[i][11] ;
			values_meal['name']        = fields[i][5] ;
			values_meal['tag']         = fields[i][9] ;
			values_meal['measure']     = fields[i][8] ;
			values_meal['start']       = fields[i][6] ;
			values_meal['stop']        = fields[i][7] ;
			values_meal['user']        = fields[i][1] ;
			values_meal['image']       = fields[i][10] ;
			values_meal['sync']        = fields[i][12] ;
			values_meal['device']      = fields[i][13] ;

                        if (0 == values_meal['measure'])
                             Q.push(db_asocArray2delete("meals",values_meal,Array('id','device','user'))) ;
                        else Q.push(db_asocArray2insertorupdate(dbinfo,"meals",values_meal,Array('id'))) ;
                   break;

              case "measure":
			values_measure = new Array();
			values_measure['id']       = fields[i][9] ;
			values_measure['name']     = fields[i][5] ;
			values_measure['measure']  = fields[i][8] ;
			values_measure['start']    = fields[i][6] ;
			values_measure['stop']     = fields[i][7] ;
			values_measure['user']     = fields[i][1] ;
			values_measure['sync']     = fields[i][10] ;
			values_measure['device']   = fields[i][11] ;

                        if (0 == values_measure['measure'])
                             Q.push(db_asocArray2delete("measures",values_measure,Array('id','device','user'))) ;
                        else Q.push(db_asocArray2insertorupdate(dbinfo,"measures",values_measure,Array('id'))) ;
                   break;

              case "event":
			values_other = new Array();
			values_other['id']         = fields[i][11] ;
			values_other['name']       = fields[i][5] ;
			values_other['event']      = fields[i][9] ;
			values_other['type']       = fields[i][10] ;
			values_other['measure']    = fields[i][8] ;
			values_other['start']      = fields[i][6] ;
			values_other['stop']       = fields[i][7] ;
			values_other['user']       = fields[i][1] ;
			values_other['image']      = fields[i][12] ;
			values_other['sync']       = fields[i][13] ;
			values_other['device']     = fields[i][14] ;

                        if ("" == values_other['event'])
                             Q.push(db_asocArray2delete("events",values_other,Array('id','device','user'))) ;
                        else Q.push(db_asocArray2insertorupdate(dbinfo,"events",values_other,Array('id'))) ;
                   break;

              case "basalact":
			values_basal_activation = new Array();
			values_basal_activation['id']         = fields[i][10] ;
			values_basal_activation['pattern']    = fields[i][5] ;
			values_basal_activation['neltos']     = fields[i][6] ;
			values_basal_activation['segments']   = fields[i][7].replace(/'/g,'"') ;
			values_basal_activation['percentage'] = fields[i][8] ;
			values_basal_activation['start']      = fields[i][9] ;
			values_basal_activation['user']       = fields[i][1] ;
			values_basal_activation['sync']       = fields[i][11] ;
			values_basal_activation['device']     = fields[i][12] ;

                        if ("" == values_basal_activation['pattern'])
                             Q.push(db_asocArray2delete("basal_activations",values_basal_activation,Array('id','device','user'))) ;
                        else Q.push(db_asocArray2insertorupdate(dbinfo,"basal_activations",values_basal_activation,Array('id'))) ;
                   break;

              case "basaldef":
			values_basal_definition = new Array();
			values_basal_definition['id']         = fields[i][8] ;
			values_basal_definition['pattern']    = fields[i][5] ;
			values_basal_definition['neltos']     = fields[i][6] ;
			values_basal_definition['segments']   = fields[i][7].replace(/'/g,'"') ;
			values_basal_definition['user']       = fields[i][1] ;
			values_basal_definition['sync']       = fields[i][9] ;
			values_basal_definition['device']     = fields[i][10] ;

                        if (0 == values_basal_definition['neltos'])
                             Q.push(db_asocArray2delete("basal_definitions",values_basal_definition,Array('id','device','user'))) ;
                        else Q.push(db_asocArray2insertorupdate(dbinfo,"basal_definitions",values_basal_definition,Array('id'))) ;
                   break;
           }
        }

	if (Q.length != 0)
	    db_execute(dbinfo, Q, ok_handler);
  }

  function db_csv2img_arr ( csv )
  {
        img_arr = new Array() ;

        try       { fields = $.csv.toArrays(csv, { delimiter:'"', separator:';' }) ; } 
        catch (e) { return -1; }

        for (i=0; i<fields.length; i++)
        {
           switch (fields[i][4])
           {
              case "meal":
                        if (fields[i][10] != '')
                            if (-1 == img_arr.indexOf(fields[i][10]))
                                img_arr.push(fields[i][10]);
                   break;

              case "event":
                        if (fields[i][12] != '')
                            if (-1 == img_arr.indexOf(fields[i][12]))
                                img_arr.push(fields[i][12]);
                   break;
           }
        }

        return img_arr ;
  }

