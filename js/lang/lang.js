

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

	$('div.T_AFTERMEAL').html(T['AFTERMEAL']);
	$('div.T_DAYSTARTAT').html(T['DAYSTARTAT']);

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

