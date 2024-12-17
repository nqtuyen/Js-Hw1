/*Name this external file gallery.js*/

function upDate(previewPic){
/* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
*/
    console.log('enter upDate')
    var pic_alt = previewPic.alt;
    var pic_src = previewPic.src;
    console.log(pic_alt)
    document.getElementById('image').innerHTML = pic_alt;
    console.log(pic_src)
    document.getElementById('image').style.backgroundImage = "url('" + pic_src  + "')";
    console.log('end upDate')
}

function unDo(){
/* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
*/
    console.log('enter unDo')
    var original_text = 'Hover over an image below to display here.';
    document.getElementById('image').innerHTML = original_text;
    document.getElementById('image').style.backgroundImage = '';
    console.log('end upDo')
}