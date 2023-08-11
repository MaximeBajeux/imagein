import Airtable from "airtable";
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY as string,
});
var base = Airtable.base(process.env.AIRTABLE_BASE_ID as string);

const handler = (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
  console.log("req", req);
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const { name, email, phone, message } = req.body;
    const created = new Date().toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
    });
    base("CRM").create(
      {
        Name: name,
        Mail: email,
        Phone: phone,
        Message: message,
        Created: created,
      },
      { typecast: true },
      function (err, records) {
        if (err) {
          res.status(500).json({ error: "Something went wrong." });
          return;
        }
        if (records) {
          res.status(200).json({ message: "Success" });
          return;
        }
        res.status(500).json({ error: "Something went wrong." });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
};

export default handler;
