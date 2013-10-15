

  function lang_translate ( lang )
  {
        translate = new Array() ;

	lang_es(translate); 
	lang_en(translate); 

        return translate[lang] ;
  }

  function lang_loadtags ()
  {
	$('div.T_AJUSTS').html(T['AJUSTS']); 
	$('div.T_ANNOTATE').html(T['ANNOTATE']); 
	$('div.T_DIARY').html(T['DIARY']); 
	$('div.T_MEASURES').html(T['MEASURES']); 
	$('div.T_BOLUS').html(T['BOLUS']); 
	$('div.T_RATIONS').html(T['RATIONS']); 
	$('div.T_BASALS').html(T['BASALS']); 
	$('div.T_MEAL').html(T['MEAL']); 
	$('div.T_MEASURES_PER_MEAL').html(T['MEASURES_PER_MEAL']);
	$('div.T_MEASURES_PER_HOUR').html(T['MEASURES_PER_HOUR']);
	$('div.T_RANGES_PER_HOUR').html(T['RANGES_PER_HOUR']);
	$('div.T_BOLUS_PER_MEAL').html(T['BOLUS_PER_MEAL']);
	$('div.T_BOLUS_PER_HOUR').html(T['BOLUS_PER_HOUR']);
	$('div.T_RATIONS_PER_MEAL').html(T['RATIONS_PER_MEAL']);
	$('div.T_RATIONS_PER_HOUR').html(T['RATIONS_PER_HOUR']);
	$('div.T_BASALS_TYPES').html(T['BASALS_TYPES']);
	$('div.T_BASALS_ACT').html(T['BASALS_ACT']);
	$('div.T_CONFIG').html(T['CONFIG']);
	$('div.T_CONNECTION').html(T['CONNECTION']);

	$('div.T_CMD').html(T['CMD']);
	$('div.T_MENU').html(T['MENU']);
	$('div.T_VOICE').html(T['VOICE']);
	$('div.T_IDIOM').html(T['IDIOM']);
	$('div.T_IDENTITY').html(T['IDENTITY']);
	$('div.T_REMOTE').html(T['REMOTE']);
	$('div.T_SYNC').html(T['SYNC']);
	$('div.T_BDEFINE').html(T['BDEFINE']);
	$('div.T_BACTIVATE').html(T['BACTIVATE']);
	$('div.T_PATTERN').html(T['PATTERN']);
	$('div.T_PERCENTAGE').html(T['PERCENTAGE']);
	$('div.T_INSTANT').html(T['INSTANT']);
	$('div.T_AMD_HM').html(T['AMD_HM']);
	$('div.T_N_SECTIONS').html(T['N_SECTIONS']);
	$('div.T_ABOUT').html(T['ABOUT']);
	$('div.T_QUICK').html(T['QUICK']);
	$('div.T_SITUATION').html(T['SITUATION']);
	$('div.T_ANTES_COMER_PUNTOS').html(T['ANTES_COMER_PUNTOS']);
	$('div.T_MEASURE2').html(T['MEASURE2']);
	$('div.T_UNITS').html(T['UNITS']);
	$('div.T_END').html(T['END']);
	$('div.T_RATIONS').html(T['RATIONS']);
	$('div.T_DESCRIPTION').html(T['DESCRIPTION']);
	$('div.T_ENSALADA_PUNTOS').html(T['ENSALADA_PUNTOS']);
	$('div.T_IMAGE').html(T['IMAGE']);
	$('div.T_PHOTO').html(T['PHOTO']);
	$('div.T_OTHERS').html(T['OTHERS']);
	$('div.T_EVENT').html(T['EVENT']);
	$('div.T_EJERCICIO_PUNTOS').html(T['EJERCICIO_PUNTOS']);
	$('div.T_TYPES').html(T['TYPES']);
	$('div.T_NADAR_PUNTOS').html(T['NADAR_PUNTOS']);
	$('div.T_INTENSITY').html(T['INTENSITY']);
	$('div.T_AVERAGE').html(T['AVERAGE']);
	$('div.T_BNA').html(T['BNA']);
	$('div.T_DEFINE').html(T['DEFINE']);
	$('div.T_ACTIVATE').html(T['ACTIVATE']);
	$('div.T_STATUS').html(T['STATUS']);
	$('div.T_TOTALPERDAY').html(T['TOTALPERDAY']);
	$('div.T_LOCATION').html(T['LOCATION']);
	$('div.T_EXIT').html(T['EXIT']);
	$('div.T_PERSONAL').html(T['PERSONAL']);
	$('div.T_DEVICE').html(T['DEVICE']);

	$('div.T_AFTERMEAL').html(T['AFTERMEAL']);
	$('div.T_DAYSTARTAT').html(T['DAYSTARTAT']);
	$('div.T_MEASUREGOALS').html(T['MEASUREGOALS']);

	$('div.T_SELECT').html(T['SELECT']);
	$('div.T_CLOSE').html(T['CLOSE']);
	$('div.T_ADD').html(T['ADD']);
	$('div.T_ADDPP').html(T['ADDPP']);
	$('div.T_MODIFY').html(T['MODIFY']);
	$('div.T_UPDATE').html(T['UPDATE']);
	$('div.T_VIEW').html(T['VIEW']);
	$('div.T_CAMERA').html(T['CAMERA']);
	$('div.T_GALLERY').html(T['GALLERY']);
	$('div.T_ACTIVATE2').html(T['ACTIVATE2']);
	$('div.T_SYNC2').html(T['SYNC2']);

	$('div.T_TABLE_H').html(T['TABLE_H']);
	$('div.T_TABLE_V').html(T['TABLE_V']);
	$('div.T_TABLE_R').html(T['TABLE_R']);
	$('div.T_HORIZONTAL').html(T['HORIZONTAL']);
	$('div.T_VERTICAL').html(T['VERTICAL']);
	$('div.T_SUMMARY').html(T['SUMMARY']);
	$('div.T_TABLES').html(T['TABLES']);
	$('div.T_GRAPHS').html(T['GRAPHS']);
	$('div.T_1_DAY').html(T['1_DAY']);
	$('div.T_2_DAYS').html(T['2_DAYS']);
	$('div.T_3_DAYS').html(T['3_DAYS']);
	$('div.T_5_DAYS').html(T['5_DAYS']);
	$('div.T_1_WEEK').html(T['1_WEEK']);
	$('div.T_2_WEEKS').html(T['2_WEEKS']);
	$('div.T_1_MONTH').html(T['1_MONTH']);
	$('div.T_NONE').html(T['NONE']);

	$('div.T_TRACE').html(T['TRACE']);
	$('div.T_INTERCHANGE').html(T['INTERCHANGE']);
	$('div.T_VERSION').html(T['VERSION']);
	$('div.T_AUTHOR').html(T['AUTHOR']);
	$('div.T_LICENCE').html(T['LICENCE']);
	$('div.T_REPOSITORY').html(T['REPOSITORY']);

	$('div.T_IMPORT').html(T['IMPORT']);
	$('div.T_EXPORT').html(T['EXPORT']);
	$('div.T_LOGIN').html(T['LOGIN']);
	$('div.T_PASSWORD').html(T['PASSWORD']);
	$('div.T_LASTSYNC').html(T['LASTSYNC']);
  }



   function lang_es ( translate )
   {
	translate['es'] = new Array() ;

        // menu
        translate['es']['AJUSTS']	 = 'Ajustes' ;
        translate['es']['ANNOTATE']	 = 'Apuntar' ;
        translate['es']['BASAL']	 = 'Basal' ;
        translate['es']['BASALS']	 = 'Basales' ;
        translate['es']['BDEFINE']	 = 'Definir basal' ;
        translate['es']['BACTIVATE']	 = 'Activar basal' ;
        translate['es']['BOLUS']	 = 'Bolus' ;
        translate['es']['MEAL']	 	 = 'Comida' ;
        translate['es']['MEALS']	 = 'Comidas' ;
        translate['es']['CONFIG']	 = 'Configurar' ;
        translate['es']['CONNECTION']	 = 'Conexi&oacute;n' ;
        translate['es']['SQUARE']	 = 'Cuadrado' ;
        translate['es']['STATS']	 = 'Estad&iacute;sticas' ;
        translate['es']['DIARY']	 = 'Diario' ;
        translate['es']['DIARY_DAY']	 = 'Hoy' ;
        translate['es']['DIARY_WEEK']	 = 'Semana' ;
        translate['es']['DIARY_MONTH']	 = 'Mes' ;
        translate['es']['DIARY_MONTH1']	 = 'Mes (ancho)' ;
        translate['es']['DIARY_MONTH2']	 = 'Mes (alto)' ;
        translate['es']['DUAL']	         = 'Dual' ;
        translate['es']['IDIOM']	 = 'Idioma' ;
        translate['es']['INSTALL']	 = 'Instalar' ;
        translate['es']['IDENTITY']	 = 'Identidad' ;
        translate['es']['REMOTE']	 = 'Acceso remoto' ;
        translate['es']['SYNC']	 	 = 'Sincronizaci&oacute;n' ;
        translate['es']['MEASURE']	 = 'Medida' ;
        translate['es']['MEASURES']	 = 'Medidas' ;
        translate['es']['NORMAL']	 = 'Normal' ;
        translate['es']['OTHERS']	 = 'Otros' ;
        translate['es']['QUICK']	 = 'Medida+Bolo+Comida' ;
        translate['es']['VOICE']	 = 'Voz' ;
        translate['es']['ABOUT']	 = 'Acerca de' ;
        translate['es']['CMD']	 	 = 'Mandato' ;
        translate['es']['MENU']	 	 = 'Men&uacute;' ;
        translate['es']['LOCATION']	 = 'Localizaci&oacute;n' ;
        translate['es']['EXIT']	         = 'Salir' ;
        translate['es']['PERSONAL']	 = 'Personal' ;
        translate['es']['DEVICE']	 = 'Dispositivo' ;

	// on-line help
        translate['es']['AMD_HM']	 	= 'a&ntilde;o-mes-d&iacute;a h:m' ;
        translate['es']['ANTES_COMER_PUNTOS']	= 'antes comida, ...' ;
        translate['es']['ENSALADA_PUNTOS']	= 'ensalada, ...' ;
        translate['es']['OPCIONAL']	 	= '(opcional)' ;
        translate['es']['EJERCICIO_PUNTOS']	= 'ejercicio, enfermedad, ...' ;
        translate['es']['NADAR_PUNTOS']	        = 'nadar, andar, ...' ;
        translate['es']['BNA']	                = 'baja, normal, alta' ;
        translate['es']['MEDIDA120_PUNTOS']     = 'apuntar medida 120, apuntar bolo dual 5 30, apuntar comida 5 ensalada, ...' ;
        translate['es']['UNKNOWN_CMD']	 	= 'Mandato de voz desconocido' ;
        translate['es']['PHOTO'] 	 	= 'Fotograf&iacute;a...' ;

	// labels
        translate['es']['NOTE']	 		= 'Apunte' ;
        translate['es']['BOLUS_PER_MEAL']	= 'Por comida' ;
        translate['es']['BOLUS_PER_HOUR']	= 'Por hora' ;
        translate['es']['DESCRIPTION']	 	= 'Descripci&oacute;n' ;
        translate['es']['EVENT']	 	= 'Evento' ;
        translate['es']['END']	 		= 'Fin' ;
        translate['es']['SITUATION']		= 'Situaci&oacute;n' ;
        translate['es']['IMAGE']		= 'Imagen' ;
        translate['es']['BEGIN']		= 'Inicio' ;
        translate['es']['INSTANT']		= 'Instante' ;
        translate['es']['INTENSITY']		= 'Intensidad' ;
        translate['es']['AVERAGE']	 	= 'Media' ;
        translate['es']['MEASURES_PER_MEAL']	= 'Por comida' ;
        translate['es']['MEASURES_PER_HOUR']	= 'Por hora' ;
        translate['es']['MEASURE2']		= 'Medida' ;
        translate['es']['PATTERN']		= 'Patr&oacute;n' ;
        translate['es']['PERCENTAGE']		= 'Porcentaje' ;
        translate['es']['RATIONS']		= 'Raciones' ;
        translate['es']['RATIONS_PER_MEAL']	= 'Por comida' ;
        translate['es']['RATIONS_PER_HOUR']	= 'Por hora' ;
        translate['es']['RANGES_PER_HOUR']	= 'Nube' ;
        translate['es']['CARB_RATIO']		= 'Ratio carbohidrato' ;
        translate['es']['TYPES']		= 'Tipo' ;
        translate['es']['BASALS_TYPES']		= 'Tipos definidos' ;
        translate['es']['BASALS_ACT']		= 'Activaciones' ;
        translate['es']['N_SECTIONS']		= '# tramos' ;
        translate['es']['UNITS']		= 'Unidades' ;
        translate['es']['PLATFORM']		= 'Plataforma' ;
        translate['es']['COLORS']		= 'Colores' ;
        translate['es']['DEFINE']	 	= 'Definir' ;
        translate['es']['ACTIVATE']	 	= 'Activar' ;
        translate['es']['STATUS']	 	= 'Estado' ;
        translate['es']['TOTALPERDAY']	 	= 'Total/D&iacute;a' ;

        translate['es']['AFTERMEAL']	 	= 'Despu&eacute;s de comer a las...' ;
        translate['es']['DAYSTARTAT']	 	= 'El d&iacute;a comienza a las...' ;
        translate['es']['MEASUREGOALS']	 	= 'Objetivo de medidas...' ;

        translate['es']['SELECT']	 = 'seleccionar' ;
        translate['es']['CLOSE']	 = 'cerrar' ;
        translate['es']['ADDORUPDATE']	 = 'a&ntilde;adir/actualizar' ;
        translate['es']['ADD']	 	 = 'a&ntilde;adir' ;
        translate['es']['ADDPP']	 = 'a&ntilde;adir++' ;
        translate['es']['UPDATE']	 = 'actualizar' ;
        translate['es']['SEND']	 	 = 'enviar' ;
        translate['es']['MODIFY'] 	 = 'cambiar' ;
        translate['es']['VIEW']	 	 = 'visualizar' ;
        translate['es']['CAMERA']	 = 'c&aacute;mara' ;
        translate['es']['GALLERY']	 = 'galer&iacute;a' ;
        translate['es']['ACTIVATE2'] 	 = 'activar' ;
        translate['es']['SYNC2'] 	 = 'sincronizar' ;
        translate['es']['UPDATED']	 = 'actualizado' ;

        translate['es']['MONDAY']	 = 'L' ;
        translate['es']['TUESDAY']	 = 'M' ;
        translate['es']['WEDNESDAY']	 = 'X' ;
        translate['es']['THURSDAY']	 = 'J' ;
        translate['es']['FRIDAY']	 = 'V' ;
        translate['es']['SATURDAY']	 = 'S' ;
        translate['es']['SUNDAY']	 = 'D' ;

        translate['es']['DAY']	 = 'D&iacute;a' ;
        translate['es']['WEEK']	 = 'Semana' ;
        translate['es']['MONTH'] = 'Mes' ;

        translate['es']['TABLE_H']	 = 'Tabla (horizontal)' ;
        translate['es']['TABLE_V']	 = 'Tabla (vertical)' ;
        translate['es']['TABLE_R']	 = 'Tabla resumen' ;
        translate['es']['HORIZONTAL']	 = 'Horizontal' ;
        translate['es']['VERTICAL']	 = 'Vertical' ;
        translate['es']['SUMMARY']	 = 'Resumen' ;
        translate['es']['TABLES']	 = 'Tabla' ;
        translate['es']['GRAPHS']	 = 'Gr&aacute;ficos' ;
        translate['es']['1_DAY']	 = '1 d&iacute;a' ;
        translate['es']['2_DAYS']	 = '2 d&iacute;as' ;
        translate['es']['3_DAYS']	 = '3 d&iacute;as' ;
        translate['es']['5_DAYS']	 = '5 d&iacute;as' ;
        translate['es']['1_WEEK']	 = '1 semana' ;
        translate['es']['2_WEEKS']	 = '2 semanas' ;
        translate['es']['1_MONTH']	 = '1 mes' ;
        translate['es']['NONE']	 	 = 'Nada' ;

        translate['es']['TRACE']	 = 'Seguimiento' ;
        translate['es']['INTERCHANGE']	 = 'Intercambio' ;
        translate['es']['VERSION']	 = 'Versi&oacute;n' ;
        translate['es']['AUTHOR']	 = 'Autor' ;
        translate['es']['LICENCE']	 = 'Licencia' ;
        translate['es']['REPOSITORY']	 = 'Repositorio' ;

        translate['es']['IMPORT']	 = 'Importar' ;
        translate['es']['EXPORT']	 = 'Exportar' ;
        translate['es']['LOGIN'] 	 = 'Usuario' ;
        translate['es']['PASSWORD'] 	 = 'Clave' ;
        translate['es']['LASTSYNC'] 	 = '&Uacute;ltima sincro.' ;

        return translate ;
   }




   function lang_en ( translate )
   {
	translate['en'] = new Array() ;

	// menu
        translate['en']['AJUSTS']	 = 'Ajusts' ;
        translate['en']['ANNOTATE']	 = 'Annotate' ;
        translate['en']['BASAL']	 = 'Basal' ;
        translate['en']['BASALS']	 = 'Basals' ;
        translate['en']['BDEFINE']	 = 'Basal definition' ;
        translate['en']['BACTIVATE']	 = 'Basal activation' ;
        translate['en']['BOLUS']	 = 'Bolus' ;
        translate['en']['MEAL']	 	 = 'Meal' ;
        translate['en']['MEALS']	 = 'Meals' ;
        translate['en']['CONFIG']	 = 'Configure' ;
        translate['en']['CONNECTION']	 = 'Connection' ;
        translate['en']['SQUARE']	 = 'Square' ;
        translate['en']['STATS']	 = 'Stats' ;
        translate['en']['DIARY']	 = 'Diary' ;
        translate['en']['DIARY_DAY']	 = 'Today' ;
        translate['en']['DIARY_WEEK']	 = 'Week' ;
        translate['en']['DIARY_MONTH']	 = 'Month' ;
        translate['en']['DIARY_MONTH1']	 = 'Month (wide)' ;
        translate['en']['DIARY_MONTH2']	 = 'Month (high)' ;
        translate['en']['DUAL']	 	 = 'Dual' ;
        translate['en']['IDIOM']	 = 'Language' ;
        translate['en']['INSTALL']	 = 'Install' ;
        translate['en']['IDENTITY']	 = 'Identity' ;
        translate['en']['REMOTE']	 = 'Remote' ;
        translate['en']['SYNC']	 	 = 'Synchronization' ;
        translate['en']['MEASURE']	 = 'Measure' ;
        translate['en']['MEASURES']	 = 'Measures' ;
        translate['en']['NORMAL']	 = 'Normal' ;
        translate['en']['OTHERS']	 = 'Others' ;
        translate['en']['QUICK']	 = 'Measure+Bolus+Meal' ;
        translate['en']['VOICE']	 = 'Voice' ;
        translate['en']['ABOUT']	 = 'About' ;
        translate['en']['CMD']	 	 = 'Command' ;
        translate['en']['MENU']	 	 = 'Menu' ;
        translate['en']['LOCATION']	 = 'Location' ;
        translate['en']['EXIT']	         = 'Exit' ;
        translate['en']['PERSONAL']	 = 'Personal' ;
        translate['en']['DEVICE']	 = 'Device' ;

	// on-line help
        translate['en']['AMD_HM']	 	= 'year-month-day h:m' ;
        translate['en']['ANTES_COMER_PUNTOS']	= 'before meal, ...' ;
        translate['en']['ENSALADA_PUNTOS']	= 'salad, ...' ;
        translate['en']['OPCIONAL']	 	= '(optional)' ;
        translate['en']['EJERCICIO_PUNTOS']	= 'exercice, illness, ...' ;
        translate['en']['NADAR_PUNTOS']	 	= 'to swim, walk, ...' ;
        translate['en']['BNA']	 		= 'low, normal, high' ;
        translate['en']['MEDIDA120_PUNTOS']	= 'annotate measure 120, annotate dual bolus 5 30, annotate meal 5 salad, ...' ;
        translate['en']['UNKNOWN_CMD']		= 'Unknowd voice command' ;
        translate['en']['PHOTO'] 	 	= 'Photo...' ;

	// labels
        translate['en']['NOTE']	 		= 'Note' ;
        translate['en']['BOLUS_PER_MEAL']	= 'Per meal' ;
        translate['en']['BOLUS_PER_HOUR']	= 'Per hour' ;
        translate['en']['DESCRIPTION']	 	= 'Description' ;
        translate['en']['EVENT']	 	= 'Event' ;
        translate['en']['END']	 	 	= 'End' ;
        translate['en']['SITUATION']	 	= 'Situation' ;
        translate['en']['IMAGE']	 	= 'Image' ;
        translate['en']['BEGIN']	 	= 'Begin' ;
        translate['en']['INSTANT']	 	= 'Instant' ;
        translate['en']['INTENSITY']	 	= 'Intensity' ;
        translate['en']['AVERAGE']	 	= 'Average' ;
        translate['en']['MEASURES_PER_MEAL']	= 'Per meal' ;
        translate['en']['MEASURES_PER_HOUR']	= 'Per hour' ;
        translate['en']['MEASURE2']	 	= 'Measure' ;
        translate['en']['PATTERN']	 	= 'Pattern' ;
        translate['en']['PERCENTAGE']	 	= 'Percentage' ;
        translate['en']['RATIONS']	 	= 'Rations' ;
        translate['en']['RATIONS_PER_MEAL']	= 'Per meal' ;
        translate['en']['RATIONS_PER_HOUR']	= 'Per hour' ;
        translate['en']['RANGES_PER_HOUR']	= 'Measure ranges per hour' ;
        translate['en']['CARB_RATIO']	 	= 'Carbohidrate ratio' ;
        translate['en']['TYPES']	 	= 'Type' ;
        translate['en']['BASALS_TYPES']	 	= 'Defined basals' ;
        translate['en']['BASALS_ACT']	 	= 'Basals activations' ;
        translate['en']['N_SECTIONS']	 	= '# sections' ;
        translate['en']['UNITS']	 	= 'Units' ;
        translate['en']['PLATFORM']	 	= 'Platform' ;
        translate['en']['COLORS']	 	= 'Colors' ;
        translate['en']['DEFINE']	 	= 'Define' ;
        translate['en']['ACTIVATE']	 	= 'Activate' ;
        translate['en']['STATUS']	 	= 'Status' ;
        translate['en']['TOTALPERDAY']	 	= 'Total/Day' ;

        translate['en']['AFTERMEAL']	 	= 'After meal at...' ;
        translate['en']['DAYSTARTAT']	 	= 'Day start at...' ;
        translate['en']['MEASUREGOALS']	 	= 'Measure goals...' ;

        translate['en']['SELECT']	 = 'select' ;
        translate['en']['CLOSE']	 = 'close' ;
        translate['en']['ADDORUPDATE']	 = 'add/update' ;
        translate['en']['ADD']	 	 = 'add' ;
        translate['en']['ADDPP']	 = 'add++' ;
        translate['en']['UPDATE']	 = 'update' ;
        translate['en']['SEND']	 	 = 'send' ;
        translate['en']['MODIFY'] 	 = 'modify' ;
        translate['en']['VIEW']	 	 = 'view' ;
        translate['en']['CAMERA']	 = 'camera' ;
        translate['en']['GALLERY']	 = 'gallery' ;
        translate['en']['ACTIVATE2'] 	 = 'activate' ;
        translate['en']['SYNC2']	 = 'sync' ;
        translate['en']['UPDATED']	 = 'updated' ;

        translate['en']['MONDAY']	 = 'M' ;
        translate['en']['TUESDAY']	 = 'T' ;
        translate['en']['WEDNESDAY']	 = 'W' ;
        translate['en']['THURSDAY']	 = 'T' ;
        translate['en']['FRIDAY']	 = 'F' ;
        translate['en']['SATURDAY']	 = 's' ;
        translate['en']['SUNDAY']	 = 'S' ;

        translate['en']['DAY']	 	 = 'Day' ;
        translate['en']['WEEK']	 	 = 'Week' ;
        translate['en']['MONTH']	 = 'Month' ;

        translate['en']['TABLE_H']	 = 'Table (horizontal)' ;
        translate['en']['TABLE_V']	 = 'Table (vertical)' ;
        translate['en']['TABLE_R']	 = 'Table (summary)' ;
        translate['en']['HORIZONTAL']	 = 'Horizontal' ;
        translate['en']['VERTICAL']	 = 'Vertical' ;
        translate['en']['SUMMARY']	 = 'Summary' ;
        translate['en']['TABLES']	 = 'Table' ;
        translate['en']['GRAPHS']	 = 'Graphs' ;
        translate['en']['1_DAY']	 = '1 Day' ;
        translate['en']['2_DAYS']	 = '2 Day' ;
        translate['en']['3_DAYS']	 = '3 Day' ;
        translate['en']['5_DAYS']	 = '5 Day' ;
        translate['en']['1_WEEK']	 = '1 Week' ;
        translate['en']['2_WEEKS']	 = '2 Week' ;
        translate['en']['1_MONTH']	 = '1 Month' ;
        translate['en']['NONE']	 	 = 'None' ;

        translate['en']['TRACE']	 = 'Tracing' ;
        translate['en']['INTERCHANGE']	 = 'Interchange' ;
        translate['en']['VERSION']	 = 'Version' ;
        translate['en']['AUTHOR']	 = 'Author' ;
        translate['en']['LICENCE']	 = 'Licence' ;
        translate['en']['REPOSITORY']	 = 'Repository' ;

        translate['en']['IMPORT']	 = 'Import' ;
        translate['en']['EXPORT']	 = 'Export' ;
        translate['en']['LOGIN'] 	 = 'Login' ;
        translate['en']['PASSWORD'] 	 = 'Password' ;
        translate['en']['LASTSYNC'] 	 = 'Last sync' ;

        return translate ;
   }



	var em = {};
	em.dbsize = 0;
	em.db     = null;

	em.open = function () 
        {
	    em.dbsize = 4 * 1024 * 1024; // 4MB
	    em.db     = html5sql.openDatabase("em", "Event Monitor", em.dbsize);
	}

	em.close = function () 
        {
	    em.dbsize = 0 ;
	    em.db     = null ;
	}

        
        function webdb_execute ( dbinfo, sql, ok_handler, ko_handler ) 
        {
	    var startTime = new Date();

            if (typeof ok_handler === 'undefined') 
            {
		ok_handler = function() { //Success
				    var endTime = new Date();
				    em.executiontime = (endTime - startTime) / 1000;
				    console.log('Done. (' + em.executiontime + ' seconds)');
			     } ;
            }

            if (typeof ko_handler === 'undefined') 
            {
		ko_handler = function(error, failingQuery) { //Failure
				    var endTime = new Date();
				    em.executiontime = (endTime - startTime) / 1000;
				    console.error('Error: ' + error.message + '. (' + em.executiontime + ' seconds)');
			     } ;
            }

            em.open() ;
	    html5sql.process(sql, ok_handler, ko_handler) ;
	    //console.log('sql: ' + JSON.stringify(sql));
        }

        function webdb_select2asocArray_2 ( table, id )
        {
                  em.open() ;

                  var newValues = new Array() ;
                  html5sql.process(
                      "SELECT * FROM " + table + " WHERE id=" + id,
                      function(transaction, results, rowsArray) {
                         for(var i = 0; i < rowsArray.length; i++) {
                             for (attr in rowArray[i]) {
                                  newValues[attr] = rowsArray[i][attr] ;
                             }
                        }
                      },
                      function(error, statement) { }
                  );

                  em.close() ;

                  return newValues ;
        }

        function webdb_select2asocArray_3 ( table, id, addValues )
        {
                  em.open() ;

                  html5sql.process(
                      "SELECT * FROM " + table + " WHERE id=" + id,
                      function(transaction, results, rowsArray) {
                         for(var i = 0; i < rowsArray.length; i++) {
                             for (attr in rowArray[i]) {
                                  addValues[attr] = rowsArray[i][attr] ;
                             }
                        }
                      },
                      function(error, statement) { }
                  );

                  em.close() ;

                  return addValues ;
        }


        /* asocArray 2 SQL */

        function db_asocArray2insert ( tabla, values, pk ) 
        {
		  insertar = " INSERT INTO " + tabla + " " ;
		  insertar_nombres = "(" ;
		  insertar_valores = " VALUES (" ;

                  last = 0 ;
                  var key_arr = [] ;
                  for (key in values)
                  {
                       if (pk.indexOf(key) == -1) {
                           key_arr.push(key) ;
                           last++ ;
                       }
                  }

                  for (var i=0; i<last; i++)
                  {
                       key   = key_arr[i] ;  
                       value = values[key] ;  

		       insertar_nombres += key ;
		       insertar_valores += "'" + value + "'" ;
		       if (i != (last-1)) {
			   insertar_nombres += ", " ;
			   insertar_valores += ", ";
		       }
                  }

		  insertar_nombres += ")" ;
		  insertar_valores += ")" ;
		  insertar += insertar_nombres + insertar_valores ;

                  return insertar ;
        }

        function db_asocArray2update ( tabla, values, pk ) 
        {
		  actualizar = " UPDATE " + tabla + " SET " ;

                  last = 0 ;
                  var key_arr = [] ;
                  for (key in values)
                  {
                       if (pk.indexOf(key) == -1) {
                           key_arr.push(key) ;
                           last++ ;
                       }
                  }

                  for (var i=0; i<last; i++)
		  {
                       key   = key_arr[i] ;  
                       value = values[key] ;  

		       actualizar += " " + key + "='" + value + "'" ;  
		       if (i != (last-1)) 
			   actualizar += ", " ;
		  }

                  for (var j=0; j<pk.length; j++)
                  {
                       if (0 == j) 
		            actualizar += " WHERE " + pk[j] + "='" + values[pk[j]] + "'" ;
		       else actualizar += " AND   " + pk[j] + "='" + values[pk[j]] + "'" ;
		  }

                  return actualizar ;
        }

        function db_asocArray2insertorreplace ( tabla, values, pk ) 
        {
		  insertar = " INSERT OR REPLACE INTO " + tabla + " " ;
		  insertar_nombres = "(" ;
		  insertar_valores = " VALUES (" ;

                  last = 0 ;
                  var key_arr = [] ;
                  for (key in values)
                  {
                       if (pk.indexOf(key) == -1) {
                               key_arr.push(key) ;
                               last++ ;
                       } 
                       else if (values[key] != -1) {
                               key_arr.push(key) ;
                               last++ ;
                       }
                  }

                  for (var i=0; i<last; i++)
                  {
                       key   = key_arr[i] ;  
                       value = values[key] ;  

		       insertar_nombres += key ;
		       insertar_valores += "'" + value + "'" ;
		       if (i != (last-1)) {
			   insertar_nombres += ", " ;
			   insertar_valores += ", ";
		       }
                  }

		  insertar_nombres += ")" ;
		  insertar_valores += ")" ;
		  insertar += insertar_nombres + insertar_valores ;

                  return insertar ;
        }

        function db_asocArray2replace ( tabla, values, pk ) 
        {
		  insertar = " REPLACE INTO " + tabla + " " ;
		  insertar_nombres = "(" ;
		  insertar_valores = " VALUES (" ;

                  last = 0 ;
                  var key_arr = [] ;
                  for (key in values)
                  {
                       if (pk.indexOf(key) == -1) {
                           key_arr.push(key) ;
                           last++ ;
                       }
                  }

                  for (var i=0; i<last; i++)
                  {
                       key   = key_arr[i] ;  
                       value = values[key] ;  

		       insertar_nombres += key ;
		       insertar_valores += "'" + value + "'" ;
		       if (i != (last-1)) {
			   insertar_nombres += ", " ;
			   insertar_valores += ", ";
		       }
                  }

		  insertar_nombres += ")" ;
		  insertar_valores += ")" ;
		  insertar += insertar_nombres + insertar_valores ;

                  return insertar ;
        }

        function db_asocArray2delete ( tabla, values, pk ) 
        {
	          borrar = "DELETE FROM " + tabla ;

                  for (var j=0; j<pk.length; j++)
                  {
                       if (0 == j) 
		            borrar += " WHERE " + pk[j] + "='" + values[pk[j]] + "'" ;
		       else borrar += " AND   " + pk[j] + "='" + values[pk[j]] + "'" ;
		  }

                  return borrar ;
        }

        function db_asocArray2list  ( tabla, values ) 
        {
	          listar = "SELECT * FROM " + tabla ;
                  return listar ;
        }


        /* SQL 2 any */

        function db_execute ( dbinfo, sql, ok_handler, ko_handler ) 
        {
            if ("" == dbinfo)
                 webdb_execute(dbinfo,sql,ok_handler,ko_handler) ; 
            else mysql_execute(dbinfo,sql,ok_handler,ko_handler) ; 
        }

	function db_importFromFile ( dbinfo, filename, ok_handler, ko_handler ) 
        {
	    $.get(filename, function(sql) {
                    db_execute(dbinfo, sql, ok_handler, ko_handler ) ;
	    });
	}

        function db_select2asocArray_2 ( dbinfo, table, id )
        {
            if ("" == dbinfo)
                 webdb_select2asocArray_2(dbinfo,table,id) ;
            else mysql_select2asocArray_2(dbinfo,table,id) ;
        }

        function db_select2asocArray_3 ( dbinfo, table, id, addValues )
        {
            if ("" == dbinfo)
                 webdb_select2asocArray_3(dbinfo,table,id,addValues) ;
            else mysql_select2asocArray_3(dbinfo,table,id,addValues) ;
        }

        function db_asocArray2insertorupdate ( dbinfo, table, values, pk )
        {
            if ("" == dbinfo)
                 return db_asocArray2insertorreplace(table, values, pk);
            else return db_asocArray2replace(table, values, pk);
        }


  function db_webdb2js_aux ( day_arr, qs, qs_index, vector_details, ok_handler )
  {
        html5sql.process(
             qs[qs_index],
	     function(transaction, results, v)
	     {
                if (qs_index < (qs.length-1))
                    db_webdb2js_aux(day_arr,qs,qs_index+1,vector_details,ok_handler);

		for (var i=0; i<results.rows.length; i++)
		{
                   // non-timestamp event
                   if (results.rows.item(i).rt == 'basaldef')
                   {
		       if (typeof vector_details['basaldef'] === 'undefined') 
		           vector_details['basaldef'] = new Array() ;

		       vector_details["basaldef"].push({"id":         results.rows.item(i).id,
						        "pattern":    results.rows.item(i).pattern,
						        "neltos":     results.rows.item(i).neltos,
						        "segments":   results.rows.item(i).segments,
						        "user":       results.rows.item(i).user,
						        "sync":       results.rows.item(i).sync,
						        "device":     results.rows.item(i).device });
		       continue;
                   }

                   if (results.rows.item(i).rt == 'last_basalact')
                   {
		       js_record = { "id":         results.rows.item(i).id,
				     "pattern":    results.rows.item(i).pattern,
				     "neltos":     results.rows.item(i).neltos,
				     "segments":   results.rows.item(i).segments,
				     "percentage": results.rows.item(i).percentage,
				     "start":      results.rows.item(i).start,
				     "user":       results.rows.item(i).user,
				     "sync":       results.rows.item(i).sync,
				     "device":     results.rows.item(i).device };

		       if (typeof vector_details['basalact'] === 'undefined') 
		           vector_details['basalact'] = new Array() ;

		       vector_details['basalact'].push(js_record) ;
		       continue;
                   }

                   // timestamp event
		   dt = new XDate(results.rows.item(i).start);

		   var bid_month = ("0" + (dt.getMonth()+1)).slice(-2) ;
		   var bid_day   = ("0" + dt.getDate()).slice(-2) ;
                   var bid_code  = parseInt('1' + bid_month + '1' + bid_day, 10) ;

		   if ($.inArray(bid_code, day_arr) == -1)
		       continue ;

		   i_h = dt.toUTCString('HH:mm') ; 
		   i_d = dt.toUTCString('yyyy-MM-dd') ; 

		   if (typeof vector_details[i_d] === 'undefined') 
		       vector_details[i_d] = new Array() ;
		   if (typeof vector_details[i_d][i_h] === 'undefined') 
		       vector_details[i_d][i_h] = new Array() ;

                   if (results.rows.item(i).rt == 'bolus')
                   {
		       vector_details[i_d][i_h]["bolus"]    = { "id":         results.rows.item(i).id,
							        "name":       results.rows.item(i).name,
						    	        "type":       results.rows.item(i).type,
							        "units":      results.rows.item(i).units,
							        "percentage": results.rows.item(i).percentage,
							        "start":      results.rows.item(i).start,
							        "stop":       results.rows.item(i).stop,
							        "user":       results.rows.item(i).user,
							        "sync":       results.rows.item(i).sync,
							        "device":     results.rows.item(i).device };
		       continue;
                   }

                   if (results.rows.item(i).rt == 'meal')
                   {
		       vector_details[i_d][i_h]["meal"]    =  { "id":         results.rows.item(i).id,
							        "name":       results.rows.item(i).name,
						        	"tag":        results.rows.item(i).tag,
						        	"image":      results.rows.item(i).image,
							        "measure":    results.rows.item(i).measure,
							        "start":      results.rows.item(i).start,
							        "stop":       results.rows.item(i).stop,
							        "user":       results.rows.item(i).user,
							        "sync":       results.rows.item(i).sync,
							        "device":     results.rows.item(i).device };
		       continue;
                   }

                   if (results.rows.item(i).rt == 'measure')
                   {
		       vector_details[i_d][i_h]["measure"]  = { "id":         results.rows.item(i).id,
							        "name":       results.rows.item(i).name,
							        "measure":    results.rows.item(i).measure,
							        "start":      results.rows.item(i).start,
							        "stop":       results.rows.item(i).stop,
							        "user":       results.rows.item(i).user,
							        "sync":       results.rows.item(i).sync,
							        "device":     results.rows.item(i).device };
		       continue;
                   }

                   if (results.rows.item(i).rt == 'event')
                   {
		       vector_details[i_d][i_h]["event"]    = { "id":         results.rows.item(i).id,
							        "name":       results.rows.item(i).name,
							        "event":      results.rows.item(i).event,
							        "type":       results.rows.item(i).type,
							        "measure":    results.rows.item(i).measure,
							        "start":      results.rows.item(i).start,
							        "stop":       results.rows.item(i).stop,
							        "user":       results.rows.item(i).user,
							        "image":      results.rows.item(i).image,
							        "sync":       results.rows.item(i).sync,
							        "device":     results.rows.item(i).device };
		       continue;
                   }

                   if (results.rows.item(i).rt == 'basalact')
                   {
		       js_record = { "id":         results.rows.item(i).id,
				     "pattern":    results.rows.item(i).pattern,
				     "neltos":     results.rows.item(i).neltos,
				     "segments":   results.rows.item(i).segments,
				     "percentage": results.rows.item(i).percentage,
				     "start":      results.rows.item(i).start,
				     "user":       results.rows.item(i).user,
				     "sync":       results.rows.item(i).sync,
				     "device":     results.rows.item(i).device };

		       vector_details[i_d][i_h]["basalact"] = js_record ;

		       if (typeof vector_details['basalact'] === 'undefined') 
		           vector_details['basalact'] = new Array() ;

		       vector_details["basalact"].push(js_record) ;
		       continue;
                   }
		}

                if (qs_index == (qs.length-1))
	            ok_handler();
	     },
	     function(error, statement)
	     {
		   console.error('Error: ' + error.message + '.');
	     }
	);
  }

  function db_webdb2js ( working_grid, login_id, ok_handler )
  {
          // no var because it is global...
          vector_details = new Array();

          html5sql.openDatabase("em", "Event Monitor", 4*1024*1024) ;
		   qs = new Array() ;
          var day_arr = new Array() ;

          var first_period = 1;
          for (year in working_grid)
          {
               for (month in working_grid[year])
               {
                   var min_day = 32 ;
		   for (day in working_grid[year][month]) 
		   {
                        var nday = parseInt(day) ;
                        if (nday < min_day)
                            min_day = nday ;

		        var bid_month = ("0" + month).slice(-2) ;
		        var bid_day   = ("0" + day).slice(-2) ;
                        var bid_code  = parseInt('1' + bid_month + '1' + bid_day, 10) ;
                        day_arr.push(bid_code) ;
                   }

		   var twodigits_month = ("0" + month).slice(-2) ;
		   var twodigits_mday  = ("0" + min_day).slice(-2) ;

		   qs.push("SELECT 'bolus' as 'rt',* FROM bolus " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   units!=0" +
			   " ORDER BY start;") ;
		   qs.push("SELECT 'meal' as 'rt',* FROM meals " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   measure!=0" +
			   " ORDER BY start;") ;
	           qs.push("SELECT 'measure' as 'rt',* FROM measures " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   measure!=0" +
			   " ORDER BY start;") ;
	           qs.push("SELECT 'event' as 'rt',* FROM events " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   event!=''" +
			   " ORDER BY start;") ;
	           qs.push("SELECT 'basalact' as 'rt',* FROM basal_activations " + 
			   " WHERE strftime('%Y-%m',start)='" + year + "-" + twodigits_month + "' " +
			   " AND   user='" + login_id + "' " +
			   " AND   pattern!=''" +
			   " ORDER BY start;") ;

                   if (1 == first_period) 
		      {
		         qs.push("SELECT 'last_basalact' as 'rt',* FROM basal_activations " +
		                 " WHERE strftime('%Y-%m-%d',start)<='" + year + "-" + twodigits_month + "-" + twodigits_mday + "' " +
		                 " AND   user='" + login_id + "' " +
                                 " AND   pattern!='' " +
                                 " ORDER BY start DESC " +
                                 " LIMIT 1;");
			 qs.push("SELECT 'basaldef' as 'rt',* FROM basal_definitions " + 
				 " WHERE user='" + login_id + "' " +
				 " AND   neltos!=0" +
				 " ORDER BY sync;") ;
                         first_period = 0;
                      }
               } 
          }

          db_webdb2js_aux(day_arr, qs, 0, vector_details, ok_handler) ;

          return vector_details;
  }


  function db_db2js ( dbinfo, working_grid, login_id, ok_handler )
  {
        if ("" == dbinfo)
             return db_webdb2js(working_grid, login_id, ok_handler) ;
        else return db_mysql2js(dbinfo, working_grid, login_id, ok_handler) ;
  }


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


  function db_cnu2db_convert ( line )
  {
        // Fecha,Hora,Glucemia (mg/dL),Método de referencia,En ayunas,Antes de comer,Después de comer,Registro,Eliminada,Control,Manual,A1c %,A1c mmol/mol,Insulina,Tipo de insulina,Gramos de hidratos de carbono,Raciones de hidratos de carbono,Intercambios de hidratos de carbono,comentario
        // 04/02/2013,10:06:00,123.0,plasma,0,0,0,0,0,0,0,,,,,,,,"

            var lino = new Object() ;

	    hour_line = parseInt(line[1].slice(0,2), 10);
	    min_line  = parseInt(line[1].slice(3,5), 10);

            dt = new XDate(line[0]) ;
            dt.setHours(hour_line) ;
            dt.setMinutes(min_line) ;

            lino['date']  = dt.toString("yyyy-MM-dd") ;
            lino['time']  = dt.toString("HH:mm") ; 
            lino['start'] = dt.toString("yyyy-MM-dd HH:mm:ss") ; 
            lino['start'] = lino['start'].substr(0,10) + 'T' + lino['start'].substr(11) + 'Z' ; 

	    lino['measure'] = parseInt("0" + line[2], 10) ;
	    lino['units']   = parseInt("0" + line[13], 10) ;

	    racion_gr = parseInt("0" + line[15], 10) ;
	    racion_r  = parseInt("0" + line[16], 10) ;
	    racion_i  = parseInt("0" + line[17], 10) ;

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
			values_bolus['id']         = -1 ;
			values_bolus['name']       = lino['name'] ;
			values_bolus['type']       = "normal" ;
			values_bolus['units']      = lino['units'] ;
			values_bolus['percentage'] = 100 ;
			values_bolus['start']      = lino['start'] ;
			values_bolus['stop']       = lino['start'] ;
			values_bolus['user']       = user_id ;
			values_bolus['sync']       = dt0 ;
			values_bolus['device']     = device_id ;

		        Q.push(db_asocArray2insertorupdate(dbinfo,"bolus",values_bolus,Array('id'))) ;
            }

	    if (lino['ration'] != 0)
            {
			values_meal = new Array();
			values_meal['id']          = -1 ;
			values_meal['name']        = lino['name'] ;
			values_meal['tag']         = "" ;
			values_meal['measure']     = lino['ration'] ;
			values_meal['start']       = lino['start'] ;
			values_meal['stop']        = lino['start'] ;
			values_meal['user']        = user_id ;
			values_meal['image']       = "" ;
			values_meal['sync']        = dt0 ;
			values_meal['device']      = device_id ;

		        Q.push(db_asocArray2insertorupdate(dbinfo,"meals",values_meal,Array('id'))) ;
            }

	    if (lino['measure'] != 0)
            {
			values_measure = new Array();
			values_measure['id']       = -1 ;
			values_measure['name']     = lino['name'] ;
			values_measure['measure']  = lino['measure'] ;
			values_measure['start']    = lino['start'] ;
			values_measure['stop']     = lino['start'] ;
			values_measure['user']     = user_id ;
			values_measure['sync']     = dt0 ;
			values_measure['device']   = device_id ;

		        Q.push(db_asocArray2insertorupdate(dbinfo,"measures",values_measure,Array('id'))) ;
            }
        }

	if (Q.length != 0)
	    db_execute(dbinfo, Q, ok_handler) ;
  }


  function db_js2csv ( vector_details, user_login, user_id )
  {
        o = "" ;

        for (k_day in vector_details)
        {
                // non-timestamped events
		if ('basaldef' == k_day)
		{
		      for (var key in vector_details[k_day]) 
		      {
			      segments_esc = vector_details[k_day][key]['segments'].replace(/"/g, "'") ;

			      o += "\"" + user_login                               + "\"" + ";" +
				   "\"" + user_id                                  + "\"" + ";" +
				   "\"" + "2011-11-11"                             + "\"" + ";" +
				   "\"" + "00:00"                                  + "\"" + ";" +
				   "\"" + "basaldef"                               + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['pattern']    + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['neltos']     + "\"" + ";" +
				   "\"" + segments_esc                             + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['id']         + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['sync']       + "\"" + ";" +
				   "\"" + vector_details[k_day][key]['device']     + "\"" + "\n" ;
		      }

		      continue;
		}
		if ('basalact' == k_day)
		{
		      continue;
		}

		// order members of a object (remember there is not associative arrays in javascript)...
		var details_order = [];
		for (var key in vector_details[k_day]) 
		{
		     keyh = key.slice(0,2);
		     keym = key.slice(3,5);

		     key_order = keyh*60 + parseInt(keym, 10) ;
		     details_order.push([key_order, key]);
		}
		details_order.sort(function(a, b) { a = a[0]; b = b[0]; return a < b ? -1 : (a > b ? 1 : 0); });

		// print summary...
		for (var i=0; i<details_order.length; i++) 
		{
			k_hour = details_order[i][1] ;

			for (k_type in vector_details[k_day][k_hour])
			{
			   switch (k_type)
			   {
// "acaldero";"1";"2013-04-01";"07:15";"meal";"A0";"2013-04-01 07:15:00";"2013-04-01 07:15:00";"2";"actimel + cuajada sin";"";"121";...
			       case 'meal':
			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['name']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['stop']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['measure']    + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['tag']        + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['image']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;

// "acaldero";"1";"2013-04-01";"07:15";"measure";"A0";"2013-04-01 07:15:00";"2013-04-01 07:15:00";"147";"219";...
			       case 'measure':
			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['name']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['stop']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['measure']    + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;

// "acaldero";"1";"2013-04-01";"07:15";"bolus";"A0";"2013-04-01 07:15:00";"2013-04-01 09:15:00";"2.5";"normal";"100";"144";...
			       case 'bolus':
			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['name']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['stop']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['units']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['type']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['percentage'] + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;

// "acaldero";"1";"2013-04-08";"21:11";"event";"A3";"2013-04-08 21:11:00";"2013-04-08 23:41:00";"ill";"medicamentar";"paracetamol";...
			       case 'event':
			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['name']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['stop']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['measure']    + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['event']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['type']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['image']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;

			       case 'basalact':
			            segments_esc = vector_details[k_day][k_hour][k_type]['segments'].replace(/"/g, "'") ;

			            o += "\"" + user_login                                          + "\"" + ";" +
			                 "\"" + user_id                                             + "\"" + ";" +
			                 "\"" + k_day                                               + "\"" + ";" +
			                 "\"" + k_hour                                              + "\"" + ";" +
			                 "\"" + k_type                                              + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['pattern']    + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['neltos']     + "\"" + ";" +
			                 "\"" + segments_esc                                        + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['percentage'] + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['start']      + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['id']         + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['sync']       + "\"" + ";" +
			                 "\"" + vector_details[k_day][k_hour][k_type]['device']     + "\"" + "\n" ;
			            break;
			   }
			}
		}
        }

        return o ;
  }


  /*
   *  Fill next
   */

	  function dbform_addtwohours ( str_time )
	  {
		dt = new XDate(str_time) ;
		dt.addHours(ls1.aftermeal_hours) ;
		now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
		now = now.substr(0,10) + 'T' + now.substr(11);
		return now ;
	  }

	  function dbform_nextname ( str_name )
	  {
		target_tags_next = { 'A0': 'D0', 'D0': 'A1',  
				     'A1': 'D1', 'D1': 'A2',  
				     'A2': 'D2', 'D2': 'A3',  
				     'A3': 'D3', 'D3': 'A4', 
				     'A4': 'A0' } ;

		return target_tags_next[str_name] ;
	  }

  function dbform_fill_nextquick ( form )
  {
	form.elements['values_measure[name]'].value = dbform_nextname(form.elements['values_measure[name]'].value) ;
	form.elements['values_measure[measure]'].value = "0" ;
	form.elements['values_measure[start]'].value = dbform_addtwohours(form.elements['values_measure[start]'].value) ;
	form.elements['values_measure[stop]'].value = form.elements['values_measure[start]'].value ;

        var select2 = $("#page10gn") ;
        var option4 = $($("option", select2).get(form.elements['values_measure[name]'].selectedIndex - 1));
        option4.attr('selected', false);
        var option4 = $($("option", select2).get(((form.elements['values_measure[name]'].selectedIndex)) % 9));
        option4.attr('selected', true);
        select2.selectmenu() ;
        select2.selectmenu("refresh", true) ;

	form.elements['values_meal[name]'].value = dbform_nextname(form.elements['values_meal[name]'].value) ;
	form.elements['values_meal[tag]'].value = "" ;
	form.elements['values_meal[measure]'].value = "0" ;
	form.elements['values_meal[start]'].value = dbform_addtwohours(form.elements['values_meal[start]'].value) ;
	form.elements['values_meal[stop]'].value = form.elements['values_meal[start]'].value ;
	form.elements['values_meal[image]'].value = "" ;

	form.elements['values_bolus[name]'].value = dbform_nextname(form.elements['values_bolus[name]'].value) ;
	form.elements['values_bolus[type]'].value = "normal" ;
	form.elements['values_bolus[units]'].value = "0" ;
	form.elements['values_bolus[percentage]'].value = "100" ;
	form.elements['values_bolus[start]'].value = dbform_addtwohours(form.elements['values_bolus[start]'].value) ;
	form.elements['values_bolus[stop]'].value = form.elements['values_bolus[start]'].value ;
  }

  function dbform_fill_nextother ( form )
  {
        form.elements['values_other[name]'].selectedIndex = ((form.elements['values_other[name]'].selectedIndex) + 1) % 9 ; 
	form.elements['values_other[name]'].value = dbform_nextname(form.elements['values_other[name]'].value) ;
	form.elements['values_other[event]'].value = "" ;
	form.elements['values_other[type]'].value = "" ;
	form.elements['values_other[measure]'].value = "" ;
	form.elements['values_other[start]'].value = dbform_addtwohours(form.elements['values_other[start]'].value) ;
	form.elements['values_other[stop]'].value = form.elements['values_other[start]'].value ;
  }

	function dbform_knobIt ( shadow, vnow, vmin, vmax, vstep )
	{
	      var obj = $("#x11a");

	      if ('true' != obj.attr('isKnob')) {
		  obj.knob();
		  obj.attr('isKnob','true') ;
	      }

	      obj.trigger("configure",{"min": vmin, "max": vmax, "step": vstep, "skin": "tron"});
	      obj.val(vnow).change();

	      fillback = shadow;
	      $("#popupx11a").popup("open");
	}

	function dbform_camera_success ( form_img_name, big_img_name, small_img_name, imageURI )
	{
		// console.log('imageURI: ' + imageURI);

		var image = document.querySelector(form_img_name) ;
		image.value = imageURI;

		var image = document.getElementById(big_img_name);
		image.src = imageURI;

		var image = document.getElementById(small_img_name);
		image.src = imageURI;
	}


  /*
   * Basal
   */

  function dbform_fill_segments ( segs, segments_short, segments_help )
  {
	var res = new Object() ;

	res.short_v = "" ;
	res.long_v = "" ;

	for (i=0; i<segs.length-1; i++) 
	{
	     res.short_v += segs[i].c + " | " ;
	     res.long_v  += "<tr>" + 
			  "<td align=left><font color=gray>" + (i+1) + "&nbsp;&nbsp;</font></td>" +
			  "<td>" + segs[i].h + "</td>" +
			  "<td>&#8592;</td>" + 
			  "<td>" + segs[i].c + "</td>" + 
			  "<td>&#8594;</td>" + 
			  "<td>" + segs[i+1].h + "</td>" + 
			  "</tr>";
	}

	res.long_v = "<table border=0>" + res.long_v + "</table>" ;

	return res;
  }

  function ui_basal_fillselect ( vector_details, select_name, pattern )
  {
           var o_options = "<OPTION value=\"\"></OPTION>";

           var last = 0;
           if (typeof vector_details['basaldef'] !== 'undefined')
               last = vector_details['basaldef'].length;

           for(var i=0; i<last; i++)
           {
                var result_pattern = vector_details['basaldef'][i]['pattern'] ;
                var result_id      = vector_details['basaldef'][i]['id'] ;
                if (result_pattern == pattern)
                     o_options += "<option value=\"" + result_id + "\" SELECTED>" + result_pattern + "</OPTION>";
                else o_options += "<option value=\"" + result_id + "\">"          + result_pattern + "</OPTION>";
           }

           $(select_name).html("").html(o_options).selectmenu().selectmenu("refresh");
  }

  function ui_basal_form2def ( basal_form )
  {
         var values_basal = new Array(); 
         var basal_segs = new Object(); 
         var length = 0;

         for (k_elto in basal_form.elements)
         {
              var k_name = basal_form.elements[k_elto].name;
              if ( (typeof k_name === 'undefined') || (k_name == "") ) {
                  continue;
              }

              var pair = k_name.split(",");
              if ( (pair[0] != "values_basaldef") && (pair[0] != "neltos") ) {
                  continue;
              }

              if (3 == pair.length)
              {
		  var p_f = pair[2] ;
		  var p_i = parseInt(pair[1], 10) ;

		  if (typeof basal_segs[p_i] === 'undefined') {
                          basal_segs[p_i] = new Object();
                          length++;
                  }

		  if (p_f == "h")
		       basal_segs[p_i].h = basal_form.elements[k_elto].value;
		  else basal_segs[p_i].c = basal_form.elements[k_elto].value;
              }
              else if (2 == pair.length)
              {
                  values_basal[pair[1]] = basal_form.elements[k_elto].value;
              }
              else {
                  values_basal[k_name] = basal_form.elements[k_elto].value;
              }
         }

         basal_segs['length'] = length;
         values_basal['segments'] = JSON.stringify(basal_segs) ;
         return values_basal ; 
  }

  function ui_basal_sections ( neltos, basal_segs_json )
  {
         neltos = parseInt(neltos, 10) ;
         if (neltos == 0) 
             return "" ;

         basal_segs = JSON.parse(basal_segs_json) ;

	 o = "<center>" +
	     "<table border=0 class=\"none\" cellpadding=2>" +
	     "<tr>" +
	     "<td align=center width=50%><small><b>" + T['BEGIN'] + "</b></small></td>" +
	     "<td align=center width=50%><small><b>" + T['UNI']   + "</b></small></td>" +
	     "</tr>" ;

	 for (i=0; i<neltos; i++)
	 {
		   if (i < basal_segs.length) {
		       bd_i_c = basal_segs[i].c ;
		       bd_i_h = basal_segs[i].h ;
		   } else {
		       bd_i_c = "0" ;
		       if (0 == i) 
		            bd_i_h = "00:00" ;
		       else bd_i_h = "23:59" ;
		   }

		   o += "<tr>" +
			"   <td width=50% height=50% align=center>" +
			"	<input id=s" + i + "t1 name=\"values_basaldef," + i + ",h\" " + 
                        "              onchange=\"var values_basal = ui_basal_form2def(document.formbd); " + 
                        "                       document.formbd.total_area.value = ui_basal_area(values_basal['segments'],'00:00','23:59');" + 
		        "		        return false;\" " +
			"              type=text size=7 data-mini=\"true\" value=\"" + bd_i_h + "\">" +
			"	<script>" +
			"	 $(function(){ $(\"#s" + i + "t1\").scroller({ lang: '" + ls1.lang + "', " + 
			"                                                      preset: 'time', timeFormat : \"HH:ii\" }); });" +
			"	</script> " +
			"   </td> " +
			"   <td>&nbsp;</td> " +
			"</tr>" +
			"<tr>" +
			"    <td height=50% align=center>" +
			"	<div style=\"border-right:1px solid #000; height:55px; width:5%\"></div>" +
			"    </td>" +
			"   <td width=50% valign=middle>" +
			"	<input name=\"values_basaldef," + i + ",c\" " + 
			"              type=number min=0 max=99 step=.01 size=3 data-mini=true data-inline=true" +
                        "              onchange=\"var values_basal = ui_basal_form2def(document.formbd); " + 
                        "                     document.formbd.total_area.value = ui_basal_area(values_basal['segments'],'00:00','23:59');"+ 
		        "		          return false;\" " +
			"              value=\"" + bd_i_c + "\">" +
			"    </td>" +
			"</tr>" ;
	 }

	 o += "<tr>" +
	      "    <td align=center>" + 
	      "	      <input id=s" + i + "t1 name=\"values_basaldef," + i + ",h\" " + 
              "              type=time size=7 readonly value=\"23:59\">" + 
              "    </td>" +
	      "    <td><br></td>" +
	      "</tr>" +
	      "</table>" + 
	      "</center>" ;

	 return o ;
  }

  function ui_basal_area ( basal_segs_json, begin, end )
  {
      var r = 0;

      basal_segs = JSON.parse(basal_segs_json) ;
      if (0 == basal_segs.length)
          return 0;

      var xd_begin = XDate("2011-11-11T" + begin);
      var xd_end   = XDate("2011-11-11T" + end);

      // lookup start and end segments...
      for (m=0; m<basal_segs.length-1; m++) 
      {
           var xd_m   = XDate("2011-11-11T" + basal_segs[m].h);
           var xd_m_1 = XDate("2011-11-11T" + basal_segs[m+1].h);

           if ( (begin >= basal_segs[m].h) && (begin < basal_segs[m+1].h) ) {
                 var i = m ;
                 var xd_i   = xd_m ;
                 var xd_i_1 = xd_m_1 ;
                 var c_i = parseFloat((basal_segs[m].c).replace(",", "."));
           }

           if ( (end >  basal_segs[m].h) && (end <= basal_segs[m+1].h) ) { // TODO <= ó < solo...
                 var j = m ;
                 var xd_j   = xd_m ;
                 var xd_j_1 = xd_m_1 ;
                 var c_j = parseFloat((basal_segs[m].c).replace(",", "."));
           }
      }

      // check the two kinds of solutions...
      if (i==j) 
      {   // type1...
          // r = (end - begin) * basal_segs[i].c;
             r = xd_begin.diffHours(xd_end) * c_i ;
      }
      else
      {   // type2...
          for (var x=i+1; x<j; x++) 
          {
               // r = r + (basal_segs[x+1].h - basal_segs[x].h) * basal_segs[x].c; 
                  var xd_x   = XDate("2011-11-11T" + basal_segs[x].h);
                  var xd_x_1 = XDate("2011-11-11T" + basal_segs[x+1].h);
                  r = r + xd_x.diffHours(xd_x_1) * parseFloat((basal_segs[x].c).replace(",", "."));
          }

          // r = r + (basal_segs[i+1].h - begin) * basal_segs[i].c ;
             r = r + xd_begin.diffHours(xd_i_1) * c_i ;

          // r = r + (end     - basal_segs[j].h) * basal_segs[j].c ;
             r = r + xd_j.diffHours(xd_end) * c_j ;
      }

      return (r - 0.005).toFixed(2) ;  // return r;
  }


  /* Auxiliar functions */

  function dbform_action_db_quick ( Qs, values_measure, values_meal, values_bolus )
  {
	// action - measures
	if (-1 == values_measure['id']) // no existe
	     if (values_measure['measure'] != 0)
		  Q = db_asocArray2insert("measures",values_measure,Array('id'));
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("measures",values_measure,Array('id'));

        if (Q != "")
            Qs.push(Q);


	// action - meals
	if (-1 == values_meal['id']) // no existe
	     if (values_meal['measure'] != 0)
		  Q = db_asocArray2insert("meals",values_meal,Array('id')) ;
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("meals",values_meal,Array('id')) ;

        if (Q != "")
            Qs.push(Q);


	// action - bolus
	if (-1 == values_bolus['id']) // no existe
	     if (values_bolus['units'] != 0)
		  Q = db_asocArray2insert("bolus",values_bolus,Array('id')); 
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("bolus",values_bolus,Array('id')); 

        if (Q != "")
            Qs.push(Q);
  }

  function dbform_action_db_other ( dbinfo, values_other, ok_handler, ko_handler )
  {
        var Qs = new Array() ;

	// action - other
	if (-1 == values_other['id']) // no existe
	     if ("" != values_other['event'])
		  Q = db_asocArray2insert("events",values_other,Array('id'));
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("events",values_other,Array('id'));

        if (Q != "") {
            Qs.push(Q);
            db_execute(dbinfo, Qs, ok_handler, ko_handler) ;
        }
  }

  function dbform_action_db_basal_act ( dbinfo, values_basal_activation, ok_handler, ko_handler )
  {
        var Qs = new Array() ;

	if (-1 == values_basal_activation['id']) // no existe
	     if ("" != values_basal_activation['pattern'])
		  Q = db_asocArray2insert("basal_activations",values_basal_activation,Array('id'));
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("basal_activations",values_basal_activation,Array('id'));

        if (Q != "") {
            Qs.push(Q);
            db_execute(dbinfo, Qs, ok_handler, ko_handler) ;
        }
  }

  function dbform_action_db_basal_def ( dbinfo, values_basal_definition, ok_handler, ko_handler )
  {
        var Qs = new Array() ;

	if (-1 == values_basal_definition['id']) // no existe
	     if (0 != values_basal_definition['neltos'])
		  Q = db_asocArray2insert("basal_definitions",values_basal_definition,Array('id'));
	     else Q = "" ;
	else // existe
		  Q = db_asocArray2update("basal_definitions",values_basal_definition,Array('id'));

        if (Q != "") {
            Qs.push(Q);
            db_execute(dbinfo, Qs, ok_handler, ko_handler) ;
        }
  }

  function dbform_action_db_user ( dbinfo, new_id, old_id )
  {
        Q = new Array();

        Q.push("UPDATE meals    SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE bolus    SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE measures SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE events   SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE basal_definitions SET user=" + new_id + " WHERE user=" + old_id) ;
        Q.push("UPDATE basal_activations SET user=" + new_id + " WHERE user=" + old_id) ;

	db_execute(dbinfo,Q) ;
  }


  /* Main functions */

  function dbform_action_quick ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

	values_measure = new Array();
	values_measure['id']       = form.elements['values_measure[id]'].value ;
	values_measure['name']     = form.elements['values_measure[name]'].value ;
	values_measure['measure']  = form.elements['values_measure[measure]'].value ;
	values_measure['start']    = form.elements['values_measure[start]'].value ;
	values_measure['stop']     = form.elements['values_measure[stop]'].value ;
	values_measure['user']     = form.elements['values_measure[user]'].value ;
	values_measure['device']   = form.elements['values_measure[device]'].value ;
	values_measure['sync']     = dt0 ;

	values_meal = new Array();
	values_meal['id']          = form.elements['values_meal[id]'].value ;
	values_meal['name']        = form.elements['values_meal[name]'].value ;
	values_meal['tag']         = form.elements['values_meal[tag]'].value ;
	values_meal['measure']     = form.elements['values_meal[measure]'].value ;
	values_meal['start']       = form.elements['values_meal[start]'].value ;
	values_meal['stop']        = form.elements['values_meal[stop]'].value ;
	values_meal['user']        = form.elements['values_meal[user]'].value ;
	values_meal['image']       = form.elements['values_meal[image]'].value ;
	values_meal['device']      = form.elements['values_meal[device]'].value ;
	values_meal['sync']        = dt0 ;

	values_bolus = new Array();
	values_bolus['id']         = form.elements['values_bolus[id]'].value ;
	values_bolus['name']       = form.elements['values_bolus[name]'].value ;
	values_bolus['type']       = form.elements['values_bolus[type]'].value ;
	values_bolus['units']      = form.elements['values_bolus[units]'].value ;
	values_bolus['percentage'] = form.elements['values_bolus[percentage]'].value ;
	values_bolus['start']      = form.elements['values_bolus[start]'].value ;
	values_bolus['stop']       = form.elements['values_bolus[stop]'].value ;
	values_bolus['user']       = form.elements['values_bolus[user]'].value ;
	values_bolus['device']     = form.elements['values_bolus[device]'].value ;
	values_bolus['sync']       = dt0 ;

		if (values_bolus['start'] != values_bolus['stop'])
		    values_bolus['type'] = 'square' ;
		if (100 != values_bolus['percentage'])
		    values_bolus['type'] = 'dual' ;

        var Qs = new Array();
        dbform_action_db_quick(Qs, values_measure, values_meal, values_bolus) ;
        if (Qs.length != 0)
            db_execute(rmysql_url, Qs, ok_handler, ko_handler) ;
  }

  function dbform_action_other ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

	values_other = new Array();
	values_other['id']         = form.elements['values_other[id]'].value ;
	values_other['name']       = form.elements['values_other[name]'].value ;
	values_other['event']      = form.elements['values_other[event]'].value ;
	values_other['type']       = form.elements['values_other[type]'].value ;
	values_other['measure']    = form.elements['values_other[measure]'].value ;
	values_other['start']      = form.elements['values_other[start]'].value ;
	values_other['stop']       = form.elements['values_other[stop]'].value ;
	values_other['user']       = form.elements['values_other[user]'].value ;
	values_other['device']     = form.elements['values_other[device]'].value ;
	values_other['image']      = form.elements['values_other[image]'].value ;
	values_other['sync']       = dt0 ;

        dbform_action_db_other(rmysql_url, values_other, ok_handler, ko_handler) ;
  }

  function dbform_action_basal_act ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

	values_basal_activation = new Array();
	values_basal_activation['id']         = form.elements['values_basal_activation[id]'].value ;
	values_basal_activation['pattern']    = form.elements['values_basal_activation[pattern]'].value ;
	values_basal_activation['neltos']     = form.elements['values_basal_activation[neltos]'].value ;
	values_basal_activation['segments']   = form.elements['values_basal_activation[segments]'].value;
	values_basal_activation['percentage'] = form.elements['values_basal_activation[percentage]'].value ;
	values_basal_activation['start']      = form.elements['values_basal_activation[start]'].value ;
	values_basal_activation['user']       = form.elements['values_basal_activation[user]'].value ;
	values_basal_activation['device']     = form.elements['values_basal_activation[device]'].value ;
	values_basal_activation['sync']       = dt0 ;

        dbform_action_db_basal_act(rmysql_url, values_basal_activation, ok_handler, ko_handler) ;
  }

  function dbform_action_basal_def ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

        var values_basal = ui_basal_form2def(form);
	values_basal['sync'] = dt0 ;

        dbform_action_db_basal_def(rmysql_url, values_basal, ok_handler, ko_handler) ;
  }

  function dbform_action_user ( rmysql_url, form )
  {
	new_id = form.elements['values_user[newid]'].value ;
	old_id = form.elements['values_user[oldid]'].value ;

	form.elements['values_user[oldid]'].value    = form.elements['values_user[newid]'].value ;
	form.elements['values_user[oldlogin]'].value = form.elements['values_user[newlogin]'].value ;

        dbform_action_db_user(rmysql_url, new_id, old_id) ;
  }

  function dbform_action_quick_2 ( rmysql_url, form, ok_handler, ko_handler )
  {
        dt_now = XDate() ;
        dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
        dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

        /* 1 */
	values_measure = new Array();
	values_measure['id']       = form.elements['values_measure[id][before]'].value ;
	values_measure['name']     = form.elements['values_measure[name][before]'].value ;
	values_measure['measure']  = form.elements['values_measure[measure][before]'].value ;
	values_measure['start']    = form.elements['values_measure[start][before]'].value ;
	values_measure['stop']     = form.elements['values_measure[stop][before]'].value ;
	values_measure['user']     = form.elements['values_measure[user][before]'].value ;
	values_measure['device']   = form.elements['values_measure[device][before]'].value ;
	values_measure['sync']     = dt0 ;

	values_meal = new Array();
	values_meal['id']          = form.elements['values_meal[id][before]'].value ;
	values_meal['name']        = form.elements['values_meal[name][before]'].value ;
	values_meal['tag']         = form.elements['values_meal[tag][before]'].value ;
	values_meal['measure']     = form.elements['values_meal[measure][before]'].value ;
	values_meal['start']       = form.elements['values_meal[start][before]'].value ;
	values_meal['stop']        = form.elements['values_meal[stop][before]'].value ;
	values_meal['user']        = form.elements['values_meal[user][before]'].value ;
	values_meal['image']       = form.elements['values_meal[image][before]'].value ;
	values_meal['device']      = form.elements['values_meal[device][before]'].value ;
	values_meal['sync']        = dt0 ;

	values_bolus = new Array();
	values_bolus['id']         = form.elements['values_bolus[id][before]'].value ;
	values_bolus['name']       = form.elements['values_bolus[name][before]'].value ;
	values_bolus['type']       = form.elements['values_bolus[type][before]'].value ;
	values_bolus['units']      = form.elements['values_bolus[units][before]'].value ;
	values_bolus['percentage'] = form.elements['values_bolus[percentage][before]'].value ;
	values_bolus['start']      = form.elements['values_bolus[start][before]'].value ;
	values_bolus['stop']       = form.elements['values_bolus[stop][before]'].value ;
	values_bolus['user']       = form.elements['values_bolus[user][before]'].value ;
	values_bolus['device']     = form.elements['values_bolus[device][before]'].value ;
	values_bolus['sync']       = dt0 ;

		if (values_bolus['start'] != values_bolus['stop'])
		    values_bolus['type'] = 'square' ;
		if (100 != values_bolus['percentage'])
		    values_bolus['type'] = 'dual' ;

        var Qs = new Array();
        dbform_action_db_quick(Qs, values_measure, values_meal, values_bolus) ;

        /* 2 */
	values_measure['id']       = form.elements['values_measure[id][after]'].value ;
	values_measure['name']     = form.elements['values_measure[name][after]'].value ;
	values_measure['measure']  = form.elements['values_measure[measure][after]'].value ;
	values_measure['start']    = form.elements['values_measure[start][after]'].value ;
	values_measure['stop']     = form.elements['values_measure[stop][after]'].value ;
	values_measure['user']     = form.elements['values_measure[user][after]'].value ;
	values_measure['device']   = form.elements['values_measure[device][after]'].value ;
	values_measure['sync']     = dt0 ;

	values_meal['id']          = form.elements['values_meal[id][after]'].value ;
	values_meal['name']        = form.elements['values_meal[name][after]'].value ;
	values_meal['tag']         = form.elements['values_meal[tag][after]'].value ;
	values_meal['measure']     = form.elements['values_meal[measure][after]'].value ;
	values_meal['start']       = form.elements['values_meal[start][after]'].value ;
	values_meal['stop']        = form.elements['values_meal[stop][after]'].value ;
	values_meal['user']        = form.elements['values_meal[user][after]'].value ;
	values_meal['image']       = form.elements['values_meal[image][after]'].value ;
	values_meal['device']      = form.elements['values_meal[device][after]'].value ;
	values_meal['sync']        = dt0 ;

	values_bolus['id']         = form.elements['values_bolus[id][after]'].value ;
	values_bolus['name']       = form.elements['values_bolus[name][after]'].value ;
	values_bolus['type']       = form.elements['values_bolus[type][after]'].value ;
	values_bolus['units']      = form.elements['values_bolus[units][after]'].value ;
	values_bolus['percentage'] = form.elements['values_bolus[percentage][after]'].value ;
	values_bolus['start']      = form.elements['values_bolus[start][after]'].value ;
	values_bolus['stop']       = form.elements['values_bolus[stop][after]'].value ;
	values_bolus['user']       = form.elements['values_bolus[user][after]'].value ;
	values_bolus['device']     = form.elements['values_bolus[device][after]'].value ;
	values_bolus['sync']       = dt0 ;

		if (values_bolus['start'] != values_bolus['stop'])
		    values_bolus['type'] = 'square' ;
		if (100 != values_bolus['percentage'])
		    values_bolus['type'] = 'dual' ;

        dbform_action_db_quick(Qs, values_measure, values_meal, values_bolus) ;
        if (Qs.length != 0)
            db_execute(rmysql_url, Qs, ok_handler, ko_handler) ;
  }


  function dbform_fill0_quick ( form, now, value_name )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }
          if (typeof value_name === 'undefined') {
	      value_name = "" ;
          }

	  var name_index_tr = { "": 0, "A0": 1, "D0": 2, "A1": 3, "D1": 4, "A2": 5, "D2": 6, "A3": 7, "D3": 8, "A4": 9 } ;

	  form.elements['values_measure[id]'].value           = -1;
	  form.elements['values_measure[user]'].value         = ls1.user_id;
	  form.elements['values_measure[device]'].value       = ls1.device_id;
	  form.elements['values_measure[start]'].value        = now ;
	  form.elements['values_measure[stop]'].value         = now ;
	  form.elements['values_measure[measure]'].value      = 0 ;
	  form.elements['values_measure[name]'].value         = value_name ;
	  form.elements['values_measure[name]'].selectedIndex = name_index_tr[value_name];

              var select2 = $("#page10gn") ;
              var option4 = $($("option", select2).get(name_index_tr[value_name]));
              option4.attr('selected', true);
              select2.selectmenu() ;
              select2.selectmenu("refresh", true) ;

	  form.elements['values_bolus[id]'].value          = -1;
	  form.elements['values_bolus[user]'].value        = ls1.user_id;
	  form.elements['values_bolus[device]'].value      = ls1.device_id;
	  form.elements['values_bolus[type]'].value        = 'normal';
	  form.elements['values_bolus[units]'].value       = 0 ;
	  form.elements['values_bolus[percentage]'].value  = 100;
	  form.elements['values_bolus[start]'].value       = now ;
	  form.elements['values_bolus[stop]'].value        = now ;
	  form.elements['values_bolus[name]'].value        = value_name ;

              $("#page10md1").hide();

	  form.elements['values_meal[id]'].value         = -1;
	  form.elements['values_meal[user]'].value       = ls1.user_id;
	  form.elements['values_meal[device]'].value     = ls1.device_id;
	  form.elements['values_meal[start]'].value      = now ;
	  form.elements['values_meal[stop]'].value       = now ;
	  form.elements['values_meal[name]'].value       = value_name ;
	  form.elements['values_meal[tag]'].value        = '' ;
	  form.elements['values_meal[measure]'].value    = 0 ;
	  form.elements['values_meal[image]'].value      = '' ;

              $("#page10md2").hide();

	  dbform_camera_success('#qimage','qimage2','qimage3',''); 
  }

  function dbform_fill0_other ( form, now, value_name )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }
          if (typeof value_name === 'undefined') {
	      value_name = "" ;
          }

	  form.elements['values_other[id]'].value      = -1;
	  form.elements['values_other[name]'].value    = value_name ;
	  form.elements['values_other[event]'].value   = "" ;
	  form.elements['values_other[type]'].value    = "" ;
	  form.elements['values_other[measure]'].value = "" ;
	  form.elements['values_other[start]'].value   = now ;
	  form.elements['values_other[stop]'].value    = now ;
	  form.elements['values_other[user]'].value    = ls1.user_id;
	  form.elements['values_other[device]'].value  = ls1.device_id;
  }

  function dbform_fill0_basalactivation ( form, now )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }

	  form.elements['values_basal_activation[id]'].value           = -1;
	  form.elements['values_basal_activation[user]'].value         = ls1.user_id;
	  form.elements['values_basal_activation[device]'].value       = ls1.device_id;
	  form.elements['values_basal_activation[start]'].value        = now ;
	  form.elements['values_basal_activation[percentage]'].value   = 100 ;
	  form.elements['values_basal_activation[neltos]'].value       = 0 ;
	  form.elements['values_basal_activation[segments]'].value     = '' ;

	  $("#ba_segments1").val('') ;

          ui_basal_fillselect(vector_details, "#ba_pattern", "standard");
  }

  function dbform_fill0_basaldefinition ( form, now )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }

	  form.elements['values_basaldef,id'].value      = -1;
	  form.elements['values_basaldef,user'].value    = ls1.user_id;
	  form.elements['values_basaldef,device'].value  = ls1.device_id;
	  form.elements['values_basaldef,pattern'].value = '';

	  form.elements['total_area'].value = 0;
	  form.elements['neltos'].value     = 0;
          var select2 = $("#neltos").selectmenu().selectmenu("refresh", true) ;

          $("#basal_sections").html("").trigger("refresh");

          ui_basal_fillselect(vector_details, "#bd_pattern_list", "") ;
  }

  function dbform_fill0_quick_2 ( form, now, value_name )
  {
          if (typeof now === 'undefined') {
	      dt = new XDate() ;
              dt.addHours(2) ;
	      now = dt.toUTCString('yyyy-MM-dd HH:mm:ssz') ; // toUTCString: 2013-04-25T18:53:00Z
	      now = now.substr(0,10) + 'T' + now.substr(11);
          }
          if (typeof value_name === 'undefined') {
	      value_name = "" ;
          }

	  var name_index_tr = { "": 0, "A0": 1, "D0": 2, "A1": 3, "D1": 4, "A2": 5, "D2": 6, "A3": 7, "D3": 8, "A4": 9 } ;

	  form.elements['values_measure[id][before]'].value           = -1;
	  form.elements['values_measure[user][before]'].value         = ls1.user_id;
	  form.elements['values_measure[device][before]'].value       = ls1.device_id;
	  form.elements['values_measure[start][before]'].value        = now ;
	  form.elements['values_measure[stop][before]'].value         = now ;
	  form.elements['values_measure[measure][before]'].value      = 0 ;
	  form.elements['values_measure[name][before]'].value         = value_name ;
	  form.elements['values_measure[name][before]'].selectedIndex = name_index_tr[value_name];

		  form.elements['values_measure[id][after]'].value           = -1;
		  form.elements['values_measure[user][after]'].value         = ls1.user_id;
		  form.elements['values_measure[device][after]'].value       = ls1.device_id;
		  form.elements['values_measure[start][after]'].value        = now ;
		  form.elements['values_measure[stop][after]'].value         = now ;
		  form.elements['values_measure[measure][after]'].value      = 0 ;
		  form.elements['values_measure[name][after]'].value         = value_name ;
		  form.elements['values_measure[name][after]'].selectedIndex = name_index_tr[value_name];

	  form.elements['values_bolus[id][before]'].value          = -1;
	  form.elements['values_bolus[user][before]'].value        = ls1.user_id;
	  form.elements['values_bolus[device][before]'].value      = ls1.device_id;
	  form.elements['values_bolus[type][before]'].value        = 'normal';
	  form.elements['values_bolus[units][before]'].value       = 0 ;
	  form.elements['values_bolus[percentage][before]'].value  = 100;
	  form.elements['values_bolus[start][before]'].value       = now ;
	  form.elements['values_bolus[stop][before]'].value        = now ;
	  form.elements['values_bolus[name][before]'].value        = value_name ;

		  form.elements['values_bolus[id][after]'].value          = -1;
		  form.elements['values_bolus[user][after]'].value        = ls1.user_id;
		  form.elements['values_bolus[device][after]'].value      = ls1.device_id;
		  form.elements['values_bolus[type][after]'].value        = 'normal';
		  form.elements['values_bolus[units][after]'].value       = 0 ;
		  form.elements['values_bolus[percentage][after]'].value  = 100;
		  form.elements['values_bolus[start][after]'].value       = now ;
		  form.elements['values_bolus[stop][after]'].value        = now ;
		  form.elements['values_bolus[name][after]'].value        = value_name ;

	  form.elements['values_meal[id][before]'].value         = -1;
	  form.elements['values_meal[user][before]'].value       = ls1.user_id;
	  form.elements['values_meal[device][before]'].value     = ls1.device_id;
	  form.elements['values_meal[start][before]'].value      = now ;
	  form.elements['values_meal[stop][before]'].value       = now ;
	  form.elements['values_meal[name][before]'].value       = value_name ;
	  form.elements['values_meal[tag][before]'].value        = '' ;
	  form.elements['values_meal[measure][before]'].value    = 0 ;
	  form.elements['values_meal[image][before]'].value      = '' ;

		  form.elements['values_meal[id][after]'].value          = -1;
		  form.elements['values_meal[user][after]'].value        = ls1.user_id;
		  form.elements['values_meal[device][after]'].value      = ls1.device_id;
		  form.elements['values_meal[start][after]'].value       = now ;
		  form.elements['values_meal[stop][after]'].value        = now ;
		  form.elements['values_meal[name][after]'].value        = value_name ;
		  form.elements['values_meal[tag][after]'].value         = '' ;
		  form.elements['values_meal[measure][after]'].value     = 0 ;
		  form.elements['values_meal[image][after]'].value       = '' ;

	  dbform_camera_success('#vimageA','vimage2A','vimage3A',''); 
	  dbform_camera_success('#vimageB','vimage2B','vimage3B',''); 
  }


  function dbform_fill2_quick ( form, json_meal, json_measure, json_bolus )
  {
	  var name_index_tr = { "": 0, "A0": 1, "D0": 2, "A1": 3, "D1": 4, "A2": 5, "D2": 6, "A3": 7, "D3": 8, "A4": 9 } ;

          values_meal    = JSON.parse(unescape(json_meal)) ;
          values_measure = JSON.parse(unescape(json_measure)) ;
          values_bolus   = JSON.parse(unescape(json_bolus)) ;

          // fill the default date & name
          if (-1 == values_bolus['id'])
              if (-1 == values_measure['id']) {
                   values_bolus['name']  = values_meal['name'] ;
                   values_bolus['start'] = values_meal['start'] ;
                   values_bolus['stop']  = values_meal['stop'] ;
              } else { 
                   values_bolus['name']  = values_measure['name'] ;
                   values_bolus['start'] = values_measure['start'] ;
                   values_bolus['stop']  = values_measure['stop'] ;
              }
          if (-1 == values_meal['id'])
              if (-1 == values_measure['id']) {
                   values_meal['name']  = values_bolus['name'] ;
                   values_meal['start'] = values_bolus['start'] ;
                   values_meal['stop']  = values_bolus['stop'] ;
              } else { 
                   values_meal['name']  = values_measure['name'] ;
                   values_meal['start'] = values_measure['start'] ;
                   values_meal['stop']  = values_measure['stop'] ;
              }
          if (-1 == values_measure['id'])
              if (-1 == values_meal['id']) {
                   values_measure['name']  = values_bolus['name'] ;
                   values_measure['start'] = values_bolus['start'] ;
                   values_measure['stop']  = values_bolus['stop'] ;
              } else { 
                   values_measure['name']  = values_meal['name'] ;
                   values_measure['start'] = values_meal['start'] ;
                   values_measure['stop']  = values_meal['stop'] ;
              }

          dbform_fill0_quick(form, values_measure['start'], values_measure['name']) ;

	  form.elements['values_measure[stop]'].value  = values_measure['stop'] ;
	  form.elements['values_bolus[stop]'].value    = values_bolus['stop'] ;
	  form.elements['values_meal[stop]'].value     = values_meal['stop'] ;

	  if (values_measure['id'] != -1) 
          {
	      form.elements['values_measure[id]'].value           = values_measure['id'] ;
	      form.elements['values_measure[user]'].value         = values_measure['user'] ;
	      form.elements['values_measure[device]'].value       = values_measure['device'] ;
	      form.elements['values_measure[measure]'].value      = values_measure['measure'] ;
	      form.elements['values_measure[name]'].value         = values_measure['name'] ;
	      form.elements['values_measure[name]'].selectedIndex = name_index_tr[values_measure['name']];

		      var select2 = $("#page10gn") ;
		      var option4 = $($("option", select2).get(name_index_tr[values_measure['name']]));
		      option4.attr('selected', true);
		      select2.selectmenu() ;
		      select2.selectmenu("refresh", true) ;
          }
  
	  if (values_bolus['id'] != -1) 
          {
	      form.elements['values_bolus[id]'].value          = values_bolus['id'] ;
	      form.elements['values_bolus[user]'].value        = values_bolus['user'] ;
	      form.elements['values_bolus[device]'].value      = values_bolus['device'] ;
	      form.elements['values_bolus[type]'].value        = values_bolus['type'] ;
	      form.elements['values_bolus[units]'].value       = values_bolus['units'] ;
	      form.elements['values_bolus[percentage]'].value  = values_bolus['percentage'] ;
	      form.elements['values_bolus[name]'].value        = values_bolus['name'] ;

                      if (parseInt(values_bolus['units'], 10) != 0)
                           $("#page10md1").show();
                      else $("#page10md1").hide();

                      $("#page10bap1").slider("refresh");
          }

	  if (values_meal['id'] != -1) 
          {
	      form.elements['values_meal[id]'].value         = values_meal['id'] ;
	      form.elements['values_meal[user]'].value       = values_meal['user'] ;
	      form.elements['values_meal[device]'].value     = values_meal['device'] ;
	      form.elements['values_meal[name]'].value       = values_meal['name'] ;
	      form.elements['values_meal[tag]'].value        = values_meal['tag'] ;
	      form.elements['values_meal[measure]'].value    = values_meal['measure'] ;
	      form.elements['values_meal[image]'].value      = values_meal['image'] ;

                      if (parseInt(values_meal['measure'], 10) != 0)
                           $("#page10md2").show();
                      else $("#page10md2").hide();

              var image_src = "" ;
	      if (values_meal['image'] != "")
	           image_src = values_meal['image'] ;
	      else image_src = "icons/meal2.png" ;

	      var image = document.getElementById('qimage2');
	      if (image != null)
	          image.src = image_src ;

	      var image = document.getElementById('qimage3');
	      if (image != null)
	          image.src = image_src ;
          }
  }

  function dbform_fill2_other ( form, json_other )
  {
          values_other = JSON.parse(unescape(json_other)) ;

          dbform_fill0_other(form, values_other['start'], values_other['name']) ;

	  form.elements['values_other[stop]'].value    = values_other['stop'] ;

	  if (values_other['id'] != -1) 
          {
	      form.elements['values_other[id]'].value      = values_other['id'] ;
	      form.elements['values_other[name]'].value    = values_other['name'] ;
	      form.elements['values_other[event]'].value   = values_other['event'] ;
	      form.elements['values_other[type]'].value    = values_other['type'] ;
	      form.elements['values_other[measure]'].value = values_other['measure'] ;
	      form.elements['values_other[user]'].value    = values_other['user'] ;
	      form.elements['values_other[device]'].value  = values_other['device'] ;

	      var image = document.getElementById('oimage2');
	      if (image != null)
	          image.src = values_other['image'] ;

	      var image = document.getElementById('oimage3');
	      if (image != null)
	          image.src = values_other['image'] ;
          }
  }

  function dbform_fill2_basalactivation ( form, json_ba )
  {
          values_basal_activation = JSON.parse(unescape(json_ba)) ;

          dbform_fill0_basalactivation(form, values_basal_activation['start']) ;

	  if (values_basal_activation['id'] != -1) 
          {
	      form.elements['values_basal_activation[id]'].value         = values_basal_activation['id'] ;
	      form.elements['values_basal_activation[user]'].value       = values_basal_activation['user'] ;
	      form.elements['values_basal_activation[device]'].value     = values_basal_activation['device'] ;
	      form.elements['values_basal_activation[pattern]'].value    = values_basal_activation['pattern'] ;
	      form.elements['values_basal_activation[neltos]'].value     = values_basal_activation['neltos'] ;
	      form.elements['values_basal_activation[segments]'].value   = values_basal_activation['segments'] ;
	      form.elements['values_basal_activation[percentage]'].value = values_basal_activation['percentage'] ;

	      var segs = JSON.parse(values_basal_activation['segments']) ;
              var res  = dbform_fill_segments(segs) ;

              $("#ba_segments1").val(res.short_v) ;
              $("#ba_segments2").html(res.long_v) ;

              $("#bap1").slider("refresh");

              var select2  = $("#ba_pattern") ;
                var bpattern = values_basal_activation['pattern'] ;
                var options2 = $("option", select2) ;
                var refopt4  = options2.get(bpattern) ;
	        if (typeof refopt4 === 'undefined') {
                    refopt4 = $("<option>").attr('selected',true).attr('value',bpattern).text(bpattern) ;
                    select2.append(refopt4) ;
                }
	 	else $(refopt4).attr('selected', true);
              select2.selectmenu() ;
              select2.selectmenu("refresh", true) ;
          }
  }


  function daytag_details_name ( details, name_k, hour_begin, hour_end )
  {
        k = new Object() ;
        k.GU = "" ;
        k.MU = "" ;
        k.BU = "" ;

        hour_begin = parseInt(hour_begin, 10);
        hour_end   = parseInt(hour_end, 10);

        for (k_hour in details) 
        {
                keyh = parseInt(k_hour.slice(0,2), 10);
                keym = parseInt(k_hour.slice(3,5), 10);

                if (keyh <  hour_begin) continue ;
                if (keyh >= hour_end)   continue ;

	        if (details[k_hour]['meal'])
		    if (details[k_hour]['meal']['name'] == name_k) 
			  k.MU = details[k_hour]['meal']['measure'] ;

	        if (details[k_hour]['measure'])
		    if (details[k_hour]['measure']['name'] == name_k) 
			  k.GU = details[k_hour]['measure']['measure'] ;

	        if (details[k_hour]['bolus'])
		    if (details[k_hour]['bolus']['name'] == name_k) 
			  k.BU = details[k_hour]['bolus']['units'] ;
        }

        k.empty = 0 ;
	if ( (k.GU == "") && (k.MU == "") && (k.BU == "") )
              k.empty = 1 ;

        return k ;
  }

  function daytag_details ( month, year, details, name_k, defdate, hour_begin, hour_end, back_url )
  {
        values_meal    = new Object() ;
        values_measure = new Object() ;
        values_bolus   = new Object() ;
        values_other   = new Object() ;

	values_meal['id']    = values_measure['id']    = values_bolus['id']    = values_other['id']    = "-1";
	values_meal['start'] = values_measure['start'] = values_bolus['start'] = values_other['start'] = defdate;
	values_meal['stop']  = values_measure['stop']  = values_bolus['stop']  = values_other['stop']  = defdate;

        GT = MT = BT = OT = "" ;
        GM = MM = BM = OM = "&nbsp;" ;

        hour_begin = parseInt(hour_begin, 10);
        hour_end   = parseInt(hour_end, 10);

        for (k_hour in details) 
        {
                keyh = parseInt(k_hour.slice(0,2), 10);
                keym = parseInt(k_hour.slice(3,5), 10);

                if (keyh <  hour_begin) continue ;
                if (keyh >= hour_end)   continue ;

	        if (details[k_hour]['meal'])
		    if (details[k_hour]['meal']['name'] == name_k) {
                          values_meal = details[k_hour]['meal'] ;
			  MT = k_hour ;
                          MM = values_meal['measure'] ;
		    }

	        if (details[k_hour]['measure'])
		    if (details[k_hour]['measure']['name'] == name_k) {
                          values_measure = details[k_hour]['measure'] ;
			  GT = k_hour ;
                          GM = values_measure['measure'] ;
		    }

	        if (details[k_hour]['bolus'])
		    if (details[k_hour]['bolus']['name'] == name_k) {
                          values_bolus = details[k_hour]['bolus'] ;
			  BT = k_hour ;
                          BM = values_bolus['units'] ;
		    }

	        if (details[k_hour]['other'])
		    if (details[k_hour]['other']['name'] == name_k) {
                          values_other = details[k_hour]['other'] ;
			  OT = k_hour ;
                          OM = values_other['measure'] ;
		    }

		if ( (GT != "") || (MT != "") || (BT != "") ) 
                      break ;
        }

        o = new Object() ;
        o.empty = 0 ;
	if ( (GT == "") && (MT == "") && (BT == "") )
              o.empty = 1 ;

	// comprimir las horas -> si se repite se pone en su lugar =
	if (GT != "") 
	{
	    if (GT == MT) MT="<font size=+0>=</font>";
	    if (GT == BT) BT="<font size=+0>=</font>";
	}
	else if (BT != "") 
	{
	    if (BT == MT) MT="<font size=+0>=</font>";
	}

        // generate the details
	o.str = "" +
	    "  <table border=0 width=100% bgcolor=white>\n" +
	    "  <tr height=60%>\n" +
	    "    <td align=left width=20%>\n" + 
	    "      <div type=submit class=square_button3 data-role=\"none\">\n" +
	    "        <font color=blue><b>" + MM + "</b></font>" + "&nbsp;" + "\n" +
	    "      </div>\n" +
	    "    </td>\n" +
	    "    <td align=center width=60%>\n" +
	    "      <div type=submit class=square_button2 data-role=\"none\">\n" +
	    "        <font color=black><b>" + GM + "</b></font>" + "&nbsp;" + "\n" +
	    "      </div>\n" +
	    "    </td>\n" +
	    "    <td align=right width=20%>\n" +
	    "      <div type=submit class=square_button1 data-role=\"none\">\n" +
	    "        <font color=red><b>" + BM + "</b></font>" + "&nbsp;" + "\n" +
	    "      </div>\n" +
	    "    </td>\n" +
	    "  </tr>\n" +
	    "  <tr height=40%>\n" +
	    "    <td colspan=3 align=center>\n" + 
	    "      <div type=submit class=square_button2 data-role=\"none\" " + 
            "              onclick=\"" + 
                            " $.mobile.changePage('#page-quickmenu');" + 
                            " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                            " $('form#form10x').attr('action','#" + back_url + "');" +
                            " $('form#form11x').attr('action','#" + back_url + "');" +
                            " dbform_fill2_quick("   + "document.form10x"             + ", " + 
                                                 "'" + escape(JSON.stringify(values_meal))    + "'," + 
                                                 "'" + escape(JSON.stringify(values_measure)) + "'," + 
                                                 "'" + escape(JSON.stringify(values_bolus))   + "'); " + 
                            " dbform_fill2_other("   + "document.form11x"             + ", " + 
                                                 "'" + escape(JSON.stringify(values_other))   + "'); " + 
                           "\">\n" +
	    "      [ <b><font color=blue>" + MT + "</font>" + GT + " " + "<font color=red>" + BT + "</font></b> ]" +
	    "    </div>\n" +
	    "    </td>\n" +
	    "  </tr>\n" +
	    "  </table>\n" ;

        return o ;
  }

	function daytag_errorHandler(e) 
	{
	   var msg = '';
	   switch (e.code) 
	   {
	     case FileError.QUOTA_EXCEEDED_ERR:
		msg = 'QUOTA_EXCEEDED_ERR';
		break;
	     case FileError.NOT_FOUND_ERR:
		msg = 'NOT_FOUND_ERR';
		break;
	     case FileError.SECURITY_ERR:
		msg = 'SECURITY_ERR';
		break;
	     case FileError.INVALID_MODIFICATION_ERR:
		msg = 'INVALID_MODIFICATION_ERR';
		break;
	     case FileError.INVALID_STATE_ERR:
		msg = 'INVALID_STATE_ERR';
		break;
	     default:
		msg = 'Unknown Error';
		break;
	   };
	   console.log('Error: ' + msg);
	}

  function daytag_target_translation ( name )
  {
        if ('A4' == name)
            return '<img height=22 src=\"icons/at-night.jpg\">' ;
        if ('A' == name[0])
            return '<img height=20 src=\"icons/before-meal-4.gif\">' ;
        if ('D' == name[0])
            return '<img height=20 src=\"icons/after-meal.jpg\">' ;

        return '' ;
  }

  function daytag_summary ( details, defdate, hour_begin, hour_end, back_url )
  {
        hour_begin = parseInt(hour_begin, 10);
        hour_end   = parseInt(hour_end, 10);

        // order members of a object (remember there is not associative arrays in javascript)...
        var details_order = [];
        for (var key in details) 
        {
             keyh = parseInt(key.slice(0,2), 10);
             keym = parseInt(key.slice(3,5), 10);

             if (keyh <  hour_begin) continue ;
             if (keyh >= hour_end)   continue ;

             key_order = keyh*60 + keym ;
             details_order.push([key_order, key]);
        }
	details_order.sort(function(a, b) { a = a[0]; b = b[0]; return a < b ? -1 : (a > b ? 1 : 0); });

        if (0 == details_order.length) 
            return "" ;

        // print summary...
        o = "<table border=0 width=100%>" ;

        //console.log('ui_daytag.daytag_summary.details_order.length: ' + details_order.length);
        for (var i=0; i<details_order.length; i++) 
        {
		k_hour = details_order[i][1] ;

	        values_meal    = new Object() ; values_meal['id']    = -1; values_meal['start']    = defdate;
	        values_measure = new Object() ; values_measure['id'] = -1; values_measure['start'] = defdate;
	        values_bolus   = new Object() ; values_bolus['id']   = -1; values_bolus['start']   = defdate;
	        values_other   = new Object() ; values_other['id']   = -1; values_other['start']   = defdate;

		for (k_type in details[k_hour])
		{
		   if (details[k_hour][k_type]['name'] != "")
			s_type = "tag"   + "_" + k_type ;
		   else s_type = "untag" + "_" + k_type ;

                   //console.log('ui_daytag.daytag_summary.details[k_hour][k_type]s_type: ' + JSON.stringify(details[k_hour][k_type]));
		   switch (s_type)
		   {
		       case 'tag_meal':
		       case 'untag_meal':

                            values_meal = details[k_hour]['meal'] ;

			    tag = "" ;
			    if (s_type == "tag_meal")
				tag = "<br><c>" + daytag_target_translation(details[k_hour][k_type]['name']) + "</c>" ; 

			    associated_measure_m  = "&nbsp;";
			    if (details[k_hour]['measure'])
				if (details[k_hour]['measure']['name'] == details[k_hour][k_type]['name']) {
				    associated_measure_m = details[k_hour]['measure']['measure'] ;
                                    values_measure       = details[k_hour]['measure'] ;
                                }

			    associated_bolus_u  = "&nbsp;";
			    if (details[k_hour]['bolus'])
				if (details[k_hour]['bolus']['name'] == details[k_hour][k_type]['name']) {
				    associated_bolus_u  = details[k_hour]['bolus']['units'] + "u" ;
                                    values_bolus        = details[k_hour]['bolus'] ;
                                }

                            img_id1 = "mi" + values_meal['id'] + "a" ;

                            if ( ("" != values_meal['image']) && (null != values_meal['image']) )
                            {
				 if (ls1.device_id == values_meal['device'])
                                      srcimage = values_meal['image'];
				 else srcimage = ls1.local_storage_img + '/' +
                                                 values_meal['image'].replace(/\\/g,'/').replace( /.*\//, '' ) ;

                                 meal_image1 = "<img id=" + img_id1 + " rel=meals " +
					       "     height=80 style=\"max-height:512px;\" " + 
					       "     class=lazy src=icons/empty_dish.jpg data-original=\"" + srcimage + "\">";
                            }
                            else
                            {
			         if ( (associated_measure_m != "&nbsp;") && (associated_bolus_u == "&nbsp;") )
                                      srcimage = "icons/empty_ta-5.png" ;
                                 else srcimage = "icons/empty_dish.jpg" ;

                                 meal_image1 = "<img id=" + img_id1 + " rel=meals " +
					       "     height=80 style=\"max-height:512px;\" " + 
                                               "     src=\"" + srcimage + "\">" ;
                            }

                            // console.log('ui_daytag.daytag_summary.*_meal: update o');
			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + tag + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:35px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:35px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "   <table border=1 class=\"em_table\" width=100%>\n" +
				    "   <tr>\n" +
				    "   <td align=center width=15%>\n" +
				    "     <font size=2><b>" +
				    "     <div class=square_button4 data-role=\"none\"\n" +
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
                                                    " $('#p-qm-mmb').collapsible('expand');" +
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form10x').attr('action','#" + back_url + "');" +
						    " dbform_fill2_quick("   + "document.form10x"             + ", " + 
								         "'" + escape(JSON.stringify(values_meal))    + "'," + 
								         "'" + escape(JSON.stringify(values_measure)) + "'," + 
								         "'" + escape(JSON.stringify(values_bolus))   + "'); " + 
						   "\">\n" +
				              details[k_hour][k_type]['measure'] + "r" +
				    "     </div>\n" +
				    "     </b></font>" +
				    "   </td>\n" +
				    "   <td align=center rowspan=3 width=85%>\n" +
				    "    <a href=" + srcimage + 
                                    "       rel=lightbox-meals " + 
				    "       title=\"" + 
					      T['DESCRIPTION'] + ": " + details[k_hour][k_type]['tag'] + "<br>" + 
					      T['RATIONS']     + ": " + details[k_hour][k_type]['measure'] + "\">" + meal_image1 + "</a>" +
				    "     <br><font size=2><b>" + details[k_hour][k_type]['tag'] + "</b></font>" +
				    "   </td>\n" +
				    "   </tr>\n" +
				    "   <tr>\n" +
				    "   <td align=center width=15%><font size=2><b>" + associated_measure_m + "</b></font></td>\n" +
				    "   </tr>\n" +
				    "   <tr>\n" +
				    "   <td align=center width=15%><font size=2><b>" + associated_bolus_u   + "</b></font></td>\n" +
				    "   </tr>\n" +
				    "   </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;

		       case 'tag_bolus':
		       case 'untag_bolus':

                            values_bolus = details[k_hour]['bolus'] ;

			    if (details[k_hour][k_type]['type'] == "normal")
				 associated_stop = "&nbsp;" ;
			    else associated_stop = details[k_hour][k_type]['stop'] ;

			    tag = "" ;
			    if (s_type == "tag_bolus")
				tag = "<br><c>" + daytag_target_translation(details[k_hour][k_type]['name']) + "</c>" ; 

			    associated_measure_m     = "&nbsp;";
			    if (details[k_hour]['measure'])
				if (details[k_hour]['measure']['name'] == details[k_hour][k_type]['name']) {
				    associated_measure_m  = details[k_hour]['measure']['measure'] ;
                                    values_measure        = details[k_hour]['measure'] ;
                                }

			    associated_meal_r     = "&nbsp;";
			    if (details[k_hour]['meal'])
				if (details[k_hour]['meal']['name'] == details[k_hour][k_type]['name']) {
				    associated_meal_r = details[k_hour]['meal']['measure'] ;
                                    values_meal       = details[k_hour]['meal'] ;
                                }

			    if (associated_meal_r == "&nbsp;")
			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + tag + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "  <table border=1 class=\"em_table\" width=100%>\n" +
				    "  <tr>\n" +
				    "  <td align=center width=15%>\n" +
				    "   <font size=2><b>" +
				    "    <div class=square_button4 data-role=none" + 
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
                                                    " $('#p-qm-mmb').collapsible('expand');" +
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form10x').attr('action','#" + back_url + "');" +
						    " dbform_fill2_quick("   + "document.form10x"             + ", " + 
								         "'" + escape(JSON.stringify(values_meal))    + "'," + 
								         "'" + escape(JSON.stringify(values_measure)) + "'," + 
								         "'" + escape(JSON.stringify(values_bolus))   + "'); " + 
						   "\">\n" + 
                                            details[k_hour][k_type]['units'] + "u</div>\n" +
				    "   </b></font>" +
				    "  </td>\n" +
				    "  <td align=center rowspan=2 width=85%>\n" +
				    "    <font size=2><b>" + details[k_hour][k_type]['type'] + " &nbsp; " + 
							     details[k_hour][k_type]['percentage'] + "% <br>" + 
					 associated_stop + "</b></font>" +
				    "  </td>\n" +
				    "  </tr>\n" +
				    "   <tr>\n" +
				    "   <td align=center width=15%><font size=2><b>" + associated_measure_m + "</b></font></td>\n" +
				    "   </tr>\n" +
				    "  </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;

		       case 'tag_measure':
		       case 'untag_measure':

                            values_measure = details[k_hour]['measure'] ;

			    tag = "" ;
			    if (s_type == "tag_measure")
				tag = "<br><c>" + daytag_target_translation(details[k_hour][k_type]['name']) + "</c>" ; 

			    associated_meal_r  = "&nbsp;";
			    if (details[k_hour]['meal'])
				if (details[k_hour]['meal']['name'] == details[k_hour][k_type]['name']) {
				    associated_meal_r = details[k_hour]['meal']['measure'] ;
                                    values_meal       = details[k_hour]['meal'] ;
                                }

			    associated_bolus_u  = "&nbsp;";
			    if (details[k_hour]['bolus'])
				if (details[k_hour]['bolus']['name'] == details[k_hour][k_type]['name']) {
				    associated_bolus_u = details[k_hour]['bolus']['units'] + "u" ;
                                    values_bolus       = details[k_hour]['bolus'] ;
                                }

			    if ((associated_meal_r == "&nbsp;") && (associated_bolus_u == "&nbsp;"))
			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + tag + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "  <table border=1 class=\"em_table\" width=100%>\n" +
				    "  <tr>\n" +
				    "  <td align=center width=15%>\n" +
				    "   <font size=2><b>" +
				    "    <div class=square_button4 data-role=none" + 
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
                                                    " $('#p-qm-mmb').collapsible('expand');" +
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form10x').attr('action','#" + back_url + "');" +
						    " dbform_fill2_quick("   + "document.form10x"             + ", " + 
								         "'" + escape(JSON.stringify(values_meal))    + "'," + 
								         "'" + escape(JSON.stringify(values_measure)) + "'," + 
								         "'" + escape(JSON.stringify(values_bolus))   + "'); " + 
						   "\">\n" + 
                                           details[k_hour][k_type]['measure'] + "</div>\n" +
				    "   </b></font>" +
				    "  </td>\n" +
				    "  <td align=center width=120>\n" +
				    "    &nbsp;" +
				    "  </td>\n" +
				    "  </tr>\n" +
				    "  </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;

		       case 'tag_event':
		       case 'untag_event':

                            values_other = details[k_hour][k_type] ;

			    tag = "" ;
			    if (s_type == "tag_event")
				tag = "<br><c>" + daytag_target_translation(details[k_hour][k_type]['name']) + "</c>" ; 

                            other_image = "&nbsp;" ;
                            if ( ("" != values_other['image']) && (null != values_other['image']) )
                            {
				 if (ls1.device_id == values_other['device'])
                                      srcimage = values_other['image'];
				 else srcimage = ls1.local_storage_img + '/' +
                                                 values_other['image'].replace(/\\/g,'/').replace( /.*\//, '' ) ;

                                 img_id1 = "oi" + values_other['id'] + "a" ;

                                 other_image = "<a href=" + srcimage + " class=lightbox-others>" +
                                               "<img id=" + img_id1 + " rel=others " +
					       "     height=80 style=\"max-height:512px;\" " +
					       "     class=lazy src=icons/detective5.jpg data-original=\"" + srcimage + "\">" +
					       "</a>" ;
                            }

			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + tag + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "  <table border=1 class=\"em_table\" width=100%>\n" +
				    "  <tr>\n" +
				    "  <td align=center width=15%>\n" +
				    "    <font size=2><b>" +
				    "      <div type=submit class=square_button4 data-role=none" + 
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form11x').attr('action','#" + back_url + "');" +
						    " dbform_fill2_other("   + "document.form11x"             + ", " + 
								         "'" + escape(JSON.stringify(values_other)) + "'); " + 
                                                    " $('#p-qm-o').collapsible('expand');" +
						   "\">\n" + 
                                           details[k_hour][k_type]['event'] + "</div>\n" +
				    "    </b></font>" +
				    "  </td>\n" +
				    "  <td align=center rowspan=1 width=85%>\n" + 
					other_image + 
				    "    <font size=2><b>" + details[k_hour][k_type]['type'] + " &nbsp; " + 
                                                             details[k_hour][k_type]['measure'] + "</b></font>" +
				    "  </td>\n" +
				    "  </tr>\n" +
				    "  </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;

		       case 'tag_basalact':
		       case 'untag_basalact':

                            values_ba = details[k_hour][k_type] ;

                            var segs = JSON.parse(values_ba['segments']) ;
			    var res  = dbform_fill_segments(segs) ;

                            var segs_more = 
				    "<a href=#b" + details[k_hour][k_type]['id'] + " data-rel=popup " + 
				    "   data-position-to=window data-theme=d " + 
				    "   data-inline=true data-transition=fade>" + 
                                    "    <img src=icons/faucet-2.png height=35>" + 
                                    "</a><br>" +
				    "    <font size=2><b>" + details[k_hour][k_type]['pattern'] + " &nbsp; " + 
                                                             details[k_hour][k_type]['percentage'] + "%" + 
                                    "    </b></font>" + 
				    "    <div data-role=popup id=b" + details[k_hour][k_type]['id'] + 
				    "         data-overlay-theme=b " + 
				    "         data-corners=false data-tolerance=\"30,15\">" +
				    "	      <a href=# data-rel=back data-role=button data-theme=a data-icon=delete " + 
				    "            data-iconpos=notext class=\"ui-btn ui-btn-a ui-btn-icon-notext ui-btn-right ui-corner-all ui-icon-delete ui-link ui-shadow\">Close</a>" + 
				    "         <div style='margin: 10px;'>" + 
				    "      <center><font color=blue size=2><b>" + details[k_hour][k_type]['pattern'] + "</b></font></center>" + 
				           res.long_v + 
				    "         </div>" +
				    "    </div>" + "<br>" ;

			    o = o + "" +
				    " <tr>\n" +
				    " <td align=center width=10% >\n" +
				    "   <font size=2><b>" + k_hour + "</b></font>" +
				    " </td>\n" +
				    " <td align=center width=5% >\n" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    "      <div class=\"subtab_v\">&nbsp;</div>" +
				    "      <div style=\"border-right:1px solid #000;height:10px;width:1px;\"></div>" +
				    " </td>\n" +
				    " <td align=center width=88% >\n" +
				    "  <table border=1 class=\"em_table\" width=100%>\n" +
				    "  <tr>\n" +
				    "  <td align=center width=15%>\n" +
				    "    <font size=2><b>" +
				    "      <div type=submit class=square_button4 data-role=none" + 
				    "              onclick=\"" + 
						    " $.mobile.changePage('#page-quickmenu');" + 
                                                    " $('#p-qm-ba').collapsible('expand');" +
						    " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                                                    " $('form#form-qba').attr('action','#" + back_url + "');" +
						    " dbform_fill2_basalactivation(" + "document.formqba" + ", " + 
								                 "'" + escape(JSON.stringify(values_ba)) + "'); " + 
						   "\">\n" + 
                                           "basal<br>act." + "</div>\n" +
				    "    </b></font>" +
				    "  </td>\n" +
				    "  <td align=center rowspan=1 width=85%>\n" + 
					  segs_more + "<font size=2 color=gray><b>" + res.short_v + "</b></font>" +
				    "  </td>\n" +
				    "  </tr>\n" +
				    "  </table>\n" +
				    " </td>\n" +
				    " </tr>\n" ;
			    break ;
		   }
		}
        }

        o += "</table>" ;

        return o ;
  }

  function daytag_summary_measures ( details, hour_begin, hour_end )
  {
        m  = 0 ;
        nm = 0;

        hour_begin = parseInt(hour_begin, 10);
        hour_end   = parseInt(hour_end, 10);

        for (k_hour in details)
        {
		hour_now = parseInt(k_hour.slice(0,2), 10);
                if (hour_now < hour_begin) continue ;
                if (hour_now > hour_end)   continue ;

		for (k_type in details[k_hour])
		{
		   if (details[k_hour][k_type]['name'] != "")
			s_type = "tag"   + "_" + k_type ;
		   else s_type = "untag" + "_" + k_type ;

		   switch (s_type)
		   {
		       case 'tag_measure':
			    m = m + parseInt(details[k_hour][k_type]['measure'], 10) ;
			    nm++ ;
			    break ;
		       case 'untag_measure':
			    m = m + parseInt(details[k_hour][k_type]['measure'], 10) ;
			    nm++ ;
			    break ;
		   }
		}
        }

        if (0 == nm)
            return 0;

        return (m / nm) ;
  }

  // auxiliar function
  function daytag_summary_color ( measures )
  {
        if (0 == measures) return "#f1f1f1" ;

        o = "#CCFF33" ; // green
        if      ( (measures > ls1.measure_range_1) && (measures < ls1.measure_range_2) )
               o = "#FFFF99" ;  // yellow
        else if ( (measures > ls1.measure_range_2) && (measures < ls1.measure_range_3) )
               o = "#FFDD11" ;  // orange
        else if ( (measures > ls1.measure_range_3) )
               o = "red" ;

        return o ;
  }

  function daytag_update_day_month ( year, month, list_day, vector_details, back_url )
  {
        // k + k2
        var k     = year + "-" + ('0' + month).slice(-2) + "-" + ('0' + list_day).slice(-2) ;
        var ndate = new Date(year,month,list_day+1);
        var k2    =        ndate.getFullYear() + "-" +
                    ('0' + ndate.getMonth()).slice(-2) + "-" +
                    ('0' + ndate.getDate()).slice(-2) ;

        // measures + day_info
        measures = 0 ;
        day_info = "&nbsp;" ;
        if (! ((typeof vector_details[k] === "undefined") || (Object.keys(vector_details[k]).length == 0)) )
        {
            measures = daytag_summary_measures(vector_details[k],ls1.newday_hour,24) ;
            day_info = daytag_summary(vector_details[k],k,ls1.newday_hour,24,back_url) ;
        }
        if (! ((typeof vector_details[k2] === "undefined") || (Object.keys(vector_details[k2]).length == 0)) )
        {
            measures += daytag_summary_measures(vector_details[k2],0,ls1.newday_hour) ;
            day_info += daytag_summary(vector_details[k2],k,0,ls1.newday_hour,back_url) ;
        }

        // obj* <- value*
        d = new Object() ;

        d.obj_html1   = $("#di" + list_day) ;
        d.obj_color1  = $("#h"  + list_day) ;
        d.obj_color2  = $("#s"  + list_day) ;

        d.value_color = daytag_summary_color(measures / 2) ;
        d.value_html  = day_info ;

        return d ;
  }

  function daytag_show_month ( year, month, day, cal_head, vector_details, back_url )
  {
	// http://davidwalsh.name/php-calendar

	/* draw table */
	u  = "<table cellpadding=2 cellspacing=2 border=1 style=\"border-collapse: collapse; width:300px;\">" ;
	moreinfo = "" ;

	u += "<tr class=calendar-row>" ;
	for (i=0; i<cal_head.length; i++) {
	     u += "<td class=calendar-day-head align=center><c>" ;
	     u += "<font color=gray>" + cal_head[i] + "</font>" ;
	     u += "</c></td>" ;
	}
	u += "</tr>" ;

	/* days and weeks vars now ... */
	dt1 = new Date(year,month-1,1) ;
	running_day = dt1.getDay();
	if (0 == running_day) running_day = 7 ;

	dt2 = new Date(year,month,0) ;
	days_in_month = dt2.getDate() ;

	days_in_this_week = 1;
	day_counter = 0;
	dates_array = new Array();

	/* row for week one */
	u += "<tr class=calendar-row>" ;

	/* print "blank" days until the first of the current week */
	for(x = 1; x < running_day; x++) {
		u += "<td class=calendar-day-np>&nbsp;</td>" ;
		days_in_this_week++;
	}

	/* keep going with days.... */
	for (list_day = 1; list_day <= days_in_month; list_day++) 
	{
		k  = year + "-" + ('0' + month).slice(-2) + "-" + ('0' + list_day).slice(-2) ;
	      //k2 = year + "-" + ('0' + month).slice(-2) + "-" + ('0' + (list_day+1)).slice(-2) ;
                var ndate  = new Date(year,month,list_day+1);
	        k2 =        ndate.getFullYear() + "-" + 
                     ('0' + ndate.getMonth()).slice(-2) + "-" + 
                     ('0' + ndate.getDate()).slice(-2) ;

                currday = XDate(year,month-1,list_day,14,30,00) ;
                k0 = currday.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
                k0 = k0.substr(0,10) + 'T' + k0.substr(11);

		measures = 0 ;
		day_info = "&nbsp;" ;
		if (! ((typeof vector_details[k] === "undefined") || (Object.keys(vector_details[k]).length == 0)) )
		{
		    measures = daytag_summary_measures(vector_details[k],ls1.newday_hour,24);
		    day_info = daytag_summary(vector_details[k],k,ls1.newday_hour,24,back_url) ;
		}
		if (! ((typeof vector_details[k2] === "undefined") || (Object.keys(vector_details[k2]).length == 0)) )
		{
		    measures += daytag_summary_measures(vector_details[k2],0,ls1.newday_hour);
		    day_info += daytag_summary(vector_details[k2],k,0,ls1.newday_hour,back_url) ;
		}

		c = daytag_summary_color(measures / 2);
		u += "<td  class=calendar-day valign=middle " + " id=\"h" + list_day + "\"" +
                     "     bgcolor=" + c + "><center>" ;
		u += "<div class=day-number " + 
		     "     onclick=\"$('#m" + list_day + "').toggle();$('img.lazy').lazyload({skip_invisible: false});return false;\">" + 
		     list_day + "</div>\n" ;

		moreinfo += "<div id=\"m" + list_day + "\" align=left " + // " class=shadow1 " +
			    "     style=\"display: none; position:relative; z-index:1; width: 100%; line-height: 18px;\">\n" +
			    "<div id=\"s" + list_day + "\" " + 
			    "     style=\"background-color:" + c + "\">" + 
			    "<table border=0 width=100%>" +
			    "<tr>" +
			    "<td>" +
			    "<c>" + list_day + " / " + month + " / " + year + "</c>" + 
			    "</td>" +
			    "<td align=center>" +
	                    "    <div data-role=none align=center style='width: 50%; text-decoration: none; border-bottom:1px dashed;'" +
                            "         onclick=\"" + 
                            "      $('a#pageqmclose').attr('href','#" + back_url + "');" +
                            "      $('form#form10x').attr('action','#" + back_url + "');" +
                            "      dbform_fill0_quick(document.form10x,'" + k0 + "');" +
                            "      dbform_fill0_other(document.form11x,'" + k0 + "');" +
                            "      dbform_fill0_basalactivation(document.formqba,'" + k0 + "');" +
                            "      dbform_fill0_basaldefinition(document.formbd,'" + k0 + "');" +
			    "      $.mobile.changePage('#page-quickmenu');" + 
			    "      $('#p-qm-mmb').collapsible('expand');" + "\"><c>+</c></div>\n" +
			     "</td>" +
			     "</tr>" +
			     "</table>" +
			     "</div>\n" + 
			     "<div id=\"di" + list_day + "\">\n" + 
			     day_info + 
			     "</div>\n" + 
			     "</div>\n" ;
		u += "</center></td>" ;

		if (running_day == 7) {
			u += "</tr>" ;
			if ((day_counter+1) != days_in_month)
				u += "<tr class=calendar-row>" ;
			running_day = 0;
			days_in_this_week = 0;
		}

		days_in_this_week++; 
		running_day++; 
		day_counter++;
	}

	/* finish the rest of the days in the week */
	if ( (days_in_this_week < 8) && (days_in_this_week > 1) )
	{
		for(x = 1; x <= (8 - days_in_this_week); x++) {
			u += "<td class=calendar-day-np>&nbsp;</td>" ;
		}
	}

	u += '</tr>' ;
	u +=  '<tr><td colspan=7>' + moreinfo + '</td></tr>' ;
	u +=  '</table>' ;

        return u ;
  }

  function daytag_show_days ( year, month, day, ndays, vector_details, back_url )
  {
      firstday = XDate(year,month-1,day,14,30,00) ;

      u = "<table cellpadding=0 cellspacing=0 border=1 " +
          "       style=\"border-collapse: collapse; border-style:solid; border-color:#a0a0a0; line-height: 18px;\"><tr>\n" ;

      for (currentday=0; currentday < ndays; currentday++)
      {
         k0 = firstday.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
         k0 = k0.substr(0,10) + 'T' + k0.substr(11);

         k  = firstday.toString("yyyy-MM-dd") ;
         firstday.addDays(1) ;
         k2 = firstday.toString("yyyy-MM-dd") ;

	 measures = 0 ;
	 day_info = "&nbsp;" ;
	 if (! ((typeof vector_details[k] === "undefined") || (Object.keys(vector_details[k]).length == 0)) )
	 {
	    measures = daytag_summary_measures(vector_details[k],ls1.newday_hour,24);
	    day_info = daytag_summary(vector_details[k],k,ls1.newday_hour,24,back_url) ;
	 }
	 if (! ((typeof vector_details[k2] === "undefined") || (Object.keys(vector_details[k2]).length == 0)) )
	 {
	    measures += daytag_summary_measures(vector_details[k2],0,ls1.newday_hour);
	    day_info += daytag_summary(vector_details[k2],k,0,ls1.newday_hour,back_url) ;
	 }

	 c = daytag_summary_color(measures / 2);
	 u += "<td valign=top><table border=0 width=250><tr>" + 
              "<td style=\"border-color:#a0a0a0;\" bgcolor=" + c + " valign=middle align=left>" + 
              "  <table border=0 width=100%>" + 
              "  <tr>" + 
              "   <td width=10%>&nbsp;</td>" + 
              "   <td width=80% align=center onclick=\'$(\"#h" + k + "\").toggle();\'><c>" + k + "</c></td>" + 
              "   <td width=10% align=right>" + 
	      "    <div data-role=none align=center style='width: 50%; text-decoration: none; border-bottom:1px dashed;'" +
              "            onclick=\"" + 
                            " $('a#pageqmclose').attr('href','#" + back_url + "');" +
                            " $('form#form10x').attr('action','#" + back_url + "');" +
                            " dbform_fill0_quick(document.form10x,'" + k0 + "');" +
                            " dbform_fill0_other(document.form11x,'" + k0 + "');" +
                            " dbform_fill0_basalactivation(document.formqba,'" + k0 + "');" +
                            " dbform_fill0_basaldefinition(document.formbd,'" + k0 + "');" +
			    " $.mobile.changePage('#page-quickmenu');" + 
			    " $('#p-qm-mmb').collapsible('expand');" +
                            "\"><c>+</c></div>\n" +
              "  </td>" + 
              " </tr>" + 
              " </table>\n" +
              "</td>\n" +
              "</tr>\n" +
	      "<tr>" + 
              "<td style=\"border-color:#a0a0a0;\" valign=top colspan=2>" + 
              "<div id=h" + k + ">" +
              day_info + 
              "</div>" +
              "</td>" + 
              "</tr></table></td>\n" ;

         firstday.addDays(-2) ;
      }
      u += "</tr></table>\n" ;

      return u ;
  }

  function daytag_table_horizontal ( year, month, vector_details, target_names, target_tags, back_url )
  {
	v  = "<center>" ;
	v += "<table cellpadding=0 cellspacing=0 border=1 style='border-collapse: collapse; line-height: 18px;'>" ;

	// header
	v += "<tr>" ;
	v += "<td>&nbsp;</td>" ;
	for (i in vector_details) 
        {
             if ("basaldef" == i) continue ;
             if ("basalact" == i) continue ;

	     dt = new XDate(i) ;
	     dc = " <div data-role=popup  id=dc" + dt.getDate() + " data-corners=false >" + 
		  daytag_show_days(year, month, dt.getDate(), 1, vector_details, back_url) +
		  "  <a href=# data-rel=back data-role=button data-theme=a data-icon=delete " + 
		  "            data-iconpos=notext class=ui-btn-left>Close</a>" +
		  " </div>" ;
	     v += "<td align=center style=\"line-height: 24px;\">" + 
			      "<a href=#dc" + dt.getDate() + " data-rel=popup style='text-decoration: none'>" + 
			      "<font color=gray>" + dt.getDate() + "</font>" +
			      "</a>" + dc + "</td>" ;
	}
	v += "</tr>" ;

	// data
	for (j=0; j<target_names.length; j++) 
	{
	     v += "<tr>" ;
	     v += "<td align=center><c><font color=gray>" + target_names[j] + "</font></c></td>" ;
	     for (i in vector_details)
	     {
                  if ("basaldef" == i) continue ;
                  if ("basalact" == i) continue ;

		  o = daytag_details(month, year, vector_details[i], target_tags[j], i, ls1.newday_hour, 24, back_url) ;
		  if (o.empty == 1) 
		  {
		      dt = new XDate(i) ;
		      dt.addDays(1) ;
		      ii = dt.toString("yyyy-MM-dd") ;

		      if (vector_details[ii])
			  o = daytag_details(month, year, vector_details[ii], target_tags[j], i, 0,ls1.newday_hour, back_url);
		  }

		  v += "<td>" ;
		  v += o.str ;
		  v += "</td>" ;
	     }
	     v += "</tr>" ;
	}

	v += "</table>" ;
	v += "</center>" ;

        return v ;
  }

  function daytag_table_vertical ( year, month, vector_details, target_names, target_tags, back_url )
  {
	v  = "<center>" ;
	v += "<table cellpadding=0 cellspacing=0 border=1 style='border-collapse: collapse; line-height: 18px;'>" ;

	// header
	v += "<tr>" ;
	v += "<td>&nbsp;</td>" ;
	for (j=0; j<target_names.length; j++) {
	     v += "<td align=center><c><font color=gray>" + target_names[j] + "</font></c></td>" ;
	}
	v += "</tr>" ;

	// data
	for (i in vector_details)
	{
             if ("basaldef" == i) continue ;
             if ("basalact" == i) continue ;

	     dt = new XDate(i) ;
	     dc = " <div data-role=popup  id=dc" + dt.getDate() + ">" + 
		  daytag_show_days(year, month, dt.getDate(), 1, vector_details, back_url) +
		  "  <a href=# data-rel=back data-role=button data-theme=a data-icon=delete " + 
		  "            data-iconpos=notext class=ui-btn-left>Close</a>" +
		  " </div>" ;

	     v += "<tr>" ;
	     v += "<td align=center style=\"line-height: 24px;\">" + 
			      "<a href=#dc" + dt.getDate() + " data-rel=popup style='text-decoration: none'>" + 
			      "<font color=gray>" + dt.getDate() + "</font>" +
			      "</a>" + dc + "</td>" ;
	     for (j=0; j<target_names.length; j++) 
	     {
		  o = daytag_details(month, year, vector_details[i], target_tags[j], i, ls1.newday_hour,24, back_url) ;
		  if (o.empty == 1) 
		  {
		      dt = new XDate(i) ;
		      dt.addDays(1) ;
		      ii = dt.toString("yyyy-MM-dd") ;

		      if (vector_details[ii])
			  o = daytag_details(month, year, vector_details[ii], target_tags[j], i, 0,ls1.newday_hour, back_url);
		  }

		  v += "<td>" ;
		  v += o.str ;
		  v += "</td>" ;
	     }
	     v += "</tr>" ;
	}

	v += "</table>" ;
	v += "</center>" ;

        return v ;
  }

  function daytag_table_compact ( vector_details, target_names, target_tags, back_url )
  {
	o = "<table cellpadding=2 cellspacing=2 border=1 style='border-collapse: collapse; line-height: 22px;'>" ;

	o += "<tr><td rowspan=2>&nbsp;</td>" ;
	for (j=0; j<target_names.length; j++) 
	     o += "<td align=center colspan=3><c>" + target_names[j] + "</c></td>" ;
	o += "</tr>" ;

	o += "<tr>" ;
	for (j=0; j<target_names.length; j++) 
	     o += "<td align=center><c>Gluc.</c></td>" + 
		  "<td align=center><c>Rac.</c></td>" + 
		  "<td align=center><c>Bolo</c></td>" ;
	o += "</tr>" ;

        color = "white";
	for (i in vector_details)
	{
                if ("basaldef" == i) continue ;
                if ("basalact" == i) continue ;

		dt = new XDate(i) ;
		ih = dt.getDate() ;
		dt.addDays(1) ;
		ii = dt.toString("yyyy-MM-dd") ;

                if ("#F0F0F0" == color)
                     color = "white";
                else color = "#F0F0F0";

		o += "<tr bgcolor=" + color + "><td align=center>" + ih + "</td>" ;
		for (j=0; j<target_tags.length; j++) 
		{
		     k = daytag_details_name(vector_details[i],target_tags[j],ls1.newday_hour,24,back_url) ;
		     if (k.empty == 1) 
			 if (vector_details[ii])
			     k = daytag_details_name(vector_details[ii],target_tags[j],0,ls1.newday_hour,back_url) ;

		     o += "<td align=center>" + k.GU + "</td>" +
			  "<td align=center>" + k.MU + "</td>" +
			  "<td align=center>" + k.BU + "</td>" ;
		}
		o += "</tr>" ;
	}
	o += "</table>" ;

	return o ;
  }



  /* 
   * Auxiliar functions 
   */

  function ensure_init_graph_visualization ( )
  {
      if (typeof ensure_is_init_graph === "undefined")
           ensure_is_init_graph = true;
      else return;

      // initialize graphs (for voice visualization)
      $("#container0").hide();
      $("#container1").hide();
      $("#container4").hide();
      $("#container5").hide();
      $("#container6").hide();
      $("#container7").hide();
      $("#container8").hide();
      $("#container9").hide();
      $("#containerA").hide();

      // build the charts
      var oh1 = stats_byhour_getDefinition();
      var ot1 = stats_bytarget_getDefinition();
      var obd = stats_basaldef_getDefinition();
      var oba = stats_basalact_getDefinition();
      var oc3 = stats_measures_cloud_getDefinition(); 

      var bh1 = new Highcharts.Chart(oh1.b1);
      var ch1 = new Highcharts.Chart(oh1.c1);
      var mh1 = new Highcharts.Chart(oh1.m1);
      var bt1 = new Highcharts.Chart(ot1.b1);
      var ct1 = new Highcharts.Chart(ot1.c1);
      var mt1 = new Highcharts.Chart(ot1.m1);
      var bd1 = new Highcharts.Chart(obd);
      var ba1 = new Highcharts.Chart(oba);
      var cc3 = new Highcharts.Chart(oc3);
  }


  /* 
   * Main functions 
   */

  function ui_voice ( cmd )
  {
      // initialize form (for voice filling)
      document.form10x.elements['values_measure[id]'].value=-1;
      document.form10x.elements['values_measure[measure]'].value=0;
      document.form10x.elements['values_meal[id]'].value=-1;
      document.form10x.elements['values_meal[measure]'].value=0;
      document.form10x.elements['values_bolus[id]'].value=-1;
      document.form10x.elements['values_bolus[units]'].value=0;
      document.form11x.elements['values_other[id]'].value=-1;

      dt_now = XDate() ;
      dt0 = dt_now.toUTCString("yyyy-MM-dd HH:mm:ssz") ;
      dt0 = dt0.substr(0,10) + 'T' + dt0.substr(11);

      // voice-over...
      var tokens = cmd.split(" ") ;
      var t = 0 ;

      while (typeof tokens[t] !== 'undefined' && tokens[t] !== null)
      {
	    if (tokens[t].match(/apunta.*/i))
	    {
                  t++ ;

		  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null)
		  {
		      if (tokens[t].match(/medida.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_measure[measure]'].value = parseInt(tokens[t], 10) ;
                              t++ ;
                          }

			  document.form10x.elements['values_measure[start]'].value = dt0 ;
			  document.form10x.elements['values_measure[stop]'].value  = dt0 ;

                          $('#p-qm-mmb').collapsible('expand');
			  $.mobile.changePage('#page-quickmenu');
		      }
		      else if (tokens[t].match(/bolo.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_bolus[type]'].value = tokens[t];
                              t++ ;
                          }

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_bolus[units]'].value = parseInt(tokens[t], 10);
                              t++ ;
                          }

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_bolus[percentage]'].value = parseInt(tokens[t], 10);
                              t++ ;
                          }

			  document.form10x.elements['values_bolus[start]'].value = dt0 ;
			  document.form10x.elements['values_bolus[stop]'].value  = dt0 ;

                          $("#page10md1").show();
                          $('#p-qm-mmb').collapsible('expand');
			  $.mobile.changePage('#page-quickmenu');
		      }
		      else if (tokens[t].match(/comida.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.form10x.elements['values_meal[measure]'].value = parseInt(tokens[t], 10) ;
                              t++ ;
                          }

			  document.form10x.elements['values_meal[start]'].value = dt0 ;
			  document.form10x.elements['values_meal[stop]'].value  = dt0 ;

                          $("#page10md2").show();
                          $('#p-qm-mmb').collapsible('expand');
			  $.mobile.changePage('#page-quickmenu');
		      }
		      else if (tokens[t].match(/activar.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.formqba.elements['values_basal_activation[pattern]'].value = tokens[t] ;
                              t++ ;
                          }

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
			      document.formqba.elements['values_basal_activation[percentage]'].value = parseInt(tokens[t], 10) ;
                              t++ ;
                          }

			  document.formqba.elements['values_basal_activation[start]'].value = dt0 ;

                          $('#p-qm-ba').collapsible('expand');
			  $.mobile.changePage('#page-quickmenu');
		      }
		      else
		      {
                          t++ ;
		      }
		  }
	    }
	    else if (tokens[t].match(/ve.*/i))
	    {
                  t++ ;

		  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null)
		  {
		      if (tokens[t].match(/medida.*/i))
		      {
                          t++ ;

			  ensure_init_graph_visualization() ;
			  $("#container8").toggle();
			  $("#container9").toggle();
			  $("#containerA").toggle();

			  $.mobile.changePage('#page24');
		      }
		      else if (tokens[t].match(/bolo.*/i))
		      {
                          t++ ;

			  ensure_init_graph_visualization() ;
			  $("#container4").toggle();
			  $("#container5").toggle();

			  $.mobile.changePage('#page24');
		      }
		      else if (tokens[t].match(/comida.*/i))
		      {
                          t++ ;

			  ensure_init_graph_visualization() ;
			  $("#container6").toggle();
			  $("#container7").toggle();

			  $.mobile.changePage('#page24');
		      }
		      else if (tokens[t].match(/basal.*/i))
		      {
                          t++ ;

			  ensure_init_graph_visualization() ;
			  $("#container0").toggle();
			  $("#container1").toggle();

			  $.mobile.changePage('#page24');
		      }
		      else if (tokens[t].match(/tabla.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
		              if (tokens[t].match(/horizontal.*/i))
                                  $("#diary_div").html(daytag_table_horizontal(ls1.year, ls1.month, vector_details, target_names, target_tags, "page10")+"<br>").trigger("create"); 
		              else if (tokens[t].match(/vertical.*/i))
                                  $("#diary_div").html(daytag_table_vertical(ls1.year, ls1.month, vector_details, target_names, target_tags, "page10")+"<br>").trigger("create");
		              else
                                  $("#diary_div").html(daytag_table_compact(vector_details,target_names,target_tags,"page10")+"<br>").trigger("create");

                              t++ ;
                          }

			  $("#diary_div").show();

			  $.mobile.changePage('#page10');
		      }
		      else if (tokens[t].match(/diario.*/i))
		      {
                          t++ ;

			  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null) {
		              if (tokens[t].match(/mes.*/i))
                                  $("#diary_div").html(daytag_show_month(ls1.year, ls1.month, ls1.today, cal_head, vector_details,"page10")).trigger("create");
		              else if (tokens[t].match(/semana.*/i))
                                  $("#diary_div").html(daytag_show_days(ls1.year, ls1.month, ls1.today, 7, vector_details,"page10")).trigger("create");
		              else
                                  $("#diary_div").html(daytag_show_days(ls1.year, ls1.month, ls1.today, 1, vector_details,"page10")).trigger("create");

                              t++ ;
                          }

			  $("#diary_div").show();

			  $.mobile.changePage('#page10');
		      }
		      else
		      {
                          t++ ;
		      }
		  }
	    }
	    else if (tokens[t].match(/configur.*/i))
	    {
                  t++ ;

		  if (typeof tokens[t] !== 'undefined' && tokens[t] !== null)
		  {
		      if (tokens[t].match(/idiom.*/i))
		      {
                          t++ ;

                          $('#idioma').collapsible('expand');
			  $.mobile.changePage('#page25');
		      }
		      else if (tokens[t].match(/con.*/i))
		      {
                          t++ ;

                          $('#conexion').collapsible('expand'); // better: $('#conexion').collapsible({ collapsed: false });
			  $.mobile.changePage('#page25');
		      }
		      else if (tokens[t].match(/ajus.*/i))
		      {
                          t++ ;

                          $('#ajustes').collapsible('expand');
			  $.mobile.changePage('#page25');
		      }
		      else
		      {
                          t++ ;
		      }
		  }
	    }
	    else
	    {
                  t++ ;
	    }
      }
  }


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


	function stats_byhour_getDefinition () 
        {
                // 1.- get options
		var options1 = {
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

		var options2 = {
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

		var options3 = {
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
		options1.series = new Array() ;
		options2.series = new Array() ;
		options3.series = new Array() ;

                for (i in vector_details)
		{
                   if ("basaldef" == i) continue;
                   if ("basalact" == i) continue;

                   var data1 = new Array() ;
                   var data2 = new Array() ;
                   var data3 = new Array() ;

                   data1.name = data2.name = data3.name = i ;

                   data1.data = new Array() ;
                   data2.data = new Array() ;
                   data3.data = new Array() ;

		   for (k=0; k<24; k++) {
                        data1.data[k] = data2.data[k] = data3.data[k] = null ;
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

                // 3.- return chart definitions
                var oh1 = new Array();
                oh1.b1 = options1 ;
                oh1.c1 = options2 ;
                oh1.m1 = options3 ;
                return oh1 ;
        }


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


	function stats_avg_getinfo ( ndays ) 
        {
                var avgs;

                // 1.- initial values
		avgs = new Array() ;

                avgs['bolus']    = new Array() ;
                avgs['meals']    = new Array() ;
                avgs['measures'] = new Array() ;
                for (j=0; j<target_tags.length; j++)
                {
		     avgs['bolus'][j] = new Array() ;
		     avgs['bolus'][j]['acc']    = 0 ;
		     avgs['bolus'][j]['n']    = 0 ;

		     avgs['meals'][j] = new Array() ;
		     avgs['meals'][j]['acc']    = 0 ;
		     avgs['meals'][j]['n']    = 0 ;

		     avgs['measures'][j] = new Array() ;
		     avgs['measures'][j]['acc'] = 0 ;
		     avgs['measures'][j]['n'] = 0 ;
                }

                // 2.- get data
                nt = new XDate() ;
                dt = new XDate(ls1.year, ls1.month-1, ls1.today) ;
                if (ls1.month != (nt.getMonth()+1))
                    dt = new XDate(ls1.year, ls1.month-1, XDate.getDaysInMonth(ls1.year, ls1.month-1)) ;

                s2 = dt.toString("yyyy-MM-dd") ;
                for (i=0; i<ndays; i++)
                {
                   dt.addDays(-1) ;
                   s1 = dt.toString("yyyy-MM-dd") ;

                   for (j=0; j<target_tags.length; j++)
                   {
			k = daytag_details_name(vector_details[s1],target_tags[j],ls1.newday_hour,24) ;
			if (k.empty == 1) 
			    if (vector_details[s2])
				k = daytag_details_name(vector_details[s2],target_tags[j],0,ls1.newday_hour) ;

		        if (k.BU > 0) {
			     avgs['bolus'][j]['acc'] += parseInt(k.BU) ;
			     avgs['bolus'][j]['n'] += parseInt(1) ;
                        }

		        if (k.MU > 0) {
			     avgs['meals'][j]['acc'] += parseInt(k.MU) ;
			     avgs['meals'][j]['n'] += parseInt(1) ;
                        }

		        if (k.GU > 0) {
			     avgs['measures'][j]['acc'] += parseInt(k.GU) ;
			     avgs['measures'][j]['n'] += parseInt(1) ;
                        }
                   }

                   s2 = s1 ;
                }

                // 3.- get data
                return avgs ;
        }

	function stats_avg_get ( ndays ) 
        {
            var avgs;
            var htmlo;

	    avgs  = stats_avg_getinfo(ndays) ;
            td_style = " style='border-width: 1px; padding: 4px; border-style: inset; border-color: lightgray; -moz-border-radius:;' ";

            htmlo = "<font size=+0>" + 
         "<table style='border-width: 1px; border-spacing: 2px; border-style: hidden; border-color: gray; border-collapse: collapse;'>" ;


                htmlo += "<tr>" ;
                htmlo += "<td align=center><font color=navy><b>" + ndays + "</b><br><font size=-1><b>days</b></font></font></td>" ;
                htmlo += "<td align=center " + td_style + "><img height=40 src='icons/injection2.png'></td>" ;
                htmlo += "<td align=center " + td_style + "><img height=35 src='icons/meals2.jpg'></td>" ;
                htmlo += "<td align=center " + td_style + "><img height=40 src='icons/measurement2.png'></td>" ;
                htmlo += "</tr>" ;

                for (j=0; j<target_tags.length; j=j+2) 
                {
			htmlo += "<tr>" ;

                        // target's name
                        htmlo += "<td align=center " + td_style + ">" ;
                        if (j+1 < target_tags.length)
                             htmlo += target_names[j] + "/" + target_names[j+1] ;
                        else htmlo += target_names[j] ;
                        htmlo += "</td>" ;

                        // bolus
			htmlo += "<td align=center " + td_style + ">" ;
			     if (avgs['bolus'][j]['n'] != 0) 
				  htmlo += Math.floor(avgs['bolus'][j]['acc'] / avgs['bolus'][j]['n']) ;
			     else htmlo += "<font color=lightgray>&nbsp;.&nbsp;.&nbsp;.</font>" ; 
			     if (j+1 < target_tags.length) {
				  htmlo += "&nbsp;/&nbsp;" ;
				  if (avgs['bolus'][j+1]['n'] != 0)
				       htmlo += Math.floor(avgs['bolus'][j+1]['acc'] / avgs['bolus'][j+1]['n']) ;
			          else htmlo += "<font color=lightgray>.&nbsp;.&nbsp;.</font>" ; 
			     }
			htmlo += "</td>" ;

                        // meals
			htmlo += "<td align=center " + td_style + ">" ;
			     if (avgs['meals'][j]['n'] != 0)
				  htmlo += Math.floor(avgs['meals'][j]['acc'] / avgs['meals'][j]['n']) ;
			     else htmlo += "<font color=lightgray>&nbsp;.&nbsp;.&nbsp;.</font>" ; 
			     if (j+1 < target_tags.length) {
				  htmlo += "&nbsp;/&nbsp;" ;
				  if (avgs['meals'][j+1]['n'] != 0)
				       htmlo += Math.floor(avgs['meals'][j+1]['acc'] / avgs['meals'][j+1]['n']) ;
			          else htmlo += "<font color=lightgray>.&nbsp;.&nbsp;.</font>" ; 
			     }
			htmlo += "</td>" ;

                        // measures
			htmlo += "<td align=center " + td_style + ">" ;
			     if (avgs['measures'][j]['n'] != 0)
				  htmlo += Math.floor(avgs['measures'][j]['acc'] / avgs['measures'][j]['n']) ;
			     else htmlo += "<font color=lightgray>&nbsp;.&nbsp;.&nbsp;.</font>" ; 
			     if (j+1 < target_tags.length) {
				  htmlo += "&nbsp;/&nbsp;" ;
				  if (avgs['measures'][j+1]['n'] != 0)
				       htmlo += Math.floor(avgs['measures'][j+1]['acc'] / avgs['measures'][j+1]['n']) ;
			          else htmlo += "<font color=lightgray>.&nbsp;.&nbsp;.</font>" ; 
			     }
			htmlo += "</td>" ;

			htmlo += "</tr>" ;
                }


                htmlo += "</table></font>" ;

                return htmlo ;
        }


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
			    stacking: 'normal',
                            animation: true
                        }
		    }
		};

                if (typeof vector_details['basalact'] === 'undefined')
                    return options1;


                // 2.- get data
                var xdate_month = parseInt(ls1.month) - 1;
                d_end = new XDate(ls1.year, xdate_month, XDate.getDaysInMonth(ls1.year, xdate_month));
                d_now = new XDate();
                if (d_now.getMonth() == xdate_month)
                     d_last = d_now;
                else d_last = d_end ;

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

                    if (h > 0)
		       options1.series.push(data1) ;
		}


                // 3.- building the chart
                return options1 ;
        }

