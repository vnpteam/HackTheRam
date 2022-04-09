$(document).ready(function () { 
    $(function () { 
        var count = 0; 
        $("#fileupload").change(function () { 
            //var file = this.files[0]; 
            $(".divMainPreview").show(); 
            var totalFileSelected = $(this)[0].files.length; // 
            if (totalFileSelected <= 5 && totalFileSelected != 0) { 
 
                if (typeof (FileReader) != "undefined") { 
                    var dvPreview = $("#dvPreview"); 
                    dvPreview.html(""); 
                    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png|.bmp)$/; 
                    var _i = 1; 
                    $($(this)[0].files).each(function (i) { 
                        _i = i; 
                        var file = $(this); 
                        if (regex.test(file[0].name.toLowerCase())) { 
                            var reader = new FileReader(); 
                            reader.onload = (function (index) {//function (e) { 
                                return function (e) { 
                                    $("#ImageID").val(e.target.result); 
                                    if ($("#ImageID").val()) { 
                                        $("#YoutubeLink").val("").attr("disabled", "disabled"); 
                                    }                                     
                                    dvPreview.append("<a href='javascript:void(0);' style='position: absolute;right: 0px;top: 9px; '><div class='divDeleteItemImage'><i class='fa fa-times'></i></div></a><div class='divSelectCropImg'><img src='" + e.target.result + "' class='imgSelectedList' id='imgCropped" + index + "' style='height: 100px;' /><span><i class='fa fa-crop'></i></span></div>"); 
                                } 
                            })(_i); 
                            reader.readAsDataURL(file[0]); 
                        } else { 
                            $(".notifications").html("<div class='alert alert-danger'>We accept only .jpg, .jpeg, .gif, .png, .bmp file formats.</div>"); 
                            dvPreview.html(""); 
                            return false; 
                        } 
 
                        count++; 
                    }); 
                } else { 
                    console.log("This browser does not support HTML5 FileReader."); 
                } 
            } else { 
                $(".notifications").html("<div class='alert alert-danger'>We accept only jpg jpeg gif png bmp file formats</div>"); 
            } 
        }); 
    }); 
}); 