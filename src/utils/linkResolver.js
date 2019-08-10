module.exports = {
  linkResolver(doc) {
    if (doc.type === "page_home") return "/"
    if (doc.type === "page_team") return "/our-team"
    if (doc.type === "page_contact") return "/contact"
    if (doc.type === "page_donate") return "/donate"
    if (doc.type === "page_serve") return "/serve"
    if (doc.type === "page_thanks_contact") return "/thank-you-contact"
    if (doc.type === "page_thanks_donation") return "/thank-you-donation"
    if (doc.type === "page_thanks_serve") return "/thank-you-serve"
    return "/"
  },
}
