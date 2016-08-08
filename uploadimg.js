jQuery.fn.extend({
    creat_file_input: function (name,id,imgsrc) {
        var _this = this;
        var fileupload_close;
        var fileInput;
        var fileupload_result = document.createElement("div");
        fileupload_result.style.height='100%';
        _this.append(fileupload_result);
        if(imgsrc){

            var default_img = document.createElement('img');
            var default_fileInput = document.createElement("input");
            var default_fileupload_close = document.createElement("div");

            default_img.src=imgsrc;
            fileupload_result.appendChild(default_img)

            default_fileupload_close.className='fileupload_close';
            default_fileupload_close.innerHTML='x';
            _this.append(default_fileupload_close);

            default_fileInput.type = 'file';
            default_fileInput.style.opacity=0;
            default_fileInput.name = name;
            default_fileInput.id = id;
            default_fileupload_close.onclick=function(){
                fileupload_result.innerHTML='';
                default_fileupload_close.remove();
                default_fileInput.remove();
            }
            _this.append(default_fileInput);

        }
        fileupload_result.onclick=function(){
            if(fileInput){
                fileInput.remove();
            }

            fileInput = document.createElement("input");
            fileInput.type = 'file';
            fileInput.style.opacity=0;
            _this.append(fileInput);
            fileInput.onchange=function(){
                if (typeof FileReader == 'undefined') {

                } else {
                    var file = fileInput.files[0];
                    if (file.size > 1024 * 1024 * 2) {
                        alert('图片不能超过2M')
                    }else{
                        if(fileupload_close){
                            fileupload_close.remove();
                        }
                        var reader = new FileReader();
                        reader.onload = function ( event ) {
                            var txt = event.target.result;
                            var img = document.createElement('img');
                            img.src = txt;
                            $('#history_imgid_result').val(txt);
                            fileupload_result.innerHTML='';
                            fileupload_result.appendChild(img);

                            fileupload_close = document.createElement("div");
                            fileupload_close.className='fileupload_close';
                            fileupload_close.innerHTML='x';
                            fileInput.name = name;
                            fileInput.id = id;
                            fileupload_close.onclick=function(){
                                fileupload_result.innerHTML='';
                                fileupload_close.remove();
                                fileInput.remove();
                            }
                            if(default_fileInput){
                                default_fileInput.remove();
                            }
                            _this.append(fileupload_close);

                        };
                        reader.readAsDataURL( file );
                    }
                }
            };
            fileInput.click();
        }

    }
});
