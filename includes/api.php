<?php 
/*create search api for mirror*/
add_action('rest_api_init','mirrorSubmit');
function mirrorSubmit(){
    register_rest_route('mirror-api/v1','/submit-voice',array(
        'methods'   =>  "POST",
        'callback'  =>  'mirrorSubmitDb',    
    ));
}
function mirrorSubmitDb( $request ) {
    // Here we are accessing the path variable 'id' from the $request.
    $submit = prefix_mirrorSubmitDB( );
    return rest_ensure_response( $submit );
}

// A simple function that grabs a book title from our mirrorsby ID.
function prefix_mirrorSubmitDB() {    
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if ($contentType === "application/json") {
        //Receive the RAW post data.
        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);      
        
        // setup default result data
        $result = array(            
            'status' => 0,
            'message' => '',
            'error'=>'',           
        );                     
        update_field('voice_command',$decoded['voice'],'option');
    }
    // return result as json       
    mirror_return_json($result);   
}
function mirror_return_json( $php_array ) {	
// encode result as json string
$json_result = json_encode( $php_array );	
// return result
die( $json_result );	
// stop all other processing 
exit;

}

add_action('rest_api_init','voiceRegisterApiSearch');
function voiceRegisterApiSearch(){
	register_rest_route('voice-api/v1','command',array(
		'methods'   =>  WP_REST_SERVER::READABLE,
		'callback'  =>  'voiceApiSearchResult'
	));
}
function voiceApiSearchResult($data){	
	$voiceResult = array();
	$voiceResult[] = get_field('voice_command','option');
	mirror_return_json($voiceResult);
}