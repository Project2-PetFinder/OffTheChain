$(document).ready(function () {

    //Window Scroll
    window.smoothScroll = function (target) {
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
        var targetY = -430;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop - 18;
        } while (target = target.offsetParent);
        scroll = function (c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function () {
                scroll(c, a, b, i);
            }, 30);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    };


    //Upload Pictures
    Dropzone.options.dropzoneFrom = {
        autoProcessQueue: false,
        acceptedFiles:".png,.jpg,.gif,.bmp,.jpeg",
        init: function(){
         var submitButton = document.querySelector('#submit-all');
         myDropzone = this;
         submitButton.addEventListener("click", function(){
          myDropzone.processQueue();
         });
         this.on("complete", function(){
          if(this.getQueuedFiles().length == 0 && this.getUploadingFiles().length == 0)
          {
           var _this = this;
           _this.removeAllFiles();
          }
          list_image();
         });
        },
       };
      
       list_image();
      
       function list_image()
       {
        $.ajax({
         url:"upload.php",
         success:function(data){
          $('#preview').html(data);
         }
        });
       }
      
       $(document).on('click', '.remove_image', function(){
        var name = $(this).attr('id');
        $.ajax({
         url:"upload.php",
         method:"POST",
         data:{name:name},
         success:function(data)
         {
          list_image();
         }
        })
    });

    //Disable Animal Sex Until Clicked
});