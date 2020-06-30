$(function(){
	
	$.validator.setDefaults({
		//errorClass: 'help-block', 
		highlight: function (element){
			$(element)
				.closest(".form-group")
				.addClass('has-error');
		},
		
		errorPlacement: function(error,element){
			if(element.prop('type') === 'checkbox' || element.prop('type') === 'radio'){
				error.insertAfter(element.parent());
			}else{
				error.insertAfter(element);
			}
		}
		
	});
    if($("#form1").length)
        {
            $("#form1").validate({
                rules:{

                    fullname:{
                        required: true
                    },
					
					lastname:{
						required: true
					},
					
					gender:{
						required: true
					},

					married:{
						required: true
					},

					otherdetails:{
						required: true
					},
					city:{
						required: true
					},
					interest:{
						required: true
					},
					NOS:{
						required: true
					},
					birthdate:{
						required: true,
						date:true
					},
					
                },

                messages:{
                    fullname : {
                        required: '*First name is required'
                    },
					
					lastname:{
						required: '*Last name is required'
					}
					,
					gender:{
						required: '*You must select a gender'
					},

					married:{
						required: '*Maratial status required'
					},
					otherdetails:{
						required: '*Please fill in Other Details'
					},
					city:{
						required: '*Please select a city'
					},
					interest:{
						required: '*You must select an interest'
					},
					NOS:{
						required: '*You must enter the name of your spouse'
					},
					birthdate:{
						required: '*You must select a birthdate'
					},
				},
				
				submitHandler:function(form){
					return results();
					form.submit();
				}
            })
        }
})