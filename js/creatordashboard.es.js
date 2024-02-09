/*! BuildToolsCookbook v2.0.0 | (c) 2024 R A H U L J A I S W A L (RJ) | MIT License |  */
$(function() {
    bindEventListnersOnElements();

    getCreatorProfileInfo();

    getAllApprovedVideos();

    getallCreators();

    getVideosByCreator();

    
});

function bindEventListnersOnElements() {
    $("#logOutCreator").off("click").on("click", function() {
        logOutCreator();
    });
    // setTimeout(function() {
    //     $("#scheduleACall").off("click").on("click", function() {
    //         uploadVideo(this);
    //     })
    // }, 500)
   
    
}

const getVideosByCreator = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    $.ajax({
        url: `https://api-abit.onrender.com/v1/creator/${userInfo.id}/videos`, 
        type: 'GET',
        xhrFields: {
                withCredentials: true
            },
        crossDomain: true,
        //data:  JSON.stringify(payloadOptions),
        //contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("Creator Videos", data);
            buildTokenCardForUploadedVideos(data);
            aBit_UTIL.displaySuccessDialog('Success!', "Thank you! Our team will reach out soon.");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            aBit_UTIL.displayErrorDialog('ERROR!', "SOME ERORR");
        }
    });
};
function buildTokenCardForUploadedVideos(response) {
    let templ = ``;
    response.forEach(function (videoInfo) {
        templ = `<div class="col-6 col-lg-3 col-sm-6 col-md-3">
                    <div class="about-creators position-absolute" onclick="getMoreInfoOfToken('creator');">
                        <img class="d-block slider-image" src="svg/common/Token 11.svg" alt="First slide">
                        <div class="top-left-part">
                            <div class="heading">Press, Play, Smile</div>
                            <div class="d-inline-flex mt-2">
                                <img class="user-image" src="svg/home/user-img.svg" alt="user-image">
                                <h5 class="ml-2 description">Joy Harton</h5>
                            </div>
                        </div>
                        <div class="bottom-token-info">
                            <ul class="list-group list-group-horizontal token-info-content">
                                <li class="list-group-item border-0">
                                    <p class="mb-1">Shares</p>
                                    <p>1110</p>
                                </li>
                                <li class="list-group-item border-0 px-0">
                                    <p class="mb-1">Offered</p>
                                    <p>50%</p>
                                </li>
                                <li class="list-group-item border-0 px-0">
                                    <p class="mb-1">Raised</p>
                                    <p>$ 369k</p>
                                </li>
                                </ul>
                        </div>
                    </div>
                </div>`;
        });
    

    $("#uploadedVideos").append(templ);	
}

function getAllApprovedVideos() {
    //const payloadOptions = getPayLoadOptions();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    $.ajax({
        url: `https://api-abit.onrender.com/v1/videos/${userInfo.id}`, 
        type: 'GET',
        xhrFields: {
                withCredentials: true
            },
        crossDomain: true,
        //data:  JSON.stringify(payloadOptions),
        //contentType: "application/json; charset=utf-8",
        success: function (data) {
            aBit_UTIL.displaySuccessDialog('Success!', "Thank you! Our team will reach out soon.");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            aBit_UTIL.displayErrorDialog('ERROR!', "SOME ERORR");
        }
    });
}
function getallCreators() {
    //const payloadOptions = getPayLoadOptions();
    $.ajax({
        url: "https://api-abit.onrender.com/v1/creator/approved", 
        type: 'GET',
        xhrFields: {
            withCredentials: true
            },
        crossDomain: true,
        
        //data:  JSON.stringify(payloadOptions),
        //contentType: "application/json; charset=utf-8",
        success: function (data, status, jqXHR) {
            const tokenHeader = jqXHR.getResponseHeader('Set-Cookie') || jqXHR.getResponseHeader('Your-Custom-Header');
            console.log(tokenHeader);
            aBit_UTIL.displaySuccessDialog('Success!', "Thank you! Our team will reach out soon.");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            aBit_UTIL.displayErrorDialog('ERROR!', "SOME ERORR");
        }
    });
}

const getCreatorProfileInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    $.ajax({
        url: `https://api-abit.onrender.com/v1/creator/${userInfo.id}`, 
        type: 'GET',
        xhrFields: {
               withCredentials: true
            },
        crossDomain: true,
        success: function (data) {
            showProfileViewAfterSuccessfullLogin(data.user);
            aBit_UTIL.displaySuccessDialog('Success!', "Thank you! Our team will reach out soon.");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            aBit_UTIL.displayErrorDialog('ERROR!', "SOME ERORR");
        }
    });	
};
const showProfileViewAfterSuccessfullLogin = (loggedInUserInfo) => {
    let {picture, name} = loggedInUserInfo;
    $("#userProfileTempl .user-profile-pic").attr("src", picture);
    updateProfileCardViewAsPerLoggedInUser(loggedInUserInfo);
};
const updateProfileCardViewAsPerLoggedInUser = (loggedInUserInfo) => {
    const {picture, name} = loggedInUserInfo;
    $(".creator-section .profile-img").attr("src", picture);
    $(".creator-section .bio-wrapper .users-name").text(name);

};

/*#__PURE__*/
let logOutCreator = (elem) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    $.ajax({
        url: "https://api-abit.onrender.com/v1/creator/logout", 
        type: 'POST',
        data: {
            'email': `${userInfo.email}`
        },
        xhrFields: {
               withCredentials: true
            },
        crossDomain: true,
        
        //data:  JSON.stringify(payloadOptions),
        //contentType: "application/json; charset=utf-8",
        success: function (data) {
            google.accounts.id.initialize({
                 client_id: "280264346590-vjg6cqponliotfqn32pt2mna2jnqmmtu.apps.googleusercontent.com",
        
            });
            google.accounts.id.revoke(`${userInfo.email}`, done => {
                console.log('consent revoked');
                document.cookie = "abittoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                localStorage.removeItem("userInfo");
                window.location.href = "index.html";
            });
            
            aBit_UTIL.displaySuccessDialog('Success!', "Thank you! Our team will reach out soon.");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            aBit_UTIL.displayErrorDialog('ERROR!', "SOME ERORR");
        }
    });	
};
