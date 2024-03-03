import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

    await resend.emails.send({ 
        from: "FAZRI <onboarding@resend.dev>",
        to: email,
        subject: "Reset your password",
        html: `Click the link below to reset your password: ${resetLink}`,
    });
}



export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({ 
        from: "FAZRI <onboarding@resend.dev>",
        to: email,
        subject: "Please confirm your email",
        html: `<h1>Please confirm your email</h1>
        <a href="${confirmLink}">Click here to confirm your email</a>`
    })
}