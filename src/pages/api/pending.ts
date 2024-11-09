import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextApiRequest, NextApiResponse } from "next";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX || "us11",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      await mailchimp.lists.addListMember("00693454e4", {
        email_address: email,
        status: "pending",
      });

      return res.status(200).json({ status: "Success" });
    } catch (error) {
      console.error("Error adding member to Mailchimp list:", error);
      return res
        .status(500)
        .json({ error: "Failed to add member to Mailchimp list" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default handler;
