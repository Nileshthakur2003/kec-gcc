import { NextRequest, NextResponse } from 'next/server';
import { marked } from 'marked';
const nodemailer = require('nodemailer');


export async function POST(req: NextRequest) {
  try {
    // 1. Create a "transporter"
    // This is the object that knows how to send email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use 'gmail'
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.GOOGLE_SECRET,
      },
    });

    // 2. Parse the request body
    const { to, subject, body } = await req.json();

    // 3. Validate input
    if (!to || !subject || !body) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 4. Convert Markdown body to HTML
    const htmlBody = await marked.parse(body);

    // 5. Define the email options
    const mailOptions = {
      from: `"GCC KEC Admin" <${process.env.SMTP_USER}>`, // Sender address
      to: to,         // List of receivers (can be an array)
      subject: subject, // Subject line
      html: htmlBody,   // html body
    };

    // 6. Send the email
    // We await the transporter.sendMail method
    const info = await transporter.sendMail(mailOptions);

    // 7. Return a success response
    return NextResponse.json({
      message: 'Email sent successfully!',
      data: info,
    });

  } catch (exception) {
    console.error('Server Error:', exception);
    const error = exception as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}