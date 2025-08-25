const sendMessageToApi = async (message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Bot says received ${message}`)
        })
    })
}

export default sendMessageToApi;