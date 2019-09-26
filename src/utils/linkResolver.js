module.exports = {
  linkResolver(doc) {
    if (doc.type === "page_home") return "/"
    if (doc.type === "page_team") return "/our-team"
    if (doc.type === "page_contact") return "/contact"
    if (doc.type === "page_donate") return "/donate"
    if (doc.type === "serve") return "/serve"
    if (doc.uid === "thank-you-contact") return "/thank-you-contact"
    if (doc.uid === "thank-you-donation") return "/thank-you-donation"
    if (doc.uid === "thank-you-serve") return "/thank-you-serve"
    return "/"
  },
}
