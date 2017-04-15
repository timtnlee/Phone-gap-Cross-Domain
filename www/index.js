
            $(function(){
                $('#btn').click(function(){
                    $('#demo').append("<p>click</p>");
                console.log('click');
                $.ajax({
                    type:"POST",
                    url:'http://192.168.11.3:3000/user/test',
                    data:{name:'tim'},
                    success: function(data){
                        $('#demo').append("<p>"+data+"</p>");
                    },
                    error: function(xhr, status, error){
            
                            alert(error);
                        
                    }
                })
            })
            })
             
