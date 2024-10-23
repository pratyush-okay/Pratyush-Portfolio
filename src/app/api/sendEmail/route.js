import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";  // Use NextResponse

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json(); // Parse the request body

    // Send email using SendGrid
    await sendgrid.send({
      to: "pratyushpanda555@gmail.com", // Your recipient email
      from: "p.pratyush@outlook.com", // Your verified sender email
      subject: `Portfolio : New message from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <table style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border-collapse: collapse; border: 1px solid #ddd; background-color: #f9f9f9;">
        <thead>
          <tr>
            <th colspan="2" style="padding-bottom: 20px;">
              <h2 style="text-align: center; color: #0056b3;">New Message from Your Contact Form</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2" style="padding: 10px 0;">
              <p style="font-size: 16px;">Hi, you have received a new message from your website's contact form. Here are the details:</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd; width: 30%;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Message:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${message}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding-top: 20px;">
              <p style="font-size: 14px; color: #777; text-align: center;">
                This message was sent from the contact form on your website. If you did not expect this email, please ignore it.
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding-top: 20px; text-align: center;">
              <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} Your Website. All rights reserved.</p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  `,
    });

    // Return success response
    return NextResponse.json({ success: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Return error response
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
