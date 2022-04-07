export const getMetadata = (index) => {
  return new Promise((resolve, reject) => {
    fetch("meta.txt")
      .then((r) => r.text())
      .then((text) => {
        const regexp = new RegExp("(\r?\n)?" + index + "=(.*)", "g");
        const result = text.toString().match(regexp);
        if (result != null) {
          fetch(result[0].slice(result[0].indexOf("=") + 1))
            .then((res) => res.json())
            .then((data) => {
              resolve({
                image: data.image.toString(),
                attributes: data.attributes,
              });
            });
        } else {
          reject("Failed to fetch metadata from uri");
        }
      });
  });
};

export const getTokenURI = (index) => {
  return new Promise((resolve, reject) => {
    fetch("meta.txt")
      .then((r) => r.text())
      .then((text) => {
        const regexp = new RegExp("(\r?\n)?" + index + "=(.*)", "g");
        const result = text.toString.match(regexp);

        if (result != null) {
          resolve(result[0].slice(result[0].indexOf("=") + 1));
        } else {
          reject("there is no valid uri");
        }
      });
  });
};
