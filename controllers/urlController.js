import Url from "../model/url.js";
import { generateId } from "../utils/generateId.js";

export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    
    const shortId = generateId();
    await Url.create({ originalUrl, shortId });

    return res.json({
      shortUrl: `http://localhost:8001/${shortId}`,
      shortId: shortId,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const redirectToOriginalUrl = async (req, res) =>{
    try {
        const {shortId} = req.params;
        const urlRecord = await Url.findOne({shortId})
        if(!urlRecord){
            return res.status(404).json({error: "URL not found"});
        }
        urlRecord.click += 1;
        await urlRecord.save();
        return res.redirect(urlRecord.originalUrl);
    } catch (error) {
         console.log(err);
    res.status(500).send("Server error");
    }
}