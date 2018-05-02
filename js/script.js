$(document).ready(function(){
   
    $(".callModal").click(function(){
        
        var title = $(this).closest('div').find('h3').text();
        var content = $(this).closest('div').find('p').text();
        console.log(title)
        $('.modal-title').text(title)
        $('.modal-body p').text(content)
        $('#myModal').modal();
    });
    
});