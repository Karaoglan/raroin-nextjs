// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pinataSDK = require('@pinata/sdk');
const fs = require('fs');
const path = require('path');

const pinata = pinataSDK('3d096c52acc84e57dc64', 'eb8a5a3b73c269dd4e764b3053b063c6e2b38f28f124e6705b91a89c49af3b03');

export default async function handler(req, res) {
  console.log(req.body);
  let URI;
  try {
    const result = await pinata.testAuthentication();
    console.log(result);

    let rawdata = fs.readFileSync("metadatafiles/raroin.json"); //read in incomplete herometadata
    let metaData = JSON.parse(rawdata);

    URI = await CreatePinMeta(metaData, 0);
    console.log("NFT minted:", URI);

  } catch (error) {
    console.log(err);
  }

  res.status(200).json({ URI })
}

async function CreatePinMeta(metadata, fileIndex) {
  const MyCustomName = `raroin-${fileIndex}`;

  const readableStreamForFile = fs.createReadStream("contract/img-to-upload/2.svg");
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
    metadata.image = result.IpfsHash;
    metadata.attributes.push(
      { "trait_type": "Base", "value": "Starfish" },
      { "trait_type": "Eyes", "value": "Big" },
      { "trait_type": "Mouth", "value": "Surprised" });
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
}