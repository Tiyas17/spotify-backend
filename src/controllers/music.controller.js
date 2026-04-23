const musicModel=require('../models/music.model');
const {uploadFile}=require('../services/storage.service');
const albumModel=require('../models/album.model');


async function createMusic(req,res){
    const {title}=req.body;
    const file=req.file;
    const result=await uploadFile(file.buffer.toString("base64"));

    const music=await musicModel.create({
        uri:result.url,
        title,
        artist:req.user.id
    });
    
    res.status(201).json({
        message:"Music created successfully",
        music:{
            id:music._id,
            title:music.title,
            uri:music.uri,
            artist:music.artist,
        }
    })
    

}

async function createAlbum(req,res){
        const {title,musics}=req.body; 
        const album=await albumModel.create({
            title,
            music:musics,
            artist:req.user.id
        });
        res.status(201).json({
            message:"Album created successfully",
            album:{
                id:album._id,
                title:album.title,
                music:album.music,
                artist:album.artist,
            }
        })
};

async function getAllMusics(req,res){
    const musics=await musicModel.find().skip(1).limit(5);
    res.status(200).json({
        message:"Musics retrieved successfully",
        musics
    })
};

async function getAllAlbums(req,res){
    const albums=await albumModel.find().select('title artist');
    res.status(200).json({
        message:"Albums retrieved successfully",
        albums
    })
};

async function getAlbumById(req,res){
    const id=req.params.id;
    const album = await albumModel.findById(id).populate('music');
    res.status(200).json({
        message:"Album retrieved successfully",
        album
    })
};

module.exports={createMusic,createAlbum,getAllMusics,getAllAlbums,getAlbumById};