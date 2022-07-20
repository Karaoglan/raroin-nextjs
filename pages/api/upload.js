// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pinataSDK = require('@pinata/sdk');
//const fs = require('fs');
//const path = require('path');
//const { Readable } = require('stream');
//const os = require('os');
import formidable from "formidable";
import { readFileSync, unlinkSync } from "fs";
import { File, NFTStorage } from "nft.storage";
import { tmpdir } from "os";

//const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY);
const client = new NFTStorage({ token: `${process.env.NFT_STORAGE_KEY}` });

export default async function handler(req, res) {
  /*console.log(req.body);
  let URI = "";
  try {
    const result = await pinata.testAuthentication();
    console.log(result);

    let rawdata = fs.readFileSync("metadatafiles/raroin.json"); //read in incomplete herometadata
    let metaData = JSON.parse(rawdata);

    URI = await CreatePinMeta(metaData, req.body);
    console.log("NFT minted:", URI);

  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ URI })*/

  if (req.method != "POST") {
    return res.status(403).json({ error: `Unsupported method ${req.method}` });
  }
  try {
    // Parse req body and save image in /tmp
    const data = await new Promise((res, rej) => {
      const form = formidable({ multiples: true, uploadDir: tmpdir() });
      form.parse(req, (err, fields, files) => {
        if (err) rej(err);
        res({ ...fields, ...files });
      });
    });
    // Read image from /tmp
    const {
      filepath,
      originalFilename = "image",
      mimetype = "image",
    } = data.image;

    const buffer = readFileSync(filepath);
    const arraybuffer = Uint8Array.from(buffer).buffer;
    const file = new File([arraybuffer], originalFilename, {
      type: mimetype,
    });
    // Upload data to nft.storage
    const metadata = await client.store({
      name: data.name,
      description: data.description,
      attributes: JSON.parse(data.attributes),
      external_link: data.external_link,
      image: file,
    });
    // Delete tmp image
    unlinkSync(filepath);
    // return tokenURI
    res.status(201).json({ uri: metadata.url });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
}



/*async function CreatePinMeta(metadata, body) {
  const MyCustomName = `raroin-${body.title}`;
  metadata.title = body.title;
  metadata.description = body.description;
  //const readableStreamForFile = fs.createReadStream("contract/img-to-upload/2.svg");
  
  const type = body.media.split(';')[0].split('/')[1];
  const buff = Buffer.from(body.media.replace(/^data:image\/png;base64,/, ""), "base64");
  console.log('type:', type);
  await fs.writeFileSync(`contract/img-to-upload/xyz.${type}`, buff)
  const readableStreamForFile = fs.createReadStream(`contract/img-to-upload/xyz.${type}`);
  //const readableStreamForFile = fs.createReadStream(`contract/img-to-upload/2.svg`);
 
  const options = {
    pinataMetadata: {
      name: MyCustomName,
      keyvalues: {
        customKey: 'CryptoHerosvg',
        customKey2: 'FirstEdition'
      }
    },
    pinataOptions: {
      cidVersion: 0
    }
  };
  return pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //send result hash CID to create Metadata.
    console.log(result);
    //metadata.image = `https://ipfs.io/ipfs/${result.IpfsHash}`;
    metadata.image = `ipfs://${result.IpfsHash}`;
    metadata.attributes = body.attributes;
    //this is the meta data that points to the PNG, pinning JSON to pinata.
    console.log(metadata);
    const options = {
      pinataMetadata: {
        name: "metadata.json", //this will always be named metadata.json
        keyvalues: {
          customKey: 'CryptoHeroMetaData'
        }
      },
      pinataOptions: {
        cidVersion: 0
      }
    };
    return pinata.pinJSONToIPFS(metadata, options).then((result) => {
      //handle results here Create NFT here.  
      // return IpfsHash for URI to mint NFT.                               
      return result.IpfsHash;
    }).catch((err) => {
      //handle error here
      console.log(err);
    });
  }).catch((err) => {
    //handle error here
    console.log(err);
  });
}*/

export const config = {
  api: {
    bodyParser: false,
  },
};
