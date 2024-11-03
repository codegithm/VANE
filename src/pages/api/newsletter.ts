import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextApiRequest, NextApiResponse } from "next";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us11",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const reqBody = req.body;
    const reqBodyJson = JSON.parse(reqBody);
    const { email = "" } = reqBodyJson;

    if (!email) {
      res.status(401).json({ error: "Email not found" });
    } else {
      const response = await mailchimp.lists.addListMember("00693454e4", {
        email_address: email,
        status: "subscribed",
      });
      console.log(response);
      res.status(200).json({ status: "Succes" });
    }
  } else {
    res.status(401).send(":(");
  }
};

export default handler;

// const run = async () => {
//   try {
//     const response = await mailchimp.lists.addListMember('list_id', {
//       email_address: 'Ebony_Brekke@gmail.com',
//       status: 'pending',
//     });
//     console.log(response);
//   } catch (error) {
//     console.error('Error adding list member:', error);
//   }
// };

// run();
