let modal = document.getElementById("dialog-modal");
let closeIcon;

//<a href="#" class="modal-btn modal-btn-green">Ok</a>
//<a href="#" class="modal-btn modal-btn-red">Ok</a>

// Function to open modal
function openModal(type, msg, callback) {
    // modal.style.display = "block"
    $("#dialog-modal").addClass("active").empty()

    let successTemplateString = `<div class="mymodal-content modal-content-success" id="modal-content">
                            <i class="fa fa-times btn-circular" id="close-icon"></i>
                            <div class="modal-cont modal-cont-success">
                                <div class="modal-icon">
                                    <i class="fa fa-thumbs-up"></i>
                                </div>
                                <h3 class="modal-head" id="modal-text">Success</h3>
                                <p class="modal-text" id="modal-text">${msg}</p>
                               
                                </div> 
                        </div>`

    let errorTemplateString = `<div class="mymodal-content modal-content-error">
                                    <i class="fa fa-times btn-circular" id="close-icon"></i>
                                    <div class="modal-cont modal-cont-error">
                                        <div class="modal-icon">
                                            <i class="fa fa-thumbs-down"></i>
                                        </div>
                                        <h3 class="modal-head" id="modal-text">Error</h3>
                                        <p class="modal-text" id="modal-text">${msg}</p>
                                    </div> 
                            </div>`
    if (type === "success") {
        $("#dialog-modal").append(successTemplateString)
    } else {
        $("#dialog-modal").append(errorTemplateString)
    }
    closeIcon = document.getElementById("close-icon");

    closeIcon.onclick = function () {
        $("#dialog-modal").removeClass("active")
        typeof callback === 'function' && callback()
    }

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    // console.log(event)
    // console.log(event.target)
    if (event.target == modal) {
        $("#dialog-modal").removeClass("active")
    }
}


// Review modal stars
$("input[name='review-rating']").click(function () {
    var sim = $("input[name='review-rating']:checked").val();
    alert(sim)
    // if (sim < 3) {
    //     $('.myratings').css('color', 'red'); $(".myratings").text(sim);
    // } else {
    //     $('.myratings').css('color', 'green'); $(".myratings").text(sim);
    // }
});


// Review modal js




