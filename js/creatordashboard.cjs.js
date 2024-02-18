/*! BuildToolsCookbook v2.0.0 | (c) 2024 R A H U L J A I S W A L (RJ) | MIT License |  */
'use strict';

$(function() {

    fetchStatsOfCreator();

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
const fetchStatsOfCreator = () => {
	$.ajax({
		url: `${BASE_URL}/v1/creator/stats`, 
		type: 'GET',
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success: function (data) {
			//console.log("STats", data);
			 const { totalVideos, totalFundsRaised, totalFans, coOwnerEarnings } = data.stats;

			$("#totalVideos").text(totalVideos);
			$("#totalFundRaised").text(`$ ${totalFundsRaised.toFixed(2)}`);
			$("#totalFans").text(totalFans);
            $("#coOwnerEarnings").text(`$ ${coOwnerEarnings}`);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			aBit_UTIL.displayErrorDialog('ERROR!', "SOME ERORR");
		}
	});	
};

const getVideosByCreator = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    $.ajax({
        url: `${BASE_URL}/v1/creator/${userInfo.id}/videos`, 
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
    debugger;
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
        picture, name, userType
    } = userInfo;

    let templ = ``;
    response.forEach(function (videoInfo, index) {
        console.log(videoInfo);
        const { totalShares, adRevenueShare, desiredFund, title, _id} = videoInfo;

        templ += `<div class="col-6 col-lg-3 col-sm-6 col-md-3">
                    <div class="about-creators pb-3 viewDetailOfVideo" vid="${_id}">
                        <img class="d-block slider-image" src="svg/common/Token 11.svg" alt="First slide">
                        <div class="top-left-part">
                            <div class="heading">${title}</div>
                            <div class="d-inline-flex mt-2">
                                <img class="user-image" src="${picture}" style="border-radius: 50%">
                                <h5 class="ml-2 description">${name}</h5>
                            </div>
                        </div>
                        <div class="bottom-token-info">
                            <ul class="list-group list-group-horizontal token-info-content">
                                <li class="list-group-item border-0">
                                    <p class="mb-1">Shares</p>
                                    <p>${totalShares}</p>
                                </li>
                                <li class="list-group-item border-0 px-0">
                                    <p class="mb-1">Offering</p>
                                    <p>${adRevenueShare}%</p>
                                </li>
                                <li class="list-group-item border-0 px-0">
                                    <p class="mb-1">Raising</p>
                                    <p>$${convertIntoK(desiredFund)}</p>
                                </li>
                                </ul>
                        </div>
                    </div>
                </div>`;
           
        });
    
    $("#uploadedVideos").append(templ);	
    bindEventOnEachToken(userType);
}
function bindEventOnEachToken(userType) {
    $(".viewDetailOfVideo").off("click").on("click", function() {
        const vid = $(this).attr("vid");
        
       // window.location.href = `fractionalize.html?vid=${vid}`;

       getUploadedVideoDetailByVideoId(vid, userType) ;
    });
}

function convertIntoK(value) {
    //  if(value == 20000) {
          let valueInK = value.toString().slice(0, -3) + 'k';
          return valueInK;
          //console.log(str2);
   //   }
  }

function getUploadedVideoDetailByVideoId(vid, userType) {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    $.ajax({
        url: `${BASE_URL}/v1/videos/stats/${vid}`, 
        type: 'GET',
        xhrFields: {
                withCredentials: true
            },
        crossDomain: true,
        //data:  JSON.stringify(payloadOptions),
        //contentType: "application/json; charset=utf-8",
        success: function (res) {
           // console.log("Video Info", res?.data);
           $(`#${userType.toLowerCase()}TokenMoreInfoModal`).modal("show");
           $(`#${userType.toLowerCase()}TokenMoreInfoModal`).find("#viewLandingPage").attr("href", `fractionalize.html?vid=${vid}`);
            displayStatsOfToken(res.data);
            aBit_UTIL.displaySuccessDialog('Success!', "Thank you! Our team will reach out soon.");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            aBit_UTIL.displayErrorDialog('ERROR!', "SOME ERORR");
        }
    });
}

const displayStatsOfToken = (tokenInfo) => {
    console.log("ddd",tokenInfo);
    const {
		ad_revenue, co_owner_earnings, earning_per_co_owner, views:performanceViews
	} = tokenInfo.stats.performance;
    const {
		ad_revenue_share, funds_raised, new_buyers, repetitive_buyers, shares_sold
	} = tokenInfo.stats.raised;

	// const {
	// 	earnings, invested, ownership, video_revenue, views:statViews
	// } = tokenInfo?.stats;
    debugger;
	const {
		title, totalShares, totalAmountRaised, adRevenueShare
	} = tokenInfo.video;

    // Raised Tab
	$("#shareSold, #totalSharesSold").text(shares_sold);
	$("#repetitiveBuyers").text(repetitive_buyers);
	$("#adRevernShare").text(ad_revenue_share);
	$("#newBuyers").text(new_buyers);
	$("#fundRaised").text(funds_raised);

    // Performance Tab
    $("#views").text(performanceViews);
	$("#adRevenue").text(ad_revenue);
	$("#coOwnerEarning").text(co_owner_earnings);
	$("#earningPerCoOwners").text(earning_per_co_owner);

    $("#statsVideoTitle").text(title);
    $("#creatorShares").text(totalShares);
	$("#creatorOffered").text(`${adRevenueShare}%`);
	$("#creatorRaised").text(`$${totalAmountRaised}`);



};
function getAllApprovedVideos() {
    //const payloadOptions = getPayLoadOptions();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    $.ajax({
        url: `${BASE_URL}/v1/videos/${userInfo.id}`, 
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
        url: `${BASE_URL}/v1/creator/approved`, 
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
        url: `${BASE_URL}/v1/creator/${userInfo.id}`, 
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
        url: `${BASE_URL}/v1/creator/logout`, 
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
