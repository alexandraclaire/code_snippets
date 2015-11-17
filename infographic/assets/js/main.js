$('#red').click(function() {
    $('#box').html('<h3>Unprotected Area</h3><p>Protection recommended by New Zealand and international scientists.</p>').css({'border':'2px solid black', 'background':'#eee'});
});

$('#green').click(function() {
    $('#box').html('<h3>Protected Area</h3><p>Protection put in place by the Minister of Conversation</p>').css({'border':'2px solid black', 'background':'#eee'});;
});

$('#light_green').click(function() {
    $('#box').html('<h3>Gillnet Coverage</h3><p>Current Protection from gillnets.</p>').css({'border':'1px solid black', 'background':'#eee'});;
});