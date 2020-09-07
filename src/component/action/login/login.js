export const delNama = () => {
    return {
        type: "NAMA"
    }
}

export const inPut = (dapetData) => {
    // let dapetData = { username, password }

    return {
        type: "INPUT",
        username: dapetData.username,
        password: dapetData.password
    }
}