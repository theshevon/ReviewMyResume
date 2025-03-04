$(document).ready(function(){

    $userTypeDropdown = $("#type");
    $countryDropdown = $("#country");

    // show exclusive reviewer registration fields if reviewer is selected
    // as the user type
    $userTypeDropdown.change(function(){
        if ($(this).val() === "reviewer") {
            $(".reviewer-info").css("display", "block");
            $("#occupation").prop("required", true);
            $("#company").prop("required", true);
        } else{
            $(".reviewer-info").css("display", "none");
            $("#occupation").prop("required", false);
            $("#company").prop("required", false);
        }
    });

    $countryDropdown.change(function(){
        if ($(this).val() === "country"){
            $(this).css("color", "gray");
        } else{
            $(this).css("color", "black");
        }
    });

    // animate colour change when user type is changed
    $('select[name="user[type]"]').change(function(){
      if ($(this).val() == "student"){
          document.body.classList.remove("to-purple");
          void document.body.offsetWidth;
          document.body.classList.add("to-blue");
      }
        if ($(this).val() == "reviewer"){
            document.body.classList.remove("to-blue");
            void document.body.offsetWidth;
            document.body.classList.add("to-purple");
        }
    })

})
