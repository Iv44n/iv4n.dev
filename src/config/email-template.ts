interface ContactFormData {
  fullName: string
  email: string
  company?: string
  subject: string
  message: string
}

function iconChip(svg: string): string {
  return `
    <span style="
      display:inline-flex;align-items:center;justify-content:center;
      width:22px;height:22px;flex-shrink:0;
      background:#F3F3F3;
      border:1px solid rgba(0,0,0,0.06);
      border-radius:6px;
      vertical-align:middle;
    ">${svg}</span>
  `
}

const ICONS = {
  person: iconChip(`
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5.5" r="2.75" stroke="#AAAAAA" stroke-width="1.35" stroke-linecap="round"/>
      <path d="M2.5 13.5c0-3.038 2.462-5 5.5-5s5.5 1.962 5.5 5" stroke="#AAAAAA" stroke-width="1.35" stroke-linecap="round"/>
    </svg>
  `),
  email: iconChip(`
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#AAAAAA" stroke-width="1.35"/>
      <path d="M1.5 5.5l5.793 3.707a1.25 1.25 0 0 0 1.414 0L14.5 5.5"
            stroke="#AAAAAA" stroke-width="1.35" stroke-linecap="round"/>
    </svg>
  `),
  building: iconChip(`
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="8" height="12" rx="1" stroke="#AAAAAA" stroke-width="1.35"/>
      <path d="M10 5.5h2a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1h-2"
            stroke="#AAAAAA" stroke-width="1.35" stroke-linecap="round"/>
      <rect x="4.25" y="4.5"  width="1.75" height="1.75" rx="0.4" fill="#AAAAAA"/>
      <rect x="4.25" y="7.5"  width="1.75" height="1.75" rx="0.4" fill="#AAAAAA"/>
      <rect x="4.25" y="10.5" width="1.75" height="1.75" rx="0.4" fill="#AAAAAA"/>
    </svg>
  `),
  tag: iconChip(`
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <g transform="rotate(-35, 8, 8)">
        <path d="M3 4H10.5L14 8L10.5 12H3A1 1 0 0 1 2 11V5A1 1 0 0 1 3 4Z"
              stroke="#AAAAAA" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="4.5" cy="8" r="1.1" fill="#AAAAAA"/>
      </g>
    </svg>
  `),
  message: iconChip(`
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <path d="M13.5 9.5A1.5 1.5 0 0 1 12 11H5l-3 3V3.5A1.5 1.5 0 0 1 3.5 2H12a1.5 1.5 0 0 1 1.5 1.5v6z"
            stroke="#AAAAAA" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `)
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

function fieldRow(
  icon: string,
  label: string,
  value: string,
  opts?: { mono?: boolean; bold?: boolean; last?: boolean }
): string {
  const borderStyle = opts?.last ? 'none' : '1px solid #F5F5F5'
  const valueStyle = [
    'font-size:13.5px;color:#1A1A1A;line-height:1.4;flex:1;min-width:0;',
    opts?.mono
      ? 'font-family:\'DM Mono\',ui-monospace,SFMono-Regular,monospace;font-size:12.5px;color:#555555;'
      : '',
    opts?.bold ? 'font-weight:500;color:#111111;' : 'font-weight:400;'
  ].join('')

  return `
    <tr>
      <td style="
        padding:13px 0;
        border-bottom:${borderStyle};
        vertical-align:middle;
        width:116px;
        white-space:nowrap;
      ">
        ${icon}
        <span style="
          font-size:10.5px;font-weight:600;color:#BBBBBB;
          letter-spacing:0.06em;text-transform:uppercase;
          vertical-align:middle;margin-left:8px;
          font-family:-apple-system,'DM Sans',BlinkMacSystemFont,'Helvetica Neue',sans-serif;
        ">${label}</span>
      </td>
      <td style="
        padding:13px 0 13px 20px;
        border-bottom:${borderStyle};
        vertical-align:middle;
        font-family:-apple-system,'DM Sans',BlinkMacSystemFont,'Helvetica Neue',sans-serif;
        ${valueStyle}
      ">${value}</td>
    </tr>
  `
}

function getContactEmailContent(data: ContactFormData): string {
  const initials  = getInitials(data.fullName)
  const dateStr   = formatDate(new Date())
  const msgEscaped = data.message.replace(/\n/g, '<br>')

  const hasCompany = Boolean(data.company)

  const fields = [
    fieldRow(ICONS.person,   'From',    data.fullName),
    fieldRow(ICONS.email,    'Email',   data.email,        { mono: true }),
    ...(hasCompany
      ? [fieldRow(ICONS.building, 'Company', data.company!)]
      : []),
    fieldRow(ICONS.tag,      'Subject', data.subject,      { bold: true, last: true })
  ].join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <!--[if mso]>
  <noscript>
    <xml><o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings></xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#EBEBEB;-webkit-font-smoothing:antialiased;font-family:-apple-system,'DM Sans',BlinkMacSystemFont,'Helvetica Neue',sans-serif;">

  <!-- Outer table -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
    style="background-color:#EBEBEB;padding:52px 16px 68px;">
    <tr><td align="center">

      <!-- Card -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
        style="max-width:580px;background:#FFFFFF;border-radius:20px;border:1px solid rgba(0,0,0,0.07);
               box-shadow:0 2px 4px rgba(0,0,0,0.04),0 12px 40px rgba(0,0,0,0.08),0 40px 80px rgba(0,0,0,0.04);
               overflow:hidden;">

        <!-- ── HEADER ── -->
        <tr>
          <td style="background:#FAFAFA;padding:36px 40px 30px;border-bottom:1px solid #F0F0F0;">

            <!-- Top row: wordmark + badge -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
              <tr>
                <td style="vertical-align:middle;">
                  <!-- Wordmark -->
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="vertical-align:middle;">
                        <div style="
                          display:inline-block;width:28px;height:28px;
                          background:#111111;border-radius:7px;
                          text-align:center;line-height:28px;
                        ">
                          <svg width="16" height="16" viewBox="0 0 52 52" fill="none"
                            style="display:inline-block;vertical-align:middle;margin-top:-1px;"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M39 0H26v13H0v39h26V39h26V0H39zM13 39h13V26h13V13H26v13H13v13z"
                              fill="#FFF"/>
                          </svg>
                        </div>
                      </td>
                      <td style="vertical-align:middle;padding-left:9px;">
                        <span style="font-size:12px;font-weight:600;color:#111111;letter-spacing:0.01em;">
                          Notifications
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align="right" style="vertical-align:middle;">
                  <!-- Status badge -->
                  <span style="
                    display:inline-block;padding:4px 10px 4px 8px;
                    background:#F0F0F0;border:1px solid rgba(0,0,0,0.06);
                    border-radius:100px;
                  ">
                    <span style="
                      display:inline-block;width:6px;height:6px;border-radius:50%;
                      background:#22C55E;vertical-align:middle;margin-right:5px;
                      margin-top:-1px;
                    "></span>
                    <span style="
                      font-size:10.5px;font-weight:500;color:#666666;
                      letter-spacing:0.01em;vertical-align:middle;
                    ">Contact Form</span>
                  </span>
                </td>
              </tr>
            </table>

            <!-- Title -->
            <h1 style="
              margin:24px 0 6px;
              font-size:21px;font-weight:600;color:#0F0F0F;
              letter-spacing:-0.03em;line-height:1.25;
            ">New message received</h1>
            <p style="
              margin:0;font-size:13.5px;font-weight:400;color:#999999;line-height:1.5;
            ">Someone submitted your contact form — review the details below.</p>

          </td>
        </tr>

        <!-- ── SENDER AVATAR ROW ── -->
        <tr>
          <td style="padding:28px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="border-bottom:1px solid #F2F2F2;padding-bottom:24px;">
              <tr>
                <!-- Avatar -->
                <td style="vertical-align:middle;width:44px;">
                  <div style="
                    width:44px;height:44px;border-radius:50%;
                    background:linear-gradient(135deg,#1a1a1a 0%,#444444 100%);
                    text-align:center;line-height:44px;
                    border:2px solid #FFFFFF;
                    box-shadow:0 0 0 1px rgba(0,0,0,0.08),0 2px 8px rgba(0,0,0,0.12);
                    display:inline-block;
                  ">
                    <span style="
                      font-size:14px;font-weight:600;color:#FFFFFF;
                      letter-spacing:-0.02em;line-height:44px;
                    ">${initials}</span>
                  </div>
                </td>
                <!-- Name + email -->
                <td style="vertical-align:middle;padding-left:14px;">
                  <div style="
                    font-size:15px;font-weight:600;color:#111111;
                    letter-spacing:-0.01em;white-space:nowrap;
                    overflow:hidden;text-overflow:ellipsis;
                  ">${data.fullName}</div>
                  <div style="
                    font-family:ui-monospace,SFMono-Regular,'DM Mono',monospace;
                    font-size:11.5px;font-weight:400;color:#AAAAAA;margin-top:2px;
                  ">${data.email}</div>
                </td>
                <!-- Date -->
                <td align="right" style="vertical-align:middle;">
                  <span style="font-size:11px;font-weight:400;color:#C0C0C0;white-space:nowrap;">
                    ${dateStr}
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── FIELD ROWS ── -->
        <tr>
          <td style="padding:0 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
              ${fields}
            </table>
          </td>
        </tr>

        <!-- ── FADE DIVIDER ── -->
        <tr>
          <td style="padding:4px 40px 0;">
            <div style="
              height:1px;
              background:linear-gradient(to right,transparent,#ECECEC 15%,#ECECEC 85%,transparent);
            "></div>
          </td>
        </tr>

        <!-- ── MESSAGE ── -->
        <tr>
          <td style="padding:28px 40px 36px;">

            <!-- Message label -->
            <p style="margin:0 0 16px;">
              ${ICONS.message}
              <span style="
                font-size:10.5px;font-weight:600;color:#BBBBBB;
                letter-spacing:0.06em;text-transform:uppercase;
                vertical-align:middle;margin-left:8px;
              ">Message</span>
            </p>

            <!-- Message content -->
            <div style="
              font-size:14.5px;font-weight:400;color:#2C2C2C;line-height:1.75;
              padding:20px 22px;background:#FAFAFA;
              border:1px solid #F0F0F0;border-radius:12px;
            ">${msgEscaped}</div>

          </td>
        </tr>

        <!-- ── FOOTER ── -->
        <tr>
          <td style="
            padding:18px 40px;background:#FAFAFA;border-top:1px solid #F0F0F0;
          ">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
              <tr>
                <td style="vertical-align:middle;">
                  <p style="margin:0;font-size:11.5px;color:#BBBBBB;line-height:1.6;">
                    Sent via your website contact form.
                    Reply to&nbsp;<a href="mailto:${data.email}"
                      style="color:#555555;text-decoration:none;border-bottom:1px solid #DDDDDD;"
                    >${data.email}</a>
                  </p>
                </td>
                <td align="right" style="vertical-align:middle;">
                  <a href="mailto:${data.email}" style="
                    display:inline-flex;align-items:center;gap:6px;
                    padding:7px 14px;
                    background:#111111;color:#FFFFFF;
                    font-family:-apple-system,'DM Sans',BlinkMacSystemFont,sans-serif;
                    font-size:11.5px;font-weight:500;letter-spacing:0.01em;
                    border-radius:8px;text-decoration:none;white-space:nowrap;
                  ">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none"
                      style="display:inline-block;vertical-align:middle;margin-top:-1px;">
                      <path d="M7 3L2 8l5 5M2 8h12"
                        stroke="#FFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Reply
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
      <!-- /Card -->

    </td></tr>
  </table>
  <!-- /Outer -->

</body>
</html>`
}

export default getContactEmailContent
