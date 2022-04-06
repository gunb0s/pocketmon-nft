const fs = require("fs");
const pinataSDK = require("@pinata/sdk");
require("dotenv").config();

const pinata = pinataSDK(process.env.API_KEY, process.env.API_SECRET);
const IPFS_URL = "https://gateway.pinata.cloud/ipfs";
const IPFS_IMAGE_HASH = "QmS6CDwUnq6NS7dVxmYEpyJE5zivrbpQJwdsh7kSiJPCVZ";

const saveMetadataUri = (uri) => {
  const filename = `meta.txt`;
  fs.writeFileSync(`./${filename}`, uri + "\r\n", { flag: "a+" });
};

const uploadMetaData = async (i) => {
  let metadata = {
    description: "PFT: Pocketmon NFT",
    name: `PFT-${i}`,
    type: "Collectable",
    image: "https://",
    attributes: [],
  };

  // add attribute
  //...
  let attribute = {};
  attribute.trait_type = "Pocketmon Number";
  attribute.value = i;
  metadata.attributes.push(attribute);

  const filename = `N${i.toString().padStart(3, 0)}`;
  metadata.image = `${IPFS_URL}/${IPFS_IMAGE_HASH}/${filename}.png`;

  const options = {
    pinataMetadata: { name: "pocketmon-nft-meta" },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  try {
    const result = await pinata.pinJSONToIPFS(metadata, options);
    console.log(result);
    saveMetadataUri(`${i}=${IPFS_URL}/${result.IpfsHash}`);
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  for (let i = 0; i < 257; i++) {
    await uploadMetaData(i + 1);
  }
})();
