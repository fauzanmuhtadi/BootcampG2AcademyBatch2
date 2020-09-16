const initialState = {
    employees: []
}

const addEmploy = (state = initialState, action) => {
    switch (action.type) {
        case "INPUTNEWEMPL":
            const lastEmployee = state.employees
            let newEmp = {
                name: action.name,
                email: action.email,
                address: action.address
            }
            lastEmployee.push(newEmp)

            return {
                employees: lastEmployee
                // employees: action.employees
            }
        default:
            return state
    }
}

export default addEmploy;

// addEmployee = (newEmp) => {
//     const lastEmployee = this.state.employees
//     lastEmployee.push(newEmp)

//     this.setState({
//         employees: lastEmployee
//     })
//     console.log(this.state.employees);
// }