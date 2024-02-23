

const url = window.location.href
const urlObj = new URL(url)
const token = decodeURIComponent(urlObj.searchParams.get('token'))
const newPassword = document.getElementById('password')
const confirmNewPassword= document.getElementById('confirm-password')


// const resetPassword = (token, newPassword, confirmNewPassword) => {
//     const req = fetch(
//         'http://127.0.0.1:8000/forgot-password',
//         {
//             method: 'POST', 
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(
//                 {
//                     password: newPassword
//                     token
//                 }
//             )
//         }
//     )
// }