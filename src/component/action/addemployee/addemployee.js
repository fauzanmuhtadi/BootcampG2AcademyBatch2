export const inputNewEmpl = (dataBaru) => {
    // const dapetData =

    return {
        type: "INPUTNEWEMPL",
        name: dataBaru.name,
        email: dataBaru.email,
        address: dataBaru.address
        // employees: dataBaru
    }
}