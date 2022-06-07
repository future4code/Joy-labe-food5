export const goToHome = (history) =>{
    history.push("/home")
}

export const goToLogin = (history) =>{
    history.push("/login")
}

export const goToSignUp = (history) =>{
    history.push("/signup")
}

export const goToEndereco = (history) =>{
    history.push(`/endereco`)
}

export const goToRestaurant = (history, id) =>{
    history.push(`/restaurante/${id}`)
}

export const ActiveOrder = (history) =>{
    history.push(`/pedidos-ativos`)
}

export const goToProfile = (history) =>{
    history.push("/profile")
}

export const HistoryOrder = (history) =>{
    history.push(`/historico`)
}

export const goToCart = (history, id) =>{
    history.push(`/restaurante/${id}/pedido`)
}

export const goToEditProfile = (history)=>{
    history.push("profile/profileEdit")
}

export const goToEditAddressEdit = (history)=>{
    history.push("/profile/address/addressEdit")
}












