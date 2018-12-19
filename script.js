$("#mole1").click(function(){
    $("#mole1").hide();
});
    
$("#moleTwo").click(function(){
    $("#moleTwo").hide();
}); 
    
$("#thirdMole").click(function(){
    $("#thirdMole").hide();
    $("#moleTwo").show();
    $("#mole1").show();
});
    
$("#Reset").click(function(){
    $("#thirdMole").show();
    $("#moleTwo").show();
    $("#mole1").show();
});
