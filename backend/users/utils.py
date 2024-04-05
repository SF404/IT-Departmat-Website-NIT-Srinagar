from django.core.mail import send_mail


def send_email(message, subject, recipient_list):
    """
    Sends an email using Django's mail sending functionality.

    Args:
        message (str): The body of the email.
        subject (str): The subject of the email.
        recipient_list (list): A list of email addresses to send the email to.

    Returns:
        int: The number of emails sent.
    """

    from_email = "techteam.it.nitsri@gmail.com"
    fail_silently = False

    return send_mail(
        subject=subject,
        message=message,
        from_email=from_email,
        recipient_list=recipient_list,
        fail_silently=fail_silently,
    )
