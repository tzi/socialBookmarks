<?php

	/* Twitter */

	$url =  $_GET["url"];

    $tweet = intval( json_decode(file_get_contents('http://urls.api.twitter.com/1/urls/count.json?url=' . $url))->{"count"} );

    /* Facebook */

    $facebook = intval( json_decode(file_get_contents("http://graph.facebook.com/?ids=". $url))->{$url}->{"shares"} );

    // G+ http://www.tomanthony.co.uk/blog/google_plus_one_button_seo_count_api/comment-page-1/

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://clients6.google.com/rpc");
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, '[{"method":"pos.plusones.get","id":"p","params":{"nolog":true,"id":"' . $url . '","source":"widget","userId":"@viewer","groupId":"@self"},"jsonrpc":"2.0","key":"p","apiVersion":"v1"}]');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
    $curl_results = curl_exec ($curl);
    curl_close ($curl);

    $json = json_decode($curl_results);

    $gplus = intval( $json[0]->{"result"}->{"metadata"}->{"globalCounts"}->{"count"} );

    // Send JSON

	echo json_encode(array(
		"tweet" => $tweet,
		"facebook" => $facebook,
		"gplus" => $gplus
		));
?>