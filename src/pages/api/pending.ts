import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextApiRequest, NextApiResponse } from "next";

mailchimp.setConfig({
  apiKey: "b3d43e0ef01e7c9855758a0fa978f5ca-us11",
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
      try {
        await mailchimp.lists.addListMember("00693454e4", {
          email_address: email,
          status: "pending",
        });

        res.status(200).json({ status: "Succes" });
      } catch {
        res.status(401);
        throw Error();
      }
    }
  } else {
    res.status(401);
    throw Error();
  }
};

export default handler;
