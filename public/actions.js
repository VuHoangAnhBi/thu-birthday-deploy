
const wishButton = document.querySelector('.children .wish')
const loveWishButton = document.querySelector('.children .love')

if (wishButton) {
    wishButton.onclick = () => {
        setTypeModal('wish')
        modals.style.display = 'flex';
        postWishView()
    }
}

if (loveWishButton) {
    loveWishButton.onclick = () => {
        setTypeModal('love')
        modals.style.display = 'flex';
        postLoveView()
    }
}

function postWishView() {
    axios.post('/thu/wish')
    .then(() => {})
    .catch(console.error)
}

function postLoveView() {
    axios.post('/thu/love')
        .then(() => { })
        .catch(console.error)
}