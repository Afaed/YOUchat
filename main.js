
let client = AgoraRTC.createClient({mode:'rtc', 'codec':"vp8"})

let config = {
    appid: '6c9cd737debb42b4abfda2e2e6e7842d',
    token:'0066c9cd737debb42b4abfda2e2e6e7842dIAB0YnhkmUg7uXsVH78YaNsCtr5MebiOHd9qBlcztZEFiL8uuEoAAAAAEAD/8ff9og2EYgEAAQCiDYRi',
    uid:null,
    channel: 'spooky',
}

//need to create our tracks here to actually stream and allow volume.
//its set to null since we haven't done anything

let localTracks = {
    videoTracks: null,
    audioTracks: null
}

//remoteTracks creates remote tracks will be forr other users on the same application, when someones joins-it'll subscirbe to hteir audio and will be stored here.
 let remoteTracks = {

 }


 // the goal here is WHEN the button is activated, it will join the call. For now lets make a console.log instead
document.getElementById( 'join', () => {
    console.log("${user} wants to join")
})

//in order for the event to occur, we need a way to fire off the join. So now we make a function called joinCall. We will need to make an async function as well since it will trigger independently

let joinCall = async () => {

    [config.uid, localTracks.audioTracks, localTracks] = await Promise.all([
        client.join(config.appid, config.channel, config.token)
    ])
}

//connects to the agora app and its documentaiton.
/*
var client = AgoraRTC.createClient({mode: "live", codec: "vp8"});

var localTracks = {
    videoTrack: null,
    audioTrack: null
};

var remoteUsers = {};

var options = {
    apoid: null,
    channel: null,
    uid: null,
    token: null,
    role: "audience",
    audienceLatency: 2
}

$(() => {
    var urlParams = new URL(location.href.searchParams);
    options.appid = urlParams.get("appid");
    options.channel = urlParams.get("channel");
    options.uid = urlParams.get("uid")
    options.token = urlParams.get("token")
    if (options.appid && options.channel) {
        $("#uid").val(options.id);
    }
})


*/