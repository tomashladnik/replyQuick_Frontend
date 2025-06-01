import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export async function POST(request: Request) {
    try {
        const { phoneNumber } = await request.json();
      console.log(phoneNumber);
        if (!phoneNumber) {
            return NextResponse.json(
                { error: 'Phone number is required' },
                { status: 400 }
            );
        }

        // Validate phone number format
        if (!phoneNumber.startsWith('+1') || phoneNumber.length !== 12) {
            return NextResponse.json(
                { error: 'Invalid phone number format. Must be +1 followed by 10 digits' },
                { status: 400 }
            );
        }

        // Send SMS
        const message = await client.messages.create({
            body: 'Hey there! 👋  This is Riley, the AI assistant at ReplyQuickAI — thanks for reaching out. We help businesses like yours capture and convert more leads instantly (24/7), even when you\'re off the clock. Can I ask real quick — what kind of business do you run?',
            from: twilioPhoneNumber,
            to: phoneNumber
        });

        return NextResponse.json({ success: true, messageId: message.sid });
    } catch (error) {
        console.error('Error sending SMS:', error);
        return NextResponse.json(
            { error: 'Failed to send SMS' },
            { status: 500 }
        );
    }
} 