'use server'

export async function getReferenceOptions() {
    const fetch_response = await fetch(process.env.API_ENDPOINT + 'retrieve-reference-options', {method: "GET"});
    const reference_options = await fetch_response.json();
    return reference_options.options;
}

export async function submitForm(data, referenceContent) {
    var messageData = new URLSearchParams({
        subject: "New Message from " + data.contactName,
        text: "subject: " + data.contactSubject + "\nSent from: " + data.contactEmail + "\nMessage: " + data.contactMessage + "\nReferred by: " + referenceContent[data.contactReference].reference_name,
        html: `<div><div>Sent from: ${data.contactEmail}</div><div>Subject: ${data.contactSubject}</div><div>Message: ${data.contactMessage}</div><div>Referred by: ${referenceContent[data.contactReference].reference_name}</div></div>`,
        to: "declanrapp@gmail.com",
        from: process.env.EMAIL
    })
    fetch(process.env.API_ENDPOINT + 'mail-contact-form?' + messageData, {method: "POST"}).then((result) => {
        if(result.status==200) {
            return true;
        }
        else {
            return false;
        }
    }).catch(error => { console.log(error); return false; });
}