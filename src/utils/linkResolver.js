const linkResolver = (doc) => {
    if(doc.type === 'page_home') return '/contact';
    return '/thanks-donations'
}

export default linkResolver
