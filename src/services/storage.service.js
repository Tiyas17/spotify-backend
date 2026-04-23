const {ImageKit}=require("@imagekit/nodejs");

const imagekit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY 
});

async function uploadFile(buffer){
    const result=await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "music_"+Date.now()+".mp3",
        folder:"spotify_music_papai"
    });

    return result;
}

module.exports={uploadFile};