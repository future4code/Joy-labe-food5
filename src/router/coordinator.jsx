export const SplashPage = (history) =>{
    history.push(`/`)
}

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

export const goToRestaurantId = (history, id) =>{
    history.push(`/restaurante/${id}`)
}

export const ActiveOrder = (history) =>{
    history.push(`/active-order`)
}

export const goToProfile = (history) =>{
    history.push("/profile")
}

export const HistoryOrder = (history) =>{
    history.push(`/historico`)
}

export const goToCart = (history) =>{
    history.push("/restaurante/:id/pedido")
}












