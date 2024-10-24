// pages/api/subscribe.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { SubscriberEmail } from "../../../../models/SubscriberEmail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form: SubscriberEmail = req.body;
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;

  if (!API_KEY || !AUDIENCE_ID) {
    return res
      .status(500)
      .json({ error: "Mailchimp API credentials are missing." });
  }

  if (!form?.email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    console.log(form);
    const DATACENTER = API_KEY.split("-")[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
    const data = {
      email_address: form.email,
      status: form.subscribe ? "subscribed" : "unsubscribed",
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `apikey ${API_KEY}`,
    };

    await axios.post(url, data, { headers });
    return res.status(201).json({ message: "Success" });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Error is an instance of AxiosError
      return res.status(500).json({ error: error.message });
    } else {
      // Generic error handling
      return res.status(500).json({ error: "An unknown error occurred." });
    }
  }
};
