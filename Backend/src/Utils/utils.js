function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString()
}

function getOTPHtml(otp) {
    const appName = "Spotify Clone"
    const accent = "#1ed760"
    const expiryMinutes = 5 // keep in sync with your OTP expiry
    const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    const mono = "'SF Mono', Menlo, Consolas, 'Courier New', monospace"

    // Equalizer-style logo built from table cells (no images needed)
    const bars = [14, 26, 38, 26, 14]
        .map(
            (h) => `<td valign="bottom" style="padding: 0 2px;"><div style="width: 6px; height: ${h}px; line-height: ${h}px; font-size: 0; background-color: ${accent}; border-radius: 3px;">&nbsp;</div></td>`
        )
        .join("")

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="dark light" />
    <meta name="supported-color-schemes" content="dark light" />
    <title>Your ${appName} verification code</title>
</head>

<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: ${font}; color: #ffffff; -webkit-text-size-adjust: 100%;">

    <!-- Inbox preview text -->
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; mso-hide: all; font-size: 1px; line-height: 1px; color: #0a0a0a;">
        Your code is ${otp}. It expires in ${expiryMinutes} minutes.
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0a0a0a" style="background-color: #0a0a0a;">
        <tr>
            <td align="center" style="padding: 48px 16px;">

                <table role="presentation" width="520" cellpadding="0" cellspacing="0" border="0" bgcolor="#161616"
                    style="width: 100%; max-width: 520px; background-color: #161616; border: 1px solid #262626; border-radius: 20px;">

                    <!-- Accent bar -->
                    <tr>
                        <td height="4" style="height: 4px; line-height: 4px; font-size: 0; background-color: ${accent}; border-radius: 20px 20px 0 0;">&nbsp;</td>
                    </tr>

                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding: 40px 32px 0;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                                <tr>${bars}</tr>
                            </table>
                            <div style="margin-top: 14px; font-size: 13px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; color: #8a8a8a;">
                                ${appName}
                            </div>
                        </td>
                    </tr>

                    <!-- Heading -->
                    <tr>
                        <td align="center" style="padding: 28px 36px 0;">
                            <h1 style="margin: 0 0 12px; font-size: 28px; line-height: 1.25; font-weight: bold; letter-spacing: -0.5px; color: #ffffff;">
                                Verify your email
                            </h1>
                            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #b3b3b3;">
                                Enter this code on the verification page to finish creating your account.
                            </p>
                        </td>
                    </tr>

                    <!-- Code card -->
                    <tr>
                        <td style="padding: 28px 36px 0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" bgcolor="#0f0f0f"
                                        style="background-color: #0f0f0f; border: 1px solid #2b2b2b; border-radius: 16px; padding: 30px 12px;">

                                        <div style="margin: 0 0 14px; font-size: 11px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; color: #8a8a8a;">
                                            Your code
                                        </div>

                                        <div style="font-family: ${mono}; font-size: 42px; line-height: 1.1; font-weight: bold; letter-spacing: 10px; padding-left: 10px; color: ${accent};">
                                            ${otp}
                                        </div>

                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin-top: 20px;">
                                            <tr>
                                                <td align="center" bgcolor="#1c1c1c"
                                                    style="background-color: #1c1c1c; border: 1px solid #2f2f2f; border-radius: 999px; padding: 7px 16px; font-size: 12px; color: #b3b3b3;">
                                                    Expires in <strong style="color: #ffffff;">${expiryMinutes} minutes</strong>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Security note -->
                    <tr>
                        <td style="padding: 24px 36px 0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td bgcolor="#1c1c1c"
                                        style="background-color: #1c1c1c; border-left: 3px solid ${accent}; border-radius: 8px; padding: 14px 16px; font-size: 13px; line-height: 1.6; color: #b3b3b3;">
                                        <strong style="color: #ffffff;">Keep it private.</strong>
                                        We'll never ask you for this code by email, phone, or chat.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Ignore note -->
                    <tr>
                        <td align="center" style="padding: 28px 36px 36px;">
                            <p style="margin: 0; font-size: 12px; line-height: 1.7; color: #777777;">
                                Didn't request this? You can safely ignore this email.<br />
                                No account will be created without this code.
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" bgcolor="#0f0f0f"
                            style="background-color: #0f0f0f; border-top: 1px solid #262626; border-radius: 0 0 20px 20px; padding: 24px 20px;">
                            <p style="margin: 0; font-size: 11px; line-height: 1.8; color: #666666;">
                                This is an automated message, please don't reply.<br />
                                &copy; ${new Date().getFullYear()} ${appName}. A learning project, not affiliated with Spotify AB.
                            </p>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>
</body>
</html>`
}

module.exports = { generateOTP, getOTPHtml }